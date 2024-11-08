'use client'
import { useState } from "react";
import Formulario from "../../components/forms/comprar-form/ComprarForm";
import Butaca from "@/app/components/card/cardButacas/Butaca";
interface formularioPasaje {
    empresa: {
        nombre: string
    }, destino: {
        ciudadPartida: string,
        ciudadDestino: string
    }, pasajero: {
        nombre: string,
        apellido: string,
        dni: string
    }, fecha: string, cantPasajes: string, enviado: boolean
}

export default function () {
    const [formData, setFormData] = useState<formularioPasaje>();
    const handleResponse = (data: formularioPasaje) => {
        setFormData(data);
        console.log(data);
    }

    if (formData?.enviado) {
        return <Butaca empresa={formData.empresa} cantPasajes={formData.cantPasajes}/>
    }
    return (
        <>
            <h3>Comprar Pasaje</h3>
            <Formulario response={handleResponse} />
        </>

    )
}