import React, {useState, useEffect} from 'react';
import './Treatment.css';
import { bringProducts } from '../../services/apiCalls';
import { ProductCard } from '../../common/ProductCard/ProductCard';

export const Treatment = () => {

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
        <div className='homeDesign'>
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
                                                treatmentName={product.treatmentName}
                                                description={product.description}
                                                />
                                                
                                                {/* {product.firstName}
                                                {product.lastName} */}
                                                
                                                
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