addEventListener("DOMContentLoaded", function(){
    document.querySelector("#addBtn").addEventListener("click", addSong)
})

async function addSong(){
    const song = {
        title: document.querySelector("#title").value,
        artist: document.querySelector("#artist").value,
        releaseDate: document.querySelector("#released").value,
        popularity: document.querySelector("#popularity").value,
        genre: document.querySelector("#genre").value ? document.querySelector("#genre").value.split(",") : []

    }
    const token = localStorage.getItem("token")
    if (!token) {
        document.querySelector("#error").innerHTML = "You must be logged in to add a song."
        return
    }
    const response = await fetch("https://backend-8tnt.onrender.com/api/songs", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "x-auth": token
        },
        body: JSON.stringify(song)
    })
    if(response.ok){
        const results = await response.json()
        alert("Added song with ID of" + results._id)
        document.querySelector("form").reset()
    }
    else if (response.status === 401) {
        document.querySelector("#error").innerHTML = "Not authorized — please log in."
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot add song. Backend error?"
    }
}