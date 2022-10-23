export default class ShowCategory {
    constructor(triggers, category) {
        this.link = document.querySelectorAll(triggers);
        this.blockCategory = document.querySelectorAll(category);
    }

    init() {
        this.link.forEach(link => {
            link.addEventListener('mouseenter', (event) => {
                const length = this.link.length - 1;

                for (let i = 0; i < length; i++) {
                    this.blockCategory[i].style.display = 'none';

                    if (event.target.getAttribute('data-category') == 
                        this.blockCategory[i].getAttribute('data-category')) {

                        this.blockCategory[i].style.display = 'flex';
                    }
                }
            });
        });

        this.blockCategory.forEach(elem => {
            elem.addEventListener('mouseleave', () => {
                elem.style.display = 'none';
            });
        });
    }
}