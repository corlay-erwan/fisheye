

async function getPhotographers() {
    const data = await fetch("./data/photographers.json")
        .then(res => res.json());

    return data.photographers;
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {

    const photographers = await getPhotographers();
    console.log(photographers)
    displayData(photographers);
};

init();
