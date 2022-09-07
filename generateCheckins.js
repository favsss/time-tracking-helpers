const {  generateRandomCheckin } = require('./co-helpers/random_checkin');
const { generateRandomNumber } = require('./co-helpers/random_number');

const fs = require('fs');

const MAX_USER_ID = 5;
const MAX_TAG_ID = 6;
const MAX_CHECKINS = 150;

function generateCheckins() {
    headers = "user_id,tag_id,activity,hours,creation_date\n"
    fs.writeFileSync("data.csv", headers)        
    
    for (let i = 0; i < MAX_CHECKINS; ++i) {
        const checkin = generateRandomCheckin()
        let row = "";
        row = row + String(generateRandomNumber(MAX_USER_ID) + 1) + ",";
        row = row + String(generateRandomNumber(MAX_TAG_ID) + 1) + ","
        row = row + String(checkin["activity"]) + ",";
        row = row + String(checkin["hours"]) + ",";
        row = row + String(checkin["date"]) + "\n";
        fs.appendFileSync("data.csv", row);
    }
}


generateCheckins();