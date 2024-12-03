const CardOferts = () => {
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
                                            <li>Empresa Data</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Comprar</a></div>
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