import React, {Component} from "react";
import PromoteCode from "../../components/promoteCode/PromoteCode";
import RegisterTrain from "../RegisterTrain/RegisterTrain";
import {Route} from "react-router-dom";

class ProfileUser extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (this.props.isLoggedInProfile) ?
            (<>
                <h1>Mon Profile</h1>
                <PromoteCode />
            </>) :

            <h1>Indisponible car vous n'etes pas connecté</h1>


    }
}
export default ProfileUser
