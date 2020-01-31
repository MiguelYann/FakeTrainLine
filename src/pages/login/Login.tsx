import React from "react";
import './login.style.css'
import {IoMdTrain} from "react-icons/all";
import {UserInput} from "../../components/UserInput/UserInput";
import CustomButton from "../../components/customButton/CustomButton";
import {withRouter} from "react-router-dom";

const Login = (props: any) => {
    const title = 'Bienvenue sur';
    const appName = 'FakeTrainLine';
    return (
        <>
            <h1>{title}</h1>
            <h2>{appName}</h2>
            <IoMdTrain id={'icon-train'}/>
            <div>

                <UserInput
                    inputLabel={'Entrer votre email'}
                    inputType={'email'}
                    handlerInput={props.handleMail}
                />

                <UserInput
                    inputLabel={'Entrer votre mot de passe'}
                    inputType={'password'}
                    handlerInput={props.handlePassword}
                />

                <CustomButton
                    idButton={'btn-custom'}
                    buttonType={'contained'}
                    title={'Connexion'}
                    handlerOnClick={props.submitLogin}
                />
                {

                }
            </div>
        </>
    );
};
export default withRouter(Login);


