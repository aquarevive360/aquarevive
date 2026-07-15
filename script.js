// ===========================================
// AquaRevive Smart Greywater Advisor
// script.js
// ===========================================

function analyseWater() {

    let activity = document.getElementById("activity").value;
    let litres = document.getElementById("time").value;

    if(activity==="" || litres==="")
    {
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

    let plants = Math.max(1, Math.round(litres / 2));
    let flushes = Math.max(1, Math.round(litres / 6));

    let impact =
    "🌱 Can water approximately <b>" +
    plants +
    "</b> small potted plant(s)<br><br>" +

    "🚽 Equivalent to about <b>" +
    flushes +
    "</b> toilet flush(es).";

    document.getElementById("impact").innerHTML = impact;


    // -----------------------------
    // Reuse Recommendation
    // -----------------------------

    let reuse = "";

    switch(activity)
    {

        case "hand":

        reuse =
        "• Water ornamental plants<br>" +
        "• Floor cleaning<br>" +
        "• Toilet flushing";

        break;


        case "vegetables":

        reuse =
        "• Water garden plants<br>" +
        "• Clean outdoor areas";

        break;


        case "utensils":

        reuse =
        "• Floor cleaning<br>" +
        "• Toilet flushing";

        break;


        case "dishwashing":

        reuse =
        "• Toilet flushing only (after proper filtration)<br>" +
        "• Outdoor cleaning";

        break;


        case "laundry":

        reuse =
        "• Toilet flushing<br>" +
        "• Cleaning driveways and pavements";

        break;

    }

    document.getElementById("reuse").innerHTML = reuse;



    // -----------------------------
    // Filter Maintenance
    // -----------------------------

    let maintenance =
    "🧽 Wash the reusable mesh pre-filter every week.<br><br>" +

    "🌑 Replace activated charcoal every 2 months.<br><br>" +

    "🪨 Rinse the sand and gravel once every month to maintain good filtration.";

    document.getElementById("maintenance").innerHTML = maintenance;


    // -----------------------------
    // Smooth Scroll to Results
    // -----------------------------

    document.getElementById("results")
    .scrollIntoView({
        behavior:"smooth"
    });

}