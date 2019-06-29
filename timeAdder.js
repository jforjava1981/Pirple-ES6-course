export function timeAdder (timeValue1, label1, timeValue2, label2) {
    
      const SECONDS_IN_A_MINUTE = 60;
      const MINUTES_IN_A_SECOND = 60;
      const HOURS_IN_A_DAY = 24;
      const SECONDS_IN_A_DAY =  HOURS_IN_A_DAY * MINUTES_IN_A_SECOND *                                         SECONDS_IN_A_MINUTE;
      const SECONDS_IN_AN_HOUR = MINUTES_IN_A_SECOND * SECONDS_IN_A_MINUTE;
      const SECOND = "second";
      const SECONDS = "seconds";
      const MINUTE = "minute";
      const MINUTES = "minutes";
      const HOUR    = "hour";
      const HOURS   = "hours";
      const DAY     = "day";
      const DAYS    = "days";

      function isNumber(num) {
        return typeof num === 'number';
      }

      function isPositive(num) {
        return num < 0;
      }

      function isValidLabel(label) {
          switch(label) {
            case SECOND:
            case SECONDS:
            case MINUTE:
            case MINUTES:
            case HOUR:
            case HOURS:
            case DAY:
            case DAYS:
              return true;
            default: 
              return false; 
          }
      }

      function isValidTimeAndLabelCombination (timeValue, timeLabel) {
          switch(timeLabel) {
            case DAY:
            case HOUR:
            case MINUTE:
            case SECOND:
              if(timeValue === 1) {
                return true;
              }
              break;
            case DAYS:
            case HOURS:
            case MINUTES:
            case SECONDS:
              if(timeValue > 1) {
                return true;
              }
              break;
            default : 
              return false;    
          }
          return false;
      }
      
      function isValid(num, tLabel) {
          if( !isNumber(num) ) {
            return false;
          }
          if( !isValidLabel(tLabel) ) {
            return false;  
          }
          if( !isValidTimeAndLabelCombination(num,tLabel) )  {
            return false;    
          }
          return true;
      }

      function convertIntoSeconds(timeValue, timeLabel) {
          let timeValueInSeconds = 1;
          switch ( timeLabel ) {
            case SECONDS:
            case SECOND:
              timeValueInSeconds = timeValue;
            break;
            case MINUTES:
            case MINUTE:
              timeValueInSeconds = timeValue * SECONDS_IN_A_MINUTE;
            break;
            case HOURS:
            case HOUR:
              timeValueInSeconds = timeValue * MINUTES_IN_A_SECOND * SECONDS_IN_A_MINUTE;
            break;
            case DAYS:
            case DAY:
              timeValueInSeconds = timeValue * HOURS_IN_A_DAY * MINUTES_IN_A_SECOND * SECONDS_IN_A_MINUTE;
            break;
          }
          return timeValueInSeconds;
      }

      function calculateTimeUnits(timeValue) {
          if( timeValue % SECONDS_IN_A_DAY === 0 ) {
            if( timeValue / SECONDS_IN_A_DAY === 1) {
              return [1,DAY];
            } else {
              return [timeValue / SECONDS_IN_A_DAY,DAYS];
            } 
          }
          if( timeValue % SECONDS_IN_AN_HOUR === 0 ) {
            if( timeValue / SECONDS_IN_AN_HOUR === 1) {
              return [1,HOUR];
            } else {
              return [timeValue / SECONDS_IN_AN_HOUR,HOURS];
            }
          }
          if( timeValue % SECONDS_IN_A_MINUTE === 0 ) {
            if( timeValue / SECONDS_IN_A_MINUTE === 1) {
              return [1,MINUTE];
            } else {
              return [timeValue / SECONDS_IN_A_MINUTE,MINUTES];
            }
          }
          if( timeValue === 1 ) {
              return [1,SECOND];
          }else {
            return [timeValue,SECONDS];
          }
      }

      function addTime(timeValue1, timeLabel1, timeValue2, timeLabel2) {
          
          let timeValueInSeconds1 =  convertIntoSeconds(timeValue1, timeLabel1);
          let timeValueInSeconds2 =  convertIntoSeconds(timeValue2, timeLabel2);
          let timeValueInSeconds = timeValueInSeconds1 + timeValueInSeconds2;
          let timeInUnits = calculateTimeUnits(timeValueInSeconds);
          return timeInUnits;     
      }
     
      let valid = true;
      valid = isValid(timeValue1, label1) && isValid(timeValue2, label2);
      if(!valid) {
        return false;
      }
      return addTime(timeValue1, label1, timeValue2, label2);
}
