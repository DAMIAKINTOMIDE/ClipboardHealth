/// <reference types="cypress" />

describe('Amazon test', () => {
    beforeEach(() => {
        cy.visit('https://www.amazon.in/');
    });

    it('Should search for TV item ', () => {
        cy.get('#nav-hamburger-menu').click();
        cy.get('.hmenu-visible > :nth-child(16) > .hmenu-item').click();
        cy.get(':nth-child(2) > :nth-child(1) > .nav_cat_links > .nav_first > .nav_a').click()
        cy.get('#s-refinements > div:nth-child(17) > ul > li:nth-child(2) > span > a > span').contains('Samsung').click();
        cy.get('.a-dropdown-prompt').click();
        cy.get('#s-result-sort-select_2').click();
        cy.get('[data-asin="B0928N2RV3"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal').invoke('removeAttr', 'target').click()
        
        cy.get("#feature-bullets").invoke('text').then((about) => {
            console.log(about);
        });
    });
  

    
});
