export function LoginComponent() {
    const [inputValue, setInputValue] = useState("");
    return(
        <div>
            <input onChange = {(events) => {
                setInputValue(events.target.value); 
                console.log(inputValue);
            }}></input>
            <button>Login</button>
        </div>
    ) 
} 