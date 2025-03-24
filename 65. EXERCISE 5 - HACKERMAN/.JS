/*WRITE A JAVASCRIPT PROGRAM TO PEEKED TO LOOK LIKE A HACKER WRITE A AYEX FUNCTION WHICH WILL SIMPLY DEPLOY THE FOLLOWING OUTPUT

INITIALIZING...
HACKENG ASHISH USERNAME... 
USERNAME FOUND ...
USER NAME FOUND ASHISH 17... 
CONNECTING TO FACEBOOK

TRY TO USE HTML & STYLING IS POSSIBLE

*/

const consoleElement = document.getElementById("console");
const messages = [
    "INITIALIZING...",
    "HACKING ASHISH USERNAME...",
    "USERNAME FOUND...",
    "USERNAME FOUND: ASHISH17...",
    "CONNECTING TO FACEBOOK...",
    "ACCESS GRANTED ✅",
    "DOWNLOADING DATA...",
    "DATA EXFILTRATION COMPLETE! 🔥"
];

function typeEffect(index = 0) {
    if (index < messages.length) {
        let message = messages[index];
        let newElement = document.createElement("p");
        consoleElement.appendChild(newElement);
        let i = 0;

        function typeChar() {
            if (i < message.length) {
                newElement.innerHTML += message.charAt(i);
                i++;
                setTimeout(typeChar, 50);
            } else {
                setTimeout(() => typeEffect(index + 1), 800);
            }
        }

        typeChar();
    }
}

setTimeout(() => typeEffect(), 1000);