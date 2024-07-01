document.addEventListener("DOMContentLoaded", () => {
  function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().slice(-12, -4);
    const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });

    document.querySelector('[data-testid="currentTimeUTC"]').textContent =
      utcTime;
    document.querySelector('[data-testid="currentDay"]').textContent =
      dayOfWeek;
  }

  updateTimeAndDay();
  setInterval(updateTimeAndDay, 1000);
});
