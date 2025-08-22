
describe('Student API', () => {
  let studentId;

  before(() => {
    cy.request('GET', '/student') //the POST /student is full, some items need to be deleted to run the mockAPI
          .then((resp) => {
            resp.body.slice(0, 2).forEach((user) => {
              cy.request('DELETE', `/student/${user.id}`)
          })  
        });

    cy.request('POST', '/student', {
      name: 'isabella',
      email: 'isabella@gmail.com',
      birthdate: '2003-11-21',
      academic_record: '123456',
      cpf: '12345678999'
    }).then((resp) => {
      expect(resp.status).to.eq(201);
      studentId = resp.body.id;
    });
  });

  it('getting the list of students', () => {
    cy.request('GET', '/student', {
    }) .then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('getting a specific student', () => {

    cy.request('GET', `/student/${studentId}`, {
    }) .then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('create a new student', function() {
    cy.request('POST', '/student', {
      name: 'isabella',
      email: 'isabella@gmail.com',
      birthdate: '2003-11-21',
      academic_record: '123456',
      cpf: '12345678999'
    }).then((resp) => {
      expect(resp.status).to.eq(201);
      expect(resp.body).to.include.keys('id', 'name', 'email', 'cpf', 'academic_record');
      studentId = resp.body.id;
    });
  });

  it('create a new student with empty name', function() {
    cy.request('POST', '/student', {
      name: '',
      email: 'isabella@gmail.com',
      birthdate: '2003-11-21',
      academic_record: '123456',
      cpf: '12345678999'
    }).then((resp) => {
      expect(resp.status).to.eq(400);
      expect(resp.body).to.include.keys('id', 'name', 'email', 'cpf', 'academic_record');
      studentId = resp.body.id;
    });
  });

  it('create a new student with invalid name', function() {
    cy.request('POST', '/student', {
      name: '1', 
      email: 'isabella@gmail.com',
      birthdate: '2003-11-21',
      academic_record: '123456',
      cpf: '12345678999'
    }).then((resp) => {
      expect(resp.status).to.eq(400);
      expect(resp.body).to.include.keys('id', 'name', 'email', 'cpf', 'academic_record');
      studentId = resp.body.id;
    });
  });

  it('create a new student with empty email', function() {
    cy.request('POST', '/student', {
      name: 'Isabella',
      email: '',
      birthdate: '2003-11-21',
      academic_record: '123456',
      cpf: '12345678999'
    }).then((resp) => {
      expect(resp.status).to.eq(400);
      expect(resp.body).to.include.keys('id', 'name', 'email', 'cpf', 'academic_record');
      studentId = resp.body.id;
    });
  });

  it('create a new student with invalid email', function() {
    cy.request('POST', '/student', {
      name: 'Isabella', 
      email: 'isabellagmail',
      birthdate: '2003-11-21',
      academic_record: '123456',
      cpf: '12345678999'
    }).then((resp) => {
      expect(resp.status).to.eq(400);
      expect(resp.body).to.include.keys('id', 'name', 'email', 'cpf', 'academic_record');
      studentId = resp.body.id;
    });
  });

    it('create a new student with empty birthdate', function() {
    cy.request('POST', '/student', {
      name: 'Isabella',
      email: 'isabella@gmail.com',
      birthdate: '',
      academic_record: '123456',
      cpf: '12345678999'
    }).then((resp) => {
      expect(resp.status).to.eq(400);
      expect(resp.body).to.include.keys('id', 'name', 'email', 'cpf', 'academic_record');
      studentId = resp.body.id;
    });
  });

  it('create a new student with invalid birthdate', function() {
    cy.request('POST', '/student', {
      name: 'Isabella', 
      email: 'isabella@gmail.com',
      birthdate: '99991121',
      academic_record: '123456',
      cpf: '12345678999'
    }).then((resp) => {
      expect(resp.status).to.eq(400);
      expect(resp.body).to.include.keys('id', 'name', 'email', 'cpf', 'academic_record');
      studentId = resp.body.id;
    });
  });

  it('create a new student with empty academic_record', function() {
    cy.request('POST', '/student', {
      name: 'Isabella',
      email: 'isabella@gmail.com',
      birthdate: '2003-11-21',
      academic_record: '',
      cpf: '12345678999'
    }).then((resp) => {
      expect(resp.status).to.eq(400);
      expect(resp.body).to.include.keys('id', 'name', 'email', 'cpf', 'academic_record');
      studentId = resp.body.id;
    });
  });

  it('create a new student with invalid academic_record', function() {
    cy.request('POST', '/student', {
      name: 'Isabella', 
      email: 'isabella@gmail.com',
      birthdate: '2003-11-21',
      academic_record: 'A',
      cpf: '12345678999'
    }).then((resp) => {
      expect(resp.status).to.eq(400);
      expect(resp.body).to.include.keys('id', 'name', 'email', 'cpf', 'academic_record');
      studentId = resp.body.id;
    });
  });

  it('create a new student with empty cpf', function() {
    cy.request('POST', '/student', {
      name: 'Isabella',
      email: 'isabella@gmail.com',
      birthdate: '2003-11-21',
      academic_record: '123456',
      cpf: ''
    }).then((resp) => {
      expect(resp.status).to.eq(400);
      expect(resp.body).to.include.keys('id', 'name', 'email', 'cpf', 'academic_record');
      studentId = resp.body.id;
    });
  });

  it('create a new student with invalid cpf', function() {
    cy.request('POST', '/student', {
      name: 'Isabella', 
      email: 'isabella@gmail.com',
      birthdate: '2003-11-21',
      academic_record: '123456',
      cpf: '123'
    }).then((resp) => {
      expect(resp.status).to.eq(400);
      expect(resp.body).to.include.keys('id', 'name', 'email', 'cpf', 'academic_record');
      studentId = resp.body.id;
    });
  });

  it('delete the student', function() {
    cy.request({
      method: 'DELETE',
      url: `/student/${studentId}`
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      cy.log('Aluno deletado com sucesso');
    });
  });
});