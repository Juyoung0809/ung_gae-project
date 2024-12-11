// 실험체 클릭 이벤트 항상 추가
document.querySelectorAll(".experiment-item").forEach((item) => {
  item.addEventListener("click", () => {
    const id = item.getAttribute("data-id"); // 실험체의 id 가져오기
    window.location.href = `experience.html?id=${encodeURIComponent(id)}`;
  });
});

// 필터링 로직
function filterExperiments() {
  const selectedWeapons = [];
  document
    .querySelectorAll('.sidebar input[type="checkbox"]:checked')
    .forEach((checkbox) => {
      selectedWeapons.push(checkbox.id);
    });

  // 필터링 처리
  document.querySelectorAll(".experiment-item").forEach((item) => {
    const itemWeapons = item.getAttribute("data-weapons").split(",");
    const isVisible = selectedWeapons.every((weapon) =>
      itemWeapons.includes(weapon)
    );
    item.style.display =
      isVisible || selectedWeapons.length === 0 ? "block" : "none";
  });
}
function filterExperiments() {
  const selectedWeapons = [];
  document
    .querySelectorAll('.sidebar input[type="checkbox"]:checked')
    .forEach((checkbox) => {
      selectedWeapons.push(checkbox.id);
    });

  document.querySelectorAll(".experiment-item").forEach((item) => {
    const itemWeapons = item.getAttribute("data-weapons").split(",");
    const isVisible = selectedWeapons.every((weapon) =>
      itemWeapons.includes(weapon)
    );
    item.style.display =
      isVisible || selectedWeapons.length === 0 ? "block" : "none";
  });
}

// 검색 기능
function searchExperiments() {
  const query = document.getElementById("searchInput").value.trim();
  document.querySelectorAll(".experiment-item").forEach((item) => {
    const name = item.querySelector(".text").textContent.trim();
    item.style.display =
      name.includes(query) || query === "" ? "block" : "none";
  });
}

// 뒤로 가기 시 체크박스 초기화
window.onload = () => {
  document
    .querySelectorAll('.sidebar input[type="checkbox"]')
    .forEach((checkbox) => {
      checkbox.checked = false; // 체크박스 초기화
    });
};
