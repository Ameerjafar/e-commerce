import axios from 'axios';
import { useState } from 'react';

export function LoginComponent() {
    const [userInput, setInputValue] = useState("");
    const [passwordInput, setPassWordInput] = useState("");
    const [message, setMessage] = useState("");
     const onClickHandler = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', {
                username: userInput,
                password: passwordInput
            });
            setMessage("login sucessfully");
            console.log(response);
        }catch(error) {
            console.log("This is the error you got while sending the request to the backend" + error);
        }
    }
    return(
        <div>
           <input onChange={(events) => {
            setInputValue(events.target.value);
           }} placeholder='Enter your username'></input><br></br>
            <input onChange={(events) => {
            setPassWordInput(events.target.value);
           }} placeholder='Enter your Password'></input><br></br>
           <button onClick={onClickHandler}>Login</button>
        </div>
    ) 
}   
