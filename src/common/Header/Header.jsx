import React from "react";
import './Header.css';
import { ChangeView } from '../../common/ChangeView/ChangeView';
export const Header = () => {


    return (
        <div className="headerDesign">
            <ChangeView 
                path={"/login"}
                name={"Login"}
            />
            <ChangeView 
                path={"/register"}
                name={"Register"}
            />
        </div>
    )
}