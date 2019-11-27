var assert = require('assert');

describe('Util', function () {
    describe('#getArgvDetailByName()', function () {
        it('should return { found: false ,value: null } when not found', function () {
            const argsList = [
                '/home/njivaolaf/.nvm/versions/node/v...',
                '/home/njivaolaf/testfolder...'
            ];
            var Util = require('../lib/util');

            const argvDetail = Util.getArgvDetailByName(argsList);
            assert.deepEqual(argvDetail,null);
            
        });
    });
});