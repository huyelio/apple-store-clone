export function createSquareCard(benefitItem) {
  return `
  <div class="square-card-item">
   <div class="square-card-item-icon">
      ${benefitItem.icon}
    </div>
    <div class="square-card-item-header-container">
      <div class="square-card-item-first-title">${benefitItem.firstTitle} <span class="square-card-item-second-title">${benefitItem.secondTitle}</span></div>
    </div>
  </div>
  `;
}
