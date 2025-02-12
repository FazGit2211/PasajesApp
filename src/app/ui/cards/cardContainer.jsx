
import { getAll } from "@/app/api/ciudadRoute";
import CardElement from "./cardElement";


const CardContainer = async () => {
    const ciudades = [{"nombre":"Tilcara","provincia":"Salta","distancia":"1526"},{"nombre":"Chilecito","provincia":"La Rioja","distancia":"7251"},{"nombre":"Cataratas Del Iguazu","provincia":"Misiones","distancia":"5271"},{"nombre":"Tilcar","provincia":"Salta","distancia":"1526"},{"nombre":"Tilca","provincia":"Salta","distancia":"1526"},{"nombre":"Til","provincia":"Salta","distancia":"1526"}];
    return (
        <>
            {ciudades ? ciudades.map(elem => { return <CardElement dataValues={elem} key={elem.nombre} /> }) : <div>No Hay Destinos disponibles</div>}
        </>
    )
}

export default CardContainer;