// массив карточек
export const initialCards = [{
    description: 'Сказочное заморское яство',
    descriptionSelectedHover: 'Котэ не одобряет?',
    flavor: 'с фуа-гра',
    portionsAmount: '10 ',
    portions: 'порций',
    presentAmount: '',
    present: 'мышь в подарок',
    weight: '0,5',
    info: 'Чего сидишь? Порадуй котэ, ',
    buy: 'купи.',
    infoSelected: 'Печень утки разварная с артишоками.',
    infoDisabled: 'Печалька, с фуа-гра закончился.',
    isSelected: false,
    isDisabled: false,
  },
  {
    description: 'Сказочное заморское яство',
    descriptionSelectedHover: 'Котэ не одобряет?',
    flavor: 'с рыбой',
    portionsAmount: '40 ',
    portions: 'порций',
    presentAmount: '2 ',
    present: 'мыши в подарок',
    weight: '2',
    info: 'Чего сидишь? Порадуй котэ, ',
    buy: 'купи.',
    infoSelected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    infoDisabled: 'Печалька, с рыбой закончился.',
    isSelected: false,
    isDisabled: false,
  },
  {
    description: 'Сказочное заморское яство',
    descriptionSelectedHover: 'Котэ не одобряет?',
    flavor: 'с курой',
    portionsAmount: '100 ',
    portions: 'порций',
    presentAmount: '5 ',
    present: 'мышей в подарок заказчик доволен',
    weight: '5',
    info: 'Чего сидишь? Порадуй котэ, ',
    buy: 'купи.',
    infoSelected: 'Филе из цыплят с трюфелями в бульоне.',
    infoDisabled: 'Печалька, с курой закончился.',
    isSelected: false,
    isDisabled: true,
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
