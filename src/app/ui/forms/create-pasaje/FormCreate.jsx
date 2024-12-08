'use client';
import { useEffect, useState } from "react";
import FormPersonalData from "./FormPersonalData";
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
        response(formValue);
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

    const handleClickNext = () => {
        setNextForm(true);
    };

    if (nextForm) {
        return <FormPersonalData formData={formValue}/>
    }

    return (
        <>
            <form method="POST" action="" onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label>Número de Oferta:{formValue.number}</label>
                        <label>Forma de Pago:{formValue.paymentMethod}</label>
                        <label>Valor del Pasaje:{formValue.value}</label>
                    </div>
                    <div>
                        <label>Ciudad de Partida:</label>
                        <select onChange={changeDestinyExit}>
                            <option defaultValue="">Seleccionar Ciudad</option>
                            {
                                citys.map((elem) => {
                                    return <option key={elem.id}>{elem.nombre + " " + elem.provincia}</option>
                                })
                            }
                        </select>
                        <label>Fecha de Salida</label>
                        <input type="date" onChange={changeDateExit}></input>
                    </div>
                    <label>Ciudad de Destino:</label>
                    <select onChange={changeDestinyArrival}>
                        <option defaultValue="">Seleccionar Ciudad</option>
                        {
                            citys.map((elem) => {
                                return <option key={elem.id}>{elem.nombre + " " + elem.provincia}</option>
                            })
                        }
                    </select>
                </div>
                <button type="submit" onClick={handleClickNext}>Siguiente</button>
            </form>
        </>
    )
}

export default FormCreate;