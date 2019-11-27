var Util = require('./lib/util');
var FilterUtil = require('./lib/filter-util');
var DATA = require('./constants/data');
const args = {
    filterArgument: Util.getArgvDetailsByName(process.argv, 'filter'),
    countArgument: Util.getArgvDetailsByName(process.argv, 'count')
}


const filterArgs = {
    animalName: (args.filterArgument.found && args.filterArgument.value ) ? args.filterArgument.value : null,
    countFlag: args.countArgument.found
}

const result = FilterUtil.filterCountryListData(DATA.data,filterArgs.animalName,filterArgs.countFlag);
console.log(JSON.stringify(result));