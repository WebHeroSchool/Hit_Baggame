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
	event.target.classList.add('rotate');
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
			const windowInnerWidth = window.innerWidth;
			for (let i = 0; i < counterCards; i++) {
				createCard();
				

			}

				if (counterCards == 6 || counterCards ==3) {
					game__field.style.maxWidth = 960 + 'px';
				} 

				if (counterCards == 10) {
					game__field.style.maxWidth = 1385 + 'px';
					
					// if ( windowInnerWidth <= 1408 &&  windowInnerWidth >= 1114) {
					// 	document.querySelectorAll('.card').forEach(function(item) {
					// 	item.style.width = 200 + 'px';
					// 	item.style.height = 312 + 'px';
					// 	});
					// } else if ( windowInnerWidth <= 950 &&  windowInnerWidth >= 769) {
					// 	document.querySelectorAll('.card').forEach(function(item) {
					// 	item.style.width = 160 + 'px';
					// 	item.style.height = 246 + 'px';
					// 	});
					// };

					cards10 = document.querySelectorAll('.card');
					console.log(cards10);
					cards10.forEach(function(item) {
						item.classList.add('cards10');
						item.classList.remove('card');
					});
				}

		let bag = Math.floor(Math.random()*counterCards);
		let cardBag  = document.querySelectorAll('.card')[bag];
		cardBag.onclick = () => {
		cardBag.style.background = "url(img/card_with_bag.png)";
		}
	}
}
});
