console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

const imageDiv = document.querySelector('#dog-image-container')

const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

const dogBreedList = document.querySelector('#dog-breeds')



document.addEventListener('DOMContentLoaded', function () {
    fetchImages
    fetchDogBreeds
});

function fetchImages() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(results => {
      results.message.forEach(image => addImage(image))
    });
}

function addImage(url) {
    let newImageEl = document.createElement('img')
    newImageEl.src = url
    imageDiv.appendChild(newImageEl)
}

function fetchBreeds() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(results => {

        breeds = Object.keys(results.message);
        updateBreedList(breeds);
        addBreedSelectListener();
      });
}

function updateBreedList(breeds) {
    removeChildren(ul)
    breeds.forEach(breed => addBreed(breed))

}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
}

function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }
  
  function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
  }
  
  function updateColor(event) {
    event.target.style.color = 'palevioletred';
  }