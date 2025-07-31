import styles from './Profile.module.scss';

const Profile = () => {
    return (
        <div  >
            <h2>Profesional Profile</h2>
                <div className={styles.column}>
                    <div className={styles.cube}>
                        <h6>Many years of design experience</h6>
                        <p>Running an original studio, conceptual and implementation work on complex functional and aesthetic projects</p>
                    </div>
                </div>
        </div>
    );
};

export default Profile;