'use client'
import { useState } from "react";

const CardOffer = ({ data, response }) => {
    const [clickAction, setClickAction] = useState(false);
    const handleClick = () => {
        setClickAction(true);
        response(data);
    }

    return (
        <>
            <div className="card m-1">
                <div className="card-header">
                    <img src="@/next" alt="logoEmpresa" />
                </div>
                <div className="card-body">
                    <h5 >Empresa:</h5>
                    <ul className="list-group-flush">
                        <li className="list-group-item">Número de Oferta :{data.numero ? data.numero : "--"}</li>
                        <li className="list-group-item">Forma de Pago :{data.formaPago}</li>
                        <li className="list-group-item">Valor del Pasaje :{data.valor}$</li>
                        <li className="list-group-item">Fecha de Vigencia :{data.fechaVigencia}</li>
                        <li className="list-group-item">Fecha de Caducidad :{data.fechaCaducidad}</li>
                    </ul>
                    <div>
                        <button onClick={handleClick} className="btn btn-primary">Comprar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardOffer;