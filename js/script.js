import tabs from './module/tabs';

document.addEventListener('DOMContentLoaded', () => {
	tabs({
		buttonSelector: '.tabs__item',
		parentButtonSelector: '.tabs__list',
		contentSelector: '.tabs__content',
		activeClasses: ['show', 'fade'],
		activeButClasses: ['tabs__item-active'],
		hideClasses: ['hide']
	})
});