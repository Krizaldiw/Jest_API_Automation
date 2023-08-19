const request = require("supertest");
const { randomAlfabet, randomName , randomCompany, randomDepartment} = require('../../pkg/generator/randomGenerator');
const envVault = require('../../config/env/vault.json');
const baseURLAutomation = envVault.BASE_URL;
const pathURLCREATEDATA = envVault.PATH_URL_CREATE_DATA;

describe('Create Data Employee', () => {
    it('Create Data Employee With Valid Value', async () => {
        const generateRandomName = () => {
            return `${randomName()}`;
        };

        const generateRandomNIM = () => {
            return `${randomAlfabet(7)}`;
        };

        const generateRandomCompany = () => {
            return `${randomCompany()}`;
        };

        const generateRandomDepartment = () => {
            return `${randomDepartment()}`;
        };

        const body = {
            "nim": generateRandomNIM(),
            "fullName": generateRandomName(),
            "department": generateRandomDepartment(),
            "company": generateRandomCompany(),
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
    it('Create Data Employee With NIM less than 7 Character', async () => {
        

        const generateRandomNIM = () => {
            return `${randomAlfabet(6)}`;
        };

        const body = {
            "nim": generateRandomNIM(),
            "fullName": "Andar Rekik",
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

        expect(response.status).toBe(400);  
        expect(response.body.message);
    });
    it('Create Data Employee With fullName less than 3 Character', async () => {
        
        const generateRandomName = () => {
            return `${randomName(2)}`;
        };

        const generateRandomNIM = () => {
            return `${randomAlfabet()}`;
        };

        const generateRandomCompany = () => {
            return `${randomCompany()}`;
        };

        const generateRandomDepartment = () => {
            return `${randomDepartment()}`;
        };

        const body = {
            "nim": generateRandomNIM,
            "fullName": generateRandomName(),
            "department": generateRandomDepartment(),
            "company": generateRandomCompany,
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

        expect(response.status).toBe(400);  
        expect(response.body.message);
    });
    it('Create Data Employee With Spaces at Beginning', async () => {
        
        const generateRandomName = () => {
            return `${randomName()}`;
        };

        const generateRandomCompany = () => {
            return `${randomCompany()}`;
        };

        const generateRandomDepartment = () => {
            return `${randomDepartment()}`;
        };

        const body = {
            "nim": " KHH8732",
            "fullName": generateRandomName(),
            "department": generateRandomDepartment(),
            "company": generateRandomCompany,
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

        expect(response.status).toBe(400); // Status should be 400, not 422
        expect(response.body.message);
    });
    it('Create Data Employee With Spaces at End', async () => {
        
        const generateRandomName = () => {
            return `${randomName()}`;
        };

        const generateRandomCompany = () => {
            return `${randomCompany()}`;
        };

        const generateRandomDepartment = () => {
            return `${randomDepartment()}`;
        };

        const body = {
            "nim": "KHH8732 ",
            "fullName": generateRandomName(),
            "department": generateRandomDepartment(),
            "company": generateRandomCompany,
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

        expect(response.status).toBe(400); // Status should be 400, not 422
        expect(response.body.message);
    });
    it('Create Data Employee With Spaces at Middle', async () => {
        
        const generateRandomName = () => {
            return `${randomName()}`;
        };

        const generateRandomCompany = () => {
            return `${randomCompany()}`;
        };

        const generateRandomDepartment = () => {
            return `${randomDepartment()}`;
        };

        const body = {
            "nim": "KHH 8732",
            "fullName": generateRandomName(),
            "department": generateRandomDepartment(),
            "company": generateRandomCompany,
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

        expect(response.status).toBe(400); // Status should be 400, not 422
        expect(response.body.message);
    });
    it('Create Data Employee With Empty NIM', async () => {
        
        const generateRandomName = () => {
            return `${randomName()}`;
        };

        const generateRandomCompany = () => {
            return `${randomCompany()}`;
        };

        const generateRandomDepartment = () => {
            return `${randomDepartment()}`;
        };

        const body = {
            "nim": "",
            "fullName": generateRandomName(),
            "department": generateRandomDepartment(),
            "company": generateRandomCompany,
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

        expect(response.status).toBe(400); // Status should be 400, not 422
        expect(response.body.message);
    });
    it('Create Data Employee With Empty Name', async () => {
        
        const generateRandomNIM = () => {
            return `${randomAlfabet()}`;
        };

        const generateRandomCompany = () => {
            return `${randomCompany()}`;
        };

        const generateRandomDepartment = () => {
            return `${randomDepartment()}`;
        };

        const body = {
            "nim": generateRandomNIM(),
            "fullName": "",
            "department": generateRandomDepartment(),
            "company": generateRandomCompany(),
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

        expect(response.status).toBe(400); // Status should be 400, not 422
        expect(response.body.message);
    });
    it('Create Data Employee With Empty Department', async () => {
        
        const generateRandomName = () => {
            return `${randomName()}`;
        };

        const generateRandomNIM = () => {
            return `${randomAlfabet()}`;
        };

        const generateRandomCompany = () => {
            return `${randomCompany()}`;
        };

        const body = {
            "nim": generateRandomNIM(),
            "fullName": generateRandomName(),
            "department": "",
            "company": generateRandomCompany(),
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

        expect(response.status).toBe(400); // Status should be 400, not 422
        expect(response.body.message);
    });
    it('Create Data Employee With Empty Company', async () => {
        
        const generateRandomName = () => {
            return `${randomName()}`;
        };

        const generateRandomNIM = () => {
            return `${randomAlfabet()}`;
        };

        const generateRandomDepartment = () => {
            return `${randomDepartment()}`;
        };

        const body = {
            "nim": generateRandomNIM(),
            "fullName": generateRandomName(),
            "department": generateRandomDepartment(),
            "company": "",
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

        expect(response.status).toBe(400); // Status should be 400, not 422
        expect(response.body.message);
    });
    it('Create Data Employee With SpecChar on NIM', async () => {

        const generateRandomNIM = () => {
            return `${randomAlfabet()}`;
        };

        const generateRandomName = () => {
            return `${randomName()}`;
        };

        const generateRandomDepartment = () => {
            return `${randomDepartment()}`;
        };

        const generateRandomCompany = () => {
            return `${randomCompany()}`;
        };

        const body = {
            "nim": "#$&&*&$",
            "fullName": generateRandomName(),
            "department": generateRandomDepartment(),
            "company": generateRandomCompany(),
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

        expect(response.status).toBe(422); // Status should be 400, not 422
        expect(response.body.message).toBe("NIM cannot contain special characters");
    });
    it('Create Data Employee With SpecChar on fullName', async () => {

        const generateRandomNIM = () => {
            return `${randomAlfabet()}`;
        };

        const generateRandomDepartment = () => {
            return `${randomDepartment()}`;
        };

        const generateRandomCompany = () => {
            return `${randomCompany()}`;
        };

        const body = {
            "nim": generateRandomNIM(),
            "fullName": "#$&&",
            "department": generateRandomDepartment(),
            "company": generateRandomCompany(),
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

        expect(response.status).toBe(400); // Status should be 400, not 422
        expect(response.body.message);
    });
    it('Create Data Employee With SpecChar on Department', async () => {

        const generateRandomName = () => {
            return `${randomName()}`;
        };

        const generateRandomNIM = () => {
            return `${randomAlfabet()}`;
        };

        const generateRandomCompany = () => {
            return `${randomCompany()}`;
        };

        const body = {
            "nim": generateRandomNIM(),
            "fullName": generateRandomName(),
            "department": "#$&&*&^*&",
            "company": generateRandomCompany(),
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

        expect(response.status).toBe(400); // Status should be 400, not 422
        expect(response.body.message);
    });
    it('Create Data Employee With SpecChar on Department', async () => {

        const generateRandomName = () => {
            return `${randomName()}`;
        };

        const generateRandomNIM = () => {
            return `${randomAlfabet()}`;
        };

        const generateRandomDepartment = () => {
            return `${randomDepartment()}`;
        };

        const body = {
            "nim": generateRandomNIM(),
            "fullName": generateRandomName(),
            "department": generateRandomDepartment(),
            "company": "#$&&*&^*&",
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

        expect(response.status).toBe(400); // Status should be 400, not 422
        expect(response.body.message);
    });
});
