import styles from './AboutMe.module.scss';

const AboutMe = () => {
    return (
        <div className={styles.media}>
            <h2>Let's get to know each other.</h2>
            <h5>I'm Jagoda</h5>
            <div>
                <p  className={styles.content}>I am a designer with many years of experience in conceptual, functional, and visual work. I view design as a process based on analysis, logic, proportion, and aesthetics. I have worked on many complex projects that required a combination of creativity with systems thinking, attention to detail, and an understanding of real user needs.

I am currently developing my skills in interface design and front-end technologies to combine design expertise with the ability to implement and have a real impact on the final digital product. I am interested in creating coherent, clear, and intuitive visual systems and translating them into working solutions.</p>
                <h6>When working with technology, I particularly value tools and processes that allow me to transform good design into scalable, maintainable, and high-quality code.
                </h6>
                <p>I follow the principle of "less is more" - I focus on simplicity, clarity and functionality supported by aesthetics and conscious design decisions.
                </p>
                <h5>Design and technology co-create the experience, regardless of its scale.</h5>

            </div>
        </div>
    );
};

export default AboutMe;