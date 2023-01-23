import "./style.css";

const divQuote = document.querySelector('.wrapper_quote');
const buttonGenerate = document.querySelector('.wrapper_buttons_btnGenerate');

const quotesAuthors = ['"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty." - Winston Churchill',
  '"The only person you are destined to become is the person you decide to be." - Ralph Waldo Emerson',
  '"Go confidently in the direction of your dreams. Live the life you have imagined." - Henry David Thoreau',
  '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character." - Unknown',
  '"Go confidently in the direction of your dreams. Live the life you have imagined." - Henry David Thoreau',
  '"I am not a product of my circumstances. I am a product of my decisions. " - Stephen Covey',
  '"The Way Get Started Is To Quit Talking And Begin Doing." - Walt Disney',
  '"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me." - Erma Bombeck',
  '"Your time is limited, so don’t waste it living someone else’s life." - Steve Jobs',
  '"Don’t Let Yesterday Take Up Too Much Of Today." - Will Rogers',
  '"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you." - Jesus',
  '"Whether you think you can or you think you can’t, you’re right." - Henry Ford',
  '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing" - Aristotle',
  '"People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily." - Zig Ziglar',
  '"Every strike brings me closer to the next home run." - Babe Ruth'];


// Фун-ия добавляет цитаты
function addQuote() {
  divQuote.textContent = '';

  const arrayQuotes = smashQuotes(quotesAuthors);
  const generate = generateQuote(arrayQuotes);

  const p = document.createElement('p');
  p.textContent = arrayQuotes[generate][1];

  const span = document.createElement('span');
  span.className = 'author';
  span.textContent = arrayQuotes[generate][0];
  p.appendChild(span);

  divQuote.appendChild(p);

  buttonGenerate.addEventListener('click', addQuote);
}
addQuote();


// Вспомогательная фун-ия, генерирует элемент массива
function generateQuote(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Вспомогательная фун-ия, разбивает массив, возвращает массив [ [ключ:значение] ]
function smashQuotes(array) {
  const obj = {};

  array.forEach(v => {
    const author = v.replace(/^".+"/g, '').replace(/^\s/,'');
    obj[author] = v.replace(author, '').replace(/\s$/, '');
  })

  return Object.entries(obj);
}

