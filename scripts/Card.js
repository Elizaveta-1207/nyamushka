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
  }, elementSelector, {
    cardSelector,
    descriptionSelector,
    flavorSelector,
    portionsSelector,
    portionsAmountSelector,
    presentSelector,
    presentAmountSelector,
    markerSelector,
    weightSelector,
    infoDefaultSelector,
    infoChangeSelector,

  }) {
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
    this._infoSelected = infoSelected;
    this._infoDisabled = infoDisabled;
    this._isSelected = isSelected;
    this._isDisabled = isDisabled;
    this._elementSelector = elementSelector;

    this._cardSelector = cardSelector;
    this._descriptionSelector = descriptionSelector;
    this._flavorSelector = flavorSelector;
    this._portionsSelector = portionsSelector;
    this._portionsAmountSelector = portionsAmountSelector;
    this._presentSelector = presentSelector;
    this._presentAmountSelector = presentAmountSelector;
    this._markerSelector = markerSelector;
    this._weightSelector = weightSelector;
    this._infoDefaultSelector = infoDefaultSelector;
    this._infoChangeSelector = infoChangeSelector;

    this._cardSelected = this._cardSelected.bind(this);
    this._cardHover = this._cardHover.bind(this);
    this._cardHoverOn = this._cardHoverOn.bind(this);
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._elementSelector).content.querySelector('.element').cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(this._descriptionSelector).textContent = this._description;
    this._element.querySelector(this._flavorSelector).textContent = this._flavor;

    const amountPortions = this._element.querySelector(this._portionsAmountSelector);
    const portions = this._element.querySelector(this._portionsSelector)
    portions.textContent = this._portions;
    portions.prepend(amountPortions);
    amountPortions.textContent = this._portionsAmount;

    const amountPresent = this._element.querySelector(this._presentAmountSelector);
    const present = this._element.querySelector(this._presentSelector);
    present.textContent = this._present;
    present.prepend(amountPresent);
    amountPresent.textContent = this._presentAmount;

    this._element.querySelector(this._weightSelector).textContent = this._weight;

    const card = this._element.querySelector(this._cardSelector);
    const marker = this._element.querySelector(this._markerSelector);
    const infoDefault = this._element.querySelector(this._infoDefaultSelector);
    const infoChange = this._element.querySelector(this._infoChangeSelector);

    if (this._isDisabled) {
      infoChange.textContent = this._infoDisabled;
      infoChange.classList.add('element__info_disabled');
      card.classList.add('element__card_disabled');
      marker.classList.add('element__marker_disabled');
      infoDefault.classList.add('element__info_hidden');

    } else if (this._isSelected) {
      infoChange.textContent = this._infoSelected;
      card.classList.add('element__card_selected');
      marker.classList.add('element__marker_selected');
      infoDefault.classList.add('element__info_hidden');
    } else {
      const elementBuy = this._element.querySelector('.element__buy');
      infoDefault.textContent = this._info;
      infoDefault.append(elementBuy);
      elementBuy.textContent = this._buy;
      infoChange.classList.add('element__info_hidden');
    }

    return this._element;
  }

  _setEventListeners() {
    if (!this._isDisabled) {
      this._card = this._element.querySelector(this._cardSelector);
      this._card.addEventListener('click', this._cardSelected);
      this._card.addEventListener('mouseleave', this._cardHover);
      this._card.addEventListener('mouseenter', this._cardHoverOn);

      this._element.querySelector('.element__buy').addEventListener('click', this._cardSelected);
    }
  }

  _cardHoverOn() {
    if (this._isSelected) {
      const description = this._element.querySelector(this._descriptionSelector);
      description.textContent = this._description;
      description.classList.remove('element__description_selected-hover');
    }
  }

  _cardHover() {
    if (this._isSelected) {
      const description = this._element.querySelector(this._descriptionSelector);
      description.textContent = this._descriptionSelectedHover;
      description.classList.add('element__description_selected-hover');
    }
  }

  _cardSelected() {
    this._card.classList.toggle('element__card_selected');
    this._card.querySelector(this._markerSelector).classList.toggle('element__marker_selected');


    this._isSelected = !this._isSelected;

    const infoDefault = this._element.querySelector(this._infoDefaultSelector);
    const infoChange = this._element.querySelector(this._infoChangeSelector);

    if (this._isSelected) {
      infoChange.textContent = this._infoSelected;
      infoChange.classList.remove('element__info_hidden');
      infoDefault.classList.add('element__info_hidden');
    } else {

      const elementBuy = this._element.querySelector('.element__buy');
      infoDefault.textContent = this._info;
      infoDefault.append(elementBuy);
      elementBuy.textContent = this._buy;
      infoChange.classList.add('element__info_hidden');
      infoDefault.classList.remove('element__info_hidden');
    }

  }

}
