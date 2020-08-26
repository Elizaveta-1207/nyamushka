export class Card {
  constructor({
    description,
    descriptionSelectedHover,
    flavor,
    portionsAmount,
    portions,
    presentAmount,
    present,
    weight,
    info,
    buy,
    infoSelected,
    infoDisabled,
    isSelected,
    isDisabled
  }, cardSelector) {
    this._description = description;
    this._descriptionSelectedHover = descriptionSelectedHover;
    this._flavor = flavor;
    this._portionsAmount = portionsAmount;
    this._portions = portions;
    this._presentAmount = presentAmount;
    this._present = present;
    this._weight = weight;
    this._info = info;
    this._buy = buy;
    this._cardSelector = cardSelector;
    this._infoSelected = infoSelected;
    this._infoDisabled = infoDisabled;
    this._isSelected = isSelected;
    this._isDisabled = isDisabled;
    this._cardSelected = this._cardSelected.bind(this);
    this._cardHover = this._cardHover.bind(this);
    this._cardHoverOn = this._cardHoverOn.bind(this);
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

    const amountPortions = this._element.querySelector('.element__portions-amount');
    this._element.querySelector('.element__portions').textContent = this._portions;
    this._element.querySelector('.element__portions').prepend(amountPortions);
    amountPortions.textContent = this._portionsAmount;

    const amountPresent = this._element.querySelector('.element__present-amount');
    this._element.querySelector('.element__present').textContent = this._present;
    this._element.querySelector('.element__present').prepend(amountPresent);
    console.log(this._element.querySelector('.element__present'));
    amountPresent.textContent = this._presentAmount;

    this._element.querySelector('.element__weight').textContent = this._weight;

    if (this._isDisabled) {
      this._element.querySelector('.element__info-change').textContent = this._infoDisabled;
      this._element.querySelector('.element__info-change').classList.add('element__info_disabled');
      this._element.querySelector('.element__card').classList.add('element__card_disabled');
      this._element.querySelector('.element__marker').classList.add('element__marker_disabled');
      this._element.querySelector('.element__info-default').classList.add('element__info_hidden');

    } else if (this._isSelected) {
      this._element.querySelector('.element__info-change').textContent = this._infoSelected;
      this._element.querySelector('.element__card').classList.add('element__card_selected');
      this._element.querySelector('.element__marker').classList.add('element__marker_selected');
      this._element.querySelector('.element__info-default').classList.add('element__info_hidden');
    } else {
      const elementBuy = this._element.querySelector('.element__buy');
      this._element.querySelector('.element__info-default').textContent = this._info;
      this._element.querySelector('.element__info-default').append(elementBuy);
      elementBuy.textContent = this._buy;
      this._element.querySelector('.element__info-change').classList.add('element__info_hidden');
    }

    return this._element;
  }

  _setEventListeners() {

    this._card = this._element.querySelector('.element__card');
    this._card.addEventListener('click', this._cardSelected);
    this._card.addEventListener('mouseleave', this._cardHover);
    this._card.addEventListener('mouseenter', this._cardHoverOn);

    this._element.querySelector('.element__buy').addEventListener('click', this._cardSelected);
  }

  _cardHoverOn() {
    if (this._isSelected) {

      this._element.querySelector('.element__description').textContent = this._description;
      this._element.querySelector('.element__description').classList.remove('element__description_selected-hover');
    }
  }

  _cardHover() {
    if (this._isSelected) {
      this._element.querySelector('.element__description').textContent = this._descriptionSelectedHover;
      this._element.querySelector('.element__description').classList.add('element__description_selected-hover');
    }
  }

  _cardSelected() {
    this._card.classList.toggle('element__card_selected');
    this._card.querySelector('.element__marker').classList.toggle('element__marker_selected');


    this._isSelected = !this._isSelected;

    if (this._isSelected) {
      this._element.querySelector('.element__info-change').textContent = this._infoSelected;
      this._element.querySelector('.element__info-change').classList.remove('element__info_hidden');
      this._element.querySelector('.element__info-default').classList.add('element__info_hidden');
    } else {

      const elementBuy = this._element.querySelector('.element__buy');
      this._element.querySelector('.element__info-default').textContent = this._info;
      this._element.querySelector('.element__info-default').append(elementBuy);
      elementBuy.textContent = this._buy;
      this._element.querySelector('.element__info-change').classList.add('element__info_hidden');
      this._element.querySelector('.element__info-default').classList.remove('element__info_hidden');
    }

  }

}
