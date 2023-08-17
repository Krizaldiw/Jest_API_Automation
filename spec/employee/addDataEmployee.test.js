const request = require("supertest");
const envVault = require('../../config/env/vault.json');
const baseURLAutomation = envVault.BASE_URL;
const pathURLCREATEDATA = envVault.PATH_URL_CREATE_DATA;

describe('Create Data Employee', () => {
    it('Create Data Employee With Valid Value', async () => {
        const requestData = {
            "nim": "CDE46779",
            "fullName": "Andar Petar",
            "department": "CLoud Engineer",
            "company": "ExtremaX",
            "community": [
                "Design Jam Indonesia",
                "1001 StartUp Digital",
                "Artifisial Indonesia",
                "Data Science Indonesia",
                "PythonID"
            ]
        };

        const response = await request(baseURLAutomation)  // Update the URL as needed
            .post(pathURLCREATEDATA)
            .set('Content-Type', 'application/json')
            .send(requestData);

        // Assertion for the response
        expect(response.status).toBe(201);  // Change to the expected status code
        expect(response.body.message).toBe('Data has been created successfully');
        expect(response.body.data).toEqual(expect.objectContaining({
            nim: requestData.nim,
            fullName: requestData.fullName,
            department: requestData.department,
            company: requestData.company,
            community: requestData.community,
            created_at: expect.any(String),
            updated_at: expect.any(String),
            id: expect.any(String)
        }));
    });
});
