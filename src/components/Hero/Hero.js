import styles from './Hero.module.scss';

const Hero = () => {
    return(
        <div className={styles.basic}>
           <h1 > Hello nice to meet you!</h1>
           <p className={styles.par}>Lets start our new adventure</p>
        </div>
    );
};

export default Hero;
