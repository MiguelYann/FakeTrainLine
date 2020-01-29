import React, {Component} from "react";
import './login.style.css'
import {IoMdTrain} from "react-icons/all";
import axios from 'axios';
import {UserInput} from "../../components/UserInput/UserInput";
import CustomButton from "../../components/ActionTrigger/CustomButton";

export default class Login extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            mailInput: '',
            passwordInput: '',
        }
    }

    submitLogin = async () => {
        const urlApi = 'https://reqres.in/api/login';
        let configurationOfAxios = {
            headers: {'Content-Type': 'application/json'},
        };
        const {mailInput, passwordInput} = this.state;
        await axios.post(urlApi, {email: mailInput, password: passwordInput}, configurationOfAxios)
            .then((res) => {
                if (res.status === 200) {
                    return (
                        <>

                        </>
                    )
                } else {
                    console.log("not connecte")
                }
            })
            .catch((error) => {
                console.log("ddd", error)
            })
    };

    render() {
        const title = 'Bienvenue sur';
        const appName = 'FakeTrainLine';
        return (
            <>
                <h1>{title}</h1>
                <h2>{appName}</h2>
                <IoMdTrain id={'icon-train'}/>
                <div className={'user-input-panel'}>

                    <UserInput
                        inputLabel={'Entrer votre email'}
                        inputType={'email'}
                        handlerInput={(e) => this.setState({mailInput: e.target.value})}
                    />

                    <UserInput
                        inputLabel={'Entrer votre mot de passe'}
                        inputType={'password'}
                        handlerInput={(e) => this.setState({passwordInput: e.target.value})}
                    />

                    <CustomButton
                        title={'Connexion'}
                        handlerOnClick={this.submitLogin}
                    />
                </div>
            </>
        )
    }
}

