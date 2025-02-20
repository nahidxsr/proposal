const proposals = [
    '"তুমি আমার জীবনের সবচেয়ে সুন্দর \'Script\'... তুমি কি আমার \'Bug\' ঠিক করতে চাও?"',
    '"তুমি কি আমার \'Firewall\' হবে? কারণ আমি শুধু তোমার সাথেই সুরক্ষিত থাকি!"',
    '"তুমি ছাড়া আমার \'Server\' ক্র্যাশ হয়ে যাবে! প্লিজ, আমার লাইফের \'Backup\' হয়ে যাও!"',
    '"তুমি আমার \'Source Code\', তুমি ছাড়া আমি Execute হতে পারি না!"'
];

// টাইপিং এফেক্ট
let textIndex = 0;
let currentText = proposals[0];
let charIndex = 0;
const speed = 100; 

function typeText() {
    if (charIndex < currentText.length) {
        document.getElementById("proposal-text").innerHTML += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, speed);
    }
}

function changeText() {
    textIndex = (textIndex + 1) % proposals.length;
    currentText = proposals[textIndex];
    charIndex = 0;
    document.getElementById("proposal-text").innerHTML = "";
    typeText();
}

// লোড হবার পর টাইপিং শুরু হবে
window.onload = function() {
    typeText();
};
