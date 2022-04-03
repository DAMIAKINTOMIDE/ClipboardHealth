/// <reference types ="Cypress" />

export class ReqRes {
  

    VerifyRespHeaders(){
      
        cy.request("api/users").then((response) => {
            expect(response.headers).to.include({
            'content-type': "application/json; charset=utf-8"});
            expect(response.status).to.eq(200);
            
        });
        
       
     
    }

    VerifyRespTime(){
       
      
        cy.request("api/users").then((response) => {
         
            expect(response.duration/1000).lessThan(2);
        });
       
     
    }

    VerifyRespPOST(){
      
            cy.request({
                method:'POST',
                url: "api/users",
                body:  {
                    "id": 7,
                    "email": "damiakintomide@gmail.com",
                    "first_name": "Dami",
                    "last_name": "Akintomide",
                    "avatar" : "https://reqres.in/img/faces/2-image.jpg",
                  },
                failOnStatusCode: false
            }).then((res) =>{
            expect(res.status).to.eq(201);
            });
       
        
    }
   
}

export const ReqResobj = new ReqRes();