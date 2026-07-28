addEventListener("DOMContentLoaded", () => {
  document.querySelector("#registerBtn").addEventListener("click", registerUser)
})

async function registerUser() {
  const payload = {
    username: document.querySelector("#username").value,
    password: document.querySelector("#password").value,
    status: document.querySelector("#status").value || undefined
  }

  try {
    const res = await fetch("https://backend-8tnt.onrender.com/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })

    if (res.status === 201) {
      window.location.href = "login.html"
    } else {
      const text = await res.text()
      document.querySelector("#message").textContent = text || "Registration failed"
    }
  } catch (err) {
    document.querySelector("#message").textContent = "Error. Please try again."
    console.error(err)
  }
}