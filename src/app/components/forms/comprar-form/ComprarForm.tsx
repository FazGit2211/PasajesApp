'use client';
import { useCiudades } from "@/app/hooks/useCiudades";
import { useEmpresas } from "@/app/hooks/useEmpresas";
import { useState } from "react";
import "./formulaarioStyle.css";
//tipo dato formulario
interface formData {
    empresa: {
        id:number
        nombre: string
    }, destino: {
        ciudadPartida: string,
        ciudadDestino: string
    }, pasajero: {
        nombre: string,
        apellido: string,
        dni: string
    }, fecha: string, cantPasajes: string, enviado: boolean
}
interface formProps {
    response: (data: formData) => void;
}



export default function ComprarForm({ response}: formProps) {
    const [form, setform] = useState<formData>({
        empresa: {
            id:0,
            nombre: "",
        }, destino: {
            ciudadPartida: "",
            ciudadDestino: "",
        }, pasajero: {
            nombre: "",
            apellido: "",
            dni: "",
        }, fecha: "",
        cantPasajes: "", enviado:false
    });

    const { datosCiudades } = useCiudades();
    const { allEmpresas } = useEmpresas(form);
    //Funciones handle input form
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        response(form);
    }

    const changeEmpresa = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setform(
            {
                ...form,
                empresa: {
                    ...form.empresa,
                    nombre: e.target.value,
                }
            });
    }

    const changeCiudadPartida = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setform(
            {
                ...form,
                destino: {
                    ...form.destino,
                    ciudadPartida: e.target.value,
                }
            })
    }

    const changeCiudadDestino = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setform({
            ...form,
            destino: {
                ...form.destino,
                ciudadDestino: e.target.value,
            }
        })
    }

    const changeNom = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setform({
            ...form,
            pasajero: {
                ...form.pasajero,
                nombre: e.target.value,
            }
        })
    }

    const changeApe = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setform({
            ...form,
            pasajero: {
                ...form.pasajero,
                apellido: e.target.value,
            }
        })
    }

    const changeDni = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setform({
            ...form,
            pasajero: {
                ...form.pasajero,
                dni: e.target.value,
            }
        })
    }

    const changeFecha = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setform({
            ...form,
            fecha: e.target.value,
        })
    }

    const changeCantPasajes = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setform({
            ...form,
            cantPasajes: e.target.value,
        })
    }

    const changeEnviado = (e: React.FormEvent) =>{
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
                            datosCiudades.map((c) => {
                                return (<option key={c.id} value={c.nombre}>{c.nombre + ' ' + c.localidad}</option>)
                            })
                        }
                    </select>
                    <label>Ciudad de Destino:</label>
                    <select onChange={changeCiudadDestino}>
                        <option defaultValue="">Seleccionar Ciudad</option>
                        if(datosCiudades == null){
                            <option>No Hay Datos</option>
                        }else{
                            datosCiudades.map((c) => {
                                return (<option key={c.id} value={c.nombre}>{c.nombre + ' ' + c.localidad}</option>)
                            })
                        }
                    </select>
                </div>
                <div>
                    <label>Empresa de Viaje:</label>
                    <select onChange={changeEmpresa}>
                        <option defaultValue="">Seleccionar</option>
                        if(allEmpresas == null){
                            <option>No Hay Datos</option>
                        }else{allEmpresas.map((e) => {
                            return (<option key={e.empresa.id} value={e.empresa.nombre}>{e.empresa.nombre}</option>)
                        })}
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