const films = [
  {
    id: 1,
    title: "Праздники",
    age: "12+",
    genre: "комедия",
    poster: "img/Group 862.png",
    sessions: [
      { time: "12:00", price: 1700 },
      { time: "15:00", price: 1700  },
      { time: "18:00", price: 1700  },
      { time: "14:00", price: 1700 },
      { time: "17:00", price: 1700  },
      { time: "20:00", price: 1700  },
    ]

  },
  {
    id: 2,
    title: "Мег 2: Бездна",
  age: "16+",
    genre: "экшен, триллер",
    poster: "img/Group 862 (1).png",
    sessions: [
      { time: "11:00", price: 1700  },
      { time: "11:00", price: 1700  },
      { time: "11:00", price: 1700  },
      
    ]
  },
  {
    id: 3,
    title: "Заложники",
     age: "16+",
    genre: "экшен, триллер",
    poster: "img/Group 862 (2).png",
    sessions: [
      { time: "13:30", price: 1700  },
      { time: "17:00", price: 1700  }
    ]
  },
  {
    id: 4,
    title: "Леди Баг и Супер-Кот: Пробуждение силы",
     age: "6+",
    genre: "фентези, боевик, мелодрама, мультфильм, комедия",
    poster: "img/Group 862 (3).png",
    sessions: [
      { time: "16:00", price: 1700 },
      { time: "19:30", price: 1700 }
    ]
  },
  {
    id: 5,
    title: "Когда не загрузилась афиша",
    genre: "комедия",
    poster: "img/Group 862 (4).png",
    sessions: [
      { time: "12:30", price: 1700 },
      { time: "15:30", price: 1700 },
   
    ]
  },
  {
    id: 6,
    title: "Руслан и Людмила. Больше, чем сказка",
    age: "6+",
    genre: "анимационое приключение",
    poster: "img/Group 862 (5).png",
    sessions: [
      { time: "Сеансы на Завтра"  },
    
    ]
  }
];

let center = document.getElementById("center")

for (let i = 0; i < films.length; i++) {

  let movie = films[i];

  let sectr = "";

  for (let j = 0; j < movie.sessions.length; j++) {
    sectr += `
      <button>
        ${movie.sessions[j].time} - ${movie.sessions[j].price} ₸
      </button>
    `;
  }

  center.innerHTML += `
    <div class="movie-card">
  <div class="poster">
    <img src="${movie.poster}" alt="Праздники">
    <span class="age">${movie.age}</span>
  </div>

  <h3 class="title">${movie.title}</h3>
  <div class="tags">
    <span>  ${movie.genre}</span> 

  </div>

  
    
       <div class="times">
      ${movie.sessions.map(session => `
        <div class="time">
          <div class="t">${session.time}</div>
          <div class="info">${session.price} ₸</div>
         <div class="hall">${["Зал 3" ,"Зал 4","Зал 6 VIP"][Math.floor(Math.random() * 3)]}</div>
        </div>
      `).join("")}
    </div>
  </div>
</div>
  `;
}