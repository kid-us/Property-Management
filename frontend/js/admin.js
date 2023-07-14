const sidebarBtn = document.getElementById("sm-menu-bar");
const xsSidebarBtn = document.getElementById("sm-menu-bar-sm");
const sidebarPage = document.getElementById("small-sidebar");
const sidebarClose = document.getElementById("sidebar-close");
const sidebarOverlay = document.getElementById("sidebar-overlay");

sidebarBtn.addEventListener("click", () => {
    if (sidebarPage.classList.contains("hidden")) {
        sidebarPage.classList.remove("hidden");
        sidebarOverlay.classList.remove("hidden");
    }
})
sidebarClose.addEventListener("click", () => {
    sidebarPage.classList.add("hidden");
    sidebarOverlay.classList.add("hidden");
})

sidebarOverlay.addEventListener("click", function () {
    sidebarPage.classList.add("hidden");
    sidebarOverlay.classList.add("hidden");
})

// Notification
const notificationLink = document.getElementById("notification-link");
if (notificationLink) {
    const notificationContainer = document.getElementById("notification-container");
    if (notificationLink) {
        notificationLink.addEventListener("click", () => {
            if (notificationContainer.classList.contains("hidden")) {
                notificationContainer.classList.remove("hidden");
            } else {
                notificationContainer.classList.add("hidden");
            }
        })
    }
}

const locationInput = document.getElementById("location");
const priceInput = document.getElementById("price");
const typeInput = document.getElementById("type");

const priceParagraph = document.getElementById("price-p");
const locationParagraph = document.getElementById("location-p");
const typeParagraph = document.getElementById("type-p");

if (locationInput) {
    locationInput.addEventListener("keyup", () => {
        locationParagraph.textContent = locationInput.value;
    });
}

if (priceInput) {
    priceInput.addEventListener("keyup", () => {
        priceParagraph.textContent = priceInput.value + " ETB";
    });
}

if (typeInput) {
    typeInput.addEventListener("change", () => {
        typeParagraph.textContent = typeInput.value;
    });
}

const image = document.getElementById("web-img");
const input = document.getElementById("file");

if (image) {
    input.addEventListener("change", () => {
        image.src = URL.createObjectURL(input.files[0])
    });
}

let editBtn = document.querySelectorAll(".edit-btn");
if (editBtn) {
    editBtn.forEach(function (edit) {
        edit.addEventListener("click", function () {
            let num = edit.getAttribute("data-num");
            let fieldset = document.querySelectorAll(".fieldset" + num);
            edit.classList.add("hidden");
            fieldset.forEach(function (f) {
                f.removeAttribute("disabled");
            });

            let cancel = document.querySelectorAll(".discard-btn" + num);
            let submit = document.querySelectorAll(".update-btn" + num);

            cancel.forEach(function (d) {
                d.classList.remove("hidden");
            });
            submit.forEach(function (s) {
                s.classList.remove("hidden");
            });
        });
    });
}

let cancelBtn = document.querySelectorAll(".discard");
if (cancelBtn) {
    cancelBtn.forEach(function (close) {
        close.addEventListener("click", function () {
            close.classList.add('hidden');
            let num = close.getAttribute("data-num");
            let fieldset = document.querySelectorAll(".fieldset" + num);
            fieldset.forEach(function (f) {
                f.setAttribute("disabled", true);
            });

            let del = document.querySelectorAll(".delete-btn" + num);
            let update = document.querySelectorAll(".update-btn" + num);
            del.forEach(function (d) {
                d.classList.remove("hidden");
            });

            update.forEach(function (s) {
                s.classList.add("hidden");
            });

            let edit = document.querySelectorAll(".edit-btn");
            edit.forEach(function (e) {
                e.classList.remove("hidden");
            });
        });
    });
}

let deleteBtn = document.querySelectorAll(".delete-property");
if (deleteBtn) {
    deleteBtn.forEach(function (del) {
        del.addEventListener("click", function () {
            let num = del.getAttribute("data-num");
            let fieldset = document.querySelectorAll(".fieldset" + num);
            fieldset.forEach(function (f) {
                f.removeAttribute("disabled");
            });
        });
    });
}

