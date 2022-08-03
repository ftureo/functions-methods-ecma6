// setTimeout(function () {
//     console.log("Hello in 3 seconds");
// }, 1000); // 3 seconds

// setTimeout(() => {
//     console.log("Hello in 5 seconds");
// }, 5000); // 5 seconds

// Exercise console.log()

// setTimeout(function () {
//     console.log("First console.log()");
//     setTimeout(function () {
//         console.log("Second console.log()");
//         setTimeout(function () {
//             console.log("Third console.log()");
//         }, 3000);
//     }, 1000);
// }, 5000);

// // Exercise console.log() with Arrow Function Format

// setTimeout(() => {
//     console.log("First");
//     setTimeout(() => {
//         console.log("Second");
//         setTimeout(() => {
//             console.log("Third");
//         }, 3000);
//     }, 1000);
// }, 5000);

// // Exercise Asynchronism

// console.log("1");
// setTimeout(function () {
//     console.log("2");
// }, 3000);
// console.log("3");
// setTimeout(function () {
//     console.log("4");
// }, 1000);

// // Expected output: 1 3 4 2

// Exercise for Call Stack
function installSoftware(software) {
    console.log("Installing Software " + software);
}

function customizeEditor(numberExtensions) {
    if (numberExtensions <= 0) return;
    console.log(`Installing ${numberExtensions} extensions for VSC`);
}

function readyForProgramming() {
    console.log("Environment ready for begin to Programming");
}

function prepareEnvironment() {
    installSoftware("Git");
    installSoftware("Visual Studio Code");
    installSoftware("Node.js");
    customizeEditor(5);
    readyForProgramming();
}
prepareEnvironment();
