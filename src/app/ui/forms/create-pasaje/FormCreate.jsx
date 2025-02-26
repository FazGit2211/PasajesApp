'use client';
import { useEffect, useState } from "react";
import { useData } from "@/app/contexts/DataContext";
import { Box, Button, ButtonGroup, FormControl, Input, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { getAll } from "@/app/api/enterpriseRoute";
import { postPassage } from "@/app/api/passageRoute";
const FormCreate = () => {

    const { data, updateData } = useData();
    const [formValue, setForm] = useState({
        destiny: {
            exit: ""
        },
        dateExit: "",
        paymentMethod: "",
        price: "",
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
            <Box component="form" noValidate autoComplete="off" sx={{ m: 1, display: "flex", flexDirection: "column", justifyContent: "space-evenly", backgroundColor: "#ffff", width:"50%" }}>
                <TextField id="destiny" label="Destino" defaultValue={data.nombre} helperText="Destino Actual" disabled="on">
                </TextField>
                <Input type="date" onChange={changeDateExit} color="Blue"></Input>
                <TextField id="select-enterprise" select label="Empresa de Transporte" helperText="Seleccionar Empresa">
                    {empre.map((elem) => <MenuItem key={elem.nombre}>{elem.nombre}</MenuItem>)}
                </TextField>
                <TextField id="payment" select label="Tipo de Tarjeta" helperText="Seleccionar Forma de Pago" onChange={handleChangePaymentMethod}>
                    <MenuItem value="Debito">Débito</MenuItem>
                    <MenuItem value="Credito">Crédito</MenuItem>
                </TextField>
                <TextField id="press" label="Precio $$$" disabled="on"></TextField>
                <TextField required id="name" label="Required" defaultValue="Nombre" onChange={handleChangeName}></TextField>
                <TextField required id="surname" label="Required" defaultValue="Apellido" onChange={handleChangeSurname}></TextField>
                <TextField required id="dni" label="Required" defaultValue="Nº Documento" onChange={handleChangeDni}></TextField>
                <TextField required id="email" label="Required" defaultValue="Email" onChange={handleChangeEmail}></TextField>
                <div className="flex justify-evenly">
                    <Button variant="contained">Enviar</Button>
                    <Button variant="contained" color="success">Atrás</Button>
                </div>
            </Box >
        </>
    )
}

export default FormCreate;