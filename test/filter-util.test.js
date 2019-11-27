var assert = require('assert');

var mainData = require('../constants/data');
var FilterUtil = require('../lib/filter-util');

describe('FilterUtil', function () {
    describe('#filterCountryListData()', function () {

        it('should return the whole list if no filter is passed', () => {
            const input = {
                dataList: mainData.data,
                filterString: null,
                enableCount: false
            };

            const result = FilterUtil.filterCountryListData(input.dataList, input.filterString, input.enableCount);
            const expectation = input.dataList;
            assert.deepStrictEqual(result, expectation);
        });

        it('should return a list of countries and people with animals containing ry with intact order', () => {
            const input = {
                dataList: mainData.data,
                filterString: 'ry',
                enableCount: false
            }

            const result = FilterUtil.filterCountryListData(input.dataList, input.filterString, input.enableCount);

            assert.notStrictEqual(result, null);
            assert.strictEqual(Array.isArray(result), true);
            assert.strictEqual(result.length, 2);

            assert.deepStrictEqual(result[0].name, 'Uzuzozne');
            assert.deepStrictEqual(result[0].people[0].name, 'Lillie Abbott');

        });

        it('should return a list of countries and people with animals containing tula with intact order',()=>{
            const input = {
                dataList: mainData.data,
                filterString: 'tula',
                enableCount: false
            }

            const result = FilterUtil.filterCountryListData(input.dataList, input.filterString, input.enableCount);

            assert.notStrictEqual(result, null);
            assert.strictEqual(Array.isArray(result), true);
            assert.strictEqual(result.length, 1);

            assert.deepStrictEqual(result[0].name, 'Satanwi');
            assert.deepStrictEqual(result[0].people[0].name, 'Anthony Bruno');
        });

        it('should return a blank list when searching for abcd');

        it('should return a list of countries and people with animals containing ry with intact order but with COUNT near the name');
    });
});