import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Box} from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Box as='section' bg='gray.300' h='200px' w='200px'>
        This is chakra UI Box
      </Box>
    </div>
  )
}

export default App
