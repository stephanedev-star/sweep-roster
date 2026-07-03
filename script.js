
// Admin password
const ADMIN_PASSWORD = "digimark2026";

// Admin login button
document.getElementById("admin-login-btn").addEventListener("click", function() {
    let password = prompt("Enter admin password:");
    if (password === ADMIN_PASSWORD) {
        document.getElementById("admin-section").style.display = "block";
        document.getElementById("logout-btn").style.display = "inline-block";
        document.getElementById("admin-login-btn").style.display = "none";
    } else {
        alert("Access denied. Wrong password.");
    }
});

// Logout button
document.getElementById("logout-btn").addEventListener("click", function() {
    document.getElementById("admin-section").style.display = "none";
    document.getElementById("logout-btn").style.display = "none";
    document.getElementById("admin-login-btn").style.display = "inline-block";
});




// Create empty array OUTSIDE the click event
let names = [];

document.getElementById("add-name-btn").addEventListener("click", function() {
    let name = document.getElementById("name-input").value;
    //
    if (name === "") {
        alert("Please enter a name");
    } else {
        // Add name to array
        names.push(name);
        
        // Clear input
        document.getElementById("name-input").value = "";
        
        // Update count text
        document.getElementById("name-count").textContent = "Names added: " + names.length;
    }
});

document.getElementById("generate-btn").addEventListener("click", function() {
    
    // Check if enough names added
    if (names.length < 3) {
        alert("Please add at least 3 names");
        return;
    }

    // The 3 sweep days
    let days = ["Monday", "Wednesday", "Friday"];
    
    // Split names into 3 groups
    let groups = [[], [], []];
    
    for (let i = 0; i < names.length; i++) {
        groups[i % 3].push(names[i]);
    }

let now = new Date();
let startOfYear = new Date(now.getFullYear(), 0, 1);
let weekNumber = Math.ceil(((now - startOfYear) / 86400000 + startOfYear.getDay() + 1) / 7);

let dateRange = document.getElementById("date-input").value;
if (dateRange === "") {
    document.getElementById("week-display").textContent = "Week " + weekNumber + " — " + now.getFullYear();
} else {
    document.getElementById("week-display").textContent = "Sweeping Roster: " + dateRange;
}

    // Build the table
    let html = "<table border='1'><tr><th>Monday</th><th>Wednesday</th><th>Friday</th></tr>";
    
    // Find the longest group
    let maxLen = Math.max(groups[0].length, groups[1].length, groups[2].length);
    
    for (let i = 0; i < maxLen; i++) {
        html += "<tr>";
        html += "<td>" + (groups[0][i] || "") + "</td>";
        html += "<td>" + (groups[1][i] || "") + "</td>";
        html += "<td>" + (groups[2][i] || "") + "</td>";
        html += "</tr>";
    }
    
    html += "</table>";
    
    document.getElementById("roster-output").innerHTML = html;
});