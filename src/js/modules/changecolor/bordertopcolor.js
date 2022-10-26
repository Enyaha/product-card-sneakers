import ChangeColor from "./changecolor";

export default class BorderTopColor extends ChangeColor {
    constructor(triggerElem, colorBefore, colorAfter) {
        super(triggerElem, colorBefore, colorAfter);
    }

    transformColor(e) {
        this.triggerElem.forEach(elem => {
            elem.style.borderTop =  this.colorAfter;
        });

        e.target.style.borderTop = this.colorBefore;
    }

    originalСolor() {
        this.triggerElem.forEach(elem => {
            elem.style.borderTop = this.colorBefore;
        });
    }

    init() {
        this.triggerElem.forEach(elem => {
            elem.addEventListener('mouseenter', elem => {
                this.transformColor(elem);
            });

            elem.addEventListener('mouseleave', () => {
                this.originalСolor();
            });
        });
    }
}