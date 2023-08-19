const request = require('supertest');
const envVault = require('../../config/env/vault.json');
const baseURLAutomation = envVault.BASE_URL;
const pathURLGetAllData = envVault.PATH_URL_GET_ALL_DATA; // Corrected the variable name

describe('Get All Data Profile', () => {
    it('Get All Data Profile', async () => {
        const resps = await request(baseURLAutomation).get(`${pathURLGetAllData}`);
        
        console.log(resps.body);
        expect(resps.body.message).toBe('Get All Data Profile Success');
        expect(resps.body.status).toBe('SuccessGetAllDataProfile');
        expect(resps.body.total).toBeGreaterThan(0); // Assuming total should be greater than 0

        const { data } = resps.body;
        expect(data).toBeInstanceOf(Array); // Assuming data is an array

        if (data.length > 0) {
            const profile = data[0];
            expect(profile.nim).toBeDefined();
            expect(profile.fullName).toBeDefined();
            expect(profile.department).toBeDefined();
            expect(profile.company).toBeDefined();
            expect(profile.community).toBeInstanceOf(Array); // Assuming community is an array
            expect(profile.id).toBeDefined();
        }
    });
});
