const createArtistList = (data, domNode) => {
    const {items: artists} = data;
    console.log(artists);
    artists.forEach(artist => {
        const artistWrapper = document.createElement('div');
        artistWrapper.classList.add('artist');

        const artistImage = document.createElement('img');
        artistImage.setAttribute('src', artist.images[0].url);
        artistImage.classList.add('artist__image');
        artistWrapper.appendChild(artistImage);

        const artistName = document.createElement('h3');
        artistName.textContent = artist.name;
        artistName.classList.add('artist__name');
        artistWrapper.appendChild(artistName);

        domNode.appendChild(artistWrapper);
    });
}

export default createArtistList;