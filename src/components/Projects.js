import React, { useState } from 'react';
import './Projects.css';


const Projects = () => {
  // État pour suivre le projet sélectionné
  const [selectedProject, setSelectedProject] = useState(null);

  // Fonction pour changer le projet sélectionné
  const handleProjectClick = (project) => {
      setSelectedProject(project);
  };

  return (
      <div>
          <h1>Projets</h1>
          {/* Liste de projets avec gestionnaires de clic */}
          <ul>
              <li onClick={() => handleProjectClick('Projets de fin d\'études')}>Projets de fin d'études</li>
              <li onClick={() => handleProjectClick('GameJam 2024')}>GameJam 2024</li>
              <li onClick={() => handleProjectClick('GameJam 2023')}>GameJam 2023</li>
          </ul>

          {/* Affichage dynamique des informations du projet sélectionné */}
          <div className="projects-list">
              {selectedProject === 'Projets de fin d\'études' && (
                  <div className="project">
                      <h2>Projets de Fin d'études</h2>
                      <ul>
                          <li>Matériel : Meta-Quest 3</li>
                          <li>Environnement : Unity XR</li>
                          <li>Langage de programmation : C#</li>
                      </ul>
                      <p>
                          Durant ce projet, nous avons réalisé deux applications. La première application est un lecteur d’obj pour meta-quest 3 et la seconde application est une application qui permet de récupérer les modèles 3D de l’application 3Dslicer et de les charger dans le meta-quest. Plus précisément, avec des dicoms il est possible de reconstruire des volumes 3D dans slicer mais le visuel 3D reste sur un écran 2D. L’objectif fut donc de visualiser l’objet dans l’environnement 3D du meta-quest.
                      </p>
                      <img src="/XR.png" alt="XR" />
                      <img src="/OpenIGTLinkUnity.png" alt="I OpenIGTLinkUnity" />
                  </div>
              )}
              {selectedProject === 'GameJam 2024' && (
                  <div className="project">
                      <h2>GameJam 2024</h2>
                      <iframe frameborder="0" src="https://itch.io/embed/2327059" width="552" height="167"><a href="https://moustakick.itch.io/chrono-criminal">Chrono Criminal by fbernadet, Moustakick, warx7,</a></iframe>
                      <ul>
                        <li>Environnement: Godot</li>
                        <li>Langage de programmation: GDScript</li>
                        <li>lien du git: https://github.com/Moustakick/GameJam-Tension</li>
                      </ul>
                      <img src='/Chrono_chriminal.png'></img>
                      <p>Informations sur le projet GameJam 2024.</p>
                  </div>
              )}
              {selectedProject === 'GameJam 2023' && (
                  <div className="project">
                      <h2>GameJam 2023</h2>
                      <p>Informations sur le projet GameJam 2023.</p>
                  </div>
              )}
          </div>
      </div>
  );
};

export default Projects;
