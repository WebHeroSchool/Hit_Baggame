// тут мы жмем на кнопку, чтоб выбрать уровень м б добавить класс active, который добавляет псевдоэлемент и обозначить его красным квадратиком 

let level = document.querySelectorAll('.level-item'),
	startpage = document.querySelector('.start-page'),
	button = document.querySelector('.start-page__button'),
	game__field = document.querySelector('.game__field');


level.addEventListener('click', function() {
	 for (let i = 0; i < level.length; i++) {
        level[i].classList.remove('active');       
    }

		this.classList.add('active');
});



button.addEventListener('click', function() {
	startpage.classList.add('off');
	game__field.classList.remove('off');
// Это надо засунуть в цикл, код вязанный к выбранному уровню 
	let el = document.createElement('div');
	el.classList.add("card");
	game__field.append(el);
// если изи есть класс актив, то 3,

});



// тут надо сделать клик на начать игру и очистить всю страницу, добавив класс off для start-page

//  добавляем количество карт 3/6/10 if (e.target.classList.contains('active') это для привязки getAttribute()