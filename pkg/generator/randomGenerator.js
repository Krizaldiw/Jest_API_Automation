function randomName() {
    const firstNames = ['John', 'Jane', 'Michael', 'Emily', 'David', 'Sophia', 'Ibrahim','Daniel','Hakeem','Jasmine','Trusty','Andy','Sarah','Hazkiyal','Kenneth','Petar', 'Kalvin','Rudy','Bradley','Faez','Rajwa'];
    const lastNames = ['Doe', 'Smith', 'Johnson', 'Williams', 'Brown','Niall','Mohammed','','Aissa','Luke','Cleverley','McTominay','Adama','Lindegaard','Garcia','Antony', 'Terence','Taarabt','Luis','Hampton','Hernandez'];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${randomFirstName} ${randomLastName}`;
}

function randomCompany() {
    const compNames = ['Unilever', 'Telkomsel', 'Freeport', 'Lazada','PrivyID','Telkom Indonesia',
                       'Tiket.Com','Bukalapak', 'GoTo Group', 'AccelByte', 'Grab', 'Schlumberger', 
                       'ExxonMobil', 'KAI Indonesia', 'NinjaXpress', 'Astra International',
                       'Tokopedia','Parkee','Samsung','Flip','eFishery','Noon'];
    const randomCompName = compNames[Math.floor(Math.random() * compNames.length)];
    return randomCompName;
}

function randomDepartment() {
    const deptNames = ['Frontend Engineer', 'Backend Engineer', 'Data Engineer', 'UI Designer','UX Writer','QA Engineer',
                       'Android Developer','IOS Developer', 'System Engineer', 'HRD - Talent Speceialist', 'Test Engineer', 'SDET', 
                       'Payroll Specialist', 'ML Engineer', 'AI Engineer', 'Business Development','Drill Engineer', 'Offshore Engineer',
                       'K3','UX Designer','IOT Engineer','Infrastructure Engineer','Cloud Engineer','Civil Engineer','Technical Writer',
                       'Game Developer', 'Site Reliability Engineer', 'RnD Engineer', 'Data Center Specialist', 'UX Researcher', 'System Analyst',
                       'Database Administrator','Mine Engineer','Finance','Customer Experience','Digital Marketing','Product Manager','Merchant Partnership'];
    const randomDeptName = deptNames[Math.floor(Math.random() * deptNames.length)];
    return randomDeptName;
}

function randomAlfabet(length) {
    let result = '';
    let characters = '0123456780ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


// console.log(randomEmail(20,'privyid.tech'));
module.exports = {randomName,randomAlfabet, randomCompany, randomDepartment};