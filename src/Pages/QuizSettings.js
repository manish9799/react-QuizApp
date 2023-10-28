import React, { useEffect, useState } from 'react'
import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Modal, Select, Stack, TextField, Typography } from '@mui/material'
import Categories from '../Data/Categories'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const QuizSettings = ({ quesArray,quizDetails }) => {
  const navigate = useNavigate()
  const [settingDetails, setSettingDetails] = quizDetails
  const [questionsData,setQuestionsData] = quesArray
  const [disableBtn, setDisableBtn] = useState(true)

  const handleChange = (e) => {
    setSettingDetails({ ...settingDetails, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (settingDetails.name == "" || settingDetails.category == "" || settingDetails.difficulty == "") {
      setDisableBtn(true)
    } else {
      setDisableBtn(false)
    }
  }, [settingDetails])

  const fetchQuestions = async(category,difficulty)=>{
    let data = []
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
    await axios.get(url).then((res)=>{
      if(res?.data && !res?.data.results.length ){
        alert('Questions not found please slect diffrent category.')
      }else{
        data = res?.data.results
        data.map((item,i)=>{
          item.incorrect_answers.push(item.correct_answer)
        })
        setQuestionsData(data)
        navigate('/quiz-questions')
      }
    })
  }

  const startQuiz = () => {
    fetchQuestions(settingDetails.category,settingDetails.difficulty)
  }

  return (
    <>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Card sx={{ m:2,p: '15px', borderRadius: '20px', minWidth: '30vw', minHeight: '60%', textAlign: 'center' }}>
          <Typography variant='h5'>Quiz Setting</Typography>
          <CardContent>
            <Stack direction='column' gap={3}>

              <TextField
                id="outlined-basic"
                label="Enter Your Name"
                variant="outlined"
                name='name'
                value={settingDetails.name}
                onChange={(e) => handleChange(e)}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name='category'
                  value={settingDetails.category}
                  label="Select Category"
                  onChange={(e) => handleChange(e)}
                  sx={{ textAlign: 'left' }}
                >
                  {Categories?.map((cat, i) => {
                    return (
                      <MenuItem key={cat.category} value={cat.value}>{cat.category}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Difficulty</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name='difficulty'
                  value={settingDetails.difficulty}
                  label="Select Difficulty"
                  onChange={(e) => handleChange(e)}
                  sx={{ textAlign: 'left' }}

                >
                  <MenuItem value={'easy'}>Easy</MenuItem>
                  <MenuItem value={'medium'}>Medium</MenuItem>
                  <MenuItem value={'hard'}>Hard</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </CardContent>
          <Button
            disabled={disableBtn}
            variant="contained"
            sx={{ width: '92%' }}
            onClick={startQuiz}
          >
            Start Quiz
          </Button>
        </Card>
      </Modal>
    </>
  )
}

export default QuizSettings