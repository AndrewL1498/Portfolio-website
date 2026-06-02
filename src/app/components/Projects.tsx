import styles from "../styles/projects.module.css";
import Image from "next/image";


export default function Projects() {

    const projects = [
        {
            title: "Personalized Nutrition App",
            Image: "https://i.imgur.com/mgIExN3.png",
            link: "https://github.com/AndrewL1498/capstone-nutrition-app"
        },
        {
            title: "Dog Adoption Platform",
            Image: "https://i.imgur.com/EgO15cM.png",
            link: "https://github.com/AndrewL1498/19.10-Dog-Adoption-Platform-Project"
        },
        {
            title: "Star Destroyer Game",
            Image: "https://i.imgur.com/VPT6Z0u.png",
            link: "https://github.com/AndrewL1498/15.7-Star-Destroyer-Project"
        },
        {
            title: "Space Travel App",
            Image: "https://i.imgur.com/dcoWQMr.png",
            link: "https://github.com/AndrewL1498/15.12-Space-Travel-Project"
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
              className={styles.card}
              >

                <Image 
                src={project.Image} 
                alt={project.title}
                width={300}
                height={200}
                className={styles.image} 
                />
                <h2>{project.title}</h2>

              </a>
          ))}
          

        </div>

        </section>
    )
}