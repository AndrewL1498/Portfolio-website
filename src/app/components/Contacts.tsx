import styles from "../styles/contacts.module.css";

export default function Contacts() {
  return (
    <section id="contacts" className={styles.contacts}>
      <h1>Contact Me</h1>

      <p>
        Feel free to reach out through email or LinkedIn.
      </p>

      <div className={styles.links}>
        <a
          className={styles.link}
          href="mailto:andrewlindsey498@gmail.com"
        >
          Email Me
        </a>

        <a
          className={styles.link}
          href="https://www.linkedin.com/in/andrew-lindsey-267343147/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}