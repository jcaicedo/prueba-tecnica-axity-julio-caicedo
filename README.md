# PRUEBA TECNICA AXITY JULIO CAICEDO

### `Descripción de la prueba y consideraciones`

- Creación de un componente Card para la renderización de información horaria de tiendas.
- Creación de un Estado de Tienda usando Context API para manejar los estados (open, closed, close soon)
- Dado que no hay especificicaciones del manejo de estados dinámicos en la descripción de la prueba, se hace una actualización automatica cada hora.
- Como parte de las validaciones, se agrego que tanto la hora como los días coincidieran con el cálculo para determinar el estado. 
-- Como mejora, se pudiera tomar la primera vez la hora más cercana de cierre y mantener mediante useRef el calculo programado del archivo json, para la actuliación automatica de los estados. 
- En el json de data proporcionado habian elementos con acento, como recomendación se quitaron para un mejor desarrollo.
- Dado que el Context creado envuelve al index.js, en el archivo Card.test.js se ha envuelto también la rederización para su correcto funcionamiento.



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


