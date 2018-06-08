

# Nexmo Node.js Smaple App

## How to Start
1. Create an account on Nexmo and verify your phone number.
2. Add needed credentials in config in .env file


## Send SMS Message API Example 

POST http://localhost:3000/api/sms

{
	"sender": "Nexmo",
	"recipient": "+201111060612",
	"message": "This is a message"
}

