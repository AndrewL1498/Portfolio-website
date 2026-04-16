import styles from "../styles/skills.module.css";


export default function Skills() {
    return (
       <section id="skills" className={styles.skills}>
            <h1>Skills</h1>

        <ul className={styles.skillsGrid}>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>NODE.JS</li>
            <li>POSTGRESQL</li>
            <li>TYPESCRIPT</li>
            <li>NEXT.JS</li>
        </ul>
        </section>
    )
}