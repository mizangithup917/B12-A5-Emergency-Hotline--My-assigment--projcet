
const heartCount = document.getElementById("heartCount");
const coinNubmer = document.getElementById("coin_nubmer");
const copyCount = document.getElementById("copy_count");
const historyList = document.getElementById("history_list");
const clearHistoryBtn = document.getElementById("clear_history_btn");
const cardBox = document.getElementById("card_box");

let hearts = 0;
let coins = 100;
let copies = 0;

cardBox.addEventListener("click", (e) => {
  const target = e.target;

  const heartBtn = target.closest(".heartBtn");
  const copyBtn = target.closest(".copyBtn");
  const callBtn = target.closest(".callBtn");

  // Heart Button--------------
  if (heartBtn) {
    hearts++;
    heartCount.textContent = hearts;
  }

  // Copy Button----------
  if (copyBtn) {
    const card = copyBtn.closest(".card");
    const number = card.querySelector(".number").textContent;
    navigator.clipboard.writeText(number);
    alert(`Number copied: ${number}`);
    copies++;
    copyCount.textContent = copies;
  }

  // Call Button---------
  if (callBtn) {
    const card = callBtn.closest(".card");
    const number = card.querySelector(".number").textContent;
    const name = card.querySelector("h4").textContent;

    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    coins -= 20;
    coinNubmer.textContent = coins;

    alert(`Calling ${name} at ${number}`);

    // Time part js------
    const time = new Date().toLocaleTimeString("en-BD", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Dhaka",
    });


    // Call List history part-----------------
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-2">
        <div>
          <p class="font-bold text-xl">${name}</p>
          <p class="text-gray-600 font-semibold text-xl">${number}</p>
        </div>
        <span class="text-lg text-gray-500 font-semibold">${time}</span>
      </div>
    `;
    historyList.appendChild(li);
  }
});

// Clear History
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
