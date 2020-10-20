// Summary Buttons
let cagingTheGodsModalBtn = document.getElementById( "caging-the-gods-summary-btn" ); // Button for Caging the Gods
let hershellsHillModalBtn = document.getElementById( "hershells-hill-summary-btn"  ); // Button for Hershell's Hill
let nightStockerModalBtn  = document.getElementById( "night-stocker-summary-btn"   ); // Button for Night Stocker
let satansPrideModalBtn   = document.getElementById( "satans-pride-summary-btn"    ); // Button for Satan's Pride
let ritualXModalBtn       = document.getElementById( "ritual-x-summary-btn"        ); // Button for Ritual X

// Summary Modals
let cagingTheGodsModal = document.querySelector( ".caging-the-gods-modal" ); // Modal for Caging the Gods
let hershellsHillModal = document.querySelector( ".hershells-hill-modal"  ); // Modal for Hershell's Hill
let nightStockerModal  = document.querySelector( ".night-stocker-modal"   ); // Modal for Night Stocker
let satansPrideModal   = document.querySelector( ".satans-pride-modal"    ); // Modal for Satan's Pride
let ritualXModal       = document.querySelector( ".ritual-x-modal"        ); // Modal for Ritual X

// Summary Close Buttons
let cagingTheGodsCloseBtn = document.querySelector (" .caging-the-gods-close-btn" ) // Close Button for Caging the Gods
let hershellsHillCloseBtn = document.querySelector (" .hershells-hill-close-btn"  ) // Close Button for Hershell's Hill
let nightStockerCloseBtn  = document.querySelector (" .night-stocker-close-btn"   ) // Close Button for Night Stocker
let satansPrideCloseBtn   = document.querySelector (" .satans-pride-close-btn"    ) // Close Button for Satan's Pride
let ritualXCloseBtn       = document.querySelector (" .ritual-x-close-btn"        ) // Close Button for Ritual X

// Nav Bar Buttons
let aboutBtn   = document.querySelector ( ".nav-about-btn"   ) // About Nav Bar Button
let scriptsBtn = document.querySelector ( ".nav-scripts-btn" ) // Scripts Nav Bar Button
let contactBtn = document.querySelector ( ".nav-contact-btn" ) // Contact Nav Bar Button

// Nav Locations
let aboutLocation   = document.getElementById ( "title-container"   ) // About Section
let scriptsLocation = document.getElementById ( "scripts-container" ) // Scripts Section

// Modal overlay
let modalOverlay = document.querySelector( ".modal-overlay" ); // Modal Overlay

// Modal Functions // 

// Click off modal
window.onclick = function ( e ) {
    if ( e.target === modalOverlay ) {
        cagingTheGodsModal.style.display = "none";
        hershellsHillModal.style.display = "none";
        nightStockerModal.style.display  = "none";
        satansPrideModal.style.display   = "none";
        ritualXModal.style.display       = "none";
        modalOverlay.style.display       = "none";
    }
};

// Caging the Gods modal functions
cagingTheGodsModalBtn.onclick = function () {
    cagingTheGodsModal.style.display = "grid";
    modalOverlay.style.display       = "block";
};

// Hershell's Hill modal functions
hershellsHillModalBtn.onclick = function () {
    hershellsHillModal.style.display = "grid";
    modalOverlay.style.display       = "block";
};

// Night Stocker modal functions
nightStockerModalBtn.onclick = function () {
    nightStockerModal.style.display = "grid";
    modalOverlay.style.display      = "block";
};

// Satan's Pride modal functions
satansPrideModalBtn.onclick = function () {
    satansPrideModal.style.display = "grid";
    modalOverlay.style.display     = "block";
};

// Ritual X modal functions
ritualXModalBtn.onclick = function () {
    ritualXModal.style.display = "grid";
    modalOverlay.style.display = "block";
};

// Close Button Functions //

// Caging the Gods Close Button
cagingTheGodsCloseBtn.onclick = function () {
    cagingTheGodsModal.style.display = "none";
    modalOverlay.style.display       = "none";
};

// Hershell's Hill Close Button
hershellsHillCloseBtn.onclick = function () {
    hershellsHillModal.style.display = "none";
    modalOverlay.style.display       = "none";
};

// Night Stocker Close Button
nightStockerCloseBtn.onclick = function () {
    nightStockerModal.style.display = "none";
    modalOverlay.style.display = "none";
};

// Satan's Pride Close Button
satansPrideCloseBtn.onclick = function () {
    satansPrideModal.style.display = "none";
    modalOverlay.style.display = "none";
};

// Ritual X Close Button
ritualXCloseBtn.onclick = function () {
    ritualXModal.style.display = "none";
    modalOverlay.style.display = "none";
};

// Nav Bar Functions //

//About Button
aboutBtn.onclick = function (e) {
    aboutLocation.scrollIntoView(true)
}

//Scripts Button
scriptsBtn.onclick = function (e) {
    scriptsLocation.scrollIntoView(true)
}