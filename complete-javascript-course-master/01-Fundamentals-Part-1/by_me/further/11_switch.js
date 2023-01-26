const day = "Wednesday";

switch (day) {
    case "Monday": // day === "Monday"  : thus the strict equality operator is used
        console.log("today is monday");
        break;

   

    case "Wednesday":
        console.log("Watch me fall through all the cases !!");
       
    case "Tuesday":
        console.log("today is tuesday");
        break;

    default:
        console.log("invalid day");
}