import React from 'react';
import './PresentationPersonnel.css';

const Home = () => {
  return (
    <div className='pres'>
      {/* Section de gauche : texte de présentation */}
      <div className='pres-text'>
        <h1>Présentation</h1>
        <p>
          Depuis l’enfance, j’ai développé parallèlement un goût pour la nature et les animaux
          et une curiosité intellectuelle pour l’informatique. Pour moi, il y a une continuité
          dans l’étonnement que peuvent susciter la force de la nature et les infinies
          possibilités qu’offre l’informatique, qui donne notamment vie dans les jeux vidéo
          à des réalités virtuelles riches de sens et de possibilités. C’est donc une forme
          de curiosité intellectuelle forgée dès l’enfance par mon environnement et mon appétence
          pour les jeux vidéo qui a nourri ma passion pour l’informatique et m’a amené à poursuivre
          des études exigeantes dans ce domaine.
          <br /><br />
          Attaché à ne pas restreindre mon développement au champ de l’intellect et aimant
          partager des défis en équipe, j’ai pratiqué le basket en club dès l’âge de trois
          ans, pendant cinq années. Par la suite, j’ai intégré le club de football de ma
          commune où je suis resté pendant plus de huit ans. J’ai arrêté les sports collectifs
          en tant qu’étudiant à Bordeaux, lorsque les études ne me permettaient plus de me
          rendre disponible pour le club. Pour maintenir ma forme physique et compenser les
          heures d’étude et de travail devant l’ordinateur, je pratique la musculation en salle
          et je cours régulièrement.
          <br /><br />
          Lorsqu’il s’agit de me détendre, je me tourne vers la lecture de mangas et de
          webtoons ou j’écoute de la musique. Ainsi, ayant toujours aimé les défis sportifs
          et intellectuels, j’essaie de m’en lancer régulièrement.
        </p>
      </div>
      
      {/* Section de droite : photo, formation et stage */}
      <div className='pres-info'>
        <img src='/MyImage.JPG' alt="Me" />
        <div className="info">
          <h2>Expérience Professionnelle</h2>
          <h3>Stage en imagerie ultrasonore 3D temps réel</h3>
          <p>CEA mai 2024-septembre 2024</p>
          <h2>Formation</h2>
          <h3>Diplome de Master 2 en informatique</h3>
          <p>Université de Bordeaux 2022-2024</p>
          <h3>Diplome de Licence en informatique</h3>
          <p>Université de Bordeaux 2018-2022</p>
          <h3>Baccalauréat</h3>
          <p>Lycée Jean-Moulin Langon 2015-2018</p>
          
        </div>
      </div>
    </div>
  );
};

export default Home;