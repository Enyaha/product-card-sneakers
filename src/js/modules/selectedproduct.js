export default class SelectedProduct {
    constructor({
        trigger, 
        arrow, 
        arrowActiveClass = '', 
        triggerItems,
        }) {
        this.trigger = document.querySelectorAll(trigger);
        this.arrow = document.querySelectorAll(arrow);
        this.arrowActiveClass = arrowActiveClass;
        this.triggerItems = document.querySelectorAll(triggerItems);
    }

    init() {
        this.trigger.forEach((item, index) => {
            item.addEventListener('click', event => {
                if (event.currentTarget === this.trigger[index] && 
                    getComputedStyle(event.currentTarget.nextElementSibling).display === 'none') {

                    event.currentTarget.nextElementSibling.style.display = 'flex';
                    this.arrow[index].classList.add(this.arrowActiveClass);
                } else if (event.currentTarget === this.trigger[index] && 
                    getComputedStyle(event.currentTarget.nextElementSibling).display === 'flex') {

                    event.currentTarget.nextElementSibling.style.display = 'none';
                    this.arrow[index].classList.remove(this.arrowActiveClass);
                }
            });
        });

        this.triggerItems.forEach(item => {
            item.addEventListener('click', event => {
                const select = item.parentElement.previousElementSibling.firstElementChild.nextElementSibling;

                select.textContent = event.target.textContent;
                select.nextElementSibling.classList.remove(this.arrowActiveClass);
                event.currentTarget.parentNode.style.display = 'none';
            });
        });
    }
}