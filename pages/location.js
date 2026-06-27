// ===============================
// LFBN-BD 2026 Location System
// Part 1 - Divisions
// ===============================

const locationData = {"চট্টগ্রাম": {
  "চট্টগ্রাম": [],
  "কক্সবাজার": [],
  "কুমিল্লা": [],
  "ফেনী": [],
  "নোয়াখালী": [],
  "লক্ষ্মীপুর": [],
  "ব্রাহ্মণবাড়িয়া": [],
  "চাঁদপুর": [],
  "খাগড়াছড়ি": [],
  "রাঙ্গামাটি": [],
  "বান্দরবান": []
},

"ঢাকা": {
  "ঢাকা": [],
  "গাজীপুর": [],
  "নারায়ণগঞ্জ": [],
  "নরসিংদী": [],
  "মানিকগঞ্জ": [],
  "মুন্সীগঞ্জ": [],
  "রাজবাড়ী": [],
  "ফরিদপুর": [],
  "গোপালগঞ্জ": [],
  "শরীয়তপুর": [],
  "মাদারীপুর": [],
  "কিশোরগঞ্জ": [],
  "টাঙ্গাইল": []
},};

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
