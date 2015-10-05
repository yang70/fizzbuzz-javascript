var fizzBuzz = function(limit) {
  var output = '';

  for(i = 1; i <= limit; i++) {
    var string = '';

    if(i % 3 == 0) {
      string += 'fizz';
    }

    if(i % 5 == 0) {
      string += 'buzz';
    }

    if(string.length == 0) {
      output += i + '\n';
    } else {
      output += string + '\n';
    }
  }
  return output;
};

module.exports = fizzBuzz;
