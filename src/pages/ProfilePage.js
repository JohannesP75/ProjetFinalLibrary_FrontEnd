import { useState } from "react"
import { Reader } from "../models/Person";
import { Card, Form } from "react-bootstrap";
import { PopUpError } from "../components/PopUp";
import LoansList from "../components/LoansList";

function ProfilePage(){
    const [profile, setProfile]=useState(Reader.getProfile());

    if(profile!==null){
        document.title=Reader.getFullName(profile);

        return(
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formSurname">
                    <Form.Label>Nom de famille</Form.Label>
                    <Form.Control type="text" placeholder={profile.surname} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGivenName">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control type="text" placeholder={profile.givenName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Numéro de téléphone</Form.Label>
                    <Form.Control type="tel" placeholder={profile.phone} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Adresse e-mail</Form.Label>
                    <Form.Control type="email" placeholder={profile.email} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Date de naissance</Form.Label>
                    <Form.Control type="date" placeholder={profile.birthDate} />
                </Form.Group>
            </Form>

            <LoansList listLoans={profile.loans} />
        </>
        )
    }else{
        return(
            <>
                <PopUpError show={true} title={"Profile indisponible !"} body={"Le chargement du profile est impossible !"} />
            </>
        )
    }
}

export default ProfilePage