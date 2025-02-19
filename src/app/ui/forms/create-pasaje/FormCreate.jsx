'use client';
import { useEffect, useState } from "react";
import { useData } from "@/app/contexts/DataContext";
import { Button, ButtonGroup } from "@mui/material";
import { getAll } from "@/app/api/enterpriseRoute";
import { postPassage } from "@/app/api/passageRoute";
const FormCreate = () => {

    const { data, updateData } = useData();
    const [formValue, setForm] = useState({
        destiny: {
            exit: ""
        },
        dateExit: "",
        paymentMethod:"",
        price:"",
        passenger: {
            name: "",
            surname: "",
            dni: 0,
            email: ""
        },
        enterprise: {
            name: ""
        }
    });

    const [empre, setEmpre] = useState([]);
    useEffect(() => {
        async function fethData() {
            const enterprises = await getAll();
            setEmpre(enterprises);
        };
        fethData();
    }, []);

    //Funciones handle input form
    const handleSubmit = (e) => {
        e.preventDefault();
        updateData(formValue);
        console.log("Enviando formulario");
    };

    const changeDestinyExit = (e) => {
        setForm({
            ...formValue, destiny: {
                ...formValue.destiny,
                exit: e.target.value
            }
        });
        validInput(e);
    };

    const changeDateExit = (e) => {
        setForm({
            ...formValue, dateExit: e.target.value
        })
    };

    const handleChangeName = (e) => {
        setForm({
            ...formValue,
            passenger: {
                ...formValue.passenger,
                name: e.target.value
            }
        })
    };

    const handleChangeSurname = (e) => {
        setForm({
            ...formValue,
            passenger: {
                ...formValue.passenger,
                surname: e.target.value
            }
        })
    };

    const handleChangeDni = (e) => {
        setForm({
            ...formValue,
            passenger: {
                ...formValue.passenger,
                dni: e.target.value
            }
        })
    };

    const handleChangeEmail = (e) => {
        setForm({
            ...formValue,
            passenger: {
                ...formValue.passenger,
                email: e.target.value
            }
        })
    };

    const handleChangeEnterprise = (e) => {
        setForm({
            ...formValue,
            enterprised: {
                ...formValue.enterprised,
                name: e.target.value,
            }
        })
    }

    const handleChangePaymentMethod = (e) => {
        setForm({
            ...formValue,
            paymentMethod: e.target.value,
        })
    }

    const validInput = (e) => {
        let value = e.target.value;
        if (value.lenght == 0) {
            console.log("Error");
        }
    }
    return (
        <>
            <form method="POST" action="" onSubmit={handleSubmit}>
                <div className="container">
                    <div className="container-div">
                        <label className="form-label">Ciudad Destino:</label>
                        <select onChange={changeDestinyExit}>
                            <option defaultValue="">{data.nombre}</option>
                        </select>
                        <label className="form-label">Fecha de Salida</label>
                        <input type="date" onChange={changeDateExit} ></input>
                    </div>
                    <div>
                        <label className="form-label">Seleccionar Empresa a cargo:</label>
                        <select onChange={handleChangeEnterprise}>
                            {empre.map(elem => <option key={elem.nombre}>{elem.nombre}</option>)}
                        </select>
                        <label className="form-label">Forma de Pago:</label>
                        <select onChange={handleChangePaymentMethod}>
                            <option>Débito</option>
                            <option>Crédito</option>
                        </select>
                        <label className="form-label">Precio: {formValue.price}</label>
                    </div>
                    <div className="container-div">
                        <label className="form-label">Nombre:</label>
                        <input type="text" onChange={handleChangeName} ></input>
                        <label className="form-label">Apellido:</label>
                        <input type="text" onChange={handleChangeSurname} ></input>
                    </div>
                    <div className="container-div">
                        <label className="form-label">Nº Documento:</label>
                        <input type="number" onChange={handleChangeDni} ></input>
                        <label className="form-label">Email:</label>
                        <input type="email" onChange={handleChangeEmail}></input>
                    </div>
                    <div>
                        <ButtonGroup>
                            <Button variant="contained">Enviar</Button>
                            <Button variant="contained" color="success">Atrás</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormCreate;