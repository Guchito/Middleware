const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../data/users.json');

module.exports = () => {
    return JSON.parse(fs.readFileSync(file, 'utf-8'));
}