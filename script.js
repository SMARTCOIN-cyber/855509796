document.addEventListener("DOMContentLoaded", function () {
    const accessCode = "855509796"; // Change this to your own code

    const enteredCode = prompt("Enter Tracking Code:");

    if (enteredCode !== accessCode) {
        document.body.innerHTML = `
            <div style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:Arial;">
                <h1>❌ Access Denied</h1>
            </div>
        `;
        return; // Stops the rest of your JavaScript from running
    }
});// =========================================
// SGK Global Shipping Tracking Portal
// =========================================

// Live Status Messages
const statusMessages = [
    "Establishing secure connection...",
    "Connecting to SGK Global Shipping Network...",
    "Verifying Booking Number 855509796...",
    "Booking successfully verified.",
    "Checking latest shipment activity...",
    "Cargo transit now complete.",
    "Synchronizing cargo movement...",
    "Updating delivery estimate...",
    "Latest checkpoint successfully received."
];

const statusText = document.getElementById("statusText");

let index = 0;

function updateStatus() {

    if (!statusText) return;

    statusText.style.opacity = "0";

    setTimeout(() => {

        statusText.textContent = statusMessages[index];

        statusText.style.opacity = "1";

        index++;

        if (index >= statusMessages.length) {
            index = 0;
        }

    }, 300);

}

updateStatus();

setInterval(updateStatus, 3500);

// Smooth Fade
if (statusText) {
    statusText.style.transition = "opacity .3s ease";
}

// ==============================
// Progress Bar Animation
// ==============================

window.addEventListener("load", () => {

    const progress = document.querySelector(".progress-fill");

    if (progress) {

        progress.style.width = "0%";

        setTimeout(() => {

            progress.style.width = "100%";

        }, 300);

    }

});

// ==============================
// Live Date & Time
// ==============================

function updateTime() {

    const timeBox = document.getElementById("liveTime");

    if (!timeBox) return;

    const now = new Date();

    const options = {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    };

    timeBox.innerHTML = now.toLocaleString("en-GB", options);

}

updateTime();

setInterval(updateTime, 60000);

// ==============================
// Timeline Animation
// ==============================

const timelineItems = document.querySelectorAll(".timeline-item");

timelineItems.forEach((item, i) => {

    item.style.opacity = "0";
    item.style.transform = "translateY(25px)";
    item.style.transition = "all .7s ease";

    setTimeout(() => {

        item.style.opacity = "1";
        item.style.transform = "translateY(0)";

    }, i * 300);

});

// ==============================
// Card Hover Effect
// ==============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ==============================
// Monitor Card Hover
// ==============================

const monitorCards = document.querySelectorAll(".monitor-card");

monitorCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ==============================
// Animated Plane
// ==============================

const plane = document.querySelector(".plane-animation");

if (plane) {

    setInterval(() => {

        plane.animate([
            { transform: "translateX(0px)" },
            { transform: "translateX(12px)" },
            { transform: "translateX(0px)" }
        ], {
            duration: 1800
        });

    }, 1800);

}

// ==============================
// Console Information
// ==============================

console.log("%cSGK Global Shipping Tracking Portal",
"color:#009688;font-size:22px;font-weight:bold;");

console.log("%cBooking Number: 855509796",
"color:#444;font-size:16px;");

console.log("%cShipment Status: TRANSIT NOW COMPLETE",
"color:green;font-size:16px;");

console.log("%cProgress: 100%",
"color:#009688;font-size:16px;");

// ==============================
// Fake Server Heartbeat
// ==============================

setInterval(() => {

    console.log("✔ Secure tracking server connected.");

}, 20000);

// ==============================
// Page Loaded
// ==============================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    document.body.style.transition = "opacity .7s";

    setTimeout(() => {

        document.body.style.opacity = "1";

    }, 100);

});
