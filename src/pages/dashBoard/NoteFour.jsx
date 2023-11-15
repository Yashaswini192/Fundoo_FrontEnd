import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import { MoreVertOutlined, UndoOutlined, RedoOutlined, Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import './NoteThree.css';
import { archiveNote, trashNote, deleteNote } from '../../service/NoteService';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function NoteFour({ data, allNotes, permanentDelete}) {
    console.log("getnote", data);

    const setArchive = (id) => {
        let obj = { noteId: id };
        archiveNote(obj).then((response) => {
            allNotes()
            console.log(response);
        })
    }

    const setTrash = (id) => {
        let obj = { noteId: id };
        trashNote(obj).then((response) => {
            console.log(response);
        })
    }

    const setDelete = (id) => {
        let obj = { noteId: id };
        deleteNote(obj).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className='main-con'>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection:'row',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 270,
                        height: 100,
                        marginLeft:15,

                    },
                }}  
            >

                <div className='notes' sx={{
                    display: 'flex',
                    //justifyContent: 'center',
                    //flexDirection:'row'
                }}>
                    <div className='note1'><Paper sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '10px',
                        width: '23vw',
                        height: 'auto',
                        color: 'grey',
                        marginTop: '10px',
                    }}>

                        <div className='noteTitle'>
                            {data.title}
                        </div>
                        <div className='description' sx={{
                            display: 'flex'
                        }}>
                            {data.description}
                        </div>

                        <div>
                            {
                                permanentDelete ?
                                    <div className='deleteicons'><IconButton onClick={() => { setTrash(data.noteId) }}>
                                        <DeleteOutlineIcon />
                                    </IconButton>
                                        <IconButton onClick={() => { setDelete(data.noteId) }}>
                                            <DeleteForeverIcon />
                                        </IconButton></div>

                                    :

                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',

                                        rowGap: '0.5px',
                                        marginTop: '12px'
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
                                        <IconButton onClick={() => setArchive(data.noteId)}>
                                            <ArchiveOutlinedIcon />
                                        </IconButton>
                                        <IconButton onClick={() => { setTrash(data.noteId) }}>
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton>
                                            <MoreVertOutlined />
                                        </IconButton>

                                    </div>
                            }
                        </div>
                    </Paper>
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default NoteFour
