// ===============================
// LFBN-BD 2026 Location System
// Part 1 - Divisions
// ===============================

const locationData = {
  "চট্টগ্রাম": {},
  "ঢাকা": {},
  "রাজশাহী": {},
  "খুলনা": {},
  "বরিশাল": {},
  "সিলেট": {},
  "রংপুর": {},
  "ময়মনসিংহ": {}
};

const divisionSelect = document.getElementById("division");
const districtSelect = document.getElementById("district");
const upazilaSelect = document.getElementById("upazila");

// Division Load
for (const division in locationData) {
    const option = document.createElement("option");
    option.value = division;
    option.textContent = division;
    divisionSelect.appendChild(option);
}
