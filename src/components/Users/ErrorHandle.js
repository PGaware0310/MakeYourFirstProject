import React from "react";
import Button from "../../UI/Button/Button";
const ErrorHandle=(props)=>{
return(
    <div>
        <header>
<h2>{props.title}</h2>
        </header>
        <div>
        <p>{props.message}</p>
        </div>
        <footer>
            <Button onClick={props.onErrorHandler}>Okey</Button>
        </footer>
    </div>
    );
};
export default ErrorHandle;
