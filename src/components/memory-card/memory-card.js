//memory-card
function CreateMemoryCard() {
  const $memoryCard = document.createElement("article");

  const $iconCollab = `
  <img
    src='img/icon-collabcode.png'
    alt='icon Collabcode'
    class='icon'
  />
  `;
  $memoryCard.classList.add("memory-card");

  $wrapCards.insertBefore($memoryCard, null);
  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}

//memory-card variation
function CreateMemoryCardFront() {
  const $memoryCardFront = document.createElement("article");

  const $iconCollab = `
  <img
    src='img/icon-c.png'
    alt='C limguagem'
    class='icon'
  />
  `;
  $memoryCardFront.classList.add("memory-card");
  $memoryCardFront.classList.add("-front");
  $wrapCards.insertBefore($memoryCardFront, null);
  $memoryCardFront.insertAdjacentHTML("afterbegin", $iconCollab);
}

function flipcaCard() {
  this.classList.toggle
}