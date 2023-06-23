import React, {useState, useEffect} from 'react';
import './Appointments.css';
import { getAppointmentsByDoctor } from '../../services/apiCalls';
import { ProductCard } from '../../common/ProductCard/ProductCard';


export const Appointments = () => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        if(products.length === 0){
            getAppointmentsByDoctor()
            .then(
                resultados => {
                    setProducts(resultados.data.data)
                    // console.log(resultados.data.data)
                }
            ) .catch (error => console.log(error));
        }
    }, [products]);
    return(
        <div className='appointmentsDesign'>
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
                                                doctor_id={` Doctor: ${product.doctor_id}`}
                                                patient_id={`Paciente: ${product.patient_id}`}
                                                treatment_id={`Tratamiento: ${product.treatment_id}`}
                                                price={`Precio: ${product.price}`}
                                                date={`Fecha: ${product.date}`}
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