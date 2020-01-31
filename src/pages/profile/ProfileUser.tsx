import React, {Component} from "react";
import PromoteCode from "../../components/promoteCode/PromoteCode";
import Ticket from "../../components/Ticket/Ticket";

class ProfileUser extends Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (this.props.isLoggedInProfile) ?
            (
                <>
                    <h1>Mon Profile</h1>
                    <Ticket
                        ticketPrice={'20 €'}
                        stationArrival={this.props.selectedArrival}
                        stationDestination={this.props.selectedDestination}
                    />
                    <PromoteCode/>
                </>) :

            <h1>Indisponible car vous n'etes pas connecté</h1>
    }
}

export default ProfileUser
