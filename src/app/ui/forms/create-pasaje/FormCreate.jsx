'use client';
import { useState } from "react";
const FormCreate = ({ofertData}) => {

    const [form, setForm] = useState({
        numero: ofertData.numero,
        formaPago: ofertData.formaPago,
        valor: ofertData.valor,
        destino: {
            salida: "",
            llegada: "",
        }
    });

    //Funciones handle input form
    const handleSubmit = (e) => {
        e.preventDefault();
        response(form);
    }

    const changeDestinoSalida = (e) => {
        setForm({
            ...form, destino: {
                ...form.destino,
                salida: e.target.value
            }
        })
    };
    const changeDestinoLlegada = (e) => {
        setForm({
            ...form, destino: {
                ...form.destino,
                llegada: e.target.value
            }
        })
    };

    return (
        <>
            <form method="POST" action="" onSubmit={handleSubmit}>
                <div>
                    <label>Número de Oferta:{form.numero}</label>
                    <label>Forma de Pago:{form.formaPago}</label>
                    <label>Valor del Pasaje:{form.valor}</label>
                    <label>Ciudad de Partida:</label>
                    <select onChange={changeDestinoSalida}>
                        <option defaultValue="">Seleccionar Ciudad</option>
                        if(datosCiudades == null){
                            <option>No Hay Datos</option>
                        }else{
                            /*
                            datosCiudades.map((c) => {
                                return (<option key={c.id} value={c.nombre}>{c.nombre + ' ' + c.localidad}</option>)
                            })*/
                        }
                    </select>
                    <label>Ciudad de Destino:</label>
                    <select onChange={changeDestinoLlegada}>
                        <option defaultValue="">Seleccionar Ciudad</option>
                        if(datosCiudades == null){
                            <option>No Hay Datos</option>
                        }else{
                            /*
                            datosCiudades.map((c) => {
                                return (<option key={c.id} value={c.nombre}>{c.nombre + ' ' + c.localidad}</option>)
                            })*/
                        }
                    </select>
                </div>
                <button type="submit" className="btnSiguiente">Siguiente</button>
            </form>
        </>
    )
}

export default FormCreate;