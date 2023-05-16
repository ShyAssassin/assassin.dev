import { Spinner } from "@chakra-ui/react";
import ModelContainer from "@components/ModelContainer";

export function ModelSpinner() {
    return (
        <Spinner 
        size="xl"
        position={"relative"}
        left={"50%"}
        top={"45%"}
        ml={"calc(0px - var(--spinner-size) / 2)"}
        mt={"calc(0px - var(--spinner-size))"}
    />
    )
}

export default function ModelLoader() {
    return (
        <ModelContainer>
            <ModelSpinner />
        </ModelContainer>
    );
}
