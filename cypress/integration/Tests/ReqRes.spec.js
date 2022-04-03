
/// <reference types="Cypress" />

import {ReqResobj, ReqRes} from "../../support/Pages/ReqRes"



context("Test service - Planets", () => {

[
    {
        name: "admin",
        job: "admin"
    },
    {
        name: "ronaldo",
        job: "player"
    }
].forEach(({ name, job }) => {

    describe(`API Automation [${name}] and [${job}]`, () => {
        it(`Test - verify Headers`, ()=>{
        
            ReqResobj.VerifyRespHeaders();
        });

        it("Test - verify Response Time", ()=>{
        
            ReqResobj.VerifyRespTime();
        });

        it("Test POST with service", () =>{
            ReqResobj.VerifyRespPOST();
        })
    });
});

});
