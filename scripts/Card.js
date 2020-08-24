export class Card {
  constructor({
    description,
    flavor,
    portions,
    present,
    weight,
    infoSelected,
    isSelected
  }, cardSelector) {
    this._description = description;
    this._flavor = flavor;
    this._portions = portions;
    this._present = present;
    this._weight = weight;
    this._cardSelector = cardSelector;
    this._infoSelected = infoSelected;
    this._isSelected = isSelected;
    this._cardSelected = this._cardSelected.bind(this);
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

    this._card = this._element.querySelector('.element__card');
    this._card.addEventListener('click', this._cardSelected);
  }

  _cardSelected() {
    this._card.classList.toggle('element__card_selected');
    this._card.querySelector('.element__marker').classList.toggle('element__marker_selected');

    this._element.classList.toggle('element_selected');
    this._isSelected = !this._isSelected;
    console.log(this._isSelected);
    // if (isSelected == true) {
    //   element.querySelector('.element__info').textContent = this._infoSelected;
    // }

  }

}