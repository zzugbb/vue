
export function convertUTCTimeToLocalTime(UTCDateString) {
  if(!UTCDateString){
    return '-';
  }
  var date2 = new Date(UTCDateString);     //这步是关键
  var year = date2.getFullYear();
  var mon = formatFunc(date2.getMonth() + 1);
  var day = formatFunc(date2.getDate());
  var hour = date2.getHours();
  var noon = hour >= 12 ? 'PM' : 'AM';
  hour = hour>=12?hour-12:hour;
  hour = formatFunc(hour);
  var min = formatFunc(date2.getMinutes());
  var dateStr = year+'-'+mon+'-'+day+' '+noon +' '+hour+':'+min;
  return dateStr;
}

function formatFunc(str) { //格式化显示
  return str > 9 ? str : '0' + str
}