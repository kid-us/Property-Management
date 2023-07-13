const categoryLink = document.getElementById("category-link");
const categoryContainer = document.getElementById("category-container");
const caret = document.getElementById("caret");
if (categoryLink) {
    categoryLink.addEventListener("click", () => {
        if (categoryContainer.classList.contains("hidden")) {
            categoryContainer.classList.remove("hidden");
            caret.classList.add("bi-caret-up-fill");
        } else {
            categoryContainer.classList.add("hidden");
            caret.classList.remove("bi-caret-up-fill");
        }
    });
}

const menuBtn = document.getElementById("sm-menu-btn");
if (menuBtn) {
    const menuPage = document.getElementById("menu-page");
    const closeMenuBtn = document.getElementById("close-menu");

    menuBtn.addEventListener("click", () => {
        if (menuPage.classList.contains("hidden")) {
            menuPage.classList.remove("hidden");
        } else {
            menuPage.classList.add("hidden");
        }
    });

    closeMenuBtn.addEventListener("click", () => {
        menuPage.classList.add("hidden");
    });

}

// small device navbar
const smCategoryLink = document.getElementById("sm-category-link");
const smCategoryContainer = document.getElementById("menus-dropdown");
const smCaret = document.getElementById("sm-caret");
if (smCategoryLink) {
    smCategoryLink.addEventListener("click", () => {
        if (smCategoryContainer.classList.contains("hidden")) {
            smCategoryContainer.classList.remove("hidden");
            smCaret.classList.add("bi-caret-up-fill");
        } else {
            smCategoryContainer.classList.add("hidden");
            smCaret.classList.remove("bi-caret-up-fill");
        }
    });
}

// dashboard maintenance link
const maintenanceLink = document.querySelectorAll(".maintenance-link");
maintenanceLink.forEach(function (maintenance) {
    maintenance.addEventListener("click", () => {
        let num = maintenance.getAttribute("data-num");
        if (document.getElementById("maintenance-container" + num).classList.contains("hidden")) {
            document.getElementById("maintenance-container" + num).classList.remove("hidden");
        } else {
            document.getElementById("maintenance-container" + num).classList.add("hidden");
        }
    });
});
