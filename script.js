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
