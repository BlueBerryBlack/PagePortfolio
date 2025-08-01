import styles from './Button.module.scss'

const Button =({text})=> {
    return(
        <div>
            <button className={styles.basic}><p>{text}</p></button>
        </div>
    );
};

export default Button;