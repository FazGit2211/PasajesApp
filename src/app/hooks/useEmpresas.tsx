import { useEffect, useState } from "react";

export const useEmpresas = (urlBase:any, method:any) => {

    const [datosEmpresas, setDatosEmpresa] = useState([]);

    const methodGet = (url:any) => {

        useEffect(() => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setDatosEmpresa(data);
                })
                .then(error => console.log(error))
        }, []);
    }

    const methodPost = (url:any) => {
        console.log("Método Post");
    }

    const methodGetByIdMicroEmpresa = (url:any) => {
        useEffect(() => {
            fetch(url)
                .then(response => response.json())
                .then(data => setDatosEmpresa(data))
                .catch(error => console.error(error))
        }, []);
    }



    switch (method) {
        case 'GET':
            methodGet(urlBase);
            break;
        case 'POST':
            methodPost(urlBase);
            break;
        case 'GetByIdMicroEmpresa':
            methodGetByIdMicroEmpresa(urlBase);
            break;
        default:
            "setError(true)";
    }
    return ({ datosEmpresas })
}