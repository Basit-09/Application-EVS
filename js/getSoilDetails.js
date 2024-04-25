var Country = document.getElementById( "country" );
var Place = document.getElementById( "place" );
var Climate = document.getElementById( "climate" );
var pH = document.getElementById( "pH" );
var details = document.getElementById("status")


function check(){
    // console.log(Country.value,Place.value,Climate.value,pH.value);
    if (pH < 6.5) {``
        details.innerHTML = "Your soil is acidic. Consider crops suitable for acidic soil.\nConsidering the climate estimated for the next 3 months in "+ Place.value + Country.value + "\nYou may consider crops suitable for that climate.\n";
        // Additional checks or suggestions can be added here based on specific crops
    } else if (pH > 7.5) {
        details.innerHTML = "Your soil is alkaline. Consider crops suitable for alkaline soil.\nConsidering the climate estimated for the next 3 months in "+ Place.value + Country.value + "\nYou may consider crops suitable for that climate.\n";
        // Additional checks or suggestions can be added here based on specific crops
    } else {
        details.innerHTML = "Your soil pH is neutral.\nConsidering the climate estimated for the next 3 months in "+ Place.value + " " +  Country.value + "\nYou may consider crops suitable for that climate.\n";
        // Additional checks or suggestions can be added here based on specific crops
    }

}