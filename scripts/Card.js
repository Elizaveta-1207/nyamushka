export class Card {
  constructor({
    description,
    flavor,
    portions,
    present,
    weight
  }, cardSelector) {
    this._description = description;
    this._flavor = flavor;
    this._portions = portions;
    this._present = present;
    this._weight = weight;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__description').textContent = this._description;
    this._element.querySelector('.element__flavor').textContent = this._flavor;
    this._element.querySelector('.element__portions').textContent = this._portions;
    this._element.querySelector('.element__present').textContent = this._present;
    this._element.querySelector('.element__weight').textContent = this._weight

    return this._element;
  }

  _setEventListeners() {
    const elementCard = this._element.querySelector('.element__card');
    const element = this._element;

    elementCard.addEventListener('click', function (evt) {
      element.classList.toggle('element_selected');
      this.classList.toggle('element__card_selected');
      this.querySelector('.element__marker').classList.toggle('element__marker_selected');
    });
  }

}
