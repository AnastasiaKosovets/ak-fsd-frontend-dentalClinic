import React from 'react';
import './Home.css';
import { ChangeView } from '../../common/ChangeView/ChangeView';
 
export const Home = () => {
     return (
         <div className='homeDesign'> Bienvenidos a nuestra Clínica Dental
            {/* <ChangeView 
                path={"/login"}
                name={"Login"}
            />
            <ChangeView 
                path={"/register"}
                name={"Register"}
            /> */}
         
         </div>
     )
}