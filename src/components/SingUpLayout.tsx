import React from 'react'
import {
    useColorModeValue,
    Flex
} from '@chakra-ui/react'
import ToggleColorMode from './ToggleColorMode'

interface props {
    children: JSX.Element
}
const SingUpLayout = ({ children }: props) => {

    return (
        <div className='flex items-center justify-center flex-col gap-4 h-screen'>
            <div className='flex items-end justify-end flex-col gap-4'>
                <ToggleColorMode />
                <Flex flexDirection={'column'} bg={useColorModeValue('gray.50', 'gray.600')}
                    p={10} rounded={'20px'} shadow={'xl'} gap={8}>

                    {children}

                </Flex>
            </div>
        </div>
    )
}

export default SingUpLayout