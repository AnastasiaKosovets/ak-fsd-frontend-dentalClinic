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
                                                <ProductCard
                                                id={product.id}
                                                email={product.email}
                                                password={product.password}
                                                firstName={product.firstName}
                                                lastName={product.lastName}
                                                document={product.document}
                                                dateOfBirth={product.dateOfBirth}
                                                address={product.address}
                                                telefonNumber={product.telefonNumber}
                                                collegialNumber={product.collegialNumber}
                                                role_id={product.role_id}
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