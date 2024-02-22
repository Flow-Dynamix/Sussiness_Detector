const fs = require('fs');
const { exec } = require('child_process');

// List of software to monitor
const softwareList = ['notepad.exe', 'chrome.exe']; // Add more software as needed

// Path to the MP3 file to play
const mp3FilePath = 'asets/siren.mp3';

// Function to check if software is running
function checkSoftware() {
    exec('tasklist', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        
        // Check if any of the software in the list is running
        for (const software of softwareList) {
            if (stdout.includes(software)) {
                console.log(`${software} is running!`);
                playSound();
                return;
            }
        }
    });
}

// Function to play the MP3 file
function playSound() {
    fs.access(mp3FilePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`Error accessing ${mp3FilePath}: ${err}`);
            return;
        }
        //exec(`start ${mp3FilePath}`);
        console.log(game_detected)
        
        console.log(`Playing ${mp3FilePath}`);
    });
}

// Check software every second
setInterval(checkSoftware, 1000);
