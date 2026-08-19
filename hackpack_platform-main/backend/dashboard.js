async function fetchHackathons() {
    let response = await fetch("https://api.devpost.com/hackathons"); // Example API
    let data = await response.json();

    let list = document.getElementById("hackathon-list");
    list.innerHTML = "";

    data.hackathons.forEach(hackathon => {
        let item = document.createElement("li");
        item.textContent = `${hackathon.name} - ${hackathon.date}`;
        list.appendChild(item);
    });
}
