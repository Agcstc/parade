function search_card() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('card-searchbar');
   
    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      }
      else {
        x[i].style.display = "list-item";
      }
    }
}
document.addEventListener('click', function(event) {
    let isClickInside = document.getElementById('searchbar').contains(event.target);

    if (!isClickInside) {
        let x = document.getElementsByClassName('card-searchbar');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
    }
});
document.getElementById('toggle-searchbar').addEventListener('click', function() {
    let searchbar = document.getElementById('searchbar');
    if (searchbar.style.display === "none") {
        searchbar.style.display = "block";
    } else {
        searchbar.style.display = "none";
    }
});