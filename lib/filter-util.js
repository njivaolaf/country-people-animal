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
    
    let resultList = [];
    if (filterAnimalNameString){

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
                    if (peopleTemp.animals.length > 0) {
                        countryTemp.people.push(peopleTemp);
                    }
    
                })
            }
            // pushing to result if the actual country contains filtered results
            if (countryTemp.people.length > 0) {
                resultList.push(countryTemp);
            }
        });
    } else{
        resultList = countryListData;
    }

    if (enableCount){
        resultList = this.countifyPeopleAndAnimals(resultList);
    }

    console.log('TODO, remove this:', JSON.stringify(resultList));

    return resultList;
}

/**
 * @param {Country[]} countryListData
 * @returns {Country[]}
 */
FilterUtil.countifyPeopleAndAnimals = (countryListData) => {
    // Adding counts e.g:  France[0] in countries and animals in the list
    let addedCountResultList = countryListData.map(countryItem=>{
        countryItem.name += ` [${countryItem.people.length}]`;
        countryItem.people = countryItem.people.map(peopleItem=>{
            peopleItem.name += ` [${peopleItem.animals.length}]`;
            return peopleItem;
        });
        return countryItem;
    });
    return addedCountResultList;
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