import * as React from 'react';
import "./Notes.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';


function TakeNote({ handleToggle }) {
  return (
    <div className='main-Con'>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 600,
            height: 100,

          },
        }}
      >
        <div className='container' >
          <div className='takenote' sx={{
            display: 'flex',
            width: '40px',
            justifyContent: 'flex-start',

          }}>
            <Paper elevation={3} onClick={handleToggle} sx={{
              display: 'flex',
              justifyContent: 'space-between',
              height: 40,
              flexDirection: 'row',
              color: 'grey',
              padding: 1,

            }}>

              <div sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                width: 200,
                flexGrow: 50
              }}>
                Take a Note... </div>

              <div className='icons' sx={{
                display: 'flex',
                justifyContent: 'flex-end',

              }}>
                <CheckBoxOutlinedIcon sx={{
                  marginLeft: 4
                }} />
                <BrushOutlinedIcon sx={{
                  marginLeft: 5
                }} />
                <InsertPhotoOutlinedIcon sx={{
                  marginLeft: 4
                }} />
              </div>

            </Paper>
          </div>
        </div>
      </Box>
    </div>

  );
}
export default TakeNote
