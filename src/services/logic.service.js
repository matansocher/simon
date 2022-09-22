const POSSIBLE_COLORS = ['green', 'red', 'yellow', 'blue'];

function getRandomColor() {
    return POSSIBLE_COLORS[Math.floor(Math.random() * POSSIBLE_COLORS.length)];
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function didUserClickOnCorrectColor(currentSimonOrder, currentUserOrder) {
    for (let i = 0; i < currentUserOrder.length; i++) {
        if (currentUserOrder[i] !== currentSimonOrder[i]) {
            return false;
        }
    }
    return true;
}

export {
    POSSIBLE_COLORS,
    getRandomColor,
    sleep,
    didUserClickOnCorrectColor,
}
