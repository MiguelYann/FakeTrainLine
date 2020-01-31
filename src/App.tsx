import React, {Component} from 'react';
import './App.css';
import Login from "./pages/login/Login";
import {Route, withRouter} from 'react-router-dom';
import RegisterTrain from "./pages/RegisterTrain/RegisterTrain";
import axios from "axios";
import ProfileUser from "./pages/profile/ProfileUser";

class App extends Component<any, any> {
    userData: any;

    constructor(props: any) {
        super(props);
        this.state = {
            mailInput: '',
            passwordInput: '',
            isEnabledPromote: true,
            isLogged: false
        }
    }

    changePromote() {
        this.setState({
            isEnabledPromote: false
        })
    }

    onSubmitLogin = async () => {
        const urlApi = 'https://reqres.in/api/login';
        const configurationOfAxios = {
            headers: {'Content-Type': 'application/json'},
        };
        axios.post(urlApi, {email: this.state.mailInput, password: this.state.passwordInput}, configurationOfAxios)
            .then((res) => {
                this.setState({isLogged: true});
                this.props.history.push('/registerTrain')
            })
            .catch((error) => {
                console.log(this.state.isLogged);
                this.setState({isLogged: false})
            });
        this.props.history.push('/registerTrain',);
    };

    handleInputMail = (e: any) => this.setState({mailInput: e.target.value});
    handleInputPassword = (e: any) => this.setState({passwordInput: e.target.value});

    componentDidMount(): void {
        this.userData = JSON.parse(localStorage.getItem('user') as string);
        if (localStorage.getItem('user')) {
            this.setState({
                mailInput: this.userData.mailInput,
                passwordInput: this.userData.passwordInput,
                isLogged: this.userData.isLogged
            })
        }
    }

    componentWillUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        localStorage.setItem('user', JSON.stringify(prevState));
    }

    render() {
        const {mailInput, passwordInput, isEnabledPromote, isLogged} = this.state;
        return (
            <div className="App">
                <Route
                    render=
                        {
                            () => <Login
                                submitLogin={this.onSubmitLogin}
                                isLoggedIn={isLogged}
                                handleMail={this.handleInputMail}
                                handlePassword={this.handleInputPassword}
                                email={mailInput}
                                password={passwordInput}
                            />}
                    exact path={'/'}
                />

                <Route
                    render=
                        {
                            () => <RegisterTrain
                                isLoggedInRegistred={isLogged}
                            />
                        }
                    path={'/registerTrain'}
                />

                <Route
                    render=
                        {
                            () => <ProfileUser
                                isLoggedInProfile={isLogged}
                                isPromote={isEnabledPromote}/>
                        }
                    path={'/profile'}
                />

            </div>
        )
    }
};

export default withRouter(App);

