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

// ===== DONOR LIST =====

const donorList = document.getElementById("donorList");

function showDonors(list) {

    donorList.innerHTML = "";

    list.forEach(donor => {

        donorList.innerHTML += `
        <div class="donor-card">

            <div class="donor-top">

                <img src="../images/user.png" class="donor-photo" alt="Donor">

                <div class="donor-info">

                    <h3>${donor.name}</h3>

                    <span class="blood-badge">${donor.blood}</span>

                    <p>
                        <i class="fa-solid fa-location-dot"></i>
                        ${donor.district}
                    </p>

                    <span class="status available">
                        <i class="fa-solid fa-circle"></i>
                        ${donor.status}
                    </span>

                </div>

            </div>

            <a href="tel:${donor.phone}" class="call-btn">
                <i class="fa-solid fa-phone"></i>
                Call Donor
            </a>

        </div>
        `;

    });

}

// প্রথমবার সব Donor দেখাবে
showDonors(donors);

// ===== SEARCH =====

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

    const keyword = this.value.toLowerCase();

    const filteredDonors = donors.filter(donor => {

        return (
            donor.name.toLowerCase().includes(keyword) ||
            donor.blood.toLowerCase().includes(keyword) ||
            donor.district.toLowerCase().includes(keyword)
        );

    });

    showDonors(filteredDonors);

});

// ===== BLOOD GROUP FILTER =====

const bloodButtons = document.querySelectorAll(".blood-filter");

bloodButtons.forEach(button => {

    button.addEventListener("click", function () {

        const blood = this.dataset.blood;

        const filteredDonors = donors.filter(donor => donor.blood === blood);

        showDonors(filteredDonors);

    });

});

// ===== SAMPLE BLOOD REQUEST DATA =====

const requests = [
{
    patient: "Sample Patient",
    blood: "O+",
    bags: "2 Bags",
    hospital: "Chattogram Medical College Hospital",
    district: "Chattogram",
    problem: "জরুরি অপারেশনের জন্য রক্ত প্রয়োজন।",
    phone: "01700000000"
}
];

const requestList = document.getElementById("requestList");

function showRequests(list){

    if(!requestList) return;

    requestList.innerHTML = "";

    list.forEach(request => {

        requestList.innerHTML += `
        <div class="request-card">

            <h3>${request.patient}</h3>

            <p><strong>🩸 Blood Group:</strong> ${request.blood}</p>

            <p><strong>🩸 Bags Needed:</strong> ${request.bags}</p>

            <p><strong>🏥 Hospital:</strong> ${request.hospital}</p>

            <p><strong>📍 District:</strong> ${request.district}</p>

            <p><strong>📝 Problem:</strong> ${request.problem}</p>

            <a href="tel:${request.phone}" class="call-btn">
                <i class="fa-solid fa-phone"></i> Call Now
            </a>

        </div>
        `;
    });

}

showRequests(requests);

// ===== BLOOD REQUEST FORM =====

const requestForm = document.getElementById("requestForm");

if (requestForm) {

    requestForm.addEventListener("submit", function(e){

        e.preventDefault();

        const patientName = document.getElementById("patientName").value;
        const bloodGroup = document.getElementById("bloodGroup").value;
        const bags = document.getElementById("bags").value;
        const hospital = document.getElementById("hospital").value;
        const problem = document.getElementById("problem").value;
        const phone = document.getElementById("phone").value;

        const requestData = {
            patientName,
            bloodGroup,
            bags,
            hospital,
            problem,
            phone
        };

        console.log(requestData);

        alert("রক্তের আবেদন সফলভাবে গ্রহণ করা হয়েছে।");

        requestForm.reset();

    });

}
