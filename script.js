let books = [
  {
    name: "Smart Learning - <br>Designing Next-Gen Eductational Apps",
    cover: "book1",
    description:
      "Discover innovative strategies for designing educational apps that enhance personalized learning in the digital age.",
    author: "Dragan Petrovic",
    likes: 1250,
    liked: true,
    price: 19.99,
    publishedYear: 2018,
    genre: "Education",
    bestseller: true,
    comments: [
      {
        name: "Reader123",
        comment:
          "Ein faszinierendes Buch, das mir während der Fortbildung zur Softwareentwicklung extrem geholfen hat.",
      },
      {
        name: "Bookworm84",
        comment: "Easy to understand and practice related. I really recommend it!",
      },
      {
        name: "FantasyFanatic",
        comment: "Rumdum toll. Sehr informativ.",
      },
      {
        name: "SciFiGuru",
        comment: "Sehr clever gestaltet. Auch für Fortgeschrittene das ein oder andere dabei.",
      },
    ],
  },
  {
    name: "Programming for Learning -<br>The Developer´s Guide to Education Tech",
    cover: "book2",
    description:
      "Master the art of coding for education! This guide explores building impactful, user-friendly edtech solutions.",
    author: "Satoshi Endo",
    likes: 980,
    liked: false,
    price: 14.5,
    publishedYear: 2021,
    genre: "Education",
    bestseller: false,
    comments: [
      {
        name: "ReadingAddict",
        comment: "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.",
      },
    ],
  },
  {
    name: "Die Farben des Himmels",
    cover: "book3",
    description:
      "A heartfelt romance unfolds under painted skies, where love, fate, and dreams intertwine.",
    author: "Laura Blau",
    likes: 1520,
    liked: true,
    price: 22.95,
    publishedYear: 2019,
    genre: "Romance",
    bestseller: false,
    comments: [
      {
        name: "LeserPeter",
        comment: "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.",
      },
      {
        name: "BookLover21",
        comment: "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.",
      },
      {
        name: "FantasyNerd",
        comment: "Fantastische Welten und epische Abenteuer - genau mein Geschmack!",
      },
      
    ],
  },
  {
    name: "Neon Ghosts",
    cover: "book4",
    description:
      "In a neon-lit future, a rogue hacker unravels a haunting mystery, where ghosts of the past merge with the digital unknown.",
    author: "Elina Vestergaard",
    likes: 750,
    liked: false,
    price: 18.0,
    publishedYear: 2020,
    genre: "Science-Fiction",
    bestseller: true,
    comments: [
      {
        name: "BuchKenner",
        comment: "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat.",
      },
      {
        name: "LeseWurm",
        comment: "Eine sehr fesselnde Geschichte.",
      },
    ],
  },
  {
    name: "Move, Sweat, Thrive",
    cover: "book5",
    description: "Get to know the power of daily exercise.",
    author: "Elara Vázquez",
    likes: 1300,
    liked: true,
    price: 16.75,
    publishedYear: 2024,
    genre: "Health & Fitness",
    bestseller: true,
    comments: [],
  },
  {
    name: "Nutrition & Diet",
    cover: "book6",
    description: "Learn all about most effectiv metabolism boost plans.",
    author: "Kaelen Voss",
    likes: 890,
    liked: false,
    price: 12.3,
    publishedYear: 2022,
    genre: "Health & Fitness",
    bestseller: false,
    comments: [
      {
        name: "AlwaysLearn23",
        comment: "Perfect book when you´re working out for muscle building.",
      },
      {
        name: "JustMe",
        comment: "Bei Übergewicht reicht Kalorienzählen allein nicht. Mir haben die Tipps in diesem Buch geholfen.",
      },
    ],
  },
  {
    name: "Mental Health",
    cover: "book7",
    description: "Stronger Mind, Stronger Body. Explore resilience from cultural context and practical strategies-",
    author: "Zanele Mokoena",
    likes: 1450,
    liked: true,
    price: 21.0,
    publishedYear: 2025,
    genre: "Health & Fitness",
    bestseller: false,
    comments: [
      {
        name: "FullOfEnergy",
        comment: "Die Zusammenhänge zwischen Sport, Immunsystem und Gehirnleistung sind in diesem Buch extrem gut erklärt.",
      },
    ],
  },
  {
    name: "Das verborgene Königreich",
    cover: "book8",
    description: "A magical fantasy adventure where ancient secrets, and a young hero’s destiny intertwine in a battle for freedom.",
    author: "Elena Gold",
    likes: 920,
    liked: false,
    price: 17.5,
    publishedYear: 2020,
    genre: "Fantasy",
    bestseller: false,
    comments: [
      {
        name: "Bookworm92",
        comment: "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.",
      },
      {
        name: "BücherLiebhaber",
        comment: "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd.",
      }
    ],
  },
  {
    name: "Liebe in Zeiten des Krieges",
    cover: "book9",
    description: "Heartfelt moments set during World War II, told through a child's eyes.",
    author: "Emilia Rot",
    likes: 1800,
    liked: true,
    price: 19.99,
    publishedYear: 2016,
    genre: "Romance",
    bestseller: false,
    comments: [
      {
        name: "Bibliophile23",
        comment: "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen.",
      },
      {
        name: "StorySeeker",
        comment: "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat.",
      },
      {
        name: "SciFiExplorer",
        comment: "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig.",
      },
    ],
  },
];

function init() {
  loadAllBooks();
  checkLikeStatus();
}

function loadAllBooks() {
  for (let i = 0; i < books.length; i++) {
    let bookTitles = books[i].name;
    let bookCovers = books[i].cover;
    let bookAuthor = books[i].author;
    let bookDescription = books[i].description;
    let bookLikes = books[i].likes;
    let bookPrices = books[i].price;
    let bookYear = books[i].publishedYear;
    let bookGenre = books[i].genre;
    document.getElementById("render_single_books").innerHTML += 
    renderBookTemplate(i,bookTitles,bookCovers,bookAuthor,bookDescription,bookLikes,bookPrices,bookYear,bookGenre);
    getCoverImages(bookCovers);
    getComment(i, bookLikes);
  }
}

function getCoverImages(cover) {
  document.getElementById(`${cover}`).style.backgroundImage = `url('./assets/img/${cover}.png')`;
}

function getComment(i){
  for (let j = 0; j < books[i].comments.length; j++) {
    let comment = books[i].comments[j].comment;
    let user = books[i].comments[j].name;
    document.getElementById(`written_comments${i}`).innerHTML += renderComments(user,comment);
  }
}

function checkLikeStatus() {
  for (let i = 0; i < books.length; i++) {
    let likeStatus = books[i].liked
    if (likeStatus == true) {
      document.getElementById(`not_liked${i}`).classList.add("d_none");
      document.getElementById(`liked${i}`).classList.remove("d_none");
    }
  }
}

let currentLikes;

function LikeOrDislike(a, likes, i, event) {
  if (a == 1) {
    let newLike = likes + 1;
    document.getElementById(`like_number${i}`).innerHTML = newLike;
    document.getElementById(`liked${i}`).classList.remove("d_none");
    document.getElementById(`not_liked${i}`).classList.add("d_none");
  }
  if (a < 0) {
    let newLike = likes - 1;
    document.getElementById(`like_number${i}`).innerHTML = newLike;
    document.getElementById(`liked${i}`).classList.add("d_none");
    document.getElementById(`not_liked${i}`).classList.remove("d_none");
  }
  event.stopPropagation();
}

function sendComment(i) {
  let name = document.getElementById("username").innerHTML;
  let comment = document.getElementById(`comment_text${i}`).value;

  if (comment !== "") {
    document.getElementById(`written_comments${i}`).innerHTML += `<p class="saved_comment">${name}: <br> ${comment}</p>`;
  } else {
    alert("Fill in a comment, please!");
  }
  document.getElementById(`comment_text${i}`).value = "";
}

function triggerSidebar(event) {
  document.getElementById("sidebar").classList.toggle("d_none");
  event.stopPropagation();
}

function removeSidebar(event) {
  document.getElementById("sidebar").classList.add("d_none");
  event.stopPropagation();
}

function removeDNone(event) {
  document.getElementById("sidebar").classList.remove("d_none");
  event.stopPropagation();
}