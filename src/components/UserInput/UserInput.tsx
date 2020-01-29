import React from "react"
import {TextField} from "@material-ui/core";
import './userInput.style.css'

interface UserInputProps {
    inputLabel: string
    inputType?: string
    name?: string
    handlerInput: (e: any) => any,


}

export const UserInput = ({handlerInput, inputLabel, inputType, name}: UserInputProps) => {
    return (
        <>
            {/*<MdEmail id={'icon-mail'}/>*/}
            <TextField
                className={'input'}
                variant="filled"
                margin="normal"
                required
                fullWidth
                type={inputType}
                label={inputLabel}
                onChange={handlerInput}

            />

        </>
    );
}
