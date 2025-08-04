import styles from './AboutMe.module.scss';

const AboutMe = () => {
    return (
        <div className={styles.media}>
            <h2>Let's get to know each other.</h2>
            <h5>I'm Jagoda</h5>
            <div>
                <p  className={styles.content}>I am a designer with many years of experience in conceptual, functional and visual work. For me, design is a process - based on analysis, a sense of proportion, function and aesthetics. I have worked on many complex projects that required combining creativity with logical thinking, attention to detail and understanding of user needs. I am currently developing towards designing user interfaces, wanting to transfer my experience to the digital environment. I am interested in designing visual systems that are not only aesthetic, but above all legible and intuitive.</p>
                <h6>When it comes to design, I am close to the principle of less is more – I value simplicity, clarity and function supported by aesthetics.</h6>
                <h5>I believe that design is an experience, regardless of scale.</h5>
            </div>
        </div>
    );
};

export default AboutMe;