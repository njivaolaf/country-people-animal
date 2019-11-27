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

    // Searching for the argument name & getting value
    let index = 0;
    const regex = new RegExp(`^--${argName}`, 'g');
    const regex_withEqual = new RegExp(`^--${argName}=`, 'g');

    while (!argvDetail.found && index < argsList.length) {

        let argumentItem_str = argsList[index];
        let foundIndex = argumentItem_str.search(regex);

        if (foundIndex !== -1) {
            // if FOUND:
            argvDetail.found = true;
            // Finding --arg= in the string ( added the equal sign )
            let foundIndex_ = argumentItem_str.search(regex_withEqual);
            if (foundIndex_!== -1){
                argvDetail.value = argumentItem_str.replace(regex_withEqual, "");
            }
        }

        index++;
    }


    return (argvDetail);
}

module.exports = Util;