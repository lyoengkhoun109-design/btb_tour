
const searchInput = document.getElementById("searchInput");

const categoryButtons = document.querySelectorAll(".category");

const cards = document.querySelectorAll(".card");

const resultCount = document.getElementById("resultCount");

const noResults = document.getElementById("noResults");

let selectedCategory = "all";

// Filter function
function filterCards() {

    const searchText = searchInput.value.toLowerCase();

    let visibleCount = 0;

    cards.forEach(card => {

        const category = card.dataset.category;

        const text = card.textContent.toLowerCase();

        const matchesSearch = text.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        if (matchesSearch && matchesCategory) {

            card.style.display = "block";

            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });

    resultCount.textContent = visibleCount + " ទីតាំង";

    noResults.style.display =
        visibleCount === 0 ? "block" : "none";
}

// Search
searchInput.addEventListener("input", filterCards);

// Category selection
categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        filterCards();

    });

});
