
var exports = module.exports = {};


exports.words = function(str)
{
  var jsonObject = {};

  
  str.split(/[\s,]+/).forEach(function(i)
  {
    jsonObject[i]  =  (+jsonObject[i] || 0) + 1;
  });

  return jsonObject;
}


