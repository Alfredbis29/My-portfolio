import data from './data.js';

const works = document.querySelector('.works');
data.forEach((card) => {
  works.innerHTML += `<li class="card-work">
  <a data-index-number=${card.id} class="portfolio-img" href="#">
    <img  src=${card.image} alt="tonic" />
  </a>
  <div class="right-content">
    <div class="title">
      <h2>${card.name}</h2>
    </div>
    <div class="info">
      <span>${card.description.type}</span>
      <span><img src="images/Counter.png" alt="counter" /></span>
      <span>${card.description.interface}</span>
      <span><img src="images/Counter.png" alt="counter" /></span>
      <span>${card.description.year}</span>
    </div>
    <div class="detail">
      <p>
        ${card.detail}
      </p>
    </div>
    <ul class="languages">
    ${(function technoUsed() {
    return card.technologies.map((technology) => `<li><a href="#">${technology}</a></li>`).join('');
  }())}
  
    </ul>
    <div class="see-project">
      <a class="btn" data-index-number=${card.id} href="">See Project</a>
    </div>
  </div>
</li> `;
});

// POPUP WINDOW

const cardPopupWindow = document.querySelector('.card-popup-window');
const seeProjectBtn = document.querySelectorAll('.see-project .btn');
const seeProjectImg = document.querySelectorAll('.card-work .portfolio-img');
const closedWind = document.querySelector('.card-popup-window .popup-main-container .main-container .close');

const arr = [seeProjectBtn, seeProjectImg];
arr.forEach((item) => {
  item.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      cardPopupWindow.classList.add('open-pop-up');
      const filteredCard = data.filter((card) => card.id === Number(link.dataset.indexNumber));
      const title = document.querySelector('.card-popup-window .popup-main-container .main-container .title h2');
      const info = document.querySelectorAll('.card-popup-window .main-container .info span');
      const img = document.querySelector('.card-popup-window .main-container .portfolio-img img');
      const detail = document.querySelector('.card-popup-window .main-container .detail p');
      const techno = document.querySelector('#lang');
      const links = document.querySelectorAll('.card-popup-window .main-container .links a');

      title.innerHTML = filteredCard[0].name;
      img.src = filteredCard[0].image;
      detail.innerHTML = filteredCard[0].fullDesciption;

      for (let i = 0; i < Array.from(info).length; i += 1) {
        if (i === 0) {
          info[i].innerHTML = filteredCard[0].description.type;
        } else if (i === 2) {
          info[i].innerHTML = filteredCard[0].description.interface;
        } else if (i === 4) {
          info[i].innerHTML = filteredCard[0].description.year;
        }
      }

      const technologiesChild = [...techno.childNodes];
      technologiesChild.forEach((child, index) => {
        techno.removeChild(technologiesChild[index]);
      });
      filteredCard[0].technologies.forEach((item) => {
        const techItem = document.createElement('li');
        const techLink = document.createElement('a');
        techLink.href = '#';
        techLink.innerText = item;
        techItem.appendChild(techLink);
        techno.appendChild(techItem);
      });
      links[0].href = filteredCard[0].liveDemo;
      links[1].href = filteredCard[0].sourceCode;
    });
  });
});

closedWind.addEventListener('click', () => {
  cardPopupWindow.classList.remove('open-pop-up');
});