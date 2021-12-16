function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/PhotoIDPhotos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const eltCity = document.createElement('city');
        eltCity.textContent = city;
        const eltCountry = document.createElement('country');
        eltCountry.textContent = country;
        const eltTagline = document.createElement('tagline');
        eltTagline.textContent = tagline;
        const eltPrice = document.createElement('price');
        eltPrice.textContent = price;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(eltCity);
        article.appendChild(eltCountry);
        article.appendChild(eltTagline);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}