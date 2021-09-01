let level = document.querySelectorAll('.level-item'),
	startpage = document.querySelector('.start-page'),
	button = document.querySelector('.start-page__button'),
	game__field = document.querySelector('.game__field');
	
//  Выбор уровня
level.forEach (item => item.addEventListener('click', function() {
	for (let i = 0; i < level.length; i++) {
        level[i].classList.remove('active');       
    }
		this.classList.add('active');
}));

// Создание карты на игровом поле
function createCard() {
	let el = document.createElement('div');
	el.classList.add("card");
	game__field.append(el);
	el.addEventListener('click', flipCard);
}

let counterClick=0;

const flipCard = (event) => {
	event.target.className = 'flip-card-game_over';
	counterClick++;
	if (counterClick > 1) window.location.reload();
}

// Начинаем игру
button.addEventListener('click', function() {
	startpage.classList.add('off');
	game__field.style.display = 'flex';

for (let i = 0; i < level.length; i++) {
	if (level[i].classList.contains('active')) {	
		let counterCards = level[i].getAttribute('data-card');				
			for (let i = 0; i < counterCards; i++) {
				createCard();
			if (counterCards == 6 || counterCards ==3) {
				game__field.style.width = 78 + '%';
			}
		}

		let bag = Math.floor(Math.random()*counterCards);
		let cardBag  = document.querySelectorAll('.card')[bag];
		cardBag.onclick = () => {
		cardBag.style.background = "url(img/card_with_bag.png)";
		}
	}
}
});
