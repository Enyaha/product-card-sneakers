export default class ChangeColor {
    constructor(triggers, colorBefore, colorAfter) {
        this.triggerElem = document.querySelectorAll(triggers);
        this.colorBefore = colorBefore;
        this.colorAfter = colorAfter;
    }
}