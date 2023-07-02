import "./main.css"
// todo
//  fix resize
//  add control
//  add options
//  fix overflow
//  better performance
//  use css vars instead


type Slide = {
    element: HTMLElement,
    transform: string,
    isMoving: boolean
}

export default class Circulider {
    private slides: Array<Slide>=[]
    private readonly width: number
    private readonly centerX: number = 0
    private readonly centerY: number = 0

    constructor(element: HTMLElement) {
        element.classList.add("circulider")
        this.width = getElementsContentWidth(element).width
        const slides = element.querySelectorAll(":scope > *")
        slides.forEach((slide: HTMLElement, index) => {
            this.slides[index] = {element: slide, isMoving: true, transform: ""}
        })
        window.requestAnimationFrame(this.placeChildren.bind(this))
    }

    private placeChildren(): void {
        if (this.step % 4 === 0)
            this.slides.forEach((slide, index: number) => {
                const r: number = this.width / 2;
                const angleDegrees = (360 / this.slides.length * index + this.step / 10) % 360;
                const angleRadians = angleDegrees * Math.PI / 180;
                const x: number = this.centerX + r * Math.cos(angleRadians);
                const y: number = this.centerY + r * Math.sin(angleRadians);
                this.slides[index].transform = "translate(" + x + "px, " + y + "px) scale(" + (1 + (-y + r) / 300) + ")"
                setCSSVar("--image-opacity", (y / r).toString(), slide.element)
                if (this.slides[index].isMoving) {
                    slide.element.style.transform = this.slides[index].transform
                }
                const borderLineStart = 270 - (360 / this.slides.length / 2);
                const borderLineEnd = (360 / this.slides.length / 2) + 270;
                if ((angleDegrees) > borderLineStart && (angleDegrees) < borderLineEnd)
                    this.select(index)
                else {
                    this.deSelect(index)
                }
            })
        this.step += 1

        window.requestAnimationFrame(this.placeChildren.bind(this))
    }

    step = 0

    select(index: number) {
        this.slides[index].isMoving = false
        this.slides[index].element.style.transition = "transform 1s"
        this.slides[index].element.style.transform = "translate(0, 0) scale(25)"
        this.slides[index].element.offsetHeight;
    }

    deSelect(index: number) {
        if (!this.slides[index].isMoving)
            this.resume(index)
    }

    resume(index: number) {
        this.slides[index].element.style.transition = "transform .1s"
        this.slides[index].element.style.transform = this.slides[index].transform
        this.slides[index].element.offsetHeight; // Trigger a reflow, flushing the CSS changes
        this.slides[index].element.addEventListener("transitionend", this.removeTransition.bind(this, index));
    }

    removeTransition(index: number) {
        this.slides[index].element.style.transition = ""
        this.slides[index].isMoving = true
        this.slides[index].element.offsetHeight;
        this.slides[index].element.removeEventListener("transitionend", this.removeTransition.bind(this, index))
    }

}

function setCSSVar(property: string, value: string, element: HTMLElement) {

    if (!element)
        element = document.documentElement

    element.style.setProperty(property, value);
}

function getElementsContentWidth(element: HTMLElement) {
    const cs = getComputedStyle(element);
    const paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
    const paddingY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
    const borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);
    const borderY = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);
    const elementWidth = element.offsetWidth - paddingX - borderX;
    const elementHeight = element.offsetHeight - paddingY - borderY;
    return {width: elementWidth, height: elementHeight}
}
