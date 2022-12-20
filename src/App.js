import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import './App.css';




function App() {
  let [active, setActive] = useState(false)

  const handleClick = ()=>{
    setActive(!active)
  }
  
  
  return (
    <div>

      

      <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: active ? "red" : "green",
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
    {/* <Button variant="contained" color="success" onClick={doGreen}>Green</Button>
    <Button variant="contained" color="error" style={{marginLeft: '58px'}} onClick={doRed}>Red</Button> */}
    <Button variant="contained"  style={{marginLeft: '58px'}} onClick={()=>{handleClick()}}>Toggle Color</Button>





    {/* let [count, setCount] = useState(0)
  const decrease = ()=>{
    if (count>0) {
      
      setCount(--count);
    }
  }
  const increase = ()=>{

    setCount(++count);
    
  }
  if (count>0) {
    
  }
  
  return (
    
    <div>
      <Button color={count===0 ? "error" : "success"} variant="contained" onClick={decrease}>Decrease</Button>
     <span>{count} {count===0 ? ":(" : ":)"}</span>
     <Button variant="contained" onClick={increase}>Increase</Button>
    </div>
    
  ); */}


    </div>
  )
}

export default App;
