import QrScanner from '/qr-scanner.min.js';
QrScanner.WORKER_PATH = '/qr-scanner-worker.min.js';

//const qrScanner = new QrScanner(videoElem, result => console.log('decoded qr code:', result));
const qrScanner = new QrScanner(videoElem, result => text.innerHTML = result);

qrScanner.height = "100%";

///let startScanning = document.querySelector("#scan");
let stopScanning = document.querySelector("#stop");

let text = document.querySelector("#outcome");

QrScanner.scanImage(videoElem)
    .then(result => console.log(result))
    .catch(error => console.log(error || 'No QR code found.'));

function start(){
    qrScanner.start();
}

start();

stopScanning.addEventListener("click", () => {
    qrScanner.stop();
});

//startScanning.addEventListener("click", () => {
//    qrScanner.start();
//});