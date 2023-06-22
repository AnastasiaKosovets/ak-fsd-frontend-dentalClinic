import React, {useState, useEffect} from 'react';
import './Users.css';
import { bringProducts } from '../../services/apiCalls';
import { ProductCard } from '../../common/ProductCard/ProductCard';

export const Users = () => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        if(products.length === 0){
            bringProducts()
            .then(
                resultados => {
                    setProducts(resultados.data.data)
                    // console.log(resultados.data.data)
                }
            ) .catch (error => console.log(error));
        }
    }, [products]);
    return(
        <div className='userDesign'>
            {
                products.length > 0 
                    ? (
                        <div className="thisCard">
                            {
                                products.map(
                                    product => {
                                        return (
                                            <div key={product.id}>
                                                <ProductCard className="usersCardDesign"
                                                id={` Id: ${product.id}`}
                                                email={`Email: ${product.email}`}
                                                password={`Contraseña: ${product.password}`}
                                                firstName={`Nombre: ${product.firstName}`}
                                                lastName={`Apellido: ${product.lastName}`}
                                                document={`NIE/DNI: ${product.document}`}
                                                dateOfBirth={`Fecha de nacimiento: ${product.dateOfBirth}`}
                                                address={`Dirección: ${product.address}`}
                                                telefonNumber={`Número de teléfono: ${product.telefonNumber}`}
                                                collegialNumber={`Número de colegiado: ${product.collegialNumber}`}
                                                role_id={`Role_Id: ${product.role_id}`}
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