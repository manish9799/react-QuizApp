import { useState } from 'react';
import { Box,Container, } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SubmitQuiz from './Pages/SubmitQuiz';
import Questions from './Pages/Questions';
import QuizSettings from './Pages/QuizSettings';
import Home from './Pages/Home';
import NotFound404 from './Pages/NotFound404';

function App() {
  const [questionsData, setQuestionsData] = useState([])
  const [correctAns, setCorrectAns] = useState(0)
  const [settingDetails, setSettingDetails] = useState({
    name: "",
    category: "",
    difficulty: "",
  })

  return (
    <Box className='main-box'>
      <Container >
        <BrowserRouter basename="/react-QuizApp">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quizSetting" element={
            <QuizSettings
              quesArray={[questionsData, setQuestionsData]}
              quizDetails={[settingDetails, setSettingDetails]}
            />} />
            <Route path="/quiz-questions" element={
            <Questions 
              questionsData={questionsData}
              setSettingDetails={setSettingDetails}
              correction ={[correctAns, setCorrectAns]}
            />} />
            <Route path="/quiz-submit" element={
            <SubmitQuiz 
              correction ={[correctAns, setCorrectAns]}
              settingDetails={settingDetails} 
              setSettingDetails={setSettingDetails}
            />} />
            <Route path="*" element={<NotFound404/>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </Box>
  );
}

export default App;
