addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("https://backend-8tnt.onrender.com/api/songs")
    const songs = await response.json()
    let html = ""
    for (let song of songs){
        let songID = song._id
        html+=`<li>${song.title} - ${song.artist} - <a href="details.html?id=${songID}">Details</a> - <a href="edit.html?id=${songID}">Edit Song</a> </li></li>`
    }
    document.querySelector("#list_of_songs").innerHTML = html
})