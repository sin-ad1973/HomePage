var chai = require('chai');
var assert = chai.assert;

var myfunc = function(a, b) {
    return a + b;
}

describe('テスト', function () {
    it('myfuncのテスト', function () {
        assert.strictEqual(myfunc(1, 2), 5);
    });
});


