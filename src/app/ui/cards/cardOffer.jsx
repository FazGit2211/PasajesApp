'use client'
import { useState } from "react";
import FormCreate from "../forms/create-pasaje/FormCreate";

const CardOffer = ({ data }) => {
    const [clickAction, setClickAction] = useState(false);

    const handleClick = () => {
        setClickAction(true);
    }

    if (clickAction) {
        return <FormCreate offerData={data} />
    }
    return (
        <>
            <div className="card-offer">
                <div>
                    <div>
                        <h5 >Empresa:</h5>
                        <ul>
                            <li>Número de Oferta :{data.number}</li>
                            <li>Forma de Pago :{data.paymentMethod}</li>
                            <li>Valor del Pasaje :{data.value}$</li>
                            <li>Fecha de Vigencia :{data.effectiveDate}</li>
                            <li>Fecha de Caducidad :{data.expirationDate}</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div><button onClick={handleClick}>Comprar</button></div>
                </div>
            </div>
        </>
    )
}
export default CardOffer;