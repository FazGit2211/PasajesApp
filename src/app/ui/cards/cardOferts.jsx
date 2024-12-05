import Link from "next/link";

const CardOferts = ({data}) => {
    return (
        <>
            <div className="py-1">
                <div className="container">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            <div className="card h-100">
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Empresa:</h5>
                                        <ul>                                           
                                            <li>Número de Oferta :{data.numero}</li>
                                            <li>Forma de Pago :{data.formaPago}</li>
                                            <li>Valor del Pasaje :{data.valor}$</li>
                                            <li>Fecha de Vigencia :{data.fechaVigencia}</li>
                                            <li>Fecha de Caducidad :{data.fechaCaducidad}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><Link href={`/pages/pasaje-form?numero=${data.numero}&formaPago=${data.formaPago}&valor=${data.valor}&fechaVigencia=${data.fechaVigencia}&fechaCaducidad=${data.fechaCaducidad}`}>Comprar</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardOferts;