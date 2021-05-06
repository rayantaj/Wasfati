import React from 'react'
import { Box, Flex, Spacer, Text, Avatar, Center, Heading, Container, Input, Divider, Button } from "@chakra-ui/react";
import { useLayoutEffect, useState } from "react";

import { FcGoogle } from "react-icons/fc";

const logIn = () => {

    const [nameValue, nameSetValue] = React.useState("")
    const nameHandleChange = (event) => nameSetValue(event.target.value)


    const [passwordValue, passwordSetValue] = React.useState("")
    const passwordHandleChange = (event) => passwordSetValue(event.target.value);

    function useMediaQuery() {
        const [screenSize, setScreenSize] = useState([0, 0]);

        // useLayoutEffect(() => {
        //     function updateScreenSize() {
        //         setScreenSize([window.innerWidth, window.innerHeight]);
        //     }
        //     window.addEventListener("resize", updateScreenSize);
        //     updateScreenSize();
        //     return () => window.removeEventListener("resize", updateScreenSize);
        // }, []);

        return screenSize;
    }

    const [width] = useMediaQuery();

    return (
        <Box>

            {/* ml={width / 4} */}


            <Container maxW="xl" boxShadow="xl" borderWidth="thin" borderRadius="lg" ml={width / 6}>
                <Box p="2rem">
                    <Center>
                        <Heading>Welcome to Wasfati</Heading>

                    </Center>

                    <Box px="1rem">
                        <Box py="1rem" >

                            <Text mb="8px">Email</Text>
                            <Input
                                value={nameValue}
                                onChange={nameHandleChange}
                                placeholder=""
                                size="sm"
                            />
                        </Box>
                        <Box py="1rem">

                            <Text mb="8px">Password</Text>
                            <Input
                                value={passwordValue}
                                onChange={passwordHandleChange}
                                placeholder=""
                                size="sm"
                            />
                        </Box>
                    </Box>
                    <Box px="1rem">

                        <Flex align="center">
                            <Divider w="10rem" />
                            <Box px="0.5rem" >
                                <Text>or sign in with</Text>
                            </Box>

                            <Divider w="10rem" />
                        </Flex>

                        <Box boxSize="sm">
                            <Button leftIcon={<FcGoogle />} colorScheme="teal" variant="outline">
                                <Box >
                                    <Text>
                                        Google
                             </Text>
                                </Box>

                            </Button>
                        </Box>

                    </Box>



                </Box>
            </Container>

        </Box>
    );
}

export default logIn
