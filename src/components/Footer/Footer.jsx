import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <Box w="100%" bgColor="#000" align="center" pt="4" pb="5" marginTop="auto">
            <Image src='/assets/footerLogo.svg' />
        </Box>
    )
}

export default Footer