import { useEffect, useState } from "react";

export const useCiudades = (urlBase:any, method:any) => {
    const [datosCiudades, setDatos] = useState([]);


    const methodGet = (url:any) => {
        useEffect(() => {
            console.log(url);
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setDatos(data);
                })
                .then(error => console.log(error))
        }, []);
    }

    const methodPost = (url:any) => {
        console.log("método post fetch" + url + ', ' + method);
    }



    switch (method) {
        case 'POST':
            methodPost(urlBase);
            break;
        case 'GET':
            methodGet(urlBase);
            break;
        default:
            "setError(true)";
    }

    return ({ datosCiudades })

}