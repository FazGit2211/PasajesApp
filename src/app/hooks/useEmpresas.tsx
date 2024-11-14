import { useEffect, useState } from "react";
//tipo de dato 
interface formularioPasaje {
    empresa: {
        id:number
        nombre: string
    }, destino: {
        ciudadPartida: string,
        ciudadDestino: string
    }, pasajero: {
        nombre: string,
        apellido: string,
        dni: string
    }, fecha: string, cantPasajes: string, enviado: boolean
}

export const useEmpresas = ({empresa,destino,pasajero,fecha,cantPasajes,enviado}: formularioPasaje) => {
    const [allEmpresas, setDatosEmpresa] = useState<formularioPasaje[]>([]);
    const [findByIdEmpresa, setFindByIdEmpresa] = useState<formularioPasaje[]>([]);
    const urlPrincipal = 'http://localhost:8080/admin/';


    useEffect(() => {
        fetch(urlPrincipal + "empresa")
            .then(response => response.json())
            .then(data => {
                setDatosEmpresa(data);
            })
            .then(error => console.log(error))
    }, []);


    useEffect(() => {
        fetch(urlPrincipal + "empresa" + "/" + empresa.nombre)
            .then(response => response.json())
            .then(data => setFindByIdEmpresa(data))
            .catch(error => console.error(error))
    }, []);

    return ({ allEmpresas, findByIdEmpresa })
}