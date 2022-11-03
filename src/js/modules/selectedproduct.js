export default class SelectedProduct {
    constructor({
        trigger, 
        arrow, 
        blockOptions, 
        arrowActiveClass = '', 
        blockOptionsActiveClass = '',
        triggerItems,
        elementText,
        index = null,
        }) {
        this.trigger = document.querySelector(trigger);
        this.arrow = document.querySelectorAll(arrow);
        this.blockOptions = document.querySelector(blockOptions);
        this.arrowActiveClass = arrowActiveClass;
        this.blockOptionsActiveClass = blockOptionsActiveClass;
        this.triggerItems = document.querySelectorAll(triggerItems);
        this.elementText = document.querySelector(elementText);
        this.index = index;
    }

    showBlockOptions() {
        this.arrow[this.index].classList.add(this.arrowActiveClass);
        this.blockOptions.classList.add(this.blockOptionsActiveClass);
    }

    hideBlockOptions() {
        this.arrow[this.index].classList.remove(this.arrowActiveClass);
        this.blockOptions.classList.remove(this.blockOptionsActiveClass);
    }

    init() {
        this.trigger.addEventListener('click', () => {
            if (getComputedStyle(this.blockOptions).display == 'none') {
                this.showBlockOptions();
            } else if (getComputedStyle(this.blockOptions).display == 'flex') {
                this.hideBlockOptions();
            }
        });

        this.triggerItems.forEach(item => {
            item.addEventListener('click', (event)=> {
                this.hideBlockOptions();

                this.elementText.textContent = event.target.textContent;
            });
        });
    }
}