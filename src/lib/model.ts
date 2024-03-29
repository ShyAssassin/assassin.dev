// TODO: dont rely example code, should write this myself
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function loadGLTFModel(scene, glbPath, options = { receiveShadow: true, castShadow: true }) {
    const { receiveShadow, castShadow } = options;
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();

        loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene;
                obj.name = "model";
                obj.position.y = 0;
                obj.position.x = 0;
                obj.receiveShadow = receiveShadow;
                obj.castShadow = castShadow;
                scene.add(obj);

                obj.traverse(function (child) {
                    // child.isMesh() is a thing but not in the type definition :(
                    if (child.type === "Mesh") {
                        child.castShadow = castShadow;
                        child.receiveShadow = receiveShadow;
                    }
                });
                resolve(obj);
            },
            undefined,
            function (error) {
                console.error(error);
                reject(error);
            }
        );
    });
}
