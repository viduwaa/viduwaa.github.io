let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navhover"); 

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop;
        let id = sec.getAttribute("id");

        if (top >= offset) {
            navLinks.forEach((link) => {
                link.classList.remove("hover-active");
            });
            document.querySelector(`.navhover[href="#${id}"]`).classList.add("hover-active");
            return;
        }
    });
};

