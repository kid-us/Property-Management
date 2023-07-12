const modalContainer = document.getElementById('property-modal');
const overlay = document.getElementById("overlay");

let propertyDetail = document.querySelectorAll(".property-detail");
propertyDetail.forEach(function (add) {
    add.addEventListener("click", function () {
        const propertyType = this.children[0].getAttribute("data-property");
        const propertyImage = this.children[0].getAttribute("data-img");
        const propertyPrice = this.children[0].getAttribute("data-price");
        const propertyDescription = this.children[0].getAttribute("data-description");
        const propertyLocation = this.children[0].getAttribute("data-location");

        const property = jar.get("property");

        if (!property) {
            const data = {
                [propertyType]: {
                    name: propertyType,
                    price: propertyPrice,
                    image: propertyImage,
                    description: propertyDescription,
                    location: propertyLocation
                },
            };
            jar.set("property", JSON.stringify(data));
        }
        else {
            const data = {
                [propertyType]: {
                    name: propertyType,
                    price: propertyPrice,
                    image: propertyImage,
                    description: propertyDescription,
                    location: propertyLocation
                },
            };
            jar.set("property", JSON.stringify(data));
        }

        // Display overlay and Tournament Modal
        overlay.classList.remove("hidden");
        modalContainer.classList.remove("hidden");
        const propertyData = JSON.parse(jar.get("property"));

        const parent = document.createElement("div");
        parent.className = "row justify-content-center";

        Object.keys(propertyData).forEach((data) => {
            // cookie data variables
            const propertyPrice = propertyData[data].price;
            const propertyType = propertyData[data].name;
            const propertyImage = propertyData[data].image;
            const propertyDescription = propertyData[data].description;
            const propertyLocation = propertyData[data].location;

            // Modals
            const div1 = document.createElement("div")
            div1.className = "col-lg-6 col-md-6 col-12 my-3";
            const img = document.createElement("img");

            img.setAttribute("src", propertyImage);
            img.className = "w-100 rounded";


            const div2 = document.createElement("div");
            div2.className = "col-lg-6 col-6 col-12 fw-semibold my-3";

            const name = document.createElement("p");
            name.className = "fs-4 fw-semibold";
            name.innerText = "Property: " + propertyType;

            const location = document.createElement("p");
            const locationIcon = document.createElement("span");
            locationIcon.className = "bi bi-geo-alt-fill text-danger";
            location.innerText = propertyLocation + " ";

            const price = document.createElement("p");
            price.innerText = "Rent Price Per Month : " + propertyPrice;

            const description = document.createElement("p");
            description.innerText = "Description";

            const descriptionNote = document.createElement("p");
            descriptionNote.innerText = propertyDescription;
            div1.appendChild(img);

            location.appendChild(locationIcon);

            div2.appendChild(name);
            div2.appendChild(location);
            div2.appendChild(price);
            div2.appendChild(description);
            div2.appendChild(descriptionNote);

            parent.appendChild(div1);
            parent.appendChild(div2);

            document.getElementById("property-modal").appendChild(parent);
        });

    });

});

overlay.addEventListener("click", () => {
    jar.remove("property");
    modalContainer.classList.add("hidden");
    overlay.classList.add("hidden");
    window.location.reload();
});


const closeModalBtn = document.getElementById("close-modal");
if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
        jar.remove("property");
        modalContainer.classList.add("hidden");
        overlay.classList.add("hidden");
        window.location.reload();
    });
}