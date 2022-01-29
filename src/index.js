/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = 'https://platzi-avo.vercel.app';
const appNode = document.querySelector('#app');

//web API
//Conectar al server
window
    .fetch(`${baseUrl}/api/avo`)
    .then((respuesta) => respuesta.json())
    //procesar y convertir en json
    .then((responseJson) => {
        const todosLosItems = [];
        responseJson.data.forEach((item) => {

            //crear img
            const imagen = document.createElement("img");
            imagen.src = `${baseUrl}${item.image}`;

            // crear titulo
            const title = document.createElement("h2");
            title.textContent = item.name;

            // crear precio
            const price = document.createElement("div");
            price.textContent = item.price;

            const container = document.createElement("div");
            container.append(imagen, title, price);

            todosLosItems.push(container);

        });

        appNode.append(...todosLosItems);
    });