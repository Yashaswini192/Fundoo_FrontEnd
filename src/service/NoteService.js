import axios from "axios"

export const NoteCreation = (object) => {
    console.log(object)
    let response =  axios.post("https://localhost:44356/api/Note/Create", object,{
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("Token")}`
    }})

    return response;
}

export const getAllNotes = async() => {
   // console.log(obj)
    let response = await axios.get("https://localhost:44356/api/Note/ALLNotes",{
        headers:{
            'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("Token")}`

        }
    })
    return response;
}

export const trashNote = async(object) => {
    console.log(object)
    let response = await axios.put(`https://localhost:44356/api/Note/IsTrash?NoteId=${object.noteId}`,object,{
        headers:{
            'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("Token")}`
        }
    })
    return response;
}
export const deleteNote = async(object) => {
    let response = await axios.delete(`https://localhost:44356/api/Note/Delete?NoteId=${object.noteId}`,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("Token")}`
        }
    })
    return response;
}

export const archiveNote = async(object) => {
    let res = await axios.put(`https://localhost:44356/api/Note/ISArchive?NoteId=${object.noteId}`,{},{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("Token")}`
        }
    })
    return res;
}
