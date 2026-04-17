require("dotenv").config();
const fs = require("fs");
const sgMail= require("@sendgrid/mail")
 
//api key

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(){
    try{
        const fileContent = fs.readFileSync("test.txt").toString("base64");
    await sgMail.send(
        {
            to: "rohan.kadam@mindbowser.com",
            from: "harshalispatil11@gmail.com",
            subject: "weekly update",
            text:"hello from sendgrid",
            html:"<h1>hello this is weekly mail </h1>",
     attachments: [
        {
          content: fileContent,
          filename: "test.txt",
          type: "text/plain",
          disposition: "attachment"
        }
      ]
    });

    console.log("email sent")
    }
    catch(error){
console.log(error.response?.body)
    }
    
}

sendEmail()
