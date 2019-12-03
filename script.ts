interface keyString {
    [key: string]: string
}

function setSearchEngine (form : HTMLFormElement) {
    let check = document.querySelector('input[name=engine]:checked') as HTMLInputElement

    let actions : keyString = {
        'google': 'https://www.google.com/',
        'duckDuckGo': 'https://duckduckgo.com/',
        'bing': 'https://www.bing.com/',
        'ask': 'https://www.ask.com/'
    }

    if (check) {
        let chosen = check.value
        form.setAttribute('action', actions[chosen])
    }
}

function setSearch () {
    let searchForm = document.getElementsByTagName('form')[0]

    searchForm.addEventListener('submit', () => {
        setSearchEngine(searchForm)
    })
}

function searchValidate () {
    const inputs = document.getElementsByTagName('input')
    const submit = inputs.namedItem('submit')
    const search = inputs.namedItem('q')
    const searchError = document.getElementById('searchError')
    const engineError = document.getElementById('engineError')

    if (search && submit && searchError && engineError) {
        submit.addEventListener('click', (e) => {
            let check = document.querySelector('input[name=engine]:checked') as HTMLInputElement

            searchError.style.paddingTop = ""
            searchError.innerHTML = ""
            engineError.style.paddingTop = ""
            engineError.innerHTML = ""

            if (search.value === "") {
                searchError.style.paddingTop = "1em"
                searchError.innerHTML =  "Error! Please enter a search query."
                e.preventDefault()
            }
            if (check === null) {
                engineError.style.paddingTop = "1em"
                engineError.innerHTML = "Error! Please select a search engine."
                e.preventDefault()
            }
        })
    }
}

function start () {
    setSearch()
    searchValidate()
}

window.onload = start;