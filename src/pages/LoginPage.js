import { useState } from "react"
import { Form } from "react-bootstrap";
import { function_login } from "../security/Login";
import { PopUpError, PopUpSuccess } from "../components/PopUp";

function LoginPage(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showErrorPopUp, setShowErrorPopUp] = useState(false);
    const [showSuccessPopUp, setShowSuccessPopUp] = useState(false);

    const onButtonClick=()=>{
        setPasswordError("");

        function_login({
            username: username,
            password: password
        })

        const msg=localStorage.getItem("login-result-message");

        if(msg.status!==200){
            setPasswordError(msg.status+" - "+msg.statusText);
            setShowErrorPopUp(true);
        }
    }

    return(
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formLogin">
                    <Form.Label>Nom d'utilisateur</Form.Label>
                    <Form.Control type="text" placeholder="Entrez votre nom d'utilisateur" value={username} />

                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control type="password" placeholder="Entrez votre mot de passe" value={password} />

                    <Button variant="primary" type="submit" onButtonClick={onButtonClick} >Connexion</Button>

                    <label>{passwordError}</label>
                </Form.Group>
            </Form>

            <PopUpError show={showErrorPopUp} title="Erreur de connexion" body={passwordError} />
            <PopUpSuccess show={showSuccessPopUp} title="Connexion réussie" body={"Success de la connexion !"} />
        </>
    )
}

export default LoginPage