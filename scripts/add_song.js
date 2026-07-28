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
    const response = await fetch("https://backend-8tnt.onrender.com/api/songs", {
        headers: { "x-auth": token },
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(song)
    })

    if(response.ok){
        const results = await response.json()
        alert("Added song with ID of" + results._id)
        document.querySelector("form").reset()
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot add song"
    }
}