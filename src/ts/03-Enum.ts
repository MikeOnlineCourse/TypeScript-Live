enum DaysWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getTodaySpecial(day: DaysWeek) {
  switch (day) {
    case DaysWeek.Monday:
      return "星期一大特價: 買一送一!";
    case DaysWeek.Tuesday:
      return "星期二大特價: 三人同行一人免費!";
    case DaysWeek.Wednesday:
      return "星期三大特價: 五折優惠!";
    case DaysWeek.Thursday:
      return "星期四大特價: 三人同行一人免費!";
    case DaysWeek.Friday:
      return "星期五大特價: 五折優惠!";
    case DaysWeek.Saturday:
      return "星期六大特價: 買一送一!";
    case DaysWeek.Sunday:
      return "星期日大特價: 三人同行一人免費!";
    default:
      return "今天沒有特價活動!";
  }
}
console.log(getTodaySpecial(DaysWeek.Monday));
 


/**
* 反向映射
*/
 enum ErrorCode {
  NotFound = 404,
  Forbidden = 403,
  Unauthorized = 401,
}

console.log(ErrorCode.Forbidden); //  ->  403  
console.log(ErrorCode[403]); //  ->  Forbidden
  
  