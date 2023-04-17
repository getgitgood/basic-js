const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  let finalStr = '';
  const defStrSeparator = '+'
  const defAddSeparator = '|';
  if (str === null) str = 'null';
  if (Object.values(options).includes(null)) {
    let nullIndex = Object.values(options).indexOf(null);
    let nullProp = Object.keys(options)[nullIndex];  
    options[nullProp] = 'null';
  }
  if (options.addition === false) {
    options.addition = 'false'
  }
  options.addition = options.addition ? options.addition + '' : ''
  let additionStr = options.addition.concat(options.additionSeparator || defAddSeparator).repeat(options.additionRepeatTimes || 1);
  console.log(additionStr)
  if (options.additionSeparator) {
    additionStr = additionStr.slice(0, additionStr.lastIndexOf(options.additionSeparator))
  } else {
    additionStr = additionStr.slice(0, additionStr.lastIndexOf(defAddSeparator))
  }
  
  finalStr = (str + "").concat(additionStr).concat(options?.separator || defStrSeparator).repeat(options?.repeatTimes || 1)
  if (options.separator) {
    finalStr = finalStr.slice(0, finalStr.lastIndexOf(options.separator))
  } else {
    finalStr = finalStr.slice(0, finalStr.lastIndexOf(defStrSeparator))
  }
  return finalStr
}

module.exports = {
  repeater
};
