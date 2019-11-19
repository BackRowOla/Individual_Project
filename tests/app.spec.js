const chai = require('chai')
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);

describe('server', () => {

    it('should do a thing', () => {
        expect(true).to.eq(true);
    });
    it('should do another thing', () => {
        expect(true).to.eq(true);
    });

    it('should say it worked', (done) => {
        chai.request(app)
            .get('/deletethis')
            .end((err, response) => {
                expect(response.status).to.eq(200);
                done();
            });
    });

});