const { generateRandomActivity } = require('./random_activity');
const { generateRandomFloat } = require('./random_float');
const { generateRandomTag } = require('./random_tag');
const { generateUUID } = require('./uuid');
const { generateRandomDate } = require('./random_date');

function generateRandomCheckin() {
    return {
        id: generateUUID(),
        tag: generateRandomTag(),
        hours: generateRandomFloat(1, 24, 1),
        activity: generateRandomActivity(),
        date: generateRandomDate()
    };
}

module.exports = { generateRandomCheckin }