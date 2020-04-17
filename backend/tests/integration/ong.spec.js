const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(() => {
        connection.migrate.latest();
    });
    it('should be able to create a new ONG', async () => {
    const response = await request(app)
        .post('/ongs')
        .send({
            name: "APA2",
	        email: "contato@apad2.com.br",
	        whatsapp: "41997181189",
	        city: "Rio Do Mato",
	        uf: "SC"
        });
    });
});
