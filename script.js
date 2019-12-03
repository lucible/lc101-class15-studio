/* -----------------------------------
FIRST DRAFT : SEE TYPESCRIPT FOR FINAL
----------------------------------- */

function setSearchEngine () {
    let check = document.querySelector('input[name=engine]:checked')

    let actions = {
        'google': 'https://www.google.com/',
        'duckDuckGo': 'https://duckduckgo.com/',
        'bing': 'https://www.bing.com/',
        'ask': 'https://www.ask.com/'
    }

    if (check) {
        let form = document.getElementsByTagName('form')[0]
        let chosen = check.value
        console.log(actions[chosen])
        form.setAttribute('action', actions[chosen])
    }
}

function start () {
    let searchForm = document.getElementsByTagName('form')[0]

    searchForm.addEventListener('submit', () => {
        console.log('submission event ran')
        setSearchEngine()
    })
}

window.onload = start;