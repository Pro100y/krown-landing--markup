<section class="navigation">
    <div class="navigation__content-wrap">
        <a href="/" class="navigation__logo"></a>
        <nav class="navigation__menu">
            <a
                href   = "/pages/2.about-us.html"
                class  = "navigation__menu-item"
                :class = "{'navigation__menu-item--active': currentPage == 'about-us'}"
            >О нас</a>
            <a
                href   = "/pages/3.outsource.html"
                class  = "navigation__menu-item"
                :class = "{'navigation__menu-item--active': currentPage == 'outsource'}"
            >аутсорсинг</a>
            <a
                href   = "/pages/4.projects.html"
                class  = "navigation__menu-item"
                :class = "{'navigation__menu-item--active': currentPage == 'projects'}"
            >портфолио</a>
            <a
                href   = "/pages/5.contacts.html"
                class  = "navigation__menu-item"
                :class = "{'navigation__menu-item--active': currentPage == 'contacts'}"
            >контакты</a>
            <a
                href   = "/pages/6.order.html"
                class  = "navigation__menu-order"
            >заказать верстку</a>
        </nav>
    </div>
</section>