import { useCiudades } from "@/app/hooks/useCiudades";
import { useEmpresas } from "@/app/hooks/useEmpresas";
import { useState } from "react";


export default function ComprarForm() {
    const [form, setform] = useState({
        empresa: {
            nombre: "",
        }, destino: {
            ciudadPartida: "",
            ciudadDestino: "",
        }, pasajero: {
            nombre: "",
            apellido: "",
            dni: "",
        }, fecha: "",
        cantPasajes: ""
    });

    const urlPrincipal = 'http://localhost:8080/admin/';
    const metodo = 'GET';
    const { datosCiudades } = useCiudades(urlPrincipal + "ciudad",metodo);
    const { datosEmpresas } = useEmpresas(urlPrincipal + "empresa",metodo);
    //Funciones handle input form
    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(form);
    }

    const changeEmpresa = (e:any) => {
        setform(
            {
                ...form,
                empresa: {
                    ...form.empresa,
                    nombre: e.target.value,
                }
            });
    }

    const changeCiudadPartida = (e:any) => {
        setform(
            {
                ...form,
                destino: {
                    ...form.destino,
                    ciudadPartida: e.target.value,
                }
            })
    }

    const changeCiudadDestino = (e:any) => {
        setform({
            ...form,
            destino: {
                ...form.destino,
                ciudadDestino: e.target.value,
            }
        })
    }

    const changeNom = (e:any) => {
        setform({
            ...form,
            pasajero: {
                ...form.pasajero,
                nombre: e.target.value,
            }
        })
    }

    const changeApe = (e:any) => {
        setform({
            ...form,
            pasajero: {
                ...form.pasajero,
                apellido: e.target.value,
            }
        })
    }

    const changeDni = (e:any) => {
        setform({
            ...form,
            pasajero: {
                ...form.pasajero,
                dni: e.target.value,
            }
        })
    }

    const changeFecha = (e:any) => {
        setform({
            ...form,
            fecha: e.target.value,
        })
    }

    const changeCantPasajes = (e:any) => {
        setform({
            ...form,
            cantPasajes: e.target.value,
        })
    }

    return (
        <>
            <h3>Componente Comprar Form</h3>
            <form method="POST" action="" onSubmit={handleSubmit}>
                <label>Ciudad de Partida:</label>
                <select onChange={changeCiudadPartida}>
                    <option defaultValue="">Seleccionar Ciudad</option>
                    {datosCiudades.map((c:any) => (<option key={c.id} value={c.nombre}>{c.nombre}</option>))}
                </select>
                <br />
                <label>Ciudad de Destino:</label>
                <select onChange={changeCiudadDestino}>
                    <option defaultValue="">Seleccionar Ciudad</option>
                    {datosCiudades.map((c:any) => {
                        return (<option key={c.id} value={c.nombre}>{c.nombre + ' ' + c.localidad}</option>)
                    })}
                </select>
                <br />
                <label>Empresa de Viaje:</label>
                <select onChange={changeEmpresa}>
                    <option defaultValue="">Seleccionar</option>
                    {datosEmpresas.map((e:any) => {
                        return (<option key={e.id} value={e.nombre}>{e.nombre}</option>)
                    })}
                </select>
                <br />
                <label htmlFor="fecha">Seleccionar Fecha:</label>
                <input type="date" name="fecha" value={form.fecha} onChange={changeFecha}></input>
                <br />
                <label>Datos Personales</label>
                <br />
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" name="nombre" value={form.pasajero.nombre} onChange={changeNom}></input>
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" name="apellido" value={form.pasajero.apellido} onChange={changeApe}></input>
                <label htmlFor="dni">Documento:</label>
                <input type="number" name="dni" value={form.pasajero.dni} onChange={changeDni}></input>
                <br />
                <label>Seleccionar cantidad de Pasajes</label>
                <select onChange={changeCantPasajes}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <button type="submit">Siguente</button>
            </form>
        </>
    )
}