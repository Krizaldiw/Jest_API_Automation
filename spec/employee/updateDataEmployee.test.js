// const request = require('supertest');
// const { randomAlfabet, randomName, randomCompany, randomDepartment } = require('../../pkg/generator/randomGenerator');
// const envVault = require('../../config/env/vault.json');
// const baseURLAutomation = envVault.BASE_URL;
// const pathURLCREATEDATA = envVault.PATH_URL_CREATE_DATA; // Update with the correct path
// const pathURLUPDATEDATA = envVault.PATH_URL_UPDATE_DATA;

// describe('Update Data Employee', () => {
//     it('Update Data Employee With Valid Value', async () => {
//         // Generate random values for creating data
//         const randomNIM = randomAlfabet(7);
//         const randomFullName = randomName();
//         const randomDept = randomDepartment();
//         const randomComp = randomCompany();
//         const randomCommunity = [
//             'Design Jam Indonesia',
//             '1001 StartUp Digital',
//             'Artifisial Indonesia',
//             'Data Science Indonesia',
//             'PythonID'
//         ];

//         // Create data using random values
//         const createBody = {
//             "nim": randomNIM,
//             "fullName": randomFullName,
//             "department": randomDept,
//             "company": randomComp,
//             "community": randomCommunity
//         };

//         const createResponse = await request(baseURLAutomation)
//             .post(pathURLCREATEDATA)
//             .set('Content-Type', 'application/json')
//             .send(createBody);

//         // Assertion for the create response
//         expect(createResponse.status).toBe(201);
//         expect(createResponse.body.message).toBe('Data has been created successfully');
//         expect(createResponse.body.data.nim).toBe(randomNIM);
//         // Add other assertions for the created data if needed

//         // Use the same random values to update the data
//         const updateBody = {
//             "nim": randomNIM,
//             "fullName": randomFullName,
//             "department": randomDept,
//             "company": randomComp,
//             "community": randomCommunity
//         };

//         // Update the data using the same random values
//         const profileId = createResponse.body.data.id; // Use the ID from the create response
//         const updateResponse = await request(baseURLAutomation)
//             .post(`${pathURLUPDATEDATA}/${profileId}`)
//             .set('Content-Type', 'application/json')
//             .send(updateBody);

//         // Assertion for the update response
//         expect(updateResponse.status).toBe(200);
//         expect(updateResponse.body.message).toBe('Success Updated Data');
//         // Add other assertions for the updated data if needed
//     });
// });
