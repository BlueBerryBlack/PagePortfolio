import styles from './Contact.module.scss';
import Button from '../Button/Button';

const Contact = () => {
    return(
        <div className={styles.basic}>
            <h2>Let's stay in touch</h2>
            <Button text='send messege'>
            </Button>
            <div className={styles.content}>
                <p>519 528 290</p>
                <p>hello@seendigitaldesign.com</p>
                <p>Kraków</p>
            </div>
        </div>
    );
};

export default Contact;