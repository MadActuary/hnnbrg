

var state = 1;


function myFunction(e) {

    
    if (state === 1) {
        var x = e.getElementsByTagName('div')[0];
        var x1 = e.getElementsByTagName('div')[1];
    };

    if (state === 0) {
        var x = e.getElementsByTagName('div')[1];
        var x1 = e.getElementsByTagName('div')[0];

    };

    if (x.style.display === "none" && x1.style.display === "none") {
        x.style.display = "block";
        state = 1 - state;

    } else {
        x.style.display = "none";
        x1.style.display = "none";
    
    }
 
}