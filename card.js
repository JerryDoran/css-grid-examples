const characterList = document.getElementById('characterList');

const loadCharacters = async () => {
  try {
    const res = await fetch('https://hp-api.herokuapp.com/api/characters');
    const characterData = await res.json();
    console.log(characterData);
    displayCharacters(characterData);
  } catch (e) {
    console.log(e);
  }
};

const displayCharacters = (characters) => {
  const htmlString = characters
    .map((character) => {
      return `
      <li class="card">
        <div class="card__image">
          <img src="${character.image}"></img>
        </div>
        <div class="card__details">
          <h2 class="card__title">${character.name}</h2>
          <p class="card__details-house">House: ${character.house}</p>
        </div>
      </li>
    `;
    })
    .join('');
  characterList.innerHTML = htmlString;
};

loadCharacters();
