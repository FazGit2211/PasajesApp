import { Email, LinkedIn } from '@mui/icons-material';
import './footerStyle.css';
const FooterContact = () => {
    return (
        <>
            <ul className="itemListFooter">
                <li className="itemsFooter"><a href="#"><Email/> zuletafacundoadolfo2211@gmail.com</a></li>
                <li className="itemsFooter"><a href="#"><LinkedIn/> linkedin.com/in/facundo-zuleta-/</a></li>
            </ul>
        </>
    )
}

export default FooterContact;