'use client'
import { useState } from "react";
import Formulario from "../../components/forms/comprar-form/ComprarForm";
import Butaca from "@/app/components/card/cardButacas/Butaca";
interface formularioPasaje {
    empresa: {
        id:number
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

export default function ({empresa,destino,pasajero,fecha,cantPasajes,enviado}:formularioPasaje) {
    const [formData, setFormData] = useState<formularioPasaje>();
    const handleResponse = (data: formularioPasaje) => {
        setFormData(data);
        console.log(data);
    }

    if (formData?.enviado) {
        return <Butaca empresa={empresa} destino={destino} pasajero={pasajero} fecha={fecha} cantPasajes={cantPasajes} enviado/>
    }
    return (
        <>
            <h3>Comprar Pasaje</h3>
            <Formulario response={handleResponse} />
        </>

    )
}