const symbols = ["🍒", "🍋", "🍉", "💎", "🍇", "🍊", "7️⃣"];

function getRandomSymbol() {
  const index = Math.floor(Math.random() * symbols.length);
  return symbols[index];
}

function spin() {
  const slot1 = getRandomSymbol();
  const slot2 = getRandomSymbol();
  const slot3 = getRandomSymbol();

  document.getElementById("slot1").textContent = slot1;
  document.getElementById("slot2").textContent = slot2;
  document.getElementById("slot3").textContent = slot3;

  const resultDisplay = document.getElementById("result");

  if (slot1 === slot2 && slot2 === slot3) {
    resultDisplay.textContent = " Well done!!";
    resultDisplay.style.color = "#2ecc71"; 
  } else {
    resultDisplay.textContent = "Pffft, you lose";
    resultDisplay.style.color = "#e74c3c"; 
  }
}

