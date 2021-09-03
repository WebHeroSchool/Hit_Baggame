let level = document.querySelectorAll('.level-item'),
	startpage = document.querySelector('.start-page'),
	button = document.querySelector('.start-page__button'),
	counterCards,
	gameField = document.querySelector('.game__field');
	
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
	el.id = 'card';
	gameField.append(el);
	el.addEventListener('click', flipCard);
}

let counterClick=0;

const flipCard = (event) => {
	event.target.className = 'flip-card-game_over';
	event.target.classList.add('rotate');
	if (counterCards == 10) {
		event.target.classList.remove('flip-card-game_over');
		event.target.classList.add('flip-card-game_over10');
	}
	counterClick++;
	if (counterClick > 1) window.location.reload();
}

// Начинаем игру
button.addEventListener('click', function() {
	startpage.classList.add('off');
	gameField.style.display = 'flex';

	for (let i = 0; i < level.length; i++) {
		if (level[i].classList.contains('active')) {	
			counterCards = level[i].getAttribute('data-card');				
			
			for (let i = 0; i < counterCards; i++) {
				createCard();
			}

			if (counterCards == 6 || counterCards ==3) {
				gameField.style.maxWidth = 960 + 'px';
			} 

			if (counterCards == 10) {
				gameField.style.maxWidth = 1385 + 'px';

				let cards10 = document.querySelectorAll('.card');
					
				cards10.forEach(function(item) {
					item.classList.add('cards10');
					item.classList.remove('card');
				});
			}

		let bag = Math.floor(Math.random()*counterCards);
		console.log(bag);
		let cardBag  = document.querySelectorAll('#card')[bag];
		cardBag.onclick = () => {
		cardBag.style.backgroundImage = "url(img/card_bag.png)";
		}
	}
}
});
