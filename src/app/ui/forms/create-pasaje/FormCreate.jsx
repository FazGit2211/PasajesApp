'use client';
import { useState } from "react";
export default FormCreate = () => {

    const [form, setForm] = useState({
        numero: "",
        formaPago: "",
        valor: 0,
        destino: {
            salida: "",
            llegada: "",
            ciudad: {
                nombre: "",
                provincia: "",
                localidad: "",
                distancia: 0
            }
        }
    });

    //Funciones handle input form
    const handleSubmit = (e) => {
        e.preventDefault();
        response(form);
    }

    const changeNumero = (e) => { setForm({ ...form, numero: e.target.value }) };
    const changeFormaPago = (e) => { setForm({ ...form, formaPago: e.target.value }) };
    const changeValor = (e) => { setForm({ ...form, valor: e.target.value }) };
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
    const changeDestinoCiudadNombre = (e) => {
        setForm({
            ...form, destino: {
                ...form.destino,
                ciudad: {
                    ...form.destino.ciudad,
                    nombre: e.target.value
                }
            }
        })
    };

    const changeDestinoCiudadProvincia = (e) => {
        setForm({
            ...form, destino: {
                ...form.destino,
                ciudad: {
                    ...form.destino.ciudad,
                    provincia: e.target.value
                }
            }
        })
    };

    const changeDestinoCiudadLocalidad = (e) => {
        setForm({
            ...form, destino: {
                ...form.destino,
                ciudad: {
                    ...form.destino.ciudad,
                    localidad: e.target.value
                }
            }
        })
    };

    const changeDestinoCiudadDistancia = (e) => {
        setForm({
            ...form, destino: {
                ...form.destino,
                ciudad: {
                    ...form.destino.ciudad,
                    distancia: e.target.value
                }
            }
        })
    };

    return (
        <>
            <form method="POST" action="" onSubmit={handleSubmit}>
                <div>
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
                <div>
                    <label>Tipo de Forma de Pago</label>
                    <select onChange={changeFormaPago}>
                        <option defaultValue="">Seleccionar Forma de Pago</option>
                        <option>Débito</option>
                        <option>Crédito</option>
                    </select>
                </div>
                <button type="submit" className="btnSiguiente" onClick={changeEnviado}>Siguiente</button>
            </form>
        </>
    )
}