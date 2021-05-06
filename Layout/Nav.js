import React from 'react'
import { useLayoutEffect, useState } from "react";
import SideNavMobile from "../Layout/SideNavBar";
import DisktopNav from "../Layout/DisktopNav";
import { Box, Flex, Spacer, Text, Avatar, Center, Heading } from "@chakra-ui/react";
import ActiveLink from "../Components/ActiveLink";

const NavSystemLayout = (props) => {


    function useMediaQuery() {
        const [screenSize, setScreenSize] = useState([0, 0]);

        useLayoutEffect(() => {
            function updateScreenSize() {
                setScreenSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener("resize", updateScreenSize);
            updateScreenSize();
            return () => window.removeEventListener("resize", updateScreenSize);
        }, []);

        return screenSize;
    }

    const [width] = useMediaQuery();

    return width < 800 ?
        <Box >
            <Flex boxShadow="md" height="4rem"  >

                <Box >
                    <SideNavMobile />
                </Box>
                <Spacer />

                <Center>

                    <Text fontWeight="semibold" >Wasfati</Text>

                </Center>

                <Spacer />
                <Box p="1rem">
                    <Box>
                        <Text color="#6e6d7a">
                            SignIn
                        </Text>
                    </Box>
                </Box>
            </Flex>


            <Box mt="2rem" p="1rem" w="100%" h="100%">
                {props.body}
            </Box>
        </Box>
        : <Box>
            <Box borderBottomWidth="thin" >
                <Flex mx="5rem" p="1rem">
                    <Spacer />
                    <Box>

                        <Heading color="black">Wasfati</Heading>
                    </Box>
                    <Spacer />
                    <a href="/logIn">
                        <Box borderRadius="md" boxShadow="md" py="0.5rem" px="1rem" borderColor="#ea5f20" borderWidth="thin">
                            <Text>
                                LogIn
                        </Text>
                        </Box>
                    </a>

                </Flex>
            </Box>




            <Flex >
                {/* position="fixed" */}
                <Box width="15%">
                    <DisktopNav />
                </Box>


                <Box width="90%" >

                    <Box p="1rem" w="100%" h="100%">
                        {props.body}
                    </Box>
                </Box>
            </Flex>

        </Box>


    // <>
    //     <Box>
    //         <Flex>
    //             <Box width="15%" >
    //                 {width < 800 ? <SideNavMobile /> : <DisktopNav />}
    //             </Box>
    //             <Box width="90%" >

    //             </Box>
    //         </Flex>
    //     </Box>



    // </>


}

export default NavSystemLayout;
