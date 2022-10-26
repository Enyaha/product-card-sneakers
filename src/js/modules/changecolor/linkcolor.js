import ChangeColor from "./changecolor";

export default class LinkColor extends ChangeColor {
    constructor(triggerElem, colorBefore, colorAfter) {
        super(triggerElem, colorBefore, colorAfter);
    }

    transformColor(e) {
        this.triggerElem.forEach(elem => {
            elem.style.color =  this.colorAfter;
        });

        e.target.style.color = this.colorBefore;
    }

    originalСolor() {
        this.triggerElem.forEach(elem => {
            elem.style.color = this.colorBefore;
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