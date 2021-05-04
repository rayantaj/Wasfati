import React from 'react'
import { useLayoutEffect, useState } from "react";
import SideNavMobile from "../Layout/SideNavBar";
import DisktopNav from "../Layout/DisktopNav";
import { Box, Flex, Text } from "@chakra-ui/react";


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
        <Box>
            <Flex boxShadow="md" height="4rem">

                <Box width="15%">
                    <SideNavMobile />
                </Box>
                <Box>
                    <Text>Main</Text>
                </Box>
            </Flex>


            <Box mt="2rem" p="1rem" w="100%" h="100%">
                {props.body}
            </Box>
        </Box>
        : <Box>

            <Flex height="4rem">
                <Box width="15%" >
                    <DisktopNav />
                </Box>
                <Box width="90%" >
                    <Box boxShadow="md"> <Text>Main</Text></Box>
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
