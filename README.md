# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

****************************************************************************************************
****************************************************************************************************

# Mise à jour et Build du projet Vue.js

Ce document explique comment mettre à jour le package `path-to-regexp`, reconstruire le projet et vérifier que tout fonctionne correctement.

## 1. Prérequis

- Avoir `Node.js` et `npm` installés
- Un projet Vue.js configuré avec un `package.json`

## 2. Mettre à jour `path-to-regexp`

### Vérifier la version actuelle
Ouvrir un terminal dans le projet et exécuter :
```sh
npm list path-to-regexp
```

### Installer la dernière version
```sh
npm install path-to-regexp@latest
```
Ou une version spécifique (par ex. `0.1.12`) :
```sh
npm install path-to-regexp@0.1.12
```
Si le package est en `devDependencies` :
```sh
npm install path-to-regexp@0.1.12 --save-dev
```

### Mettre à jour `package-lock.json`
Pour garantir la mise à jour correcte, supprimez `node_modules` et `package-lock.json`, puis réinstallez les dépendances :
```sh
rm -rf node_modules package-lock.json
npm install
```

### Vérifier la mise à jour
```sh
npm list path-to-regexp
```
Cela doit afficher `path-to-regexp@0.1.12` ou une version plus récente.

## 3. Build du projet

Une fois la mise à jour faite, vous pouvez reconstruire le projet :
```sh
npm run build
```

Si vous souhaitez lancer le projet en mode développement :
```sh
npm run dev
```
Ou si votre projet utilise Vue CLI :
```sh
npm run serve
```

## 4. Tester le projet

Après la mise à jour et le build, assurez-vous que le projet fonctionne correctement :
- Naviguez sur l'application et testez les routes.
- Vérifiez la console du navigateur pour d'éventuelles erreurs.
- Si besoin, exécutez les tests unitaires avec :
  ```sh
  npm test
  ```

## 5. Déploiement

Si votre projet est déployé sur un serveur ou une plateforme comme Vercel, Netlify ou Firebase, exécutez :
```sh
npm run deploy
```
(Selon votre configuration, la commande peut varier.)

---
Votre projet est maintenant à jour et prêt à être utilisé ! 🎉


