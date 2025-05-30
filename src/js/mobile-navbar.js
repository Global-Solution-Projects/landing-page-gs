class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      if (this.navList.classList.contains(this.activeClass)) {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      } else {
        link.style.animation = ""; // remove a animação ao fechar
      }
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);

    this.navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        // Só fecha o menu se ele estiver aberto
        if (this.navList.classList.contains(this.activeClass)) {
          this.navList.classList.remove(this.activeClass);
          this.mobileMenu.classList.remove(this.activeClass);
          this.animateLinks();
        }
      });
    });
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".lista-navegacao",
  ".lista-navegacao li"
);

mobileNavbar.init();
