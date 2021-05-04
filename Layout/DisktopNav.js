import React from 'react'
import { Heading, Box, Center, Text, Link, Divider, Flex, Spacer, Icon } from "@chakra-ui/react"
import { BsEggFried } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiChickenOven } from "react-icons/gi";
import { GrToast } from "react-icons/gr";
import ActiveLink from "../Components/ActiveLink";
const DisktopNav = () => {
    return (
        <Box p="1rem" boxShadow="md">

            <Box>
                <Center>
                    <Heading>Wasfati</Heading>
                </Center>

            </Box>
            <Box pt="2rem">
                <Box>
                    <Text fontWeight="semibold" color="#b2b2b2" p="0.5rem">Main Courses</Text>
                </Box>

                <ActiveLink href="/breakfast" type="primary" icon={BsEggFried}>
                    <a>Breakfast</a>

                </ActiveLink>

                <ActiveLink href="/lunch" type="primary" icon={IoFastFoodOutline}>
                    <a>Lunch</a>

                </ActiveLink>
                <ActiveLink href="/dinner" type="primary" icon={GiChickenOven}>
                    <a>Dinner</a>

                </ActiveLink>
                <ActiveLink href="/brunch" type="primary" icon={GrToast}>
                    <a>Brunch</a>

                </ActiveLink>



            </Box>
            <Box pt="2rem">
                <Box>
                    <Text fontWeight="semibold" color="#b2b2b2" p="0.5rem">Deserts</Text>
                </Box>

                <Link>
                    <Box p="0.5rem">
                        <Flex align="center">

                            <Icon as={BsEggFried} color="black"></Icon>
                            <Box ml="0.5rem">
                                <Text color="black">Hot Deserts</Text>
                            </Box>




                        </Flex>
                    </Box>
                </Link>
                <Link>
                    <Box borderRadius="3xl" p="0.5rem">
                        <Flex align="center">

                            <Icon as={BsEggFried} color="black"></Icon>
                            <Box ml="0.5rem">
                                <Text color="black">Cold Deserts</Text>
                            </Box>




                        </Flex>
                    </Box>
                </Link>



            </Box>
            <Box pt="2rem">
                <Box>
                    <Text fontWeight="semibold" color="#b2b2b2" p="0.5rem">Drinks</Text>
                </Box>

                <Link>
                    <Box p="0.5rem">
                        <Flex align="center">

                            <Icon as={BsEggFried} color="black"></Icon>
                            <Box ml="0.5rem">
                                <Text color="black">Coffee</Text>
                            </Box>




                        </Flex>
                    </Box>
                </Link>
                <Link>
                    <Box borderRadius="3xl" p="0.5rem">
                        <Flex align="center">

                            <Icon as={BsEggFried} color="black"></Icon>
                            <Box ml="0.5rem">
                                <Text color="black">Juice</Text>
                            </Box>




                        </Flex>
                    </Box>
                </Link>
                <Link>
                    <Box borderRadius="3xl" p="0.5rem">
                        <Flex align="center">

                            <Icon as={BsEggFried} color="black"></Icon>
                            <Box ml="0.5rem">
                                <Text color="black">Party Drinks</Text>
                            </Box>




                        </Flex>
                    </Box>
                </Link>



            </Box>


        </Box>
    )
}

export default DisktopNav
