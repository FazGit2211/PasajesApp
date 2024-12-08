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
                            <li>Número de Oferta :{data.numero}</li>
                            <li>Forma de Pago :{data.formaPago}</li>
                            <li>Valor del Pasaje :{data.valor}$</li>
                            <li>Fecha de Vigencia :{data.fechaVigencia}</li>
                            <li>Fecha de Caducidad :{data.fechaCaducidad}</li>
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