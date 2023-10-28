import { Box, Typography } from '@mui/material'
import React from 'react'

const NotFound404 = () => {
  return (
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
        <Typography  variant='h3' sx={{textShadow:'3px 3px 2px black',color:'white',fontWeight:900}}>Page Not Found</Typography>
    </Box>
  )
}

export default NotFound404