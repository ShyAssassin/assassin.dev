import { Box } from "@chakra-ui/react";
import CppLogo from "@public/icons/cpp.svg";
import PythonLogo from "@public/icons/python.svg";
import RustLogo from "@public/icons/rust.svg";
import CsharpLogo from "@public/icons/csharp.svg";
import BashLogo from "@public/icons/bash.svg";

export default function Technologies() {
    return (
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <CppLogo witdh={100} height={100} />
            <CsharpLogo witdh={100} height={100} />
            <RustLogo witdh={100} height={100} />
            <PythonLogo witdh={100} height={100} />
            <BashLogo witdh={100} height={100} />
        </Box>
    );
}
