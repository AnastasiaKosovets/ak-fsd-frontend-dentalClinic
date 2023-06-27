import React, {useState, useEffect} from 'react';
import './Users.css';
// import { bringProducts } from '../../services/apiCalls';
import { ProductCard } from '../../common/ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import { getAllUsersByAdmin } from '../../services/apiCalls';
import { useNavigate } from 'react-router-dom';

export const Users = () => {

    const credRdx = useSelector(userData);
    const token = credRdx?.credentials?.token;
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    
    // useEffect(() => {
    //     if(products.length === 0){
    //         getAllUsersByAdmin()
    //         .then(
    //             resultados => {
    //                 setProducts(resultados.data.data)
    //                 // console.log(resultados.data.data)
    //             }
    //         ) .catch (error => console.log(error));
    //     }
    // }, [products]);

    useEffect(() => {
        getAllUsersByAdmin(token).then((res) => {
            setUsers(res.data);
        });
        navigate("/");
    }, []);

    return(
        <div className='userDesign'>
            {
                users.length > 0 
                    ? (
                        <div className="thisCard">
                            {
                                users.map(
                                    (users) => {
                                        return (
                                            <div key={users.id}>
                                                <ProductCard className="usersCardDesign"
                                                id={` Id: ${users.id}`}
                                                email={`Email: ${users.email}`}
                                                // password={`Contraseña: ${product.password}`}
                                                firstName={`Nombre: ${users.firstName}`}
                                                lastName={`Apellido: ${users.lastName}`}
                                                document={`NIE/DNI: ${users.document}`}
                                                dateOfBirth={`Fecha de nacimiento: ${users.dateOfBirth}`}
                                                address={`Dirección: ${users.address}`}
                                                telefonNumber={`Número de teléfono: ${users.telefonNumber}`}
                                                collegialNumber={`Número de colegiado: ${users.collegialNumber}`}
                                                role_id={`Role_Id: ${users.role_id}`}
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