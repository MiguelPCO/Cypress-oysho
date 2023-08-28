/// <reference types="cypress" />


describe("Oysho Tests", () => {
    it("Visitar la página y verificar el título", () => {
        cy.visit('https://www.youtube.com')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click();
        cy.wait(3000)
        cy.title().should('contain', 'YouTube')
    });

    it("Visitar la página suscripciones y verificar la url", () => {
        cy.visit('https://www.youtube.com');
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click();
        cy.wait(3000)
        cy.get('#start > #guide-button > #button > #guide-icon > .style-scope > .yt-spec-icon-shape > div').click();
        cy.get('#sections > :nth-child(1) > #items > :nth-child(3) > #endpoint > tp-yt-paper-item.style-scope').click();
        cy.url().should('include', '/subscriptions');
    });

    it("Buscar un video y luego selecionar el primero", () => {
        cy.visit('https://www.youtube.com');
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click();
        cy.wait(3000)
        cy.get('[id="search-input"]').type('Imagine Dragons - Bones')
        cy.get('[id="search-icon-legacy"]').click()
        cy.get(':nth-child(3) > :nth-child(1) > #dismissible > .text-wrapper > #meta > #title-wrapper > .title-and-badge > #video-title > yt-formatted-string.style-scope').click()
    });


 });