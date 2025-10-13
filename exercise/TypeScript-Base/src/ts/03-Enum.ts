/**
 * 常見案例 1
 */
function getTodaySpecial(day = '') {
  switch (day) {
    case 'Monday':
      return '星期一大特價: 買一送一!';
    case 'Tuesday':
      return '星期二大特價: 三人同行一人免費!';
    case 'Wednesday':
      return '星期三大特價: 五折優惠!';
    case 'Thursday':
      return '星期四大特價: 三人同行一人免費!';
    case 'Friday':
      return '星期五大特價: 五折優惠!';
    case 'Saturday':
      return '星期六大特價: 買一送一!';
    case 'Sunday':
      return '星期日大特價: 三人同行一人免費!';
    default:
      return '今天沒有特價活動!';
  }
}
console.log(getTodaySpecial('Monday'));

/**
 * 常見案例 2
 */
function getLOLUserStatus(status = '') {
  if (status === 'Online') {
    return '上線';
  } else if (status === 'Offline') {
    return '離線';
  } else if (status === 'leave') {
    return '不在位子上';
  } else {
    return '都不是';
  }
}

console.log(getLOLUserStatus('Online'));

/**
 * 反向映射
 */
const ErrorCode = {
  NotFound: 404,
  Forbidden: 403,
  Unauthorized: 401,
};

// console.log(ErrorCode.Forbidden);
// console.log(ErrorCode[403]);
