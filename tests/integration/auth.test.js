const request = require('supertest');
const {User} = require('../../models/user')
const {Genre} = require('../../models/genre')

describe('auth middleware', () => {
    let server;

    beforeEach(async() => {
        server = await require('../../index');
     })
 
     afterEach(async() => {
        await server.close();
     })
    
    it('should return 401 if no token is provided', async () => {
        // const token = new User().generateAuthToken();
        const token = '';
        const res = await request(server)
                    .post('/api/genres')
                    .set('x-auth-token', token)
                    .send({ name: 'genre1' });
        expect(res.status).toBe(401)
    })
})