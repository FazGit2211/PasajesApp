'use client'
import { useData } from "@/app/contexts/DataContext";
import { useRouter } from "next/navigation";

const CardOffer = ({ dataValues }) => {
    const { updateData } = useData();
    const router = useRouter();
    const handleClick = () => {
        updateData(dataValues);
        router.push("/pages/pasaje-compra");
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
                        <li className="list-group-item">Número de Oferta :{dataValues.numero}</li>
                        <li className="list-group-item">Forma de Pago :{dataValues.formaPago}</li>
                        <li className="list-group-item">Valor del Pasaje :{dataValues.valor}$</li>
                        <li className="list-group-item">Fecha de Vigencia :{dataValues.fechaVigencia}</li>
                        <li className="list-group-item">Fecha de Caducidad :{dataValues.fechaCaducidad}</li>
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