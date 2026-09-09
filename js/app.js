"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("toolSearch");
    const toolCards = Array.from(
        document.querySelectorAll(".tool-card")
    );

    const noResults = document.getElementById("noResults");


    if (!searchInput || !toolCards.length) {
        return;
    }


    function filterTools() {

        const query = searchInput.value
            .toLowerCase()
            .trim();

        let visibleTools = 0;


        toolCards.forEach(card => {

            const name = (
                card.dataset.name || ""
            ).toLowerCase();


            const matches =
                name.includes(query);


            if (matches) {

                card.style.display = "";

                visibleTools++;

            } else {

                card.style.display = "none";

            }

        });


        if (noResults) {

            noResults.style.display =
                visibleTools === 0
                    ? "block"
                    : "none";

        }

    }


    searchInput.addEventListener(
        "input",
        filterTools
    );


});
