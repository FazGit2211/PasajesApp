'use client';
import { useEffect, useState } from "react";
import { useData } from "@/app/contexts/DataContext";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { getAll } from "@/app/api/enterpriseRoute";
import { postPassage } from "@/app/api/passageRoute";
import ModalAutoBus from "../../modals/ModalAutoBus";

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
        },
    });

    const [empre, setEmpre] = useState([{ "nombre": "FlechaBus", "cuilCuit": "2-14326-00" }, { "nombre": "PlusMart", "cuilCuit": "4-751942-9" }]);
    const [modal, setModal] = useState(false);
    /*
    useEffect(() => {
        async function fethData() {
            const enterprises = await getAll();
            setEmpre(enterprises);
        };
        fethData();
    }, []);
    */

    //Funciones handle input form
    const handleSubmit = (e) => {
        e.preventDefault();
        updateData(formValue);
        console.log(formValue);
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
            enterprise: {
                ...formValue.enterprise,
                name: e.target.value,
            }
        });
        setModal(true);
    }

    const handleChangePaymentMethod = (e) => {
        setForm({
            ...formValue,
            paymentMethod: e.target.value,
        })
    }


    return (
        <>
            <Box component="form" autoComplete="off" sx={{ m: 1, display: "flex", flexDirection: "column", justifyContent: "space-evenly", backgroundColor: "#ffff", width: "50%" }}>
                <TextField label="Destino" defaultValue={data.nombre} helperText="Destino Actual" disabled="on">
                </TextField>
                <TextField type="date" value={formValue.dateExit} onChange={changeDateExit}></TextField>
                <TextField select label="Empresa de Transporte" helperText="Seleccionar Empresa" value={formValue.enterprise.name} onChange={handleChangeEnterprise}>
                    {empre.map((elem) => <MenuItem key={elem.nombre} value={elem.nombre}>{elem.nombre}</MenuItem>)}
                </TextField>
                <ModalAutoBus modalValue={modal}/>
                <TextField select label="Tipo de Tarjeta" helperText="Seleccionar Forma de Pago" value={formValue.paymentMethod} onChange={handleChangePaymentMethod}>
                    <MenuItem value="Debito">Débito</MenuItem>
                    <MenuItem value="Credito">Crédito</MenuItem>
                </TextField>
                <TextField id="press" label="Precio $$$" disabled="on"></TextField>
                <TextField type="text" required id="name" label="Required" defaultValue={formValue.passenger.name} onChange={handleChangeName} helperText="Nombre"></TextField>
                <TextField type="text" required id="surname" label="Required" defaultValue={formValue.passenger.surname} onChange={handleChangeSurname} helperText="Apellido"></TextField>
                <TextField type="number" required id="dni" label="Required" defaultValue={formValue.passenger.dni} onChange={handleChangeDni} helperText="Dni"></TextField>
                <TextField type="email" required id="email" label="Required" defaultValue={formValue.passenger.email} onChange={handleChangeEmail} helperText="Email"></TextField>
                <div className="flex justify-evenly">
                    <Button variant="contained" color="success">Enviar</Button>
                    <Button variant="contained">Atrás</Button>
                </div>
            </Box >
        </>
    )
}

export default FormCreate;