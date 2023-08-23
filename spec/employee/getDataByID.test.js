const request = require('supertest');
const assert = require("chai").expect;
const envVault = require('../../config/env/vault.json');
const baseURLAutomation = envVault.BASE_URL; // Update with your base URL
const pathURLGetDataById = envVault.PATH_URL_GET_DATA_BY_ID; // Update with the correct path

describe('Get Data Profile by Id', () => {
    it('Get Detail Position with valid Position Id', async () => {
        const profileId = "64df213d31ff23688a2f5d0e";

        const resps = await request(baseURLAutomation).get(`${pathURLGetDataById}/${profileId}`);
        
        console.log(resps.body);
        expect(resps.body.message).toBe('Get Data Profile By ID Success');

        const { data } = resps.body;
        expect(data.nim).toBeDefined();
        expect(data.fullName).toBeDefined();
        expect(data.department).toBeDefined();
        expect(data.company).toBeDefined();
        expect(data.community).toBeDefined();
        expect(data.created_at).toBeDefined();
        expect(data.updated_at).toBeDefined();
        expect(data.id).toBe(profileId);
    });
    it('Get Detail Position with non Exist Position Id', async () => {
        const profileId = "64df213d31ff23688a2f5d0edf";

        const resps = await request(baseURLAutomation).get(`${pathURLGetDataById}/${profileId}`);
        
        console.log(resps.body);
        expect(resps.body.message).toBe('Data with ID is Not Registered');
        expect(resps.status).toBe(404);
    });
});
