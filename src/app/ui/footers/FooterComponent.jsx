import { Email, LinkedIn } from '@mui/icons-material';

const FooterContact = () => {
    return (
        <>
            <ul className='flex justify-evenly'>
                <li className='m-2'>zuletafacundoadolfo2211@gmail.com <Email color='primary' /></li>
                <li className='m-2'>linkedin.com/in/facundo-zuleta-/<LinkedIn color='primary' /></li>
            </ul>
        </>
    )
}

export default FooterContact;