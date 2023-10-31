import axios from "axios"
export const signin = (object) => {
    console.log(object)
    let response =  axios.post("https://localhost:44356/api/User/UserLogin", object);
    return response;
}
export const signup = (obj) => {
    let response = axios.post("https://localhost:44356/api/User/Registration", obj);
    return response;
}