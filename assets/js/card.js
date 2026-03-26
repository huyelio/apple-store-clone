export function createCardsshelf(productItem) {
  return `
  <div class="cardsshelf-scroller-item">
    <div class="cardsshelf-item-header-container">
      <div class="cardsshelf-title">${productItem.title}</div>
      <div class="cardsshelf-subtitle">${productItem.subtitle}</div>
      <div class="cardsshelf-description">${productItem.description}</div>
    </div>
    <div class="cardsshelf-image">
      <img src="${productItem.image}" alt="${productItem.title}">
    </div>
  </div>
  `;
}
