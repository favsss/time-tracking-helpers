
const { generateRandomNumber } = require('./random_number'); 
function generateRandomActivity() {
    const activities = [
        "fixing issue",
        "attended scrum",
        "played some games",
        "refactored code",
        "fix login issue",
        "implemented CRUD feature",
        "sprint retro"
    ];

    return activities[generateRandomNumber(activities.length)];
}

module.exports = { generateRandomActivity };