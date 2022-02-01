const validateInput = (s)=>{
    const regex = 
    s.split()
}

function timeConversion(s) {
    let convertedHour                   //declare a variable where to save the  final value
    if (s.slice(-2) === "AM") {         //if the string ends with AM then...
        if (s.slice(0, 2) === "12"){    //if the hour is 12 then convert it to 00
            convertedHour = s.slice(0, 8).split(":"); 
            convertedHour[0] = "00"
            convertedHour = convertedHour.join(":")
            console.log({convertedHour})
            return convertedHour
        }
        convertedHour = s.slice(0, -2); //else delete the AM and return the convereted hour
        console.log({convertedHour})
        return convertedHour


    } else if (s.slice(-2)==="PM") { //if the string ends with PM
        convertedHour = s.slice(0, -2) //remove the PM
        if(convertedHour.slice(0, 2)=== "12"){ // if the string starts with 12
            console.log({convertedHour});
            return convertedHour; // return the same string without the PM
        }
        convertedHour = convertedHour.split(":"); //separate the elements
        convertedHour[0] = parseInt(convertedHour[0]) + 12; //add 11 to the hour element
        convertedHour = convertedHour.join(":") //join back together all the elements
        console.log({convertedHour})
        return convertedHour;



        return convertedHour
    }
     return s
}


timeConversion("23:08:23");
timeConversion("12:08:23PM");
timeConversion("06:00:20PM");
timeConversion("12:20:40AM");
timeConversion("08:15:50AM");

