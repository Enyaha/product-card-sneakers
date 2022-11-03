import BorderTopColor from "./modules/changecolor/bordertopcolor";
import LinkColor from "./modules/changecolor/linkcolor";
import ShowCategory from "./modules/showcategory";
import SelectedProduct from "./modules/selectedproduct";

window.addEventListener('DOMContentLoaded', () => {
    const changelinkColor = new LinkColor('.header__menu-item', 'rgb(255, 255, 255)', 'rgb(128, 128, 128)');

    changelinkColor.init();

    const changeBorderTopColor = new BorderTopColor('.category__item', '2px solid rgb(0, 0, 0)', 
                                                    '2px solid rgba(128, 128, 128, .2');

    changeBorderTopColor.init();

    const showCategoryBlock = new ShowCategory('.header__menu-item', '.category__block');
    
    showCategoryBlock.init();

    const selectSize = new SelectedProduct({
        trigger: '.product__add-size', 
        arrow: '.product__add-arrow', 
        blockOptions: '.product__size', 
        arrowActiveClass: 'product__add-arrow_active', 
        blockOptionsActiveClass: 'product__size_active',
        triggerItems: '.product__size-item',
        elementText: '.product__add-select-size',
        index: 0,
    });

    selectSize.init();

    const selectQuantity = new SelectedProduct({
        trigger: '.product__add-count', 
        arrow: '.product__add-arrow', 
        blockOptions: '.product__count', 
        arrowActiveClass: 'product__add-arrow_active', 
        blockOptionsActiveClass: 'product__count_active',
        triggerItems: '.product__count-item',
        elementText: '.product__add-select-count',
        index: 1,
    });

    selectQuantity.init();
});