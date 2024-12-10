const coin = document.querySelector("#coin");
const button = document.querySelector("#flip");
const statusLabel = document.querySelector("#status");
const heads = document.querySelector("#headsCount");
const tails = document.querySelector("#tailsCount");

let headsCount = 0;
let tailsCount = 0;

function resetCoin() {
    coin.classList.remove("animate-heads", "animate-tails");
}

function processResult(result) {
    if (result === "heads") {
        headsCount++;
        heads.innerHTML = headsCount;
    } else {
        tailsCount++;
        tails.innerHTML = tailsCount;
    }

    statusLabel.innerText = result.toUpperCase();
}

function flipCoin() {
    button.disabled = true;

    const random = Math.random();
    const result = random < 0.5 ? "heads" : "tails";

    resetCoin();

    setTimeout(() => {
        coin.classList.add("animate-" + result);

        setTimeout(() => {
            processResult(result);
            button.disabled = false;
        }, 3000);
    }, 100);
}

button.addEventListener("click", flipCoin);
