/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from "fs"
import qr from "qr-image";
import inquirer from "inquirer"

// Holds the user input in the terminal
inquirer
    .prompt([
        /* Pass your questions in here */
        {
            name: "URL",
            message: "URL to qr-code?: "
        }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        const url = answers.URL;
        
        // Create the qr image
        var qr_img = qr.image(url);
        qr_img.pipe(fs.createWriteStream("qr_code.png"));

        // Save the content in a txt file
        fs.writeFile("URL2.txt", url, (err) =>{
            if (err) throw err;
            console.log("File saved!");
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
        } else {
        console.log("Something else went wrong");
        }
    });



