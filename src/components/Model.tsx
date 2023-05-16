// -----------------------------------------------------------------------
//  TODO: rewrite this in a smarter way so it uses less `UseState`
//        and fix the hack to not fire the useEffect twice
// -----------------------------------------------------------------------


import ModelContainer from "./ModelContainer"
import {ModelSpinner} from "./ModelLoader";
// TODO: dont rely example code, should write this myself
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { useState, useRef, useCallback, useEffect } from "react"
import { loadGLTFModel } from "@lib/model";

function EaseOutCircle(x: number) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

export default function Model() {
    let inistialized = false
    const refContainer = useRef<HTMLDivElement>()
    const [loading, setLoading] = useState<boolean>(true)
    const [_camera, setCamera] = useState<THREE.OrthographicCamera>()
    const [scene] = useState<THREE.Scene>(new THREE.Scene())
    const [renderer, setRenderer] = useState<THREE.Renderer>()
    const [_controls, setControls] = useState<OrbitControls>()
    const [target] = useState<THREE.Vector3>(new THREE.Vector3(-0.5, 1.2, 0));
    const [initialCameraPosition] = useState<THREE.Vector3>(
        new THREE.Vector3(
            20 * Math.sin(0.2 * Math.PI),
            10,
            20 * Math.cos(0.2 * Math.PI)
        )
    );

    const handleWindowResize = useCallback(() => {
        const { current: contrainer } = refContainer

        if (contrainer && renderer){
            const width = contrainer.clientWidth
            const height = contrainer.clientHeight
            renderer.setSize(width, height)
        }
    }, [renderer])

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        if (inistialized) {
            return
        }
        inistialized = true
        const { current: container } = refContainer

        if (container && !renderer) {
            const width = container.clientWidth
            const height = container.clientHeight

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true 
            })
            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(width, height)
            renderer.outputColorSpace = THREE.SRGBColorSpace
            container.appendChild(renderer.domElement)
            setRenderer(renderer)

            const scale = height * 0.005 + 4.8
            const camera = new THREE.OrthographicCamera(
                -scale,
                scale,
                scale,
                -scale,
                0.01,
                50000
            )
            camera.position.copy(initialCameraPosition)
            camera.lookAt(target)
            setCamera(camera)

            const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
            scene.add(ambientLight)

            const controls = new OrbitControls(camera, renderer.domElement)
            controls.autoRotate = true
            controls.target = target
            setControls(controls)

            loadGLTFModel(scene, "/dog.glb", {
                receiveShadow: false,
                castShadow: false
            }).then(() => {
                animate();
                setLoading(false);
            });

            let req = null;
            let frame = 0;
            const animate = () => {
                req = requestAnimationFrame(animate);

                frame = frame <= 100 ? frame + 1 : frame;
                if (frame <= 100) {
                    const rotSpeed = -EaseOutCircle(frame / 120) * Math.PI * 10;

                    camera.position.y = 10;
                    camera.position.x = initialCameraPosition.x * Math.cos(rotSpeed) + initialCameraPosition.z * Math.sin(rotSpeed);
                    camera.position.z = initialCameraPosition.z * Math.cos(rotSpeed) - initialCameraPosition.x * Math.sin(rotSpeed);
                    camera.lookAt(target);
                } else {
                    controls.update();
                }
                renderer.render(scene, camera);
            }


            return () => {
                console.log("unmount")
                cancelAnimationFrame(req)
                renderer.dispose()
            }
        }
    }, [])

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize, false)
        return () => {
            window.removeEventListener("resize", handleWindowResize, false)
        }
    }, [renderer, handleWindowResize])

    return (
        <ModelContainer ref={refContainer}>
            {loading && <ModelSpinner />}
        </ModelContainer>
    )
}