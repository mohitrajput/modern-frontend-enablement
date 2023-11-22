document.addEventListener("DOMContentLoaded", function () {
    const countdownSection = document.getElementById("countdown");
    const loadingSpinner = document.getElementById("loading");
    const yearContainer = document.getElementById("year");
  
    function calculateTimeRemaining() {
      const currentDate = new Date();
      const nextYear = new Date(currentDate.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
      const timeRemaining = nextYear - currentDate;
  
      const totalSeconds = Math.floor(timeRemaining / 1000);
      const days = Math.floor(totalSeconds / (24 * 60 * 60));
      const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = totalSeconds % 60;
  
      return {days,hours,minutes,seconds,};
    }
  
    function updateCountdown() {
      const timeRemaining = calculateTimeRemaining();
      document.getElementById("days").textContent = timeRemaining.days.toString().padStart(2, "0");
      document.getElementById("hours").textContent = timeRemaining.hours.toString().padStart(2, "0");
      document.getElementById("minutes").textContent = timeRemaining.minutes.toString().padStart(2, "0");
      document.getElementById("seconds").textContent = timeRemaining.seconds.toString().padStart(2, "0");
    }
  
    function showSpinner() {
      loadingSpinner.style.display = "block";
      countdownSection.style.display = "none";
    }
  
    function hideSpinner() {
      loadingSpinner.style.display = "none";
      countdownSection.style.display = "flex";
    }
  
    function updateYear() {
      const currentYear = new Date().getFullYear();
      yearContainer.textContent = currentYear + 1;
    }
    
      showSpinner();
      updateYear();
  
  
    window.addEventListener("load", function () {
      setTimeout(function () {
        hideSpinner();
      }, 500);
      updateYear();
      updateCountdown();
      setInterval(updateCountdown, 1000);
    });
  });