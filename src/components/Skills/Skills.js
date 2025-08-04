import styles from './Skills.module.scss';
import Cube from '../Cube/Cube';

const Skills = () => {
    return(
        <div>
            <h4>Skills</h4>
            <Cube className={styles.basic} text='SASS and LESS, FRONT-END, DESIGN THINKING, ATOMIC SYSTEM, UI DESIGN, GIT HUB, RWD '
            >
            </Cube>
            <h4>Technologies</h4>
            <Cube className={styles.basic} text='REDUX, HTML, CSS 3, SCSS, GIT, REACT ROUTER, JS ES6, AJAX '
            >
            </Cube>
            <h4>Tools</h4>
            <Cube className={styles.basic} text='FIGMA, ADOBE  AE, ADOBE ID, ADOBE PS, ADOBE PS, COREL-DRAW, SKETCH-UP, V-RAY'
            >
            </Cube>
        </div>
    );
};

export default Skills;