import styles from './Hero.module.scss';

const Hero = () => {
    return(
        <div>

           <h1  className={styles.text}> Hello nice to meet you!</h1>
           <p className={styles.par}>Lets start our new adventure</p>

        </div>
    );
};

export default Hero;
