'use client';
import { useState } from "react";
const FormCreate = ({offerData}) => {

    const [form, setForm] = useState({
        number: offerData.number,
        paymentMethod: offerData.paymentMethod,
        value: offerData.value,
        destiny: {
            exit: "",
            arrival: "",
        }
    });
    //Obtener empresas
    const dataCitys = fetchAllCitys();

    //Funciones handle input form
    const handleSubmit = (e) => {
        e.preventDefault();
        response(form);
    }

    const changeDestinyExit = (e) => {
        setForm({
            ...form, destiny: {
                ...form.destiny,
                exit: e.target.value
            }
        })
    };
    const changeDestinyArrival = (e) => {
        setForm({
            ...form, destiny: {
                ...form.destiny,
                arrival: e.target.value
            }
        })
    };

    return (
        <>
            <form method="POST" action="" onSubmit={handleSubmit}>
                <div>
                    <label>Número de Oferta:{form.number}</label>
                    <label>Forma de Pago:{form.paymentMethod}</label>
                    <label>Valor del Pasaje:{form.value}</label>
                    <label>Ciudad de Partida:</label>
                    <select onChange={changeDestinyExit}>
                        <option defaultValue="">Seleccionar Ciudad</option>
                        if(datosCiudades == null){
                            <option>No Hay Datos</option>
                        }else{
                            
                            dataCitys.map((c) => {
                                return (<option key={c.id} value={c.nombre}>{c.nombre + ' ' + c.localidad}</option>)
                            })
                        }
                    </select>
                    <label>Ciudad de Destino:</label>
                    <select onChange={changeDestinyArrival}>
                        <option defaultValue="">Seleccionar Ciudad</option>
                        if(datosCiudades == null){
                            <option>No Hay Datos</option>
                        }else{
                            
                            dataCitys.map((c) => {
                                return (<option key={c.id} value={c.nombre}>{c.nombre + ' ' + c.localidad}</option>)
                            })
                        }
                    </select>
                </div>
                <button type="submit" className="btnSiguiente">Siguiente</button>
            </form>
        </>
    )
}

export default FormCreate;