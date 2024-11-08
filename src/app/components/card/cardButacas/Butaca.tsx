interface formularioPasaje {
    empresa: {
        nombre: string
    },cantPasajes:string
}
export default function Butaca({ empresa, cantPasajes }: formularioPasaje) {
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
                        <li>{empresa.nombre}</li>
                        <li>{cantPasajes}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}