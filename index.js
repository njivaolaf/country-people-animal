var Util = require('./lib/util');
var FilterUtil = require('./lib/filter-util');
var DATA = require('./constants/data');

// Getting arguments from process.argv
const args = {
    filterArgument: Util.getArgvDetailsByName(process.argv, 'filter'),
    countArgument: Util.getArgvDetailsByName(process.argv, 'count')
}


const filterArgs = {
    animalName: (args.filterArgument.found && args.filterArgument.value ) ? args.filterArgument.value : null,
    countFlag: args.countArgument.found
}
// Building the filtered data as from the arguments
const result = FilterUtil.filterCountryListData(DATA.data,filterArgs.animalName,filterArgs.countFlag);

// Displaying the result
console.log(JSON.stringify(result));