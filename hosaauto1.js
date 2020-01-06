//const request = require('request');
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const OAuth2Client = google.auth.OAuth2;
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const TOKEN_PATH = 'credentials.json';

const redirect_uris = ["urn:ietf:wg:oauth:2.0:oob","http://localhost"];

var dates = [];
var hours = [];

// Load client secrets from a local file.
fs.readFile('client_secret.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Sheets API.
    authorize(JSON.parse(content), listMajors);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new OAuth2Client(client_id, client_secret, redirect_uris[0]);

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return getNewToken(oAuth2Client, 0);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client);
    });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if (err) return callback(err);
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                if (err) console.error(err);
                console.log('Token stored to', TOKEN_PATH);
            });
            callback(oAuth2Client);
        });
    });
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {OAuth2Client} auth The authenticated Google OAuth client.
 */
function listMajors(auth) {
    const sheets = google.sheets({version: 'v4', auth});
    sheets.spreadsheets.values.get({
        spreadsheetId: '1vKcwQ5HYQtlSV4YvX36JryJY7WQxIcT7RnZs_61KxBg',
        range: 'Sheet1!D:E',
    }, (err, {data}) => {
        if (err) return console.log('The API returned an error: ' + err);
        const rows = data.values;
        //console.log(rows);
        if (rows.length) {
            console.log('Date, Total:');
            // Print columns A and E, which correspond to indices 0 and 4.
            rows.map((row) => {
                dates.push(`${row[0]}`);
                hours.push(`${row[1]}`);
            })
            //console.log(dates);
            log(dates, hours)
        } else {
            console.log('No data found.');
        }
    });
}

function log(dates, hours) {
    console.log("[")
    if (dates.length == hours.length) {
        for (i = 0; i < dates.length; i++) {
            var data = {
                date: dates[i],
                description: "HOSA Student Volunteering",
                code: "BJ",
                hours: hours[i]
            };
            console.log(data);
            console.log(",")
        }
        console.log("]")
    } else {
        console.log("Dates and times don't match up!")
    }
}