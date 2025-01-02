'use client';
import { useEffect, useState } from "react";
import FormPersonalData from "./FormPersonalData";
import Link from "next/link";
const FormCreate = ({ offerData }) => {

    const [formValue, setForm] = useState({
        number: offerData.numero,
        paymentMethod: offerData.formaPago,
        value: offerData.valor,
        destiny: {
            exit: "",
            arrival: "",
        },
        dateExit: ""
    });
    const [nextForm, setNextForm] = useState(false);
    //Obtener empresas
    const [citys, setCitys] = useState([]);
    const urlPrincipal = 'http://localhost:8080/admin/';
    useEffect(() => {
        fetch(urlPrincipal + "city").then(response => response.json()).then(data => setCitys(data)).then(error => console.log(error))
    }, []);

    //Funciones handle input form
    const handleSubmit = (e) => {
        e.preventDefault();
        setNextForm(true);
    };

    const changeDestinyExit = (e) => {
        setForm({
            ...formValue, destiny: {
                ...formValue.destiny,
                exit: e.target.value
            }
        })
    };
    const changeDestinyArrival = (e) => {
        setForm({
            ...formValue, destiny: {
                ...formValue.destiny,
                arrival: e.target.value
            }
        })
    };

    const changeDateExit = (e) => {
        setForm({
            ...formValue, dateExit: e.target.value
        })
    };

    if(nextForm){
        return <FormPersonalData formData={formValue} />
    }

    return (
        <>
            <form method="POST" action="" onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row">
                        <label className="form-label">Número de Oferta:{formValue.number}</label>
                        <label className="form-label">Forma de Pago:{formValue.paymentMethod}</label>
                        <label className="form-label">Valor del Pasaje:{formValue.value}</label>
                    </div>
                    <div>
                        <label className="form-label">Ciudad de Partida:</label>
                        <select onChange={changeDestinyExit} className="form-select">
                            <option defaultValue="">Seleccionar Ciudad</option>
                            {
                                citys.map((elem) => {
                                    return <option key={elem.id}>{elem.nombre + " " + elem.provincia}</option>
                                })
                            }
                        </select>
                        <label className="form-label">Fecha de Salida</label>
                        <input type="date" onChange={changeDateExit} className="form-control"></input>
                    </div>
                    <label className="form-label">Ciudad de Destino:</label>
                    <select onChange={changeDestinyArrival} className="form-select">
                        <option defaultValue="">Seleccionar Ciudad</option>
                        {
                            citys.map((elem) => {
                                return <option key={elem.id}>{elem.nombre + " " + elem.provincia}</option>
                            })
                        }
                    </select>
                    <button type="submit" className="btn btn-primary m-1">Siguiente</button>
                    <button className="btn btn-secondary m-1"><Link href="/Home">Atrás</Link></button>
                </div>
            </form>
        </>
    )
}

export default FormCreate;