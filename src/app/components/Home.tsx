import styles from "../styles/home.module.css";
import Image from "next/image";

export default function Home() {
    return (
       <section id="home" className={styles.home}>
            <div className={styles.textContainer}>
                <h1>Hi, I'm Andrew</h1>
                <span>Frontend Developer & Software Engineer</span>
            </div>

            <div className={styles.imageContainer}>
            <Image
                src="/images/me.png"
                alt="Andrew Lindsey"
                width={400} //adding width and height here as opposed to in css to prevent layout shift
                height={400}
                className={styles.profileImage}
            />
            </div>
    
        </section>
    )
}