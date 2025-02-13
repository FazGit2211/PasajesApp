
import { getAll } from "@/app/api/ciudadRoute";
import CardElement from "./cardElement";


const CardContainer = async () => {
    const ciudades = [{"nombre":"Tilcara","provincia":"Salta","distancia":"1526"},{"nombre":"Chilecito","provincia":"La Rioja","distancia":"7251"},{"nombre":"Cataratas Del Iguazu","provincia":"Misiones","distancia":"5271"},{"nombre":"El Shincal","provincia":"Salta","distancia":"1526"},{"nombre":"Glaciar Perito Moreno","provincia":"Salta","distancia":"1526"},{"nombre":"Calamuchita","provincia":"Salta","distancia":"1526"}];
    //const ciudades = await getAll();
    return (
        <>
            {ciudades ? ciudades.map(elem => { return <CardElement dataValues={elem} key={elem.nombre} /> }) : <div>No Hay Destinos disponibles</div>}
        </>
    )
}

export default CardContainer;