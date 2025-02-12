'use client'
import { useData } from "@/app/contexts/DataContext";
import { useRouter } from "next/navigation";
import "./cardStyle.css";
const CardElement = ({ dataValues }) => {
    const { updateData } = useData();
    const router = useRouter();
    const handleClick = () => {
        updateData(dataValues);
        router.push("/pages/pasaje-compra");
    }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 >DESTINO:</h5>
                    <ul className="list-group">
                        <li className="list-group-item">Ciudad :{dataValues.nombre}</li>
                        <li className="list-group-item">Provincia :{dataValues.provincia}</li>
                        <li className="list-group-item">Distancia :{dataValues.distancia}</li>
                    </ul>
                    <button onClick={handleClick} className="btn">VIAJAR</button>
                </div>
            </div>
        </>
    )
}
export default CardElement;