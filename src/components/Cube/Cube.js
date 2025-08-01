import styles from './Cube.module.scss';

const Cube = ({title,text}) => {
    return (
        <div  >
                <div className={styles.column}>
                    <div className={styles.cube}>
                        <h6>{title}</h6>
                        <p>{text}</p>
                    </div>
                </div>
        </div>
    );
};

export default Cube;