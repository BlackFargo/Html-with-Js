function createEl() {
	const menu = document.createElement('ul')
	const image = document.createElement('img')
	image.src = 'images/cat.png';

	function createParagraphAndTitleFunction(el, titleText, paragraphText) {
		const title = document.createElement(el);
		const titleContent = document.createTextNode(titleText);
		const paragraph = document.createElement('p');
		const paragraphContent = document.createTextNode(paragraphText);

		title.appendChild(titleContent);
		paragraph.appendChild(paragraphContent);

		return [title, paragraph];
	}

	const [h1, paragraph1] = createParagraphAndTitleFunction('h1', 'Это мой сайт','Он хороший')
	const [h2, paragraph2] = createParagraphAndTitleFunction('h2', 'Первая секция','Она обо мне')
	const [h3, paragraph3] = createParagraphAndTitleFunction(null, null, 'Но может быть и о семантике, я пока не решил.')
	const [h4, paragraph4] = createParagraphAndTitleFunction('h2', 'Вторая секция', 'Она тоже обо мне')
	const [h5, paragraph5] = createParagraphAndTitleFunction('h2', 'И третья', 'Вы уже должны были начать догадываться.')
		const [h6, paragraph6] = createParagraphAndTitleFunction(null ,null, 'Сюда бы я вписал информацию об авторе и ссылки на другие сайты')

	/////////////////////////////////////////////////////////////////////////////////
	function createMenuFunction(href, text) {
		const menuItem = document.createElement('li');
		const link = document.createElement('a');
		link.href = href;
		link.textContent = text;
		menuItem.appendChild(link)
		menu.appendChild(menuItem)
		return menuItem;
	}

	const firstItem = createMenuFunction(
		'https://cs1.htmlacademy.ru/content/blog/1331/index.html',
		'Эта страница'
	)
	menu.appendChild(firstItem)

	const secondItem = createMenuFunction(
		'https://cs1.htmlacademy.ru/content/blog/1331/catalog.html',
		'Другая страница'
	)
	/////////////////////////////////////////////////////////////////////////////////

	document.body.after(h1, paragraph1);
	paragraph1.after(firstItem);
	firstItem.after(secondItem);
	secondItem.after(h2, paragraph2);
	paragraph2.after(image);
	image.after(paragraph3);
	paragraph3.after(h4, paragraph4);
	paragraph4.after(h5,paragraph5);
	paragraph4.classList.add('margin-bottom')
	paragraph5.style.marginTop = '20px';
	paragraph5.after(paragraph6)
}

createEl()

