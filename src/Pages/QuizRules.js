import { Button, Card, CardContent, Modal, Stack, Typography } from '@mui/material'
import React from 'react'

const QuizRules = ({open,close}) => {
  return (
    <>
      <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <Card sx={{ p: '30px', borderRadius: '20px',maxWidth:'50vw',maxHeight:'50%' }}>
              <Typography variant='h5' >Some rules for this quiz</Typography>
              <CardContent>
                  <Typography variant='body1'  >1. You will have only loads per each question.</Typography>
                  <Typography variant='body1'  >2. Once you select your answer, it can't be undone.</Typography>
                  <Typography variant='body1'  >3. You can't select any option once time goes off.</Typography>
                  <Typography variant='body1'  >4. You can't exit from the Quiz while you're playing.</Typography>
                  <Typography variant='body1'  >5. You'll get points on the basis of your correct answer.</Typography>
              </CardContent>
              <Stack direction="row" gap={2} sx={{ my: '20px', display: 'flex',justifyContent:'flex-end' }}>
                <Button size='lg' variant="outlined" color='error' onClick={close} > Exit Quiz </Button>
                <Button variant="contained" >Continue </Button>
              </Stack>
            </Card>
        </Modal>
    </>
  )
}

export default QuizRules