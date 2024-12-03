'use client';
import { useState } from "react";
export default FormBuy = () => {

    const [form, setform] = useState({
        empresa: {
            id: 0,
            nombre: "",
        }, destino: {
            ciudadPartida: "",
            ciudadDestino: "",
        }, pasajero: {
            nombre: "",
            apellido: "",
            dni: "",
        }, fecha: "",
        cantPasajes: "", enviado: false
    });

    //Funciones handle input form
    const handleSubmit = (e) => {
        e.preventDefault();
        response(form);
    }

    const changeEmpresa = (e) => {
        setform(
            {
                ...form,
                empresa: {
                    ...form.empresa,
                    nombre: e.target.value,
                }
            });
    }

    const changeCiudadPartida = (e) => {
        setform(
            {
                ...form,
                destino: {
                    ...form.destino,
                    ciudadPartida: e.target.value,
                }
            })
    }

    const changeCiudadDestino = (e) => {
        setform({
            ...form,
            destino: {
                ...form.destino,
                ciudadDestino: e.target.value,
            }
        })
    }

    const changeNom = (e) => {
        setform({
            ...form,
            pasajero: {
                ...form.pasajero,
                nombre: e.target.value,
            }
        })
    }

    const changeApe = (e) => {
        setform({
            ...form,
            pasajero: {
                ...form.pasajero,
                apellido: e.target.value,
            }
        })
    }

    const changeDni = (e) => {
        setform({
            ...form,
            pasajero: {
                ...form.pasajero,
                dni: e.target.value,
            }
        })
    }
    const changeFecha = (e) => {
        setform({
            ...form,
            fecha: e.target.value,
        })
    }

    const changeCantPasajes = (e) => {
        setform({
            ...form,
            cantPasajes: e.target.value,
        })
    }

    const changeEnviado = (e) => {
        setform({
            ...form,
            enviado: true,
        })
    }
    return (
        <>
            <form method="POST" action="" onSubmit={handleSubmit}>
                <div>
                    <label>Ciudad de Partida:</label>
                    <select onChange={changeCiudadPartida}>
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
                    <select onChange={changeCiudadDestino}>
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
                    <label>Empresa de Viaje:</label>
                    <select onChange={changeEmpresa}>
                        <option defaultValue="">Seleccionar</option>
                        if(allEmpresas == null){
                            <option>No Hay Datos</option>
                        }else{/*
                            allEmpresas.map((e) => {
                            return (<option key={e.empresa.id} value={e.empresa.nombre}>{e.empresa.nombre}</option>)
                        })*/}
                    </select>
                    <label htmlFor="fecha">Seleccionar Fecha:</label>
                    <input type="date" name="fecha" value={form.fecha} onChange={changeFecha}></input>
                </div>
                <label>Datos Personales</label>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" name="nombre" value={form.pasajero.nombre} onChange={changeNom}></input>
                    <label htmlFor="apellido">Apellido:</label>
                    <input type="text" name="apellido" value={form.pasajero.apellido} onChange={changeApe}></input>
                    <label htmlFor="dni">Documento:</label>
                    <input type="number" name="dni" value={form.pasajero.dni} onChange={changeDni}></input>
                </div>
                <div>
                    <label>Seleccionar cantidad de Pasajes</label>
                    <select onChange={changeCantPasajes}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <button type="submit" className="btnSiguiente" onClick={changeEnviado}>Siguiente</button>
            </form>
        </>
    )
}