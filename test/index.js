const t = require('./../index');

const Window = require('window');
 
const window = new Window();

var chai = require('chai'),
    expect = chai.expect,
    sinonChai = require('sinon-chai'),
    sinon = require('sinon');

chai.use(sinonChai);

describe('Prueba ------', () => {

    beforeEach(function() {
        sinon.spy(console, 'log');
    });

    afterEach(function() {
        console.log.restore();
    });
    
    it('', () => {
        t.l.prueba('prueba');

        expect(console.log).to.be.called;
        // expect(console.log.calledWith('prueba')).to.be.true;
        // expect( console.log.ca
        // '%c color: green; font-size: 18px prueba');
    });

    it('', () => {
        t.l.unicorn();
        expect( console.log.calledWith('Hola') ).to.be.true;
        expect(console.log).to.be.called;
        // '%c color: green; font-size: 18px prueba');
    });

    it('should not log to console', function() {
        t.l.hola();
        expect(console.log).to.not.be.called;
    });
});