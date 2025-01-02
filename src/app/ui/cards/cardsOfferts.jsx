'use client'
import { useState } from "react";
import CardOffer from "./cardOffer";
import FormCreate from "../forms/create-pasaje/FormCreate";

const CardsOfferts = ({data}) => {
    //obtener repuesta del botón comprar
    const [resp, setResp] = useState();
    const handleResponse = (response) => {
        setResp(response);
    }

    if(resp){
        return <FormCreate offerData={resp}/>
    }
    return (
        <>
            <h3>Tarjetas</h3>
            <h3>Ofertas de pasajes disponibles por tiempo limitado!</h3>
            {data.map(el => {
                return el.pasajes.map(e => {
                    return <ul key={e.id}><li><CardOffer data={e} response={handleResponse}/></li></ul> 
                })
            })
            }
        </>
    )
}

export default CardsOfferts;