import { useState } from "react";
import { useData } from "@/app/contexts/DataContext";
const FormPersonalData = () => {

    const { data, updateData } = useData();

    const [formValues, setFormValue] = useState({
        ...data, passenger: {
            name: "",
            surname: "",
            dni: 0,
            email: ""
        }
    });
    //Deffined handle function
    const handleSubmit = (e) => {
        e.preventDefault();
        updateData(formValues);
        console.log(formValues);
    }
    const handleChangeName = (e) => {
        setFormValue({
            ...formValues,
            passenger: {
                ...formValues.passenger,
                name: e.target.value
            }
        })
    };

    const handleChangeSurname = (e) => {
        setFormValue({
            ...formValues,
            passenger: {
                ...formValues.passenger,
                surname: e.target.value
            }
        })
    };

    const handleChangeDni = (e) => {
        setFormValue({
            ...formValues,
            passenger: {
                ...formValues.passenger,
                dni: e.target.value
            }
        })
    };

    const handleChangeEmail = (e) => {
        setFormValue({
            ...formValues,
            passenger:{
                ...formValues.passenger,
                email: e.target.value
            }
        })
    };
    return (
        <>
            <h4>Datos Personales:</h4>
            <form method="POST" action="" onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">Nombre:</label>
                    <input type="text" onChange={handleChangeName} className="form-control"></input>
                </div>
                <div>
                    <label className="form-label">Apellido:</label>
                    <input type="text" onChange={handleChangeSurname} className="form-control"></input>
                </div>
                <div>
                    <label className="form-label">Número de Documento:</label>
                    <input type="number" onChange={handleChangeDni} className="form-control"></input>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" onChange={handleChangeEmail}></input>
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary m-1">Siguiente</button>
            </form>
        </>
    )
}
export default FormPersonalData;