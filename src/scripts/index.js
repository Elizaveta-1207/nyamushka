import '../pages/index.css';
import {
  initialCards,
  params,
  templateId
} from './constants.js';

import {
  Card
} from './Card.js';

const elementsList = document.querySelector('.elements__list');

function createCard(data) {
  const card = new Card(data, templateId, params);
  const cardElement = card.generateCard();
  return cardElement;
}

initialCards.forEach((item) => {
  // передаем селектор шаблона карточки в класс Card
  elementsList.append(createCard(item));
});
