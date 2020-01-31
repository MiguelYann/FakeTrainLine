import React, {Component} from "react";
import {TextField} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";

interface SearchStationProps {
    handlerSelectedArrival: (e: any) => any
    stationsArrival: [],
    handlerInputArrival: (e: any) => any,
    label: string
}

const SearchStation = ({handlerSelectedArrival, stationsArrival, handlerInputArrival, label}: SearchStationProps) => {
    return (
        <Autocomplete
            onChange={handlerSelectedArrival}
            id="combo-box-demo"
            options={stationsArrival}
            style={{width: 300}}
            renderInput={params => (
                <TextField
                    onChange={handlerInputArrival}
                    {...params} label={label}
                    variant="outlined" fullWidth/>
            )}
        />
    );
}

export default SearchStation;
