var Regex =  require('repl')

function Util() {}
/**
 * @param {String[]} argsList - list of arguments
 * @param {String} argName - argument name - e.g: filter in the case of our project
 */
Util.getArgvDetailsByName = (argsList, argName) => {
    let argvDetail = {
        found: false,
        value: null
    };

    // Searching for the argument name
    let index = 0;
    while (!argvDetail.found && index < argsList.length) {
        // Should begin with --argsName
        let regex = new RegExp(`^--${argName}`,'g');
        let foundId =  argsList[index].search(regex);
        if (foundId!==-1){
            // if FOUND:
            argvDetail.found = true;
        }
        index++;
    }


    return (argvDetail);
}

module.exports = Util;