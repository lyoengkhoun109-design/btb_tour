
const container = document.querySelector(".card-window");
const mainCard = document.getElementById("main_card");
const cards = document.querySelectorAll("#main_card #card");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
let startX = 0;

const gap = 10;

function getCardWidth() {
    return cards[0].offsetWidth;
}

function getMaxIndex() {
    const visibleCards = Math.floor(
        (container.clientWidth + gap) /
        (getCardWidth() + gap)
    );

    return Math.max(0, cards.length - visibleCards);
}

function moveCards() {

    const distance = currentIndex * (getCardWidth() + gap);

    mainCard.style.transform = `translateX(-${distance}px)`;

}

// Next button
nextBtn.addEventListener("click", function() {

    if (currentIndex < getMaxIndex()) {
        currentIndex++;
        moveCards();
    }

});

// Previous button
prevBtn.addEventListener("click", function() {

    if (currentIndex > 0) {
        currentIndex--;
        moveCards();
    }

});

// Start dragging
container.addEventListener("pointerdown", function(e) {
    startX = e.clientX;
    container.setPointerCapture(e.pointerId);
});

// Finish dragging
container.addEventListener("pointerup", function(e) {

    const endX = e.clientX;
    const distance = endX - startX;

    if (distance < -50 && currentIndex < getMaxIndex()) {
        currentIndex++;
    }
    else if (distance > 50 && currentIndex > 0) {
        currentIndex--;
    }

    moveCards();

});

