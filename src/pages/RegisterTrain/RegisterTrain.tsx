import React, {Component} from "react";
import requestGetGare from "../../requestGetStations";
import './registerTrain.style.css';
import Ticket from "../../components/Ticket/Ticket";
import CustomButton from "../../components/customButton/CustomButton";
import SearchStation from "../../components/searchStation/SearchStation";
import PromoteCode from "../../components/promoteCode/PromoteCode";
import {withRouter} from "react-router-dom";

class RegisterTrain extends Component<any, any> {
    userTicket: any;

    constructor(props: any) {
        super(props);
        this.state = {
            stationsArrival: [],
            isEnabledTicket: false,
            userSearchDestination: '',
            stationsDestination: [],
            selectedArrival: '',
            handleInputArrival: (e: any) => this.setState({userSearchArrival: e.target.value}),
            handleSelectedArrival: (e: any, value: any) => this.setState({selectedArrival: value}),
            handleSelectedDestination: (e: any, value: any) => this.setState({selectedDestination: value}),
            handleInputDestination: (e: any) => this.setState({userSearchDestination: e.target.value})
        }
    }

    handleBtn = () => {
        this.setState({isEnabledTicket: true})
    };

    handleBtnProfile = () => {
        this.props.history.push('/profile')
    };

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {

        if (this.state.userSearchArrival) {
            const userSearchWithArrival = this.state.userSearchArrival;
            requestGetGare(userSearchWithArrival).then(
                (stationsFound) => this.setState({stationsArrival: stationsFound})
            );
        }

        if (this.state.userSearchDestination) {
            const userSearchWithDestination = this.state.userSearchDestination;
            requestGetGare(userSearchWithDestination).then(
                (stationsFound) => this.setState({stationsDestination: stationsFound})
            );
        }
    }

    componentDidMount(): void {
        this.userTicket = JSON.parse(localStorage.getItem('userTicket') as string);
        if (localStorage.getItem('userTicket')) {
            this.setState({
                stationsArrival: this.userTicket.stationsArrival,
                isEnabledTicket: this.userTicket.isEnabledTicket,
                stationsDestination: this.userTicket.stationsDestination,
                selectedArrival: this.userTicket.selectedArrival,
                selectedDestination: this.userTicket.selectedDestination
            })
        }
    }

    componentWillUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        localStorage.setItem('userTicket', JSON.stringify(prevState));
    }

    render() {
        const {
            stationsArrival,
            isEnabledTicket,
            stationsDestination,
            selectedArrival,
            selectedDestination,
            handleInputArrival,
            handleSelectedArrival,
            handleSelectedDestination,
            handleInputDestination
        } = this.state;

        return (this.props.isLoggedInRegistred) ?
            <div className={'item'}>
                <h1><span id={'span-title'}>Enregistrer</span> vos billets tout de suite</h1>
                {isEnabledTicket ?
                    <Ticket
                        ticketPrice={'20 €'}
                        stationArrival={selectedArrival}
                        stationDestination={selectedDestination}
                    />
                    : null
                }

                <CustomButton
                    title={'Consulter mon profile'}
                    idButton={'btn-customProfile'}
                    handlerOnClick={this.handleBtnProfile}
                />

                <div className={'registrer-train-arrival'}>
                    <SearchStation
                        handlerSelectedArrival={handleSelectedArrival}
                        stationsArrival={stationsArrival}
                        handlerInputArrival={handleInputArrival}
                        label={"Entrez votre gare d'arrivee"}
                    />
                </div>

                <div className={'registrer-train-destination'}>
                    <SearchStation
                        handlerSelectedArrival={handleSelectedDestination}
                        stationsArrival={stationsDestination}
                        handlerInputArrival={handleInputDestination}
                        label={"Entrez votre gare d'arrivee"}
                    />
                </div>

                <div id={'btn-register'}>
                    <CustomButton
                        title={'RESERVEZ'}
                        idButton={'btn-customRegister'}
                        handlerOnClick={this.handleBtn}
                    />
                </div>

                <PromoteCode/>
            </div>
            : <h1 id={'erros'}>404 </h1>
    }
}

export default withRouter(RegisterTrain);
