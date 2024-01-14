import Chai from "./Chai"



function App() {
  const userName = " hamza sHahzad"// ^ we cannot use directly variable which are not evaluated means we just use evaluated expression only in jsx 
  return (
    <>
    <Chai/>
    <h1>Hello world| using vite bundler{userName}</h1>
    </>
  )
} 

export default App
