<section class="navigation">
    <div class="navigation__content-wrap">
        <a href="/" class="navigation__logo"></a>
        <nav class="navigation__menu">
            <a
                href   = "about-us.html"
                class  = "navigation__menu-item"
                :class = "{'navigation__menu-item--active': currentPage == 'about-us'}"
            >О нас</a>
            <a
                href   = "outsource.html"
                class  = "navigation__menu-item"
                :class = "{'navigation__menu-item--active': currentPage == 'outsource'}"
            >аутсорсинг</a>
            <a
                href   = "projects.html"
                class  = "navigation__menu-item"
                :class = "{'navigation__menu-item--active': currentPage == 'projects'}"
            >портфолио</a>
            <a
                href   = "contacts.html"
                class  = "navigation__menu-item"
                :class = "{'navigation__menu-item--active': currentPage == 'contacts'}"
            >контакты</a>
            <a
                href   = "order.html"
                class  = "navigation__menu-order"
            >заказать верстку</a>
        </nav>
    </div>
</section>