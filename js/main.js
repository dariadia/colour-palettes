import Color from "color"

const isDarkColour = (colour) => Color(colour).isDark()

const getHslColour = (colour) => Color(Color(colour).hsl())

const getPrimaryColour = (colour) => [ getHslColour(colour).rgb() ]

const getComplementaryColour = (colour) => [
  getHslColour(colour).rgb(),
  getHslColour(colour).rotate(180).rgb()
]

const getTriadColour = (colour) => [
  getHslColour(colour).rgb(),
  getHslColour(colour).rotate(120).rgb(),
  getHslColour(colour).rotate(120).rgb()
]

const getAnalogousColour = (colour) => [
  getHslColour(colour).rotate(-30).rgb(),
  getHslColour(colour).rgb(),
  getHslColour(colour).rotate(30).rgb()
]

const getSplitComplementaryColour = (colour) => [
  getHslColour(colour).rgb(),
  getHslColour(colour).rotate(-30).rgb(),
  getHslColour(colour).rotate(30).rgb()
]

const getTetradicColour = (colour) => [
  getHslColour(colour).rgb(),
  getHslColour(colour).rotate(90).rgb(),
  getHslColour(colour).rotate(180).rgb(),
  getHslColour(colour).rotate(240).rgb()
]

const getSquareColour = (colour) => [
  getHslColour(colour).rgb(),
  getHslColour(colour).rotate(90).rgb(),
  getHslColour(colour).rotate(180).rgb(),
  getHslColour(colour).rotate(270).rgb()
]

let colorWell
let colourInput

const updatePalette = (event) => {
  updateInput(event)
  const resultPalette = document.querySelector("#result-palette")
  if (resultPalette) {
    const result = [
      { title: "Complementary colours", items: getComplementaryColour(event.target.value) },
      { title: "Triad colours", items: getTriadColour(event.target.value) },
      { title: "Analogous colours", items: getAnalogousColour(event.target.value) },
      { title: "Split Complementary colours", items: getSplitComplementaryColour(event.target.value) },
      { title: "Tetradic colours", items: getTetradicColour(event.target.value) },
      { title: "Square colours", items: getSquareColour(event.target.value) },
      
    ]
    resultPalette.innerHTML = result.map(group => `
      <div class="colour-group">
        <h5>${group.title}</h6>
        <div class="palette-samples">${group.items.map(colour => `<div class="colour-sample" style="background-color: ${colour}; color:${isDarkColour(colour) ? "white" : "black"}">${Color(colour).hex()}</div>`).join("")}</div>
      </div>`
    ).join("")
  }
}

const updateInput = (event) => {
  if (colourInput) {
    colourInput.value = event.target.value
  }
}

const start = () => {
  colorWell = document.querySelector("#colour")
  colourInput = document.querySelector("#colour-input")
  colorWell.addEventListener("input", updatePalette, false)
  colorWell.addEventListener("change", updatePalette, false)
  colorWell.select()
  colourInput.addEventListener("input", updatePalette, false)
}

start()
