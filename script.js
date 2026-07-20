// ===========================================
// AquaRevive Smart Greywater Advisor
// script.js
// ===========================================

function analyseWater() {

    let activity = document.getElementById("activity").value;
    let litres = document.getElementById("time").value;

    if (activity === "" || litres === "") {
        alert("Please select both the activity and the water usage time.");
        return;
    }

    litres = Number(litres);

    // -----------------------------
    // Water Saved Display
    // -----------------------------

    document.getElementById("waterSaved").innerHTML =
        litres.toFixed(1) + " Litres";

    document.getElementById("freshWater").innerHTML =
        litres.toFixed(1) + " Litres";


    // -----------------------------
    // Environmental Impact
    // -----------------------------

    let impact = "";

    switch(activity)
    {

        case "hand":

        impact =
        "🪣 Encourages reuse of greywater for household cleaning.<br><br>" +
        "💧 Helps reduce unnecessary freshwater consumption.";

        break;


        case "vegetables":

        let plants = Math.max(1, Math.round(litres / 2));

        impact =
        "🌱 Can water approximately <b>" +
        plants +
        "</b> small potted plant(s).<br><br>" +
        "💧 Helps conserve freshwater for gardening.";

        break;


        case "utensils":

        impact =
        "🧹 Supports reuse for cleaning outdoor areas.<br><br>" +
        "♻️ Reduces freshwater usage for household cleaning.";

        break;


        case "dishwashing":

        impact =
        "🪣 Promotes reuse for household cleaning.<br><br>" +
        "♻️ Reduces wastewater discharged into drains.";

        break;

    }

    document.getElementById("impact").innerHTML = impact;


    // -----------------------------
    // Best Reuse Recommendation
    // -----------------------------

    let reuse = "";

    switch(activity)
    {

        case "hand":

        reuse =
        "• Floor cleaning<br>" +
        "• Cleaning washrooms<br>" +
        "• Cleaning outdoor surfaces";

        break;


        case "vegetables":

        reuse =
        "• Watering garden plants<br>" +
        "• Washing buckets and watering cans<br>" +
        "• Cleaning outdoor areas";

        break;


        case "utensils":

        reuse =
        "• Cleaning kitchen countertops<br>" +
        "• Floor cleaning<br>" +
        "• Cleaning outdoor areas";

        break;


        case "dishwashing":

        reuse =
        "• Floor cleaning<br>" +
        "• Cleaning outdoor pathways<br>" +
        "• Cleaning outdoor surfaces";

        break;

    }

    document.getElementById("reuse").innerHTML = reuse;


    // -----------------------------
    // Filter Maintenance Tips
    // -----------------------------

    let maintenance =
        "🧽 Wash the reusable mesh pre-filter every 2–3 days.<br><br>" +
        "🪨 Replace the gravel once every month to maintain good filtration.";

    document.getElementById("maintenance").innerHTML = maintenance;


    // -----------------------------
    // Smooth Scroll to Results
    // -----------------------------

    document.getElementById("results").scrollIntoView({
        behavior: "smooth"
    });

}
