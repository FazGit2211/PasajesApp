import { useState } from "react";

const FormPersonalData = ({ formData }) => {
    const [formValues, setFormValue] = useState({
        ...formData, passenger: {
            name: "",
            surname: "",
            dni: 0
        }
    });
    //Deffined handle function
    return (
        <>
            <h4>Datos Personales:</h4>
            <form>
                <div>
                    <label>Nombre:</label>
                    <input type="text"></input>
                </div>
            </form>
        </>
    )
}
export default FormPersonalData;