/* -------------------------
   UNIDADES CULINARIAS
---------------------------*/
const units = {
    "Gramo (g)": 1,
    "Kilogramo (kg)": 1000,
    "Mililitro (mL)": 1,
    "Litro (L)": 1000,
    "Cucharadita (tsp)": 4.92892,
    "Cucharada (tbsp)": 14.7868,
    "Taza (cup)": 240,
    "Onza (oz)": 28.3495,
    "Libra (lb)": 453.592
};

/* Insertar unidades dinámicamente */
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");

Object.keys(units).forEach(u => {
    fromUnit.innerHTML += `<option>${u}</option>`;
    toUnit.innerHTML += `<option>${u}</option>`;
});

/* Cálculo */
function convert() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount)) return;

    const from = fromUnit.value;
    const to = toUnit.value;

    const grams = amount * units[from];
    const result = grams / units[to];

    document.getElementById("result").textContent = result.toFixed(2);
}

document.querySelectorAll("input, select")
    .forEach(el => el.addEventListener("input", convert));

/* -------------------------
   MODO OSCURO AUTOMÁTICO
---------------------------*/
const toggle = document.getElementById("darkToggle");

function applyDarkMode(state) {
    if (state) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
}

toggle.addEventListener("change", () => {
    applyDarkMode(toggle.checked);
    localStorage.setItem("darkMode", toggle.checked);
});

/* Cargar preferencia guardada */
applyDarkMode(localStorage.getItem("darkMode") === "true");

/* Detectar modo oscuro del sistema automáticamente */
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyDarkMode(true);
    toggle.checked = true;
}
