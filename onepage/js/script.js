//kod till inloggning, namnet följer med till onepage.html
function load() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('uname');
    document.getElementById("uname").innerHTML = username.toUpperCase();

}

function remove(card) {

    card.remove()

}