/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = 'https://platzi-avo.vercel.app';
const url = "https://platzi-avo.vercel.app/api/avo";
const appNode = document.querySelector('#app');
const formatPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat("en-ES", {
        style: "currency",
        currency: "MXN",
    }).format(price)
    return newPrice;
}

//web API
//Conectar al server
window
    .fetch(`${baseUrl}/api/avo`)
    .then((respuesta) => respuesta.json())
    //procesar y convertir en json
    .then((responseJson) => {
        const todosLosItems = []
        responseJson.data.forEach((item) => {

            //crear img
            const imagen = document.createElement("img");
            imagen.className = "style-image";
            imagen.src = `${baseUrl}${item.image}`;


            // crear titulo
            const title = document.createElement("h2");
            title.textContent = item.name;
            title.className = "style-text";

            // crear precio
            const price = document.createElement("div");
            price.textContent = item.price;
            price.className = "style-price";
            price.textContent = formatPrice(item.price);

            const container = document.createElement("div");
            container.className = "bg-gradient-to-r from-blue-400 to-gray-200" //degradación
            container.append(imagen, title, price);

            todosLosItems.push(container);

        });

        appNode.append(...todosLosItems);
    });