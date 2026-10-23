function myLineUp(event) {
  // 1. Prevent default form reload first
  event.preventDefault();

  // 2. Get form element
  const form = document.getElementById("lineupForm");

  // 3. Retrieve form inputs
  const statusElement = form.querySelector('input[name="status"]:checked');
  const status = statusElement ? statusElement.value : "None";

  const gameDate = form.gameDate.value;

  const selectedPlayers = Array.from(
    form.querySelectorAll('input[name="players"]:checked')
  ).map((cb) => cb.value);

  // 4. Log values to console
  console.log("Status:", status);
  console.log("Game Date:", gameDate);
  console.log("Players:", selectedPlayers);

  // 5. Concatenate and display on page
  const playerText =
    selectedPlayers.length > 0 ? selectedPlayers.join(", ") : "None";
  const summary = `Status: ${status} | Date: ${gameDate} | Players: ${playerText}`;

  document.getElementById("displayArea").textContent = summary;
}

// Attach submit event listener
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("lineupForm");
  if (form) {
    form.addEventListener("submit", myLineUp);
  }
});