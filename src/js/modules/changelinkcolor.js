export default class ChangeLinkColor {
    constructor(triggers) {
        this.link = document.querySelectorAll(triggers);
    }

    transformLinkColor(elem) {
        this.link.forEach((link) => {
            link.style.color = 'rgb(128, 128, 128)';
        });

        elem.style.color = 'rgb(255, 255, 255)';
    }

    originalLinkСolor() {
        this.link.forEach((link) => {
            link.style.color = 'rgb(255, 255, 255)';
        });
    }

    init() {
        this.link.forEach(link => {
            link.addEventListener('mouseenter', (event) => {
                this.transformLinkColor(event.target);
            });

            link.addEventListener('mouseleave', () => {
                this.originalLinkСolor();
            });
        });
    }
}