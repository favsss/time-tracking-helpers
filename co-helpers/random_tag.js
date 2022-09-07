const { generateRandomNumber } = require('./random_number');
function generateRandomTag() {
    const tags = ["learning", "project-x", "meetings", "HR", "employee-engagement", "project-y"];

    return tags[generateRandomNumber(tags.length)];
}

module.exports = { generateRandomTag }; 