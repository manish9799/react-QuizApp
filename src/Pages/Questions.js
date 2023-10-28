import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Questions = ({ questionsData,setSettingDetails,correction }) => {
  const navigate = useNavigate()
  const [selectedAns, setSelectedAns] = useState(null)
  const [currentQ, setCurrentQ] = useState({})
  const [countQ, setCountQ] = useState(0)
  const [correctAns, setCorrectAns] = correction
  
  useEffect(() => {
    if (questionsData.length) {
      setCurrentQ(questionsData[countQ])
    }
  }, [questionsData, countQ])

  const handleClick = (e) => {
    setSelectedAns(e)
    if(e == currentQ.correct_answer){
      setCorrectAns(correctAns+1)
    }
  }

  const handleNextClick=()=>{
    if(countQ < 9){
      setSelectedAns(null)
      setCountQ(countQ + 1)
    }else{
      navigate('/quiz-submit')
    }
  }

  function decodeHTMLEntities(text) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }

  const quitQuiz = () => {
    setSettingDetails({name:"",category:"",difficulty:""})
    navigate('/')
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card className='scroll' sx={{ m:2,p: '30px', borderRadius: '20px', width: '60vw', maxHeight:'80vh',minHeight:'50vh',overflowY:'scroll' }}>
        <Typography  sx={{ fontWeight: '700',mb:1,fontSize:'1.2rem' }} >Question : {countQ + 1}/10</Typography>
        <Typography variant='subtitle' sx={{ minHeight: '150px' }} >{decodeHTMLEntities(currentQ.question)}</Typography>
        <CardContent>
          <Grid container spacing={2} mt={2}>
            {currentQ?.incorrect_answers?.sort()?.map((item, i) => {
              return (
                <Grid key={i} item xs={12} sm={6} >
                  <Button 
                    variant= {selectedAns && selectedAns == item ? 'contained':'outlined'} 
                    color={ 
                      selectedAns !== currentQ.correct_answer && selectedAns == item  ? 'error' 
                      : selectedAns == currentQ.correct_answer && selectedAns == item ? 'success' :'primary'
                    } 
                    sx={{ width: "100%", minHeight: '50px',textTransform:'unset' }} 
                    onClick={(e)=>selectedAns ? null : handleClick(e.target.innerText)}
                  >
                    {decodeHTMLEntities(item)}
                  </Button>
                </Grid>
              )
            })}
          </Grid>
        </CardContent>
        {/* <Stack direction="row" gap={2} sx={{m: '18px 0px 0px 18px',display: 'flex',justifyContent:'flex-end',pr:2 }}> */}
        
        <Grid container spacing={1} mt={2} sx={{display:'flex',justifyContent:'flex-end'}} >
         
              <Grid item xs={6} md={3} >
              <Button size='lg' 
                variant="outlined" 
                color='error' 
                sx={{fontSize:'0.7rem',width:'100%'}} 
                onClick={quitQuiz} 
              > 
                Quit Quiz 
              </Button>
              </Grid>
                <Grid item xs={6} md={3} >
              <Button 
                disabled={selectedAns?false:true} 
                variant="contained" 
                onClick={handleNextClick} 
                sx={{fontSize:'0.7rem',width:'100%'}}  
              >
                {countQ == 9 ? 'Submit': 'Next'} 
              </Button>
                </Grid>
          </Grid>
        {/* </Stack> */}
      </Card>
    </Box>
  )
}

export default Questions