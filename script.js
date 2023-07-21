const draw_width = 500
const draw_height = 500

const draw_area = document.querySelector('.draw-area')

draw_area.style.width = draw_width + "px"
draw_area.style.height = draw_height + "px"

const slider = document.querySelector(".slider")

const sliderValueElement = document.querySelector(".value")

let sliderValue = 1;

updateSliderValue();

sliderValueElement.textContent = sliderValue + " X " + sliderValue;

function updateSliderValue() {
    draw_area.replaceChildren();

    sliderValue = slider.value;
    sliderValueElement.textContent = sliderValue + " X " + sliderValue;

    let boxes = sliderValue

    const total_boxes = boxes * boxes

    const box_width = (draw_height / boxes)

    for (let i = 0; i < total_boxes; i++) {
        const box = document.createElement('div')
        box.classList.add("grid-box")
        draw_area.appendChild(box)
        box.style.width = box_width + "px"
        box.style.height = box_width + "px"
    }

    const boxx = draw_area.querySelectorAll("*");

    function handleClick(event) {
        event.target.style.backgroundColor = "lavender"
    }

    boxx.forEach((element) => {
        element.addEventListener("mouseover", handleClick);
    });
}

slider.addEventListener("change", updateSliderValue);

