function generateRandomDate() {
    const start_date = new Date(2022, 7, 21);
    const end_date = new Date(2022, 8, 11); // upper bound is not included

    const date = new Date(+start_date + Math.random() * (end_date - start_date));

    return date.toDateString();
}

module.exports = { generateRandomDate };