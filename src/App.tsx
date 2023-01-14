
import './App.css'
import {Box,Flex} from '@chakra-ui/react'

function App() {

  return (
    <div className="App">
      <Flex align='center' gap='10px' >
        <Box bg='green' w='100px' h='200px'>
          Inside Box 1
        </Box>
        <Box bg='lightblue' w='100px' h='200px'>
          Inside Box 2
        </Box>
        <Box bg='blue' w='200px' h='100px'>
          Inside Box 3
        </Box>
        <Box bg='orange.200' w='100px' h='200px'>
          Inside Box 4
        </Box>
      </Flex>
    </div>
  )
}

export default App
