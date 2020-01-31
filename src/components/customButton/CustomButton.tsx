import React from "react";
import {Button} from "@material-ui/core";
import './customButton.style.css';

interface CustomButtonProps {
    title: string,
    idButton: string
    buttonType?: 'text' | 'outlined' | 'contained'
    handlerOnClick: () => any;
}

const CustomButton = ({title, idButton, handlerOnClick, buttonType}: CustomButtonProps) => {
    return (
        <Button id={idButton}
                variant={buttonType}
                onClick={handlerOnClick}
        >
            {title}
        </Button>
    );
}
export default CustomButton;
