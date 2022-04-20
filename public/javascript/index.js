
const charactersAPI = new APIHandler()

let text = ''

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    let btn = document.getElementById('fetch-all');

    charactersAPI
      .getFullList()
      .then(({ data }) => data.forEach(element => {
        text += `
          <div class="character-info">
            <div class="name">Nombre: ${element.name}</div>
            <div class="occupation">Ocupación ${element.occupation}</div>
            <div class="cartoon">Cartoon: ${element.cartoon}</div>
            <div class="weapon">Weapon: ${element.weapon}</div>
            <div class="id">ID: ${element.id}</div>

          </div>  `
        document.getElementById('characters-container').innerHTML = text
        btn.style.backgroundColor = 'green'
      })
        .catch(err => btn.style.backgroundColor = 'red')
      )

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let btn = document.getElementById('fetch-one');

    let characterId = document.getElementById('character-id').value;

    console.log(characterId)

    charactersAPI
      .getOneRegister(characterId)
      .then(({ data }) => {
        console.log(data)
        text += `
          <div class="character-info">
            <div class="name">${data.name}</div>
            <div class="occupation">${data.occupation}</div>
            <div class="cartoon">${data.cartoon}</div>
            <div class="weapon">${data.weapon}</div>
            <div class="id">${data.id}</div>

          </div>`
        document.getElementById('characters-container').innerHTML = text
        btn.style.backgroundColor = 'green'

      })
      .catch(err => btn.style.backgroundColor = 'red')
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    let btn = document.getElementById('delete-one');
    let characterId = document.getElementById('character-id-delete').value;

    charactersAPI
      .deleteOneRegister(characterId)
      .then(() => btn.style.backgroundColor = 'green')
      .catch(err => btn.style.backgroundColor = 'red')

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    let btn = document.getElementById('send-data-edit');

    let characterId = document.getElementById('chr-id').value;
    let characterName = document.getElementById('nameEdit').value;
    let characterOccupation = document.getElementById('occupationEdit').value;
    let characterWeapon = document.getElementById('weaponEdit').value;
    let characterCartoon = document.getElementById('checkboxEdit').checked;


    const characterInfo = {
      id: characterId,
      name: characterName,
      occupation: characterOccupation,
      weapon: characterWeapon,
      cartoon:characterCartoon
    }
    console.log(characterInfo)
    charactersAPI
      .updateOneRegister(characterInfo)
      .then(() => btn.style.backgroundColor = 'green')
      .catch(err => btn.style.backgroundColor = 'red')


  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    let btn = document.getElementById('send-data-new');

    let characterName = document.getElementById('nameCreate').value;
    let characterOccupation = document.getElementById('occupationCreate').value;
    let characterWeapon = document.getElementById('weaponCreate').value;
    let characterCartoon = document.getElementById('checkboxCreate').checked;

    const characterInfo = {
      name: characterName,
      occupation: characterOccupation,
      weapon: characterWeapon,
      cartoon: characterCartoon

    }
    console.log(characterInfo)

    charactersAPI
      .createOneRegister(characterInfo)
      .then(() => btn.style.backgroundColor = 'green')
      .catch(err => btn.style.backgroundColor = 'red')

  });
});
