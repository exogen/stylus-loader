var should = require("should");
var css = require("!raw-loader!..!./fixtures/context");
(typeof css).should.be.eql("string");
css.should.match(/\.a-color/);
css.should.match(/\.b-color/);
css.should.match(/\.c-color/);
