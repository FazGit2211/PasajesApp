
import { getAll } from "@/app/api/cityRoute";
import CardElement from "./cardElement";

const CardContainer = async () => {
    const ciudades = [{"nombre":"Tilcara","provincia":"Salta","distancia":"1526","nombreImagen":"jujuy.png"},{"nombre":"Chilecito","provincia":"La Rioja","distancia":"7251","nombreImagen":"rioja.png"},{"nombre":"Cataratas Del Iguazu","provincia":"Misiones","distancia":"5271","nombreImagen":"misiones.png"},{"nombre":"Glaciar Perito Moreno","provincia":"Santa Cruz","distancia":"1526","nombreImagen":"santa-cruz.png"},{"nombre":"Calamuchita","provincia":"Cordoba","distancia":"1268.38","nombreImagen":"cordoba.png"}];
    //const ciudades = await getAll();
    return (
        <>
            {ciudades ? ciudades.map(elem => { return <CardElement dataValues={elem} key={elem.nombre} /> }) : <div>No Hay Destinos disponibles</div>}
        </>
    )
}

export default CardContainer;