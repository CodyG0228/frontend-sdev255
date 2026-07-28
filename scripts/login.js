addEventListener("DOMContentLoaded", function () {
    document.querySelector("#loginBtn").addEventListener("click", login)
})

async function login() {
    const creds = {
        username: document.querySelector("#username").value,
        password: document.querySelector("#password").value
    }
    const token = localStorage.getItem("token")
    const response = await fetch("https://backend-8tnt.onrender.com/api/login", {
        headers: { "x-auth": token }
    }, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(creds)
    })
    if (response.ok) {
        const data = await response.json()
        localStorage.setItem("token", data.token)
        window.location.href = "index.html"
    } else {
        document.querySelector("#error").innerHTML = "Invalid username or password. Please try again. Spelling?"
    }
}