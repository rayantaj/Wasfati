import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { sideNavStyles } from "../Variables/variables"
import { Heading, Box, Center, Text, Link, Divider, Flex, Spacer, Icon } from "@chakra-ui/react"
import ActiveLink from "../Components/ActiveLink";
import { breakfastIcon, lunchIcon, dinnerIcon, brunchIcon, hotDesertsIcon, coldDesertsIcon, coffeIcon, juiceIcon, partyIcon, homeIcon, aboutUsIcon, allRecipesIcon } from "../Variables/variables";



const SideNavBar = () => {

    function showSettings(event) {
        event.preventDefault();

    }


    return (
        <Box  >
            <Menu styles={sideNavStyles}>
                <Box width="100%" h="100%" p="1rem">
                    <Center>
                        {/* <Box p="2rem"><Heading color="whiteAlpha.900">Wasfati</Heading></Box> */}
                    </Center>
                    <Box pt="2rem" >
                        <Box>
                            <Text fontWeight="semibold" color="#d2d2cf" p="0.5rem">Discover</Text>
                        </Box>

                        <ActiveLink href="/" type="primary" icon={homeIcon}>
                            <a>Home</a>

                        </ActiveLink>
                        <ActiveLink href="/allRecipes" type="primary" icon={allRecipesIcon}>
                            <a>All recipes</a>

                        </ActiveLink>
                        <ActiveLink href="/aboutus" type="primary" icon={aboutUsIcon}>
                            <a>About us </a>

                        </ActiveLink>

                    </Box>

                    <Box pt="2rem">
                        <Box>
                            <Text fontWeight="semibold" color="#d2d2cf" p="0.5rem">Main Courses</Text>
                        </Box>

                        <ActiveLink href="/breakfast" type="primary" icon={breakfastIcon}>
                            <a>Breakfast</a>

                        </ActiveLink>

                        <ActiveLink href="/lunch" type="primary" icon={lunchIcon}>
                            <a>Lunch</a>

                        </ActiveLink>
                        <ActiveLink href="/dinner" type="primary" icon={dinnerIcon}>
                            <a>Dinner</a>

                        </ActiveLink>
                        <ActiveLink href="/brunch" type="primary" icon={brunchIcon}>
                            <a>Brunch</a>

                        </ActiveLink>



                    </Box>
                    <Box pt="2rem">
                        <Box>
                            <Text fontWeight="semibold" color="#d2d2cf" p="0.5rem">Deserts</Text>
                        </Box>

                        <ActiveLink href="/brunch" type="primary" icon={hotDesertsIcon}>
                            <a>Hot Deserts</a>

                        </ActiveLink>
                        <ActiveLink href="/brunch" type="primary" icon={coldDesertsIcon}>
                            <a>Cold deserts</a>

                        </ActiveLink>



                    </Box>
                    <Box pt="2rem">
                        <Box>
                            <Text fontWeight="semibold" color="#d2d2cf" p="0.5rem">Drinks</Text>
                        </Box>

                        <ActiveLink href="/brunch" type="primary" icon={coffeIcon}>
                            <a>Coffee</a>

                        </ActiveLink>
                        <ActiveLink href="/brunch" type="primary" icon={juiceIcon}>
                            <a>Juice</a>

                        </ActiveLink>
                        <ActiveLink href="/brunch" type="primary" icon={partyIcon}>
                            <a>Party Drinks</a>

                        </ActiveLink>



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
