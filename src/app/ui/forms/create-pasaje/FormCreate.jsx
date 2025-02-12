'use client';
import { useState } from "react";
import FormPersonalData from "./FormPersonalData";
import Link from "next/link";
import { useData } from "@/app/contexts/DataContext";
const FormCreate = ({ciudad}) => {

    const { data, updateData } = useData();
    const [formValue, setForm] = useState({
        destiny: {
            exit: ""
        },
        dateExit: ""
    });
    const [nextForm, setNextForm] = useState(false);
    //Obtener ciudades
    console.log(ciudad);
    const [citys, setCitys] = useState([]);
    //Funciones handle input form
    const handleSubmit = (e) => {
        e.preventDefault();
        setNextForm(true);
        updateData(formValue);
    };

    const changeDestinyExit = (e) => {
        setForm({
            ...formValue, destiny: {
                ...formValue.destiny,
                exit: e.target.value
            }
        })
    };

    const changeDateExit = (e) => {
        setForm({
            ...formValue, dateExit: e.target.value
        })
    };

    if (nextForm) {
        return <FormPersonalData/>
    }

    return (
        <>
            <form method="POST" action="" onSubmit={handleSubmit}>
                <div className="container">
                    <div>
                        <label className="form-label">Ciudad Destino:</label>
                        <select onChange={changeDestinyExit} className="form-select">
                            <option defaultValue="">Seleccionar Ciudad</option>
                            {
                                ciudad.map((elem) => {
                                    return <option key={elem.nombre}>{elem.nombre + " " + elem.provincia}</option>
                                })
                            }
                        </select>
                        <label className="form-label">Fecha de Salida</label>
                        <input type="date" onChange={changeDateExit} className="form-control"></input>
                    </div>
                    <button type="submit" className="btn btn-primary m-1">Siguiente</button>
                    <button className="btn btn-secondary m-1"><Link href="/Home">Atrás</Link></button>
                </div>
            </form>
        </>
    )
}

export default FormCreate;