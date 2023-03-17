let homeScoreEl = document.getElementById("home")
let guestScoreEl = document.getElementById("guest")

let pointsHome = 0
let pointsGuest = 0

// Function to add 1 point to home
function add1PointToHome(){
    pointsHome += 1
    homeScoreEl.innerText = pointsHome    
}


// Function to add 2 points to home
function add2PointToHome(){
    pointsHome += 2
    homeScoreEl.innerText = pointsHome    
}


// Function to add 3 points to home
function add3PointToHome(){
    pointsHome += 3
    homeScoreEl.innerText = pointsHome    
}


// Function to add 1 point to guest
function add1PointToGuest(){
    pointsGuest += 1
    guestScoreEl.innerText = pointsGuest    
}


// Function to add 2 points to guest
function add2PointToGuest(){
    pointsGuest += 2
    guestScoreEl.innerText = pointsGuest    
}


// Function to add 3 points to guest
function add3PointToGuest(){
    pointsGuest += 3
    guestScoreEl.innerText = pointsGuest    
}
