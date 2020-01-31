import React, {Component} from "react";
import {Switch} from "@material-ui/core";

    class PromoteCode extends Component<any, any> {
        constructor(props:any) {
            super(props);
            this.state = {
                checked: true,
                mutatePrice: 0
            }
        }

    handleChange = (e:string) => {
        this.setState({
        checked: false
        }
    )
    };

    render()
    {
        return (
            <div className={'code-promo'}>
                <p>Activer code promo</p>
                <Switch
                    checked={this.state.checkedA}
                    value="checkedA"
                    inputProps={{'aria-label': 'secondary checkbox'}}
                />
            </div>
        );
    }}

export default PromoteCode;
