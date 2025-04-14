// Update the vitals data dynamically
function updateVitals() {
    const heartRate = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
    const bloodPressure = `${Math.floor(Math.random() * (130 - 100 + 1)) + 100}/${Math.floor(Math.random() * (90 - 60 + 1)) + 60}`;
    const oxygenLevel = Math.floor(Math.random() * (100 - 90 + 1)) + 90;

    // Update the heart rate
    document.getElementById("heart-rate-value").textContent = `${heartRate} bpm`;
    document.getElementById("heart-rate-bar").style.width = `${(heartRate - 60) / 40 * 100}%`;

    // Update the blood pressure
    document.getElementById("blood-pressure-value").textContent = bloodPressure;
    document.getElementById("blood-pressure-bar").style.width = `${(parseInt(bloodPressure.split("/")[0]) - 100) / 30 * 100}%`;

    // Update the oxygen level
    document.getElementById("oxygen-level-value").textContent = `${oxygenLevel}%`;
    document.getElementById("oxygen-level-bar").style.width = `${oxygenLevel - 90}%`;
}

// Update the activity stats dynamically
function updateActivity() {
    const steps = Math.floor(Math.random() * (10000 - 7000 + 1)) + 7000;
    const calories = Math.floor(Math.random() * (500 - 300 + 1)) + 300;

    // Update steps
    document.getElementById("steps-count").textContent = `${steps} steps`;
    document.getElementById("steps-bar").style.width = `${(steps - 7000) / 3000 * 100}%`;

    // Update calories burned
    document.getElementById("calories-count").textContent = `${calories} kcal`;
    document.getElementById("calories-bar").style.width = `${(calories - 300) / 200 * 100}%`;
}

// Add dynamic alerts
function showAlert(message, type) {
    const alertsSection = document.getElementById("alerts");
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert");
    alertDiv.classList.add(type === "warning" ? "alert-warning" : "alert-danger");
    alertDiv.innerHTML = `<span class="alert-title">${type === "warning" ? "Warning!" : "Critical!"}</span> ${message}`;
    alertsSection.appendChild(alertDiv);
}

// Emergency button actions
document.getElementById("call-emergency-btn").addEventListener("click", function () {
    alert("Emergency services are being called!");
    // Implement further actions like sending emergency signals, etc.
});

document.getElementById("shake-detection-btn").addEventListener("click", function () {
    alert("Shake detection activated!");
    // Implement shake detection activation here
});

// Initial setup and data load
window.onload = function () {
    updateVitals();
    updateActivity();

    // Simulate alerts
    showAlert("High heart rate detected! Please take a rest.", "warning");
    showAlert("Blood pressure is critical! Please check immediately.", "critical");
};
