import styles from "../styles/about.module.css";
import Image from "next/image";


export default function About() {
    return (
       <section id="about" className={styles.about}>
            <h1>About Me</h1>
                        <div className={styles.imageContainer}>
            <Image
                src="/images/me.png"
                alt="Andrew Lindsey"
                width={400} //adding width and height here as opposed to in css to prevent layout shift
                height={400}
                className={styles.profileImage}
            />
            </div>
            <p>Hardworking Junior Software Engineer based in Nashville, TN, and a recent graduate of the Springboard software engineering bootcamp. I am also an audio engineer and fitness coach, and a future full-stack developer. I’ve found my passion in web development and building efficient technical systems. I love spending time coding and encountering new challenges, such as building full-stack applications with React and Node.js. I’m highly adaptable to new challenges and projects, a trait I’ve polished through years of troubleshooting complex systems in high-pressure environments as a live sound engineer.</p>
        </section>
    )
}