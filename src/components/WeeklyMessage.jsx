import React from "react";

const WeekdayMessages = () => {
  const date = new Date(); //getting the date objrct
  const day = date.getDay(); //sunday=0, monday=1,...saturday=6
  const hour = date.getHours(); // 0 to 23

  let message = " ";
  // day based messages
  switch(day) {
    case 0:
        message = "Happy Sunday";
        break;
    case 1:
        message = "Happy Monday";
        break;
    case 2:
        message = "Happy Tuesday";
        break;
    case 3:
        message = "Happy Wednesday";
        break;
    case 4:
        message = "Happy Thursday";
        break;
    case 5:
        message = "TGIF, 🙌🙋Happy Friday";
        break;
    case 6:
        message = "It is Saturday Enjoy your weekend ";
        break;
    default:
        message = "Hello";
  }

     // time-based add on
    if(hour < 12){
        message += "Good Morning";
    }else if (hour >= 12 && hour < 18){
        message += "Good Afternoon";
    }else {
        message += "Good Evenning";
    }

  return(
  <div style={{padding: '20px', fontSize:'1.5rem', textAlign:'center'}}>
        {message}
  </div>
  );
};

export default WeekdayMessages;
