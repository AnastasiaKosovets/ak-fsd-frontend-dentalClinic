import React, { useEffect, useState } from "react";
import "./MyAccount.css";
import { myProfile } from "../../services/apiCalls";
import { ProductCard } from "../../common/ProductCard/ProductCard";

export const MyAccount = () => {

    const [profile, setProfile] = useState([]);

    useEffect(() => {
        if(profile.length === 0){
            myProfile()
            .then(
                results => {
                    setProfile(results.data)
                    console.log(results.data);
                }
            ).catch(error => console.log(error));
        }
    }, [profile]);

    return(
        <div className="profileDesign">
            {
                profile.length > 0 
                    ? (
                        <div className="thisCard">
                            {
                                profile.map(
                                    profile => {
                                        return (
                                            <div key={profile.id}>
                                                <ProductCard className="usersCardDesign"
                                                email={`Email: ${profile.email}`}
                                                firstName={`Nombre: ${profile.firstName}`}
                                                lastName={`Apellido: ${profile.lastName}`}
                                                document={`NIE/DNI: ${profile.document}`}
                                                dateOfBirth={`Fecha de nacimiento: ${profile.dateOfBirth}`}
                                                address={`Dirección: ${profile.address}`}
                                                telefonNumber={`Número de teléfono: ${profile.telefonNumber}`}
                                                />
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    )

                    : (
                        <div>CARGANDO...</div>
                    )
            }
        </div>
    )
}