console.log("Fetch");

// Fetch con .then()
// Fetch con async/await
// Axios async/await
// Promise

const URL_USERS = "https://jsonplaceholder.typicode.com/users";
fetch(URL_USERS) // Infiere en que el pedido es un GET
    .then((response) => response.json())
    .then((data) => showData(data)); //Nested Promises

function showData(data) {
    console.log("Data", data);
    let body = ``;
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i]);
        body += `
            <h2>${data[i].name}</h2>
        `;
    }
    document.getElementById("fetch-petition").innerHTML = body;
}
