import styles from './Cube.module.scss';

const Cube = ({ title, text, className }) => {
    return (
        <div className={`${styles.column} ${className || ""}`}>
            <div className={`${styles.cube} ${className || ""}`}>
                <h6>{title}</h6>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Cube;