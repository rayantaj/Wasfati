import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { sideNavStyles } from "../Components/Variables/variables"
import { Heading, Box, Center, Text, Link, Divider, Flex, Spacer, Icon } from "@chakra-ui/react"
import { BsEggFried } from "react-icons/bs";



const SideNavBar = () => {

    function showSettings(event) {
        event.preventDefault();

    }


    return (
        <Box >
            <Menu styles={sideNavStyles}>
                <Box width="100%" h="100%" p="1rem">
                    <Center>
                        <Box p="2rem"><Heading color="whiteAlpha.900">Wasfati</Heading></Box>
                    </Center>



                    <Box>

                        <Text color="whiteAlpha.900" fontSize="1.5rem" fontWeight="semibold">Main Courses</Text>

                        <Box width="100%" h="100%" py="0.2rem" >
                            <Link><Flex>
                                <Text color="whiteAlpha.800">Breakfast</Text>
                                <Spacer />
                                <Icon as={BsEggFried} color="whiteAlpha.800"></Icon>

                            </Flex></Link>
                        </Box>
                        <Box width="100%" h="100%" py="0.2rem" >
                            <Link><Flex>
                                <Text color="whiteAlpha.800">Lunch</Text>
                                <Spacer />
                                <Icon as={BsEggFried} color="whiteAlpha.800"></Icon>

                            </Flex></Link>
                        </Box>
                        <Box width="100%" h="100%" py="0.2rem" >
                            <Link><Flex>
                                <Text color="whiteAlpha.800">Dinner</Text>
                                <Spacer />
                                <Icon as={BsEggFried} color="whiteAlpha.800"></Icon>

                            </Flex></Link>
                        </Box>
                        <Box width="100%" h="100%" py="0.2rem" >
                            <Link><Flex>
                                <Text color="whiteAlpha.800">Brunch</Text>
                                <Spacer />
                                <Icon as={BsEggFried} color="whiteAlpha.800"></Icon>

                            </Flex></Link>
                        </Box>



                    </Box>

                    <Box>
                        <Text color="whiteAlpha.900" fontSize="1.5rem" fontWeight="semibold">Snacks & Drinks</Text>

                        <Box width="100%" h="100%" py="0.2rem" >
                            <Link><Flex>
                                <Text color="whiteAlpha.800">Snacks</Text>
                                <Spacer />
                                <Icon as={BsEggFried} color="whiteAlpha.800"></Icon>

                            </Flex></Link>
                        </Box>
                        <Box width="100%" h="100%" py="0.2rem" >
                            <Link><Flex>
                                <Text color="whiteAlpha.800">Drinks</Text>
                                <Spacer />
                                <Icon as={BsEggFried} color="whiteAlpha.800"></Icon>

                            </Flex></Link>
                        </Box>
                        <Box width="100%" h="100%" py="0.2rem" >
                            <Link><Flex>
                                <Text color="whiteAlpha.800">Dinner</Text>
                                <Spacer />
                                <Icon as={BsEggFried} color="whiteAlpha.800"></Icon>

                            </Flex></Link>
                        </Box>
                        <Box width="100%" h="100%" py="0.2rem" >
                            <Link><Flex>
                                <Text color="whiteAlpha.800">Brunch</Text>
                                <Spacer />
                                <Icon as={BsEggFried} color="whiteAlpha.800"></Icon>

                            </Flex></Link>
                        </Box>

                    </Box>


                </Box>



                {/* <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={showSettings} className="menu-item--small" href="">Settings</a> */}
            </Menu >
        </Box>

    )
}

export default SideNavBar
