let clicks = 0

const TIMEOUT = 5000

const display = document.querySelector('#display')
const button = document.querySelector('#button')
const counter = document.querySelector('#counter')

button.onclick = start

function start() {
    const startTime = Date.now() // Время начала игры

    display.textContent = formatTime(TIMEOUT) // Вывод времени в display
    button.onclick = () => counter.textContent = clicks++;// Вывод кликов через counter

    const interval = setInterval(() => {
        const delta = Date.now() - startTime
        display.textContent = formatTime(TIMEOUT - delta)
    }, 100); // Счётчик времени в display

    const timeout = setTimeout(() => {
        button.onclick = null
        display.textContent = 'Game Over!'
        button.textContent = 'Restart'
        button.onclick = setTimeout(function(){
            location.reload();
        }, 2000);

        clearInterval(interval)
        clearTimeout(timeout)
    }, TIMEOUT) // Конец игры
}

function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2);
} // Преобразование TIMEOUT в красивый счётчик времени
