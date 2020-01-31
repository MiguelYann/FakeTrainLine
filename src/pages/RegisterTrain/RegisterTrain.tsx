
import React, {Component} from "react";
import {Autocomplete} from "@material-ui/lab";
import {TextField} from "@material-ui/core";
import requestGetGare from "../../requestGetStations";
import './registerTrain.style.css';
import Ticket from "../../components/Ticket/Ticket";
import CustomButton from "../../components/customButton/CustomButton";

class RegisterTrain extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            userSearchArrival: '',
            stationsArrival: [],
            isEnabledTicket:false,
            userSearchDestination: '',
            stationsDestination: [],
            selectedArrival: '',
            selectedDestination: '',
            handleInputArrival: (e: any) => this.setState({userSearchArrival: e.target.value}),
            handleSelectedArrival: (e: any, value: any) => this.setState({selectedArrival: value}),
            handleSelectedDestination: (e: any, value: any) => this.setState({selectedDestination: value}),
            handleInputDestinationn: (e: any) => this.setState({userSearchDestination: e.target.value})
        }
    }

    handleBtn = () => {
        this.setState({isEnabledTicket:true})
    }

    handleBtnProfile = () => {
        this.props.history.push('/profile')
    }


    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        if (this.state.userSearchArrival) {
            const userSearch = this.state.userSearchArrival;
            requestGetGare(userSearch).then(
                (stationsFound) => this.setState({stationsArrival: stationsFound})
            );

        }
        if (this.state.userSearchDestination) {
            const userSearchArriv = this.state.userSearchDestination;
            requestGetGare(userSearchArriv).then(
                (stationsFound) => this.setState({stationsDestination: stationsFound})
            );
        }
    }

    render() {
        const {
            userSearchArrival,
            stationsArrival,
            isEnabledTicket,
            userSearchDestination,
            stationsDestination,
            selectedArrival,
            selectedDestination,
            handleInputArrival,
            handleSelectedArrival,
            handleSelectedDestination,
            handleInputDestinationn
            
            


        } = this.state;

        return (this.props.isLoggedInRegistred) ?
            <div className={'item'
            }>
                <h1><span id={'span-title'}>Enregistrer</span> vos billets tout de suite</h1>
                {isEnabledTicket?
                <Ticket
                    ticketPrice={'20 €'}
                    stationArrival={selectedArrival}
                    stationDestination={selectedDestination}/>
                    :null
                }

                <CustomButton
                    title={'Consulter mon profile'}
                    idButton={'btn-customProfile'}
                    handlerOnClick={this.handleBtnProfile
                }/>
                <div className={'registrer-train-arrival'}>
                    <Autocomplete
                        onChange={handleSelectedArrival}
                        id="combo-box-demo"
                        options={stationsArrival}
                        // getOptionLabel={''}
                        style={{width: 300}}
                        renderInput={params => (
                            <TextField
                                onChange={handleInputArrival}
                                {...params} label="Entrer votre gare d'arrivee" variant="outlined" fullWidth/>
                        )}
                    />
                </div>
                <div className={'registrer-train-destination'}>
                    <Autocomplete
                        onChange={handleSelectedDestination}
                        id="combo-box-demo"
                        options={stationsDestination}
                        style={{width: 300}}
                        renderInput={params => (
                            <TextField
                                onChange={handleInputArrival}
                                {...params} label="Entrer votre gare de depart" variant="outlined" fullWidth/>
                        )}
                    />
                </div>

                <div id={'btn-register'}>
                    <CustomButton title={'RESERVEZ'} idButton={'btn-customRegister'} handlerOnClick={this.handleBtn
                    }/>
                </div>
            </div>

            : <h1 id={'erros'}>404 </h1>
    }

}

export default RegisterTrain;
