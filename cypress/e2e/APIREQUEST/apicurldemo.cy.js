describe('Petstore API CRUD Operations', () => {
    let petId;
  
    const uniquePet = {
      id: Date.now(),
      name: 'AmphoraPet',
      status: 'Application'
    };
  
    it('Create a new pet', () => {
      cy.request('POST', 'https://petstore.swagger.io/v2/pet', uniquePet)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('id', uniquePet.id);
          expect(response.body).to.have.property('name', uniquePet.name);
          petId = response.body.id;
        });
    });
  
    it('Read the newly created pet', () => {
      cy.request('GET',` https://petstore.swagger.io/v2/pet/${petId}`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('id', petId);
          expect(response.body).to.have.property('name', uniquePet.name);
        });
    });
  
    it('Update the pet status', () => {
      const updatedPet = { ...uniquePet, status: 'sold' };
  
      cy.request('PUT', 'https://petstore.swagger.io/v2/pet', updatedPet)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('status', 'sold');
        });
    });
  
    it('Verify the updated pet', () => {
      cy.request('GET', `https://petstore.swagger.io/v2/pet/${petId}`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('status', 'sold');
        });
    });
  
    it('Delete the newly created pet', () => {
      cy.request('DELETE', `https://petstore.swagger.io/v2/pet/${petId}`)
        .then((response) => {
          expect(response.status).to.eq(200);
        });
  
      cy.request({
        method: 'GET',
        url: `https://petstore.swagger.io/v2/pet/${petId}`,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });