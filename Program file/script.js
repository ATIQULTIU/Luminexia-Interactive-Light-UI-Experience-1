/*
 Project: Luminexia
 Author: A.i.Atik
*/

const btn = document.getElementById("themeBtn");
const body = document.body;

btn.addEventListener("click", () => {
    body.classList.toggle("glow-off");

    btn.innerText = body.classList.contains("glow-off")
        ? "Enable Glow"
        : "Disable Glow";
});
