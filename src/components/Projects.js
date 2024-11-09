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
              <li onClick={() => handleProjectClick('Intelligence artificiel: Segmentation et classification')}>Intelligence artificiel: Segmentation et classification</li>
              <li onClick={() => handleProjectClick('Classification de son suivant leur genre')}>Classification de son suivant leur genre</li>
              <li onClick={() => handleProjectClick('Livre dont vous êtes le héros')}>Livre dont vous êtes le héros</li>
              
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
                      <h3>Page du jeu <a href='https://globalgamejam.org/games/2024/escape-euphoria-9'/></h3>
                      <ul>
                        <li>Environnement: Godot</li>
                        <li>Langage de programmation: GDScript</li>
                        <li>lien du git: <a href='https://github.com/fbernadet/Global-GameJam' target="_blank" rel="noopener noreferrer"/> </li>
                      </ul>
                      <p>Le thème de cette GameJam était make me laught. Nous avons alors eu l'idée de faire ce jeu où on incarne un personnage qui veut juste 
                        travailler mais chaque jour des clowns vont essayer de l'empêcher d'aller au travail et essayer de l'amener 
                        dans cette décadence de rire</p>                      
                  </div>
              )}
              {selectedProject === 'GameJam 2023' && (
                  <div className="project">
                      <h2>GameJam 2023</h2>
                      <iframe frameborder="0" src="https://itch.io/embed/2327059" width="552" height="167"><a href="https://moustakick.itch.io/chrono-criminal">Chrono Criminal by fbernadet, Moustakick, warx7,</a></iframe>
                      <ul>
                        <li>Environnement: Godot</li>
                        <li>Langage de programmation: GDScript</li>
                        <li>lien du git: <a href="https://github.com/Moustakick/GameJam-Tension" target="_blank" rel="noopener noreferrer">
                                            https://github.com/Moustakick/GameJam-Tension
                                        </a> 
                        </li>
                      </ul>
                      <img src='/Chrono_chriminal.png'></img>
                      <p>Ce projet a été réalisé lors d'une Game Jam avec 2 de mes camarades. Le thème de cette GameJam était la tension et le défi caché était l'utilisation
                        d'une seule couleur le rouge puis faire du niveau de gris. Le moteur de jeux utilisé fut Godot. Un de mes camarades avait quelques bases 
                        sur ce moteur, mais mon autre ami et moi n'avions aucune connaissance sur celui-ci. Nous avons su apprendre en 2 jours les bases du moteur.
                      </p>
                  </div>
              )}
              
              {selectedProject === 'Intelligence artificiel: Segmentation et classification' && (
                  <div className="project">
                      <h2>Intelligence artificiel: Segmentation et classification</h2>
                      <ul>
                        <li>Langage de programmation: Python</li>
                        <li>Bibliothèque: Pytorch</li>
                        <li>lien du projet: <a href="https://drive.google.com/file/d/1jNTr15KGggngPo6IFC1dlvUI2Nnu_Bmw/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                                https://drive.google.com/file/d/1jNTr15KGggngPo6IFC1dlvUI2Nnu_Bmw/view?usp=sharing
                                        </a>
                                        </li>
                      </ul>
                      <p>Lors de ce projet réalisé en groupe de 3, nous avions un dataset de mauvaise herbe et de culture et nous devions 
                        créer différents modèles de machine learning pour segmenter et classifier les mauvaises herbes en jaune (voir image) et les cultures en vert (voir image). nous avons mis en place différents modèles tels qu'un auto-encodeur, un 
                        Multi-scale connection et UNet. Nous nous sommes rendu compte de l'importance des données. En effet, dû à la ressemblance des mauvaises et des cultures, et le fait que la plupart des images
                        n'avait en partie que du background, rendez des résultats pas représentatif.
                      </p>
                      <img src='/Ia1.png'></img>
                  </div>
              )}
              {selectedProject === 'Classification de son suivant leur genre' && (
                  <div className="project">
                      <h2>Classification de son suivant leur genre</h2>
                      <ul>
                        <li>Langage de programmation: Python</li>
                        <li>Bibliothèque: Tensorflow</li>
                        <li>lien du projet: <a href=" https://colab.research.google.com/drive/1mF1Ru8p8ZA5dKdctogJ8Ssk5uDkV6NWz?usp=sharing" target="_blank" rel="noopener noreferrer">
                        https://colab.research.google.com/drive/1mF1Ru8p8ZA5dKdctogJ8Ssk5uDkV6NWz?usp=sharing </a>
                        <li><a href="https://colab.research.google.com/drive/1QnLFPEkofUIrhZJyfn7dh2deg_K-AUA_?usp=sharing" target="_blank" rel="noopener noreferrer">
                        https://colab.research.google.com/drive/1QnLFPEkofUIrhZJyfn7dh2deg_K-AUA_?usp=sharing </a></li>
                                        </li>
                      </ul>
                  </div>
              )}
              {selectedProject === 'Livre dont vous êtes le héros' && (
                  <div className="project">
                      <h2>Livre dont vous êtes le héros</h2>
                      <p>Informations sur le projet GameJam 2023.</p>
                  </div>
              )}
              
          </div>
      </div>
  );
};

export default Projects;
