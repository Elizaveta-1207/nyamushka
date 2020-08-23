// массив карточек
export const initialCards = [{
    description: 'Сказочное заморское яство',
    descriptionSelectedHover: 'Котэ не одобряет?',
    flavor: 'с фуа-гра',
    portions: '10 порций',
    present: 'мышь в подарок',
    weight: '0,5',
    infoSelected: 'Печень утки разварная с артишоками.',
    infoDisabled: 'Печалька, с фуа-гра закончился.',
  },
  {
    description: 'Сказочное заморское яство',
    descriptionSelectedHover: 'Котэ не одобряет?',
    flavor: 'с рыбой',
    portions: '40 порций',
    present: '2 мыши в подарок',
    weight: '2',
    infoSelected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    infoDisabled: 'Печалька, с рыбой закончился.',
  },
  {
    description: 'Сказочное заморское яство',
    descriptionSelectedHover: 'Котэ не одобряет?',
    flavor: 'с курой',
    portions: '100 порций',
    present: '5 мышей в подарок заказчик доволен',
    weight: '5',
    infoSelected: 'Филе из цыплят с трюфелями в бульоне.',
    infoDisabled: 'Печалька, с курой закончился.',
  },
];

// объект настроек с селекторами и классами формы
export const validationParams = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export const templateId = '#element';
