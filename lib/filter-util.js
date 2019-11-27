'use strict'

function FilterUtil() {}

/**
 * @param {Country[]} countryListData
 * @param {String} filterString
 * @param {Boolean} enableCount
 * @returns {Country[]}
 */
FilterUtil.filterCountryListData = (countryListData, filterAnimalNameString, enableCount) => {
    // returning the whole list if no filter is passed.
    if (!filterAnimalNameString && !enableCount) return countryListData;

    let resultList = [];

    countryListData.forEach(countryItem => {
        let countryTemp = new Country(countryItem.name);

        if (countryItem.people && Array.isArray(countryItem.people)) {
            
            // Looping through people in the country
            countryItem.people.forEach(peopleItem => {
                let peopleTemp = new People(peopleItem.name);

                if (peopleItem.animals && Array.isArray(peopleItem.animals)) {

                    // Looping through each animal in the peopleItem
                    peopleItem.animals.forEach(animalItem => {
                        let animalTemp = new Animal(animalItem.name);
                        // Searching
                        if (animalTemp.name && animalTemp.name.search(filterAnimalNameString) !== -1) {
                            // Push to people temp if found animal containing the filter string
                            peopleTemp.animals.push(animalTemp);
                        }
                    })
                }
                if (peopleTemp.animals.length > 0) countryTemp.people.push(peopleTemp);

            })
        }
        // pushing to result if the actual country contains filtered results
        if (countryTemp.people.length > 0) {
            resultList.push(countryTemp);
        }
    });
    console.log('TODO, remove this:', JSON.stringify(resultList));
    return resultList;
}

class Country {
    constructor(nameInput) {
        this.name = nameInput;
        this.people = []
    }
}

class People {
    constructor(nameInput) {
        this.name = nameInput;
        this.animals = [];
    }
}
class Animal {
    constructor(nameInput) {
        this.name = nameInput;
    }
}

module.exports = FilterUtil