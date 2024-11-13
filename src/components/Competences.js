import React from 'react';
import './Competences.css';



const Competences =()=>{
    return(
        <div>
            <h1>Compétences</h1>
            <div className='MesCompetences'>
                <h2>Traitement du son</h2>

                <p>Création d’un son avec une sinusoïde, manipulation de fichiers midi
                    ,traitement fréquentiel du son avec la transformée de Fourier
                </p>
                <h2>Traitement d’image</h2>

                <p>Morphologie mathématique (érosion, dilatation, fermeture,ouverture)
                    , filtre de Canny, filtre de Deriche, transformations géométriques et 
                    déformations d’images 2D, traitement fréquentiel(transformée de Fourier), 
                    traitement de la clarté et du constraste
                </p>
                <h2>Monde 3D</h2>

                <p>Lancer de rayon, modèle d’éclairage (brdf), opengl (rasterisation, Z-Buffer)
                    , transformation d’espace, texture, normal mapping, déformation de surface (skinning)
                    , animation (inverse kinematics), maillage en half-edge, courbes/surfaces paramétriques (Bézier)
                    , surfaces de subdivision
                </p>
                <h2>Deeplearning</h2>

                <p>Création d’IA pour débruiter une image, classification d’image,
                     deeplearning pour la segmentation d’image et la classification. Diférentes métrics pour expliquer les AI 
                     comme Gradcam, Fem, Lime etc..
                </p>
                <h2>Réaliter augmenter</h2>

                <p>Projet en ar représentant les déchets de l’espace sur Terre 
                    , étude des différentes technologies en vr et ar
                PFE en réalité mixte avec un meta-quest 3 sur unity.
                </p>
                <h2>Acquisition et Reconstruction de modèle 3D</h2>

                <p>Comprendre le fonctionnement de l’acquisitions des MRI,
                     de TEP(Tomographie par émission de positrons), de l’échographie,des radiographies. 
                     Nous avons appris également comment passer d'une représentation de nuage de point reconstruire une surface mesh, les normales, les faces etc…
                </p>            
            </div>
        </div>
    );
}

export default Competences;