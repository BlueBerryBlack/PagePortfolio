import styles from './Contact.module.scss';
import Button from '../Button/Button';
import Form from '../Form/Form';
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { IoLogoBehance, IoLogoLinkedin } from "react-icons/io5";
import { ImLinkedin } from "react-icons/im";


const Contact = () => {
    return(
        <div className={styles.basic}>
            <h2 >Let's stay in touch</h2>
            <div>
                <div className={styles.iconsWrapper}>
                    <a href='' target="_blank" rel="noopener noreferrer">
                        <FaGithub/>
                    </a>
                    <a href='' target="_blank" rel="noopener noreferrer">
                        <IoLogoBehance/>
                    </a>
                    <a href='' target="_blank" rel="noopener noreferrer">
                        <ImLinkedin className={styles.icon}/>
                    </a>
                </div >
                <div className={styles.padding}>
                    <p >519 528 290</p>
                    <p >hello@seendigitaldesign.com</p>
                    <p >Kraków</p>
                </div>
            </div>
            <Form></Form>
        </div>
    );
};

export default Contact;