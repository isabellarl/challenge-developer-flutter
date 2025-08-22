
describe('Login API', () => {
  let userId;

  before(() => { 
    cy.request('GET', '/login') //the POST /login is full, some items need to be deleted to run the mockAPI
      .then((resp) => {
        resp.body.slice(0, 2).forEach((user) => {
          cy.request('DELETE', `/login/${user.id}`)
        })
      })
    cy.request('POST', '/login', {
      email: 'isabella@gmail.com',
      password: '123456'
    }).then((resp) => {
      expect(resp.status).to.eq(201);
      userId = resp.body.id;
    })
  })

  it('getting the list of login', () => {
    cy.request('GET', '/login', {
    }) .then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('getting a specific login', () => {

    cy.request('GET', `/login/${userId}`, {
    }) .then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('create a new login with a valid username and password', () => {
    cy.request('POST', '/login', {
      email: 'isabella@gmail.com',
      password: '123456'
    }).then((resp) => {
      expect(resp.status).to.eq(201);
      expect(resp.body).to.have.property('token');
      expect(resp.body.email).to.eq('isabella@gmail.com');
    });
  });

  it('create a new login with a invalid password', () => {
    cy.request('POST', '/login', {
      email: 'isabella@gmail.com',
      password: '123' //considering that the password is valid with 6 or more characters
    }).then((resp) => {
      expect(resp.status).to.eq(400);
      expect(resp.body).to.have.property('token');
      expect(resp.body.email).to.eq('isabella@gmail.com');
    });
  });

  it('create a new login with a invalid email', () => {
    cy.request('POST', '/login', {
      email: 'isabellagmail',
      password: '123456'
    }).then((resp) => {
      expect(resp.status).to.eq(400); 
      expect(resp.body).to.have.property('token');
      expect(resp.body.email).to.eq('isabella@gmail.com');
    });
  });

  it('create a new login with a empty password', () => {
    cy.request('POST', '/login', {
      email: 'isabella@gmail.com',
      password: ''
    }).then((resp) => {
      expect(resp.status).to.eq(400);
      expect(resp.body).to.have.property('token');
      expect(resp.body.email).to.eq('isabella@gmail.com');
    });
  });

  it('create a new login with a empty email', () => {
    cy.request('POST', '/login', {
      email: '',
      password: '123456'
    }).then((resp) => {
      expect(resp.status).to.eq(400); 
      expect(resp.body).to.have.property('token');
      expect(resp.body.email).to.eq('isabella@gmail.com');
    });
  });

  it('create a new login with a empty email and password', () => {
    cy.request('POST', '/login', {
      email: '',
      password: ''
    }).then((resp) => {
      expect(resp.status).to.eq(400); 
      expect(resp.body).to.have.property('token');
      expect(resp.body.email).to.eq('isabella@gmail.com');
    });
  });

  it('create a new login with a invalid email and password', () => {
    cy.request('POST', '/login', {
      email: 'isabellagmail',
      password: '123'
    }).then((resp) => {
      expect(resp.status).to.eq(400); 
      expect(resp.body).to.have.property('token');
      expect(resp.body.email).to.eq('isabella@gmail.com');
    });
  });

  it('delete the login', function() {
      cy.request({
        method: 'DELETE',
        url: `/login/${userId}`
      }).then((resp) => {
        expect(resp.status).to.eq(200);
        cy.log('Login deletado com sucesso');
      });
    });
});