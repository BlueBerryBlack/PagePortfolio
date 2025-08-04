import Cube from '../Cube/Cube';
import styles from './Profile.module.scss';

const Profile = () => {
    return(
        <div>
            <h2>Profesional Profile</h2>
                <div className={styles.columns}>
                    <Cube 
                        title="Many years of design experience"
                        text="Running an original studio, conceptual and implementation work on complex functional and aesthetic projects"
                    />

                    <Cube 
                        title="The ability to create thoughtful solutions"
                        text="Ability to analyze user needs, plan features, create concepts, and manage projects from brief to implementation"
                    />

                    <Cube 
                        title="Experience in combining aesthetics with function"
                        text="Creating intuitive, functional spatial layouts, which translates into the design of clear and useful interfaces."
                    />
                </div>
                <div className={styles.columns}>
                    <Cube 
                        title="Many years of design experience"
                        text="Running an original studio, conceptual and implementation work on complex functional and aesthetic projects"
                    />

                    <Cube 
                        title="The ability to create thoughtful solutions"
                        text="Ability to analyze user needs, plan features, create concepts, and manage projects from brief to implementation"
                    />

                    <Cube 
                        title="Experience in combining aesthetics with function"
                        text="Creating intuitive, functional spatial layouts, which translates into the design of clear and useful interfaces."
                    />
                </div>

        </div>
    );
};

export default Profile;