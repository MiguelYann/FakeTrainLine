import React from "react";
import {Button} from "@material-ui/core";
import './customButton.css';

interface CustomButtonProps {
    title: string,
    handlerOnClick: () => any;
}

const CustomButton = ({title, handlerOnClick}: CustomButtonProps) => {
    return (
        <Button id={'btn-custom'}
                variant="contained"
                onClick={handlerOnClick}
        >
            {title}
        </Button>
    );
}
export default CustomButton;
