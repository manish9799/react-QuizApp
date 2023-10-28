import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate('/quizSetting')
    }
   
    return (
        <Container sx={{display:'flex',justifyContent:'center', alignItems: 'center',height:'100vh'}}>
        <Box sx={{textAlign:'center'}}>
            <Typography  sx={{textShadow:'3px 3px 2px black',color:'white',fontWeight:900,fontSize:'2.5rem'}}>Welcome to Quiz-App</Typography>
            <Button className='start-btn' onClick={handleClick} >Start</Button>
        </Box>

        </Container>
    )
}

export default Home