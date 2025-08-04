import styles from './Contact.module.scss';
import Button from '../Button/Button';

const Contact = () => {
    return(
        <div className={styles.basic}>
            <h2 >Let's stay in touch</h2>
            <Button text='send messege' className={styles.media}>
            </Button>
            <div className={styles.content}>
             
                    <p className={styles.padding}>519 528 290</p>
                    <p className={styles.padding}>hello@seendigitaldesign.com</p>
                    <p className={styles.padding}>Kraków</p>
             
            </div>
        </div>
    );
};

export default Contact;