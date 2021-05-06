import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { BsEggFried } from "react-icons/bs";
/**
 * this file was built to add active link functionality above Next Link component
 */

// for primary Navigation
const PrimaryLink = ({ href, children, icon }) => {
    const { asPath } = useRouter();
    let color = "black";
    let bg;
    let hover = true;
    let fontWeight = "normal";
    if (asPath === href) {
        color = "white";
        bg = "#ea5f20";
        hover = false;
        fontWeight = "bold";
    }
    return (
        <Box borderRadius="3xl" bgColor={bg} p="0.5rem" color={color}
            fontWeight={fontWeight}>
            <Flex align="center">

                <Icon as={icon} color={color}></Icon>
                <Box ml="0.5rem">
                    <Link href={href}>{React.cloneElement(children)}

                    </Link>
                </Box>




            </Flex>


        </Box>
        // {/* <Box
        //     color={color}
        //     fontWeight={"bold"}
        //     _hover={{
        //         color: "gray.400",
        //     }}
        // >
        //     <Link href={href}>{React.cloneElement(children)}</Link>
        // </Box> */}
    );
};

// for primary Navigation
const SecondaryLink = ({ href, children }) => {
    const { asPath } = useRouter();

    let color = "black";
    let bg;
    let hover = true;
    if (asPath === href) {
        color = "primary.dark";
        bg = "primary.light";
        hover = false;
    }

    return (
        <Box
            fontWeight={color && "medium"}
            _hover={
                hover && {
                    bg: "gray.100",
                }
            }
            borderStart={!hover && "2px"}
            borderColor={!hover && color}
            color={color}
            bg={bg}
            p={3}
        >
            <Link href={href}>{React.cloneElement(children)}</Link>
        </Box>
    );
};

// parent component
const ActiveLink = ({ type, ...props }) => {
    const links = {
        primary: PrimaryLink,

    };

    if (!type) {
        return null;
    }

    const Component = links[type];
    return <Component {...props} />;
};

export default ActiveLink;