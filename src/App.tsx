import { Button, useColorMode } from '@chakra-ui/react'
import { Moon } from 'phosphor-react'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className='flex items-center justify-center flex-col gap-4 h-screen'>
      <h1 className='text-5xl font-bold '>Hello PP Cash</h1>

      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </div>
  )
}

export default App
