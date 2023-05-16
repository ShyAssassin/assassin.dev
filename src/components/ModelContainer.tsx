import { MutableRefObject, ReactNode, forwardRef } from "react";
import { Box } from "@chakra-ui/react";

function ModelContainer({children}: {children: ReactNode}, ref: MutableRefObject<HTMLDivElement>){
    return (
        <Box
            ref={ref}
            className={"model-container"}
            m={"auto"}
            mt={["-20px", "-60px", "-140px"]}
            mb={["-40px", "-140px", "-220px"]}
            w={[280, 480, 640]}
            h={[280, 480, 640]}
        >
            {children}
        </Box>
    )
}

// it makes me angry that I have to do this but it's the only way to get the ref to work
export default forwardRef(ModelContainer);