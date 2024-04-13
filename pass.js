document.querySelector("form").addEventListener("submit", e => {
    const adminUsername = "admin125", adminPassword = "hakdog150"
    e.preventDefault()
    const formdata = new FormData(e.target)
    const username = formdata.get("username"), password = formdata.get("password")
    console.log(`Username ${username}, Password ${password}`)
    if (username === adminUsername && password === adminPassword) {
        alert("Welcome")
        window.location.assign("score.html")
    } else {
        alert("Invalid Username or Password!")
    }
})