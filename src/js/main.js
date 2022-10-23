import ChangeLinkColor from "./modules/changelinkcolor";
import showCategory from "./modules/showcategory";

window.addEventListener('DOMContentLoaded', () => {
    const linkColor = new ChangeLinkColor('.header__menu-item');
    linkColor.init();

    const showCategoryBlock = new showCategory('.header__menu-item', '.category__block');
    
    showCategoryBlock.init();
});