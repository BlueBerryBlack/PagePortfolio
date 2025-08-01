import styles from './Skills.module.scss';
import Cube from '../Cube/Cube';

const Skills = () => {
    return(
        <div>
            <h4>Skills</h4>
            <Cube className={styles.basic} text='SASS and LESS FRONT-END '
            >
            </Cube>
            <h4>Technologies</h4>
            <Cube className={styles.basic} text='SASS and LESS FRONT-END '
            >
            </Cube>
            <h4>Tools</h4>
            <Cube className={styles.basic} text='SASS and LESS FRONT-END '
            >
            </Cube>
        </div>
    );
};

export default Skills;