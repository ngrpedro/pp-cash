import { Button, useColorMode } from '@chakra-ui/react'
import { useState } from 'react'
import {
    Sun,
    Moon
} from 'phosphor-react'

const ToggleColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <div>

            <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <Sun size={24} /> : <Moon size={24} />}
            </Button>
        </div>
    )
}

export default ToggleColorMode