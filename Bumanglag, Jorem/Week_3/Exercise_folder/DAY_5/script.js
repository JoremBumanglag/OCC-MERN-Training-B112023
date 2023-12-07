const displayProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    try
    {
        if(!response.ok){
            throw new Error ("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data);

        let html="";


        data.forEach((user) => {
            html += `<div class="col">
            <div class="card">
                <div class="card-body">
                    <img src="${user.image}" class="card-img-top">
                    <h5 class="card-title">${user.title}</h5>
                    <h6 class="card-subtitle text-muted">${user.price}</h6>
                    <p class="card-text">${user.description}</p>
                    </div>
                </div>
            </div>
                `
        });

        const productContainer = document.getElementById("productContainer");
        productContainer.innerHTML = html;
    }
    catch(Error){
        console.log(Error);
    }
}

displayProducts();