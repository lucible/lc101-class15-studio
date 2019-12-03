"use strict";
function setSearchEngine(form) {
    var check = document.querySelector('input[name=engine]:checked');
    var actions = {
        'google': 'https://www.google.com/',
        'duckDuckGo': 'https://duckduckgo.com/',
        'bing': 'https://www.bing.com/',
        'ask': 'https://www.ask.com/'
    };
    if (check) {
        var chosen = check.value;
        form.setAttribute('action', actions[chosen]);
    }
}
function setSearch() {
    var searchForm = document.getElementsByTagName('form')[0];
    searchForm.addEventListener('submit', function () {
        setSearchEngine(searchForm);
    });
}
function searchValidate() {
    var inputs = document.getElementsByTagName('input');
    var submit = inputs.namedItem('submit');
    var search = inputs.namedItem('q');
    var searchError = document.getElementById('searchError');
    var engineError = document.getElementById('engineError');
    if (search && submit && searchError && engineError) {
        submit.addEventListener('click', function (e) {
            var check = document.querySelector('input[name=engine]:checked');
            searchError.style.paddingTop = "";
            searchError.innerHTML = "";
            engineError.style.paddingTop = "";
            engineError.innerHTML = "";
            if (search.value === "") {
                searchError.style.paddingTop = "1em";
                searchError.innerHTML = "Error! Please enter a search query.";
                e.preventDefault();
            }
            if (check === null) {
                engineError.style.paddingTop = "1em";
                engineError.innerHTML = "Error! Please select a search engine.";
                e.preventDefault();
            }
        });
    }
}
function start() {
    setSearch();
    searchValidate();
}
window.onload = start;
