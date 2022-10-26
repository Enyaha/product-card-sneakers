import BorderTopColor from "./modules/changecolor/bordertopcolor";
import LinkColor from "./modules/changecolor/linkcolor";
import showCategory from "./modules/showcategory";

window.addEventListener('DOMContentLoaded', () => {
    const changelinkColor = new LinkColor('.header__menu-item', 'rgb(255, 255, 255)', 'rgb(128, 128, 128)');

    changelinkColor.init();

    const changeBorderTopColor = new BorderTopColor('.category__item', '2px solid rgb(0, 0, 0)', 
                                                    '2px solid rgba(128, 128, 128, .2');

    changeBorderTopColor.init();

    const showCategoryBlock = new showCategory('.header__menu-item', '.category__block');
    
    showCategoryBlock.init();
});