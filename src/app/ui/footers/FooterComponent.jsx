const FooterContact = () => {
    return (
        <>
            <footer>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#!">About</a></li>
                    <li className="list-inline-item">⋅</li>
                    <li className="list-inline-item"><a href="#!">Contact</a></li>
                    <li className="list-inline-item">⋅</li>
                    <li className="list-inline-item"><a href="#!">Terms of Use</a></li>
                    <li className="list-inline-item">⋅</li>
                    <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
                </ul>
                <p className="">&copy; Your Website 2023. All Rights Reserved.</p>
                <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                        <a href="#!"><i className="bi-facebook fs-3"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#!"><i className="bi-twitter fs-3"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#!"><i className="bi-instagram fs-3"></i></a>
                    </li>
                </ul>

            </footer>
        </>
    )
}

export default FooterContact;