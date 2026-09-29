const users = [
    { id: 101, name: " Ada ", scores: [10, 20, 30] },
    { id: 102, name: "", scores: [5, 0, 15] },
    { id: 103, name: null, scores: [7, 14] },
    { id: 104 /* name missing on purpose */, scores: [3, 3, 3, 3] },
    { id: 105, name: "Grace", scores: [] }
];


// 1. normalizeName(value)
function normalizeName(value) {

    // typeof is used here
    if (value === null || value === undefined) {
        return "Unknown";
    }

    if (typeof value !== "string") {
        return "Unknown";
    }

    // trim() removes spaces from beginning and end
    const trimmed = value.trim();

    if (trimmed === "") {
        return "Unknown";
    }

    return trimmed;
}


// 2. averageScore(scores)
function averageScore(scores) {

    // Check whether scores is an array
    if (!Array.isArray(scores)) {
        throw new Error("scores must be an array");
    }

    // Empty array
    if (scores.length === 0) {
        return null;
    }

    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    const average = sum / scores.length;

    // Round to 2 decimal places
    return Math.round(average * 100) / 100;
}


// 3. buildUserSummary(user)
function buildUserSummary(user) {

    // User must be a non-null object
    if (user === null || typeof user !== "object") {
        throw new Error("user must be an object");
    }

    // Dot notation: user.id
    const id = user.id;

    // Bracket notation: user["name"]
    const name = normalizeName(user["name"]);

    // If scores is missing or not an array, treat it as empty
    let scores = user.scores;

    if (!Array.isArray(scores)) {
        scores = [];
    }

    const scoreCount = scores.length;
    const avg = averageScore(scores);

    return {
        id: id,
        name: name,
        scoreCount: scoreCount,
        avg: avg
    };
}


// 4. summarizeUsers(userArray)
function summarizeUsers(userArray) {

    if (!Array.isArray(userArray)) {
        throw new Error("userArray must be an array");
    }

    return userArray.map(buildUserSummary);
}


// 5. safeSummarizeUsers(userArray)
function safeSummarizeUsers(userArray) {

    try {
        const data = summarizeUsers(userArray);

        return {
            ok: true,
            data: data
        };
    }
    catch (error) {
        return {
            ok: false,
            error: error.message
        };
    }
}


// 6. getUserDisplayNameById(userArray, id)
function getUserDisplayNameById(userArray, id) {

    if (!Array.isArray(userArray)) {
        throw new Error("userArray must be an array");
    }

    if (typeof id !== "number") {
        throw new Error("id must be a number");
    }

    // find() locates the user with the given id
    const found = userArray.find(function(user) {
        return user.id === id;
    });

    if (!found) {
        throw new Error("user not found");
    }

    return normalizeName(found.name);
}


// Part C answers:

// 1) typeof undefined = "undefined"

// 2) typeof null = "object"

// 3) Why treat "" differently than null/undefined?
// "" means that a value exists but it contains no useful text.
// null and undefined mean that a value is absent or not provided.
// In normalizeName(), all three are treated as "Unknown" because
// they do not provide a usable name.


// Required test calls:

console.log(normalizeName(" Ada "));               
// expected: Ada

console.log(normalizeName("   "));                 
// expected: Unknown

console.log(normalizeName(null));                  
// expected: Unknown

console.log(averageScore([10, 20, 30]));           
// expected: 20

console.log(averageScore([]));                     
// expected: null

console.log(buildUserSummary(users[0]));           
// expected: { id: 101, name: "Ada", scoreCount: 3, avg: 20 }

console.log(buildUserSummary(users[3]));           
// expected: { id: 104, name: "Unknown", scoreCount: 4, avg: 3 }

console.log(safeSummarizeUsers(users).ok);         
// expected: true

console.log(getUserDisplayNameById(users, 105));   
// expected: Grace

console.log(safeSummarizeUsers("not an array"));   
// expected: { ok: false, error: "userArray must be an array" }