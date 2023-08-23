// const request = require('supertest');
// const { randomAlfabet, randomName, randomCompany, randomDepartment } = require('../../pkg/generator/randomGenerator');
// const envVault = require('../../config/env/vault.json');
// const baseURLAutomation = envVault.BASE_URL;
// const pathURLUPDATEDATA = envVault.PATH_URL_UPDATE_DATA;

const request = require('supertest');
const envVault = require('../../config/env/vault.json'); // Update the path as needed
const assert = require("chai").expect;
const baseURLAutomation = envVault.BASE_URL; // Update with your base URL
const pathURLUpdateData = envVault.PATH_URL_UPDATE_DATA; // Update with the correct path

describe('Update Data Profile', () => {
  it('Update data with valid data', async () => {
    const profileId = '64df213d31ff23688a2f5d0e';
    
    const updateDataPayload = {
      nim: 'FAR11YX',
      fullName: 'Hans Liness',
      department: 'HR - Business Partner',
      company: 'PrivyID',
      community: [
        'Digitalent by Kominfo',
        '1001 StartUp Digital',
        'Artifisial Indonesia',
        'Data Science Indonesia',
        'PythonID',
        '1001 StartUp Digital',
      ],
    };

    const response = await request(baseURLAutomation)
      .put(`${pathURLUpdateData}/${profileId}`)
      .send(updateDataPayload)
      .set('Content-Type', 'application/json');

    console.log(response.body);
    expect(response.body.message).toBe('Success Updated Data');
    expect(response.body.status).toBe('UpdatedDataProfileSuccess');
    expect(response.body.beforeUpdated).toBeDefined();
    expect(response.body.afterUpdated).toBeDefined();

    // Add assertions for properties in beforeUpdated and afterUpdated
    const { beforeUpdated, afterUpdated } = response.body;
    expect(beforeUpdated.nim).toBe(updateDataPayload.nim);
    expect(beforeUpdated.fullName).toBe(updateDataPayload.fullName);
    expect(beforeUpdated.department).toBe(updateDataPayload.department);
    expect(beforeUpdated.company).toBe(updateDataPayload.company);
    expect(beforeUpdated.community).toEqual([
        'Digitalent by Kominfo',
        '1001 StartUp Digital',
        'Artifisial Indonesia',
        'Data Science Indonesia',
        'PythonID',
        '1001 StartUp Digital',
    ]);
    expect(afterUpdated.nim).toBe('FAR11YX');
    expect(afterUpdated.fullName).toBe('Hans Liness');
    expect(afterUpdated.department).toBe('HR - Business Partner');
    expect(afterUpdated.company).toBe('PrivyID');
    expect(afterUpdated.community).toEqual([
        'Digitalent by Kominfo',
        '1001 StartUp Digital',
        'Artifisial Indonesia',
        'Data Science Indonesia',
        'PythonID',
        '1001 StartUp Digital',
    ]);
    expect(afterUpdated.created_at).toMatch(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/);

    const createdAt = new Date(beforeUpdated.created_at).getTime();
    const updatedAtBefore = new Date(beforeUpdated.updated_at).getTime();
    const updatedAtAfter = new Date(afterUpdated.updated_at).getTime();
    expect(updatedAtBefore).toBeGreaterThanOrEqual(createdAt);
    expect(updatedAtAfter).toBeGreaterThan(updatedAtBefore);

    expect(beforeUpdated.id).toBe('64df213d31ff23688a2f5d0e');
    expect(afterUpdated.id).toBe('64df213d31ff23688a2f5d0e');
});

it('Update data with non-existent ID', async () => {
    const nonExistentProfileId = '64df213d31ff28392';

    const updateDataPayload = {
      nim: 'FAR11YX',
      fullName: 'David Lang',
      department: 'HRD - Talent Specialist',
      company: 'Samsung',
      community: [
        'Digitalent by Kominfo',
        '1001 StartUp Digital',
        'Artifisial Indonesia',
        'Data Science Indonesia',
        'PythonID',
        '1001 StartUp Digital',
      ],
    };

    const response = await request(baseURLAutomation)
      .put(`${pathURLUpdateData}/${nonExistentProfileId}`)
      .send(updateDataPayload)
      .set('Content-Type', 'application/json');

    console.log(response.body);
    expect(response.body.message).toBe('Data with ID is Not Registered');
    expect(response.status).toBe(404);
  });
});