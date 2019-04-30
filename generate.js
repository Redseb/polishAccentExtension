//Row 1
var aTail = document.getElementById("a-tail");
var cStroke = document.getElementById("c-stroke");
var eTail = document.getElementById("e-tail");
aTail.addEventListener("click", function () { if(shiftPressed){copyTextToClipboard('Ą');}else{copyTextToClipboard('ą');} }, false);
cStroke.addEventListener("click", function () { if(shiftPressed){copyTextToClipboard('Ć');}else{copyTextToClipboard('ć');} }, false);
eTail.addEventListener("click", function () { if(shiftPressed){copyTextToClipboard('Ę');}else{copyTextToClipboard('ę');} }, false);

//Row 2
var lStroke = document.getElementById("l-stroke");
var nStroke = document.getElementById("n-stroke");
var oStroke = document.getElementById("o-stroke");
lStroke.addEventListener("click", function () { if(shiftPressed){copyTextToClipboard('Ł');}else{copyTextToClipboard('ł');} }, false);
nStroke.addEventListener("click", function () { if(shiftPressed){copyTextToClipboard('Ń');}else{copyTextToClipboard('ń');} }, false);
oStroke.addEventListener("click", function () { if(shiftPressed){copyTextToClipboard('Ó');}else{copyTextToClipboard('ó');} }, false);

//Row 3
var sStroke = document.getElementById("s-stroke");
var zStroke = document.getElementById("z-stroke");
var zDot = document.getElementById("z-dot");
sStroke.addEventListener("click", function () { if(shiftPressed){copyTextToClipboard('Ś');}else{copyTextToClipboard('ś');} }, false);
zStroke.addEventListener("click", function () { if(shiftPressed){copyTextToClipboard('Ź');}else{copyTextToClipboard('ź');} }, false);
zDot.addEventListener("click", function () { if(shiftPressed){copyTextToClipboard('Ż');}else{copyTextToClipboard('ż');} }, false);

var shiftPressed = false;

//Capitalise using shift
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 16) { //Shift
        shiftPressed = !shiftPressed; //Toggle shiftPressed
        if (shiftPressed) {
            aTail.innerHTML = "Ą";
            cStroke.innerHTML = "Ć";
            eTail.innerHTML = "Ę";

            lStroke.innerHTML = "Ł";
            nStroke.innerHTML = "Ń";
            oStroke.innerHTML = "Ó";

            sStroke.innerHTML = "Ś";
            zStroke.innerHTML = "Ź";
            zDot.innerHTML = "Ż";

        } else {
            aTail.innerHTML = "ą";
            cStroke.innerHTML = "ć";
            eTail.innerHTML = "ę";

            lStroke.innerHTML = "ł";
            nStroke.innerHTML = "ń";
            oStroke.innerHTML = "ó";

            sStroke.innerHTML = "ś";
            zStroke.innerHTML = "ź";
            zDot.innerHTML = "ż";
        }

        // aTail.addEventListener("click", function () { copyTextToClipboard('ą'); }, false);
        // cStroke.addEventListener("click", function () { copyTextToClipboard('ć'); }, false);
        // eTail.addEventListener("click", function () { copyTextToClipboard('ę'); }, false);

        // lStroke.addEventListener("click", function () { copyTextToClipboard('ł'); }, false);
        // nStroke.addEventListener("click", function () { copyTextToClipboard('ń'); }, false);
        // oStroke.addEventListener("click", function () { copyTextToClipboard('ó'); }, false);

        // sStroke.addEventListener("click", function () { copyTextToClipboard('ś'); }, false);
        // zStroke.addEventListener("click", function () { copyTextToClipboard('ź'); }, false);
        // zDot.addEventListener("click", function () { copyTextToClipboard('ż'); }, false);

    }

});

//https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");

    //
    // *** This styling is an extra step which is likely not required. ***
    //
    // Why is it here? To ensure:
    // 1. the element is able to have focus and selection.
    // 2. if element was to flash render it has minimal visual impact.
    // 3. less flakyness with selection and copying which **might** occur if
    //    the textarea element is not visible.
    //
    // The likelihood is the element won't even render, not even a
    // flash, so some of these are just precautions. However in
    // Internet Explorer the element is visible whilst the popup
    // box asking the user for permission for the web page to
    // copy to the clipboard.
    //

    // Place in top-left corner of screen regardless of scroll position.
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;

    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textArea.style.width = '2em';
    textArea.style.height = '2em';

    // We don't need padding, reducing the size if it does flash render.
    textArea.style.padding = 0;

    // Clean up any borders.
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';

    // Avoid flash of white box if rendered for any reason.
    textArea.style.background = 'transparent';


    textArea.value = text;

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }

    document.body.removeChild(textArea);
}