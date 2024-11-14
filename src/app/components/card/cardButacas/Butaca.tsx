import { useEmpresas } from "@/app/hooks/useEmpresas"

//tipo dato formulario
interface formularioPasaje {
    empresa: {
        id: number
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
export default function Butaca({empresa,destino,pasajero,fecha,cantPasajes,enviado} : formularioPasaje) {
    const { findByIdEmpresa } = useEmpresas({empresa,destino,pasajero,fecha,cantPasajes,enviado})
    return (
        <>
            <h3>Butacas</h3>
            <div>
                <div>
                    <h4>Card Header</h4>
                </div>
                <div>
                    <h4>Card Body</h4>
                    <ul>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        {findByIdEmpresa.map((elem) => (<li key={elem.empresa.id}>{elem.empresa.nombre}</li>))}
                        <li>{cantPasajes}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}