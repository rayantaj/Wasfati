import '../styles/globals.css'
import { ChakraProvider, Box, Flex } from "@chakra-ui/react"
import Nav from "../Layout/Nav"

function MyApp({ Component, pageProps }) {

  return <ChakraProvider>


    <Nav body={<Component {...pageProps} />} />
    {/* <Component {...pageProps} /> */}

  </ChakraProvider>
}

export default MyApp
