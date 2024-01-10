const adviceText = document.getElementById("advice-text")
const form = document.getElementById("form")
const mode = document.getElementById("checkbox")
const body = document.body

async function getData() {

    const req = await fetch("https://api.adviceslip.com/advice")
    const data = await req.json()

    const advice = data.slip.advice
    adviceText.textContent = advice
}

getData()


mode.addEventListener("click", () => {
    body.classList.toggle("dark")
})