import styles from "../styles/projects.module.css";
import Image from "next/image";


export default function Projects() {

    const projects = [
        {
            title: "Project 1",
            Image: "https://i.imgur.com/mgIExN3.png",
            link: "https://example.com/project1"
        },
        {
            title: "Project 1",
            Image: "https://i.imgur.com/EgO15cM.png",
            link: "https://example.com/project1"
        },
        {
            title: "Project 1",
            Image: "https://i.imgur.com/VPT6Z0u.png",
            link: "https://example.com/project1"
        },
        {
            title: "Project 1",
            Image: "https://i.imgur.com/dcoWQMr.png",
            link: "https://example.com/project1"
        }
    ];

    return (
       <section id="projects" className={styles.projects}>
            <h1>My Projects</h1>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              >

                <Image 
                src={project.Image} 
                alt={project.title}
                width={300}
                height={200}
                className={styles.image} 
                />
              </a>
          ))}
          

        </div>

        </section>
    )
}