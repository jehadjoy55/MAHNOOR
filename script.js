let pageCount = 1;

document.getElementById("next-page").addEventListener("click", () => {
  pageCount++;
  const newPage = document.createElement("div");
  newPage.classList.add("envelope");
  newPage.innerHTML = `
    <div class="back"></div>
    <div class="letter">
      <div class="heart"></div>
      <div class="text">
        <p>এই হচ্ছে পৃষ্ঠা ${pageCount}, তোমাকে ভালোবাসি!</p>
        <a href="javascript:void(0)" id="next-page-${pageCount}">Click here</a>
      </div>
    </div>
    <div class="front"></div>
    <div class="top"></div>
    <div class="shadow"></div>
    <div class="text1">
      <h2>পৃষ্ঠা ${pageCount} এ স্বাগতম</h2>
    </div>`;
  document.body.appendChild(newPage);

  document
    .getElementById(`next-page-${pageCount}`)
    .addEventListener("click", () => {
      window.location.reload();
    });
});
