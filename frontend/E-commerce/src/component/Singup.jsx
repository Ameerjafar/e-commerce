import axios from "axios";
import { useState } from "react";
export function Signup() {
    const [getSignupValue, setInputSignup] = useState("");
    const [password, SetPassword] = useState("");
    const onClickHandler = async () => {
        try {
            const response = await axios.post('http://localhost:3000/signup', {
            username: getSignupValue,
            password: password
            })

        }catch(error) {
            console.log("your username or password are not in the given credencials");
        }
    }
    return (
        <>
         
        </>
    )
}