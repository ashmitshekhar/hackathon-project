let currentUser = null;

function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

function showLogin() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

async function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('token', data.token);
            currentUser = { email };
            showDashboard();
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Login error:', error);
    }
}

async function signup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    
    try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, linkedin, github })
        });
        
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('token', data.token);
            currentUser = { name, email, linkedin, github };
            showDashboard();
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Signup error:', error);
    }
}

async function getProfile() {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/auth/profile', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        
        const data = await response.json();
        if (response.ok) {
            currentUser = data;
        }
    } catch (error) {
        console.error('Profile error:', error);
    }
}

function showDashboard() {
    document.getElementById('auth-modal').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    loadHackathons();
}

function logout() {
    localStorage.removeItem('token');
    currentUser = null;
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('auth-modal').style.display = 'block';
}

function createTeam() {
    const teamName = document.getElementById('team-name').value;
    const teamsList = document.getElementById('teams-list');
    teamsList.innerHTML += `<div>${teamName} <button onclick="joinTeam('${teamName}')">Join</button></div>`;
}

function joinTeam(teamName) {
    alert(`Joined team: ${teamName}`);
}

function loadHackathons() {
    const hackathonList = document.getElementById('hackathon-list');
    const sampleHackathons = [
        { name: "Global Hack 2025", date: "Feb 25, 2025" },
        { name: "CodeJam", date: "Mar 1, 2025" }
    ];
    
    hackathonList.innerHTML = sampleHackathons.map(h => 
        `<div>${h.name} - ${h.date} <button>Join</button></div>`
    ).join('');
}

function submitVerification() {
    const answer = document.getElementById('q1').value;
    alert('Verification submitted!');
}

function scrapeProfileData(linkedin, github) {
    console.log('Scraping data from:', linkedin, github);
    const scrapedData = {
        linkedinProjects: ['Project 1', 'Project 2'],
        githubRepos: ['Repo 1', 'Repo 2']
    };
}

document.querySelector('.close').onclick = function() {
    document.getElementById('auth-modal').style.display = "none";
};
