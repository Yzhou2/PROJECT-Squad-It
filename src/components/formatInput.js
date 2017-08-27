export default function(str){
  var newStr = str.toLowerCase().split(' ')
  newStr = newStr.map(word => word.substr(0,1).toUpperCase() + word.substr(1))
  return newStr.join(' ');
}
