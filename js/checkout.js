displayOrderSummary();

document.getElementById("confirm-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const name = document.getElementById("cardholder-name").value.trim();
  const card = document.getElementById("card-number").value.trim();
  const expiry = document.getElementById("expiry").value.trim();
  const cvv = document.getElementById("cvv").value.trim();

  let valid = true;

  function setError(id, inputId, message) {
    document.getElementById(id).textContent = message;
    document.getElementById(inputId).classList.add("input-error");
  }

  function clearError(id, inputId) {
    document.getElementById(id).textContent = "";
    document.getElementById(inputId).classList.remove("input-error");
  }

  if (/^[a-zA-Z\s]+$/.test(name) && name.length > 0) {
    clearError("error-name", "cardholder-name");
  } else {
    setError("error-name", "cardholder-name", "Name must contain letters only.");
    valid = false;
  }

  if (/^\d{16}$/.test(card)) {
    clearError("error-card", "card-number");
  } else {
    setError("error-card", "card-number", "Card number must be 16 digits.");
    valid = false;
  }

  if (/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
    clearError("error-expiry", "expiry");
  } else {
    setError("error-expiry", "expiry", "Use MM/YY format (e.g. 09/28).");
    valid = false;
  }

  if (/^\d{3}$/.test(cvv)) {
    clearError("error-cvv", "cvv");
  } else {
    setError("error-cvv", "cvv", "CVV must be 3 digits.");
    valid = false;
  }

  if (valid) {
    window.location.href = "confirmation.html";
  }
});
