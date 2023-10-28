import React from 'react'
import { Button, Card, CardContent, Modal, Stack, Typography } from '@mui/material'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useNavigate } from 'react-router-dom';

const SubmitQuiz = ({settingDetails,setSettingDetails,correction}) => {
  const navigate = useNavigate()
  const [correctAns, setCorrectAns] = correction

  const quitQuiz = () => {
    setSettingDetails({name:"",category:"",difficulty:""})
    navigate('/')
  }
  const replayQuiz = () => {
    navigate('/quizSetting')
  }

    return (
        <>
          <Modal
              open={true}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Card sx={{ p:'30px', borderRadius:'20px',minWidth:'40vw',maxHeight:'55vh',textAlign:'center' }}>
                 <EmojiEventsIcon color='primary' sx={{height:'20vh',width:'20vw'}}/>
                  <CardContent>
                      <Typography sx={{fontSize:'1rem',fontWeight:'bold'}} >Congrats</Typography>
                      <Typography sx={{fontSize:'1.1rem'}} color='primary' >{settingDetails.name}</Typography>
                      <Typography sx={{fontSize:'0.9rem'}} >You've completed the quiz!.</Typography>
                      <Typography sx={{fontSize:'0.9rem'}} >Nicw, You got {correctAns} out of 10.</Typography>
                  </CardContent>
                  <Stack direction="row" gap={2} sx={{ display: 'flex',justifyContent:'center' }}>
                    <Button variant="contained" sx={{fontSize:'0.7rem'}} onClick={replayQuiz}>Replay Quiz </Button>
                    <Button size='lg' variant="outlined" color='error' sx={{fontSize:'0.7rem'}} onClick={quitQuiz} > Quit Quiz </Button>
                  </Stack>
                </Card>
            </Modal>
        </>
      )
}

export default SubmitQuiz