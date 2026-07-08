console.log("LFBN-BD 2026 App Started");
// ===== SAMPLE DONOR DATA =====

const donors = [

{
    name: "Sample Donor",
    blood: "O+",
    district: "Chattogram",
    phone: "01700000000",
    status: "Available"
}

];

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();

    console.log("Searching:", keyword);
});
