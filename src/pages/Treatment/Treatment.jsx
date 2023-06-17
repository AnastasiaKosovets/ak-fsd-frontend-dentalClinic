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
                    setProducts(resultados.data.results)
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
                                products.slice(0,8).map(
                                    product => {
                                        return (
                                            <div key={product.id}>
                                                <ProductCard
                                                    id={product.id}
                                                    name={product.name}
                                                    image={product.image}
                                                    brand={product.species}
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