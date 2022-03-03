let header = document.querySelector("header");

let nav = document.createElement("nav");
nav.setAttribute(
  "class",
  "navbar static-top navbar-expand-lg navbar-dark mx-auto bg-dark"
);

let container_fluid = document.createElement("div");
container_fluid.setAttribute("class", "container-fluid");

let navbarToggler = document.createElement("button");
navbarToggler.setAttribute("class", "navbar-toggler");
navbarToggler.setAttribute("type", "button");
navbarToggler.setAttribute("data-bs-toggle", "collapse");
navbarToggler.setAttribute("data-bs-target", "#navbarSupportedContent");
navbarToggler.setAttribute("aria-controls", "navbarSupportedContent");
navbarToggler.setAttribute("aria-expanded", "false");
navbarToggler.setAttribute("aria-label", "Toggle navigation");

NavBarTogglerIcon = document.createElement("span");
NavBarTogglerIcon.setAttribute("class", "navbar-toggler-icon");

let NavBarCollapse = document.createElement("div");
NavBarCollapse.setAttribute(
  "class",
  "collapse navbar-collapse justify-content-between"
);
NavBarCollapse.setAttribute("id", "navbarSupportedContent");

let ul = document.createElement("ul");
ul.setAttribute("class", "navbar-nav mx-auto mb-2 mb-lg-0");

let home = document.createElement("li");
home.setAttribute("class", "nav-item");
let homeLink = document.createElement("a");

if (header.id === "Home") homeLink.setAttribute("class", "nav-link active");
else homeLink.setAttribute("class", "nav-link");

homeLink.setAttribute("href", "index.html");
homeLink.textContent = "Home";

let About = document.createElement("li");
About.setAttribute("class", "nav-item");
let AboutLink = document.createElement("a");
if (header.id === "About") AboutLink.setAttribute("class", "nav-link active");
else AboutLink.setAttribute("class", "nav-link");
AboutLink.setAttribute("href", "about.html");
AboutLink.textContent = "About";

let Projects = document.createElement("li");
Projects.setAttribute("class", "nav-item");
let ProjectsLink = document.createElement("a");
if (header.id === "Projects")
  ProjectsLink.setAttribute("class", "nav-link active");
else ProjectsLink.setAttribute("class", "nav-link");
ProjectsLink.setAttribute("href", "projects.html");
ProjectsLink.textContent = "Projects";
let Contact = document.createElement("li");
Contact.setAttribute("class", "nav-item");
let ContactLink = document.createElement("a");

if (header.id === "Contact")
  ContactLink.setAttribute("class", "nav-link active");
else ContactLink.setAttribute("class", "nav-link");
ContactLink.setAttribute("href", "contact.html");
ContactLink.textContent = "Contact";

header.append(nav);
nav.append(container_fluid);
container_fluid.append(navbarToggler);
navbarToggler.append(NavBarTogglerIcon);

container_fluid.append(NavBarCollapse);
NavBarCollapse.append(ul);
ul.append(home);
home.append(homeLink);

ul.append(About);
About.append(AboutLink);

ul.append(Projects);
Projects.append(ProjectsLink);

ul.append(Contact);
Contact.append(ContactLink);
