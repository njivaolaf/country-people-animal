var assert = require('assert');

describe('Util', function () {
    describe('#getArgvDetailsByName()', function () {
        
        // Note argsList is got from process.argv array

        it('should return { found: false ,value: null } when filter is searched and not found in arguments list', function () {
            // Mocking parameters list
            const input = {
                argsList: [
                    '/home/njivaolaf/.nvm/versions/node/v...',
                    '/home/njivaolaf/testfolder...'
                ],
                argName: 'filter'
            }

            const expected = {
                found: false,
                value: null
            };

            var Util = require('../lib/util');
            const result = Util.getArgvDetailsByName(input.argsList, input.argName);

            assert.deepStrictEqual(result, expected);

        });

        it('should return { found: true ,value: null } when filter is set but no value is passed', function () {
            // Mocking parameters list
            const input = {
                argsList: [
                    '/home/njivaolaf/.nvm/versions/node/v...',
                    '/home/njivaolaf/testfolder...',
                    '--filter'
                ],
                argName: 'filter'
            }

            const expected = {
                found: true,
                value: null
            };

            var Util = require('../lib/util');
            const result = Util.getArgvDetailsByName(input.argsList, input.argName);

            assert.deepStrictEqual(result, expected);

        });

        it('should return { found: true ,value: "robot" } when filter is found but no value is passed', function () {
            // Mocking parameters list
            const input = {
                argsList: [
                    '/home/njivaolaf/.nvm/versions/node/v...',
                    '/home/njivaolaf/testfolder...',
                    '--filter=robot'
                ],
                argName: 'filter'
            }

            const expected = {
                found: true,
                value: "robot"
            };

            var Util = require('../lib/util');
            const result = Util.getArgvDetailsByName(input.argsList, input.argName);

            assert.deepStrictEqual(result, expected);

        });
    });
});