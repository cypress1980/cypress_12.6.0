describe.only('API Test Using Plugin', () => {
    it("GET API testing Using 'cypress-plugin-api", () => {
        cy.api("GET", "https://reqres.in/api/users?page=2").should((response) => {
          expect(response.status).to.eq(200);
        });
      });  
      it("POST API testing Using 'cypress-plugin-api", () => {
        cy.api("POST", "https://reqres.in/api/users", {
          name: "LambdaTest",
          job: "QAAutomationLabs",
        }).should((response) => {
          expect(response.status).to.eq(201);
        });
      });
      it("PUT API testing Using 'cypress-plugin-api", () => {
        cy.api("PUT", "https://reqres.in/api/users/2", {
          name: "John parket",
          job: "QA Automation Engg",
        }).should((response) => {
          expect(response.status).to.eq(200);
        });
      });
      it("DELETE API testing Using 'cypress-plugin-api", () => {
        cy.api("DELETE", "https://reqres.in/api/users/2").should((response) => {
         expect(response.status).to.eq(204);
        });
});
  }) 
  describe('API Automation Using GoRest API', () => {
    let randomNumber =Math.floor(Math.random() * 1000);
    let userId;
    it('POST API Automation Using GoRest API', () => {
      const user = {
        name: 'John Doe',
        email: "johndoe123"+randomNumber+"@example.com",
        gender: 'male',
        status: 'active',
      };
      cy.api({
        method: 'POST',
        url: 'https://gorest.co.in/public/v1/users',
        headers: {
          Authorization: 'Bearer 84bb7773414ee1a1247f6830428a2ab051d763d7cb24c97583f10ca96a59ddde',
        },
        body: user,
      }).then((response) => {
        userId=response.body.data.id
        expect(response.status).to.equal(201);
        expect(response.body.data.name).to.equal(user.name);
        expect(response.body.data.email).to.equal(user.email);
      });
    });
    it('GET API Automation Using GoRest API', () => {
      cy.api({
        method: 'GET',
        url: 'https://gorest.co.in/public/v1'+`/users/${userId}`,
        headers: {
          Authorization: 'Bearer 84bb7773414ee1a1247f6830428a2ab051d763d7cb24c97583f10ca96a59ddde',
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.data.name).to.equal('John Doe');
        expect(response.body.data.gender).to.equal('male');
      });
    });
    it('PUT API Automation Using GoRest API', () => {
      const user = {
        name: 'Time Cook',
        email: "TimCook123"+randomNumber+"@example.com",
        gender: 'male',
        status: 'active',
      };
      cy.api({
        method: 'PUT',
        url: 'https://gorest.co.in/public/v1'+`/users/${userId}`,
        headers: {
          Authorization: 'Bearer 84bb7773414ee1a1247f6830428a2ab051d763d7cb24c97583f10ca96a59ddde',
        },
        body: user,
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.data.name).to.equal(user.name);
        expect(response.body.data.email).to.equal(user.email);
      });
    });
    it('DELETE API Automation Using GoRest API', () => {
      cy.api({
        method: 'DELETE',
        url: 'https://gorest.co.in/public/v1'+`/users/${userId}`,
        headers: {
          Authorization: 'Bearer 84bb7773414ee1a1247f6830428a2ab051d763d7cb24c97583f10ca96a59ddde',
        },
      }).then((response) => {
        expect(response.status).to.equal(204);
    
      });
    });
   
  });

  