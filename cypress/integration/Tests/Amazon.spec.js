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
    });

    it('Should get about', () => {
        cy.visit('href="https://www.amazon.in/Samsung-Ultra-Smart-QA65QN90AAKLXL-Black/dp/B0928N2RV3/ref=sr_1_2?qid=1649015065&refinements=p_89%3ASamsung&rnid=3837712031&s=electronics&sr=1-2"');
        cy.get("#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(3) > div > div > div > div > div.a-section.a-spacing-small.s-padding-left-small.s-padding-right-small > div.a-section.a-spacing-none.a-spacing-top-small.s-title-instructions-style > h2 > a").click();
        cy.get("#feature-bullets").invoke('text').then((about) => {
            console.log(about);
        });
    });
  

    
});
