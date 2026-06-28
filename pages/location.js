// ===============================
// LFBN-BD 2026 Location System
// Part 1 - Divisions
// ===============================

const locationData = {"চট্টগ্রাম": {
  "চট্টগ্রাম": [
  "আনোয়ারা",
  "বাঁশখালী",
  "বোয়ালখালী",
  "কর্ণফুলী",
  "চন্দনাইশ",
  "ফটিকছড়ি",
  "হাটহাজারী",
  "লোহাগাড়া",
  "মিরসরাই",
  "পটিয়া",
  "রাঙ্গুনিয়া",
  "রাউজান",
  "সন্দ্বীপ",
  "সাতকানিয়া",
  "সীতাকুণ্ড"
],
  "কক্সবাজার": [
  "কক্সবাজার সদর",
  "চকরিয়া",
  "কুতুবদিয়া",
  "মহেশখালী",
  "পেকুয়া",
  "রামু",
  "টেকনাফ",
  "উখিয়া",
  "ঈদগাঁও"
],
  "কুমিল্লা": [
  "আদর্শ সদর",
  "বরুড়া",
  "ব্রাহ্মণপাড়া",
  "বুড়িচং",
  "চান্দিনা",
  "চৌদ্দগ্রাম",
  "দাউদকান্দি",
  "দেবিদ্বার",
  "হোমনা",
  "লাকসাম",
  "লালমাই",
  "মেঘনা",
  "মনোহরগঞ্জ",
  "মুরাদনগর",
  "নাঙ্গলকোট",
  "তিতাস"
],
  "ফেনী": [
  "ফেনী সদর",
  "ছাগলনাইয়া",
  "দাগনভূঞা",
  "পরশুরাম",
  "ফুলগাজী",
  "সোনাগাজী"
],
  "নোয়াখালী": [
  "নোয়াখালী সদর",
  "বেগমগঞ্জ",
  "চাটখিল",
  "কোম্পানীগঞ্জ",
  "হাতিয়া",
  "কবিরহাট",
  "সেনবাগ",
  "সুবর্ণচর"
],
  "লক্ষ্মীপুর": [
  "লক্ষ্মীপুর সদর",
  "রামগঞ্জ",
  "রামগতি",
  "রায়পুর",
  "কমলনগর"
],
  "ব্রাহ্মণবাড়িয়া": [
  "ব্রাহ্মণবাড়িয়া সদর",
  "আখাউড়া",
  "আশুগঞ্জ",
  "বাঞ্ছারামপুর",
  "বিজয়নগর",
  "কসবা",
  "নবীনগর",
  "নাসিরনগর",
  "সরাইল"
],
  "চাঁদপুর": [
  "চাঁদপুর সদর",
  "ফরিদগঞ্জ",
  "হাইমচর",
  "হাজীগঞ্জ",
  "কচুয়া",
  "মতলব দক্ষিণ",
  "মতলব উত্তর",
  "শাহরাস্তি"
],
  "খাগড়াছড়ি": [
  "খাগড়াছড়ি সদর",
  "দিঘীনালা",
  "গুইমারা",
  "লক্ষ্মীছড়ি",
  "মহালছড়ি",
  "মানিকছড়ি",
  "মাটিরাঙ্গা",
  "পানছড়ি",
  "রামগড়"
],
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
},
"রাজশাহী": {
  "রাজশাহী": [],
  "নাটোর": [],
  "নওগাঁ": [],
  "চাঁপাইনবাবগঞ্জ": [],
  "পাবনা": [],
  "সিরাজগঞ্জ": [],
  "বগুড়া": [],
  "জয়পুরহাট": []
},

"খুলনা": {
  "খুলনা": [],
  "বাগেরহাট": [],
  "সাতক্ষীরা": [],
  "যশোর": [],
  "ঝিনাইদহ": [],
  "মাগুরা": [],
  "নড়াইল": [],
  "কুষ্টিয়া": [],
  "চুয়াডাঙ্গা": [],
  "মেহেরপুর": []
},
                      
"বরিশাল": {
  "বরিশাল": [],
  "ভোলা": [],
  "পটুয়াখালী": [],
  "পিরোজপুর": [],
  "ঝালকাঠি": [],
  "বরগুনা": []
},

"সিলেট": {
  "সিলেট": [],
  "মৌলভীবাজার": [],
  "হবিগঞ্জ": [],
  "সুনামগঞ্জ": []
},
                      
"রংপুর": {
  "রংপুর": [],
  "দিনাজপুর": [],
  "ঠাকুরগাঁও": [],
  "পঞ্চগড়": [],
  "নীলফামারী": [],
  "লালমনিরহাট": [],
  "কুড়িগ্রাম": [],
  "গাইবান্ধা": []
},

"ময়মনসিংহ": {
  "ময়মনসিংহ": [],
  "জামালপুর": [],
  "শেরপুর": [],
  "নেত্রকোনা": []
}
                      
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
// District Load
divisionSelect.addEventListener("change", function () {

    districtSelect.innerHTML = '<option value="">জেলা নির্বাচন করুন</option>';
    upazilaSelect.innerHTML = '<option value="">উপজেলা / থানা নির্বাচন করুন</option>';

    const selectedDivision = this.value;

    if (selectedDivision && locationData[selectedDivision]) {

        for (const district in locationData[selectedDivision]) {

            const option = document.createElement("option");
            option.value = district;
            option.textContent = district;

            districtSelect.appendChild(option);
        }
    }

});
  // Upazila Load
districtSelect.addEventListener("change", function () {

    upazilaSelect.innerHTML = '<option value="">উপজেলা / থানা নির্বাচন করুন</option>';

    const selectedDivision = divisionSelect.value;
    const selectedDistrict = this.value;

    if (
        selectedDivision &&
        selectedDistrict &&
        locationData[selectedDivision][selectedDistrict]
    ) {

        locationData[selectedDivision][selectedDistrict].forEach(function(upazila) {

            const option = document.createElement("option");
            option.value = upazila;
            option.textContent = upazila;

            upazilaSelect.appendChild(option);

        });

    }

});
