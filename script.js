// Getting the data and store it in a object
document.getElementById('submit').addEventListener('submit', function(event){
    event.preventDefault();

    var date = new Date();
    date =  date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    var name = document.getElementById("name");
    var toteLocation = document.getElementById("toteLocation");
    var toteType = document.getElementById("toteType");
    var quantity = document.getElementById("quantity");
    var missing = document.getElementById("missing");
    var misplaced = document.getElementById("misplaced");
    var conditionIssue = document.getElementById("conditionIssue");
    var note = document.getElementById("note");
    var spoken = document.getElementById("spoken");

    var field = name && toteType && quantity;
        if(!field){
            console.log("Nema bradtche");
             return null;
        }

    var record = {
        date: date,
        name: name.value,
        toteLocation: toteLocation.value,
        toteType: toteType.value,
        quantity: quantity.value || 0,
        missing: missing.value || 0,
        misplaced: misplaced.value || 0,
        conditionIssue: conditionIssue.value || 0,
        note: note.value || "None",
        spoken: spoken.value === "on"? "Yes" : "No"
    };


    // Testing the Object
    for( values in record){
        console.log(record[values]);
    }

// Cleaning the fields
    name.value = "";
    toteLocation.value = "";
    toteType.value = "";
    quantity.value = "";
    missing.value = "";
    misplaced.value = "";
    conditionIssue.value = "";
    note.value = "";
    spoken.checked  = false;
    
//  Uploaded it to the spreadsheet              
    google.script.run.setData(record, "CulledScanning", "1qrWJ6uwSB4dqZp6jYQpzG9W-wuyHD67T4Bm1TH93zqc");
    
});
