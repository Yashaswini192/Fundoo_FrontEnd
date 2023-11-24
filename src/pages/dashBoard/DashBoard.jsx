import React, { useState, useEffect } from 'react'
import MiniDrawer from './MiniDrawer'
import TakeNote from './Notes'
import NoteTwo from './NoteTwo';
import NoteThree from './NoteThree';
import { getAllNotes, deleteNote, trashNote } from '../../service/NoteService';
import "./DashBoard.css"
import NoteFour from './NoteFour';

function DashBoard() {

  const [state, setNote] = useState(true);

  const [getnote, setGetnote] = useState([]);

  const [shownote, setShowNote] = useState("Notes");

  const [viewType, setViewType] = useState('list');

  const handleToggle = () => {
    setNote(!state)
  }

 const allNotes = async () => {
    let response = await getAllNotes();
    console.log(response);

    //  arr=response.data.data;
    //console.log(response.data.data);
    //setGetnote(response.data.data); 
    
    let arr =response.data.data
    if (shownote === "Notes") {
     let arr1 = arr. filter(x => x.archive === false && x.trash === false);
      setGetnote(arr1);
      console.log(arr1);
    }
    else if(shownote === "Archive"){
     let arr1 = response.data.data.filter(x => x.archive === true && x.trash === false );
      setGetnote(arr1);
      console.log(arr1);
    }
    else if(shownote === "Trash"){
     let arr1 = response.data.data.filter(x => x.archive === false && x.trash === true);
      setGetnote(arr1);
      console.log(arr1);
    }
    //console.log(arr);
    //setGetnote(arr);
  }

  useEffect(() => {
    allNotes()
  }, [shownote]);

  const autorefresh = () => {
    allNotes();
  }

  console.log(shownote)
  console.log(getnote)


  return (
    <div>
      <MiniDrawer setShowNote={setShowNote} setViewType={setViewType} viewType={viewType}/>
      <div>
        {
          state ? <TakeNote handleToggle={handleToggle} /> :
            <NoteTwo handleToggle={handleToggle} allNotes={allNotes} autorefresh={autorefresh} />
        }

      </div>
      <div className="noteContainer">
        {getnote.length === 0 ? (
          <p style={{ border: "20px", paddingTop: '45px', marginBottom: '10px' }}>No notes to display.</p>
        ) : (
          <div className={viewType === 'list' ? 'noteListView' : 'noteGridView'}>
            {getnote.map((data) => (
              viewType === 'list' ? (
                <NoteThree key={data.noteId} data={data} allNotes={allNotes} permanentDelete={data.trash} autorefresh={autorefresh}/>
              ) : (<div className='notefour'>
                <NoteFour key={data.noteId} data={data} allNotes={allNotes} permanentDelete={data.trash} autorefresh={autorefresh} />
              </div>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default DashBoard

