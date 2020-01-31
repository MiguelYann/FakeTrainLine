import React from "react";
import {Switch} from "@material-ui/core";

const PromoteCode = (props: any) => {
    const [state, setState] = React.useState({
        checkedA: true,
    });
    const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, [name]: event.target.checked});
    };
    return (
        <div className={'code-promo'}>
            <p>Activer code promo</p>
            <Switch
                checked={state.checkedA} //state.checkedA
                onChange={handleChange('checkedA')}
                value="checkedA"
                inputProps={{'aria-label': 'secondary checkbox'}}
            />
        </div>
    );
};
export default PromoteCode;
