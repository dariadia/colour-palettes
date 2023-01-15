import Color from "color"

const getHslColour = (colour) => Color(Color(colour).hsl())

export const getPrimaryColour = (colour) => [ getHslColour(colour).rgb() ]

export const getComplementaryColour = (colour) => [
  getHslColour(colour).rgb(),
  getHslColour(colour).rotate(180).rgb()
]

export const getTriadColour = (colour) => [
  getHslColour(colour).rgb(),
  getHslColour(colour).rotate(120).rgb(),
  getHslColour(colour).rotate(120).rgb()
]

export const getAnalogousColour = (colour) => [
  getHslColour(colour).rotate(-30).rgb(),
  getHslColour(colour).rgb(),
  getHslColour(colour).rotate(30).rgb()
]

export const getSplitComplementaryColour = (colour) => [
  getHslColour(colour).rgb(),
  getHslColour(colour).rotate(-30).rgb(),
  getHslColour(colour).rotate(30).rgb()
]

export const getTetradicColour = (colour) => [
  getHslColour(colour).rgb(),
  getHslColour(colour).rotate(90).rgb(),
  getHslColour(colour).rotate(180).rgb(),
  getHslColour(colour).rotate(240).rgb()
]

export const getSquareColour = (colour) => [
  getHslColour(colour).rgb(),
  getHslColour(colour).rotate(90).rgb(),
  getHslColour(colour).rotate(180).rgb(),
  getHslColour(colour).rotate(270).rgb()
]

let colorWell

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
      <div>
        <h5>${group.title}</h6>
        <br/>
        ${group.items.map(colour => `<div class="colour-sample" style="background-color: ${colour};"></div>`)}
      </div>`
    )
  }
}

const updateInput = (event) => {
  const colourInput = document.querySelector("#colour-input")
  if (colourInput) {
    colourInput.value = event.target.value
  }
}

const start = () => {
  colorWell = document.querySelector("#colour")
  colorWell.addEventListener("input", updateInput, false)
  colorWell.addEventListener("change", updatePalette, false)
  colorWell.select()
}

start()
