const request = require("supertest");
const { randomAlfabet, randomNumber } = require('../../pkg/generator/randomNumber');
const envVault = require('../../config/env/vault.json');
const baseURLAutomation = envVault.BASE_URL;
const pathURLCREATEDATA = envVault.PATH_URL_CREATE_DATA;

describe('Create Data Employee', () => {
    it('Create Data Employee With Valid Value', async () => {
        const generateRandomName = () => {
            const firstNames = ['John', 'Jane', 'Michael', 'Emily', 'David', 'Sophia', 'Ibrahim','Daniel','Hakeem','Jasmine','Trusty','Andy','Sarah','Hazkiyal'];
            const lastNames = ['Doe', 'Smith', 'Johnson', 'Williams', 'Brown','Niall','Mohammed','Aissa','Luke','Cleverley','McTominay','Adama','Lindegaard'];
            const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
            const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
            return `${randomFirstName} ${randomLastName}`;
        };

        const generateRandomNIM = () => {
            return `${randomAlfabet(7)}`;
        };

        const body = {
            "nim": generateRandomNIM(),
            "fullName": generateRandomName(),
            "department": "Service Management",
            "company": "Telkomsel",
            "community": [
                "Design Jam Indonesia",
                "1001 StartUp Digital",
                "Artifisial Indonesia",
                "Data Science Indonesia",
                "PythonID"
            ]
        };

        const response = await request(baseURLAutomation)
            .post(pathURLCREATEDATA)
            .set('Content-Type', 'application/json')
            .send(body);

        // Assertion for the response
        console.log(response.body);

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Data has been created successfully');
        expect(response.body.data.nim).toBe(body.nim);
        expect(response.body.data.fullName).toBe(body.fullName);
        expect(response.body.data.department).toBe(body.department);
        expect(response.body.data.company).toBe(body.company);
        expect(response.body.data.community).toEqual(body.community);
        expect(response.body.data.created_at).toBeDefined();
        expect(response.body.data.updated_at).toBeDefined();
        expect(response.body.data.id).toBeDefined();
    });

    it('Create Data Employee With Duplicated Value (NIM)', async () => {
        const body = {
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
            .send(body);

        // Assertion for the response
        console.log(response.body);

        expect(response.status).toBe(409);  
        expect(response.body.message).toBe(`User with the same NIM ${body.nim} already exists`);
    });
    it('Create Data Employee With Duplicated Value (Name)', async () => {
        const generateRandomNIM = () => {
            return `${randomAlfabet(7)}`;
        };

        const body = {
            "nim": generateRandomNIM(),
            "fullName": "Andar Petar",
            "department": "Field Engineer",
            "company": "Aramco",
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
            .send(body);

        // Assertion for the response
        console.log(response.body);

        expect(response.status).toBe(409);  
        expect(response.body.message).toBe(`User with the same name ${body.fullName} already exists`);
    });
});
