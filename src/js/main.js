import ChangeLinkColor from "./modules/changelinkcolor";

window.addEventListener('DOMContentLoaded', () => {
    const linkColor = new ChangeLinkColor('.header__menu-item');
    
    linkColor.init();
});