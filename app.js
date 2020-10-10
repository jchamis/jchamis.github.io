//Summary Buttons
let cagingTheGodsModalBtn = document.getElementById( "caging-the-gods-summary-btn" ); // Button for Caging the Gods
let hershellsHillModalBtn = document.getElementById( "hershells-hill-summary-btn"  ); // Button for Hershell's Hill
let nightStockerModalBtn  = document.getElementById( "night-stocker-summary-btn"   ); // Button for Night Stocker
let satansPrideModalBtn   = document.getElementById( "satans-pride-summary-btn"    ); // Button for Satan's Pride
let ritualXModalBtn       = document.getElementById( "ritual-x-summary-btn"        ); // Button for Ritual X

//Summary Modals
let cagingTheGodsModal  = document.querySelector( ".caging-the-gods-modal" ); // Modal for Caging the Gods
let hershellsHillModal  = document.querySelector( ".hershells-hill-modal"  ); // Modal for Hershell's Hill
let nightStockerModal   = document.querySelector( ".night-stocker-modal"   ); // Modal for Night Stocker
let satansPrideModal    = document.querySelector( ".satans-pride-modal"    ); // Modal for Satan's Pride
let ritualXModal        = document.querySelector( ".ritual-x-modal"        ); // Modal for Ritual X

//Modal overlay
let modalOverlay = document.querySelector( ".modal-overlay" ) // Modal Overlay

//Modal close button
let closeBtn = document.querySelector( ".close-btn" ); // Close button in modal

//Modal Functions

//Caging the Gods modal functions
cagingTheGodsModalBtn.onclick = function () {
    cagingTheGodsModal.style.display = "grid";
    modalOverlay.style.display = "block";
};
closeBtn.onclick = function () {
    cagingTheGodsModal.style.display = "none";
};
window.onclick = function ( e ) {
    if ( e.target == cagingTheGodsModal ) {
        cagingTheGodsModal.style.display = "none";
    }
};

//Hershell's Hill modal functions
hershellsHillModalBtn.onclick = function () {
    hershellsHillModal.style.display = "grid";
    modalOverlay.style.display = "block";
};
closeBtn.onclick = function () {
    hershellsHillModal.style.display = "none";
};
window.onclick = function ( e ) {
    if ( e.target == hershellsHillModal ) {
        hershellsHillModal.style.display = "none";
    }
};

//Night Stocker modal functions
nightStockerModalBtn.onclick = function () {
    nightStockerModal.style.display = "grid";
    modalOverlay.style.display = "block";
};
closeBtn.onclick = function () {
    nightStockerModal.style.display = "none";
};
window.onclick = function ( e ) {
    if ( e.target == nightStockerModal ) {
        nightStockerModal.style.display = "none";
    }
};

//Satan's Pride modal functions
satansPrideModalBtn.onclick = function () {
    satansPrideModal.style.display = "grid";
    modalOverlay.style.display = "block";
};
closeBtn.onclick = function () {
    satansPrideModal.style.display = "none";
};
window.onclick = function ( e ) {
    if ( e.target == satansPrideModal ) {
        satansPrideModal.style.display = "none";
    }
};

//Ritual X modal functions
ritualXModalBtn.onclick = function () {
    ritualXModal.style.display = "grid";
    modalOverlay.style.display = "block";
};
closeBtn.onclick = function () {
    ritualXModal.style.display = "none";
};
window.onclick = function ( e ) {
    if ( e.target == ritualXModal ) {
        ritualXModal.style.display = "none";
    }
};