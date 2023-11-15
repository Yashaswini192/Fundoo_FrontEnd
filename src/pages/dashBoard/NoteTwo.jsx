import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import { MoreVertOutlined, UndoOutlined, RedoOutlined, PushPinOutlined } from '@mui/icons-material';
import { IconButton, Button } from '@mui/material';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { NoteCreation, trashNote,archiveNote } from '../../service/NoteService';
import TextField from '@mui/material/TextField';
import './NoteTwo.css';

function NoteTwo(props) {

    const [val, setValues] = useState({
        Title: '',
        Description: '',
        IsArchive: false,
        IsTrash: false
    });

    const getTitle = (e) => {
        setValues(prevState => ({
            ...prevState,
            Title: e.target.value
        }))
        console.log(val);
    }

    const getDescription = (e) => {
        setValues(prevState => ({
            ...prevState,
            Description: e.target.value
        }))
        console.log(val);
    }
    const submitData = () => {
        NoteCreation(val).then((response) => {
            console.log(response)

        }).catch((error) => {
            console.log(error);
        })
    }

    const archiveNote = () => {
        setValues(prevState => ({
            ...prevState,
            IsArchive: true
        }))
    }

    const setArchiveNote = () => {
        if(val.Title != ''){
            archiveNote();
           submitData();
        }
    }

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
                        height: 'auto',

                    },
                }}
            >

                <div className='notes' sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>

                    <Paper sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '12px',
                        width: '600px',
                        height: 'auto',
                        color: 'grey'
                    }}>
                        <div className='note-two-title' >
                            <TextField
                                required
                                variant='standard'
                                placeholder="Title"
                                onChange={getTitle}
                                // name='Title'
                                // value={val.Title}
                                InputProps=
                                {{
                                    disableUnderline: true,
                                    style: {
                                        border: 'none',
                                        outline: 'none',
                                        width: '100%',
                                        textDecoration: 'none',
                                    },
                                }}

                            /><IconButton aria-label="Pin Note">
                                <PushPinOutlined />
                            </IconButton>
                        </div>
                        <div className='desc'>
                            <TextField
                                multiline
                                required
                                variant='standard'
                                // name='Description'
                                // value={val.Description}
                                placeholder="Take a note..."

                                onChange={getDescription}
                                InputProps={{
                                    disableUnderline: 'true',
                                    style: {
                                        border: 'none',
                                        outline: 'none',
                                        width: '100%',
                                        height:'auto'
                                    },
                                }}
                            />
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            rowGap: '0.5px',
                            marginTop: '9px',
                        
                        }}>
                            <IconButton>
                                <AddAlertOutlinedIcon />
                            </IconButton>
                            <IconButton>
                                <PersonAddAltOutlinedIcon />
                            </IconButton>
                            <IconButton>
                                <PaletteOutlinedIcon />
                            </IconButton>
                            <IconButton>
                                <InsertPhotoOutlinedIcon />
                            </IconButton>
                            <IconButton onClick={() =>{ setArchiveNote()}}>
                                <ArchiveOutlinedIcon />
                            </IconButton>
                            <IconButton>
                                <MoreVertOutlined />
                            </IconButton>
                            <IconButton>
                                <UndoOutlined />
                            </IconButton>
                            <IconButton>
                                <RedoOutlined />
                            </IconButton>
                            <Button type="submit"
                                onClick={() => {
                                    if (val.Title !== "") {
                                        submitData();
                                    }
                                    props.handleToggle();
                                    
                                }}
                                style={{
                                    border: 'none', backgroundcolor: 'none', color: 'grey', textTransform: 'lowercase', fontWeight: 'bolder'
                                }}>
                                Close
                            </Button>
                        </div>

                    </Paper>
                </div>

            </Box >
        </div >
    )
}

export default NoteTwo
