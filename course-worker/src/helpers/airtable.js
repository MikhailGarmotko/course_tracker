// require('dotenv').config();
// var Airtable = require('airtable');
// var base = new Airtable({ apiKey: 'keyI8AYaeJARJyrhZ' }).base('appa7EGL6KN6MxYGj');
// const table = base('Course table');

// module.exports = { table };

import Airtable from 'airtable';

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyI8AYaeJARJyrhZ'
});
export const table = Airtable.base('appa7EGL6KN6MxYGj');

