document.addEventListener("DOMContentLoaded", function () {
    // Todo o código JavaScript aqui
    const continueShoppingButton = document.getElementById("continue-shopping");
    const daltonismoButton = document.getElementById("daltonismo-btn");
    const searchButton = document.getElementById("searchButton");

    // Certifique-se de que IDs e elementos existam antes de manipulá-los
    if (continueShoppingButton) {
        continueShoppingButton.addEventListener("click", continuarComprando);
    }

    if (daltonismoButton) {
        daltonismoButton.addEventListener("click", function () {
            document.body.classList.toggle("modo-daltonico");
        });
    }

    if (searchButton) {
        searchButton.addEventListener("click", realizarBusca);
    }
});
