import axios from "axios"

export const NoteCreation = (object) => {
    console.log(object)
    let response =  axios.post("https://localhost:44356/api/Note/NoteCreation", object,{
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("Token")}`
    }})

    return response;
}

export const getAllNotes = async() => {
   // console.log(obj)
    let response = await axios.get("https://localhost:44356/api/Note/GetALLNotes",{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("Token")}`
        }})
    console.log(response);
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
    let response = await axios.delete(`https://localhost:44356/api/Note/DeleteNote?NoteId=${object.noteId}`,object.noteId,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("Token")}`
        }
    })
    return response;
}

export const archiveNote = async(object) => {
    console.log(object);
    let res = await axios.put(`https://localhost:44356/api/Note/ISArchive?NoteId=${object.noteId}`,object.noteId,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("Token")}`
        }
    })
    return res;
}
