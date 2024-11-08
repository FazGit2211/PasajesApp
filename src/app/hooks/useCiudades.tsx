import { useEffect, useState } from "react";

//tipo de dato de ciudad
interface ciudad {
    id:number,
    nombre:string,
    localidad:string
}
export const useCiudades = () => {
    const [datosCiudades, setDatos] = useState<ciudad[]>([]);
    const urlPrincipal = 'http://localhost:8080/admin/';

    useEffect(() => {
        fetch(urlPrincipal + "ciudad")
            .then(response => response.json())
            .then(data => {
                setDatos(data);
            })
            .then(error => console.log(error))
    }, []);
    return ({ datosCiudades })

}