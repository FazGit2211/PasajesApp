import { useEffect, useState } from "react";
//tipo de dato 
interface empresa {
    id: number,
    nombre: string
}
export const useEmpresas = () => {
    const [allEmpresas, setDatosEmpresa] = useState<empresa[]>([]);
    const [findByIdEmpresa, setFindByIdEmpresa] = useState([]);
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
        fetch(urlPrincipal + "empresa" + "/")
            .then(response => response.json())
            .then(data => setFindByIdEmpresa(data))
            .catch(error => console.error(error))
    }, []);

    return ({ allEmpresas, findByIdEmpresa })
}