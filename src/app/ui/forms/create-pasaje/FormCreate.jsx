'use client';
import { useState } from "react";
import FormPersonalData from "./FormPersonalData";
import Link from "next/link";
import { useData } from "@/app/contexts/DataContext";
import "./formStyle.css";
const FormCreate = () => {

    const { data, updateData } = useData();
    const [formValue, setForm] = useState({
        destiny: {
            exit: ""
        },
        dateExit: ""
    });
    const [nextForm, setNextForm] = useState(false);
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
        return <FormPersonalData />
    }

    return (
        <>
            <form method="POST" action="" onSubmit={handleSubmit}>
                <div className="container">
                    <div>
                        <label className="form-label">Ciudad Destino:</label>
                        <select onChange={changeDestinyExit}>
                            <option defaultValue="">{data.nombre}</option>
                        </select>
                    </div>
                    <div>
                        <label className="form-label">Fecha de Salida</label>
                        <input type="date" onChange={changeDateExit} ></input>
                    </div>
                    <div>
                        <button type="submit">Siguiente</button>
                        <button className="btn-back"><Link href="/Home" className="btn-back-link">Atrás</Link></button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormCreate;