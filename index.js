// add solution here
function theBeatlesPlay (musicians, instruments) {
  var temp = []; var i;
  for (i = 0; i<musicians.length; i++) {
    var stat = musicians[i] + ` plays ` + instruments[i]
    temp[i] = stat
  }
  return temp
}