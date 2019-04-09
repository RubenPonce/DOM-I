const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

//images
const setImg = (id, path) => {
  const image = document.getElementById(id);
  image.setAttribute("src", path);
};
setImg("logo-img", siteContent["nav"]["img-src"]);
setImg("cta-img", siteContent["cta"]["img-src"]);
setImg("middle-img", siteContent["main-content"]["middle-img-src"]);

//header links
const navLinks = Array.from(document.querySelectorAll("nav a"));
navLinks.forEach(
  (link, index) =>
    (link.textContent = siteContent["nav"][`nav-item-${index + 1}`])
);
//create two link items
const item1 = document.createElement("a");
item1.textContent = "Item1";
const item2 = document.createElement("a");
item2.textContent = "Item2";
const addNavLinks = document.querySelector("header nav");
addNavLinks.prepend(item1);
addNavLinks.appendChild(item2);
//set links to green
[...addNavLinks.children].forEach(link => (link.style.color = "green"));

//cta-text
const ctaText = document.querySelector(".cta-text");
ctaText.firstElementChild.innerHTML = `${siteContent["cta"]["h1"]
  .split(" ")
  .join("<br>")}`;
ctaText.lastElementChild.textContent = siteContent["cta"]["button"];

//main-content
const mainContentConstruct = (location, topOrBot, position) => {
  const content = document.querySelectorAll(
    `.main-content .${topOrBot} .text-content`
  )[position];
  content.firstElementChild.textContent =
    siteContent["main-content"][`${location}-h4`];
  content.lastElementChild.textContent =
    siteContent["main-content"][`${location}-content`];
};
mainContentConstruct("features", "top-content", 0);
mainContentConstruct("about", "top-content", 1);
mainContentConstruct("services", "bottom-content", 0);
mainContentConstruct("product", "bottom-content", 1);
mainContentConstruct("vision", "bottom-content", 2);

//contact section
const contact = document.querySelector(".contact");
[...contact.children].forEach(
  (child, index) =>
    (child.textContent = Object.values(siteContent.contact)[index])
);
const footer = document.querySelector("footer");
footer.firstElementChild.textContent = siteContent["footer"]["copyright"];
