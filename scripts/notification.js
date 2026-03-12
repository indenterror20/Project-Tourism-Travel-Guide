
//notification card
document.addEventListener('DOMContentLoaded', () => {
    const notifButton = document.getElementById('notification-toggle');
    const notifcard = document.getElementById('notification-card');

    //notification button activiation   
    notifButton.addEventListener("click", ()=> {
    notifcard.classList.toggle(`hidden`);
}); 
});