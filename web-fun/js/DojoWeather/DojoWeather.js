function showAlert(cityName) {
  alert("Loading weather report...");
}

function acceptCookie() {
  document.getElementById("cookieBox").remove();
}

function convertTemp(unit) {
  let temps = document.querySelectorAll(".temp");

  for (let i = 0; i < temps.length; i++) {
    let value = parseInt(temps[i].innerText);

    if (unit === "f") {
      temps[i].innerText = Math.round((value * 9) / 5 + 32);
    } else {
      temps[i].innerText = Math.round(((value - 32) * 5) / 9);
    }
  }
}
