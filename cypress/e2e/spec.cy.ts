export {}

//const homeURL = 'https://foodbanknetwork.vercel.app';
const homeURL = 'http://localhost:3000';

describe('Basic tests', () => {
  it('should load the find page when the user searches a location', () => {
    cy.visit(homeURL)
    cy
      .get('[data-testid="simple-search"]')
      .click()
      .type('london')
    cy
      .get('[data-testid="SearchBarButton"]')
      .click()
    cy
      .url()
      .should('include', '/find')
  })
  it('contains the map element', ()=> {
    cy
    .visit('http://localhost:3000/find')
    .get('[data-testid="MapMain"]')    
  })
  it('should search from Find page and go to the correct moreInfo page', () => {
    cy.visit(`${homeURL}/find`)
    cy
      .get('[data-testid="simple-search"]')
      .click()
      .type('london')
    cy
      .get('[data-testid="SearchBarButton"]')
      .click()
    cy
      .get('#desktop-content > #List > .space-y-1 > [data-testid="card-1"] > .h-full')
      .click({ multiple: true })
    cy
    cy.get('#desktop-content > #List > .space-y-1 > [data-testid="card-1"] > .h-full > [data-testid="cardbutton-1"] > .flex')
      .click({ multiple: true })
    cy
      .url()
      .should('include', '/moreInfoBank')

  })

  it('more information should be rendered upon the card next to the map element', () => {
  cy
    .visit('http://localhost:3000/moreInfoBank')
  cy
    .get('[data-testid="simple-search"]')
    .get('[data-testid="MapMain"]')

  cy
    .get('#desktop-content > #List > [data-testid="flowbite-card"] > .h-full')

    
    
  })

  
  it('should load the directions to the location when the user presses the Directions button', () => {
    
  })
})


//describe("visits the page", () => {
//  it("passes", () => {
//    cy.visit("http://localhost:3000");
//    cy.viewport(5120, 2880);
//    /* ==== Generated with Cypress Studio ==== */
//  });
//});
//describe("takes the input number", () => {
//  it("input it is taken", () => {
//    cy.get(".start-input").clear("2");
//    cy.get(".start-input").type("2");
//  });
//});

//describe("takes the input number", () => {
//  it("input it is taken", () => {
//    cy.get(".start-input").clear("2");
//    cy.get(".start-input").type("2");
//  });
//  it("button clicks", () => {
//    cy.get('[data-testid="start"]').click();
//  });
//});
///* ==== End Cypress Studio ==== */
///* ==== Generated with Cypress Studio ==== */
//describe("changes page and then takes decision input", () => {
//  it("input it is taken", () => {
//    cy.get(".decision-input").click();
//    cy.get(".decision-input").clear();
//    cy.get(".decision-input").type("Pizza");
//  });
//  it("button it is clicked again", () => {
//    cy.get('[data-testid="decision-input"]').click();
//  });
//});

//describe("input options", () => {
//  it("user can input text into input field", () => {
//    cy.get('[name="input-1"]').clear("M");
//    cy.get('[name="input-1"]').type("Mushrooms ");
//    cy.get('[name="input-2"]').clear("p");
//    cy.get('[name="input-2"]').type("pepperoni");
//    cy.get('[name="input-3"]').clear("c");
//    cy.get('[name="input-3"]').type("cheese");
//  });
//  it("when button clicked", () => {
//    cy.get('[data-testid="options-input"]').click();
//  });
//});

//describe("input pros and cons", () => {
//  it("user can select pro or con", () => {
//    cy.get(":nth-child(1) > :nth-child(2) > input").click({ force: true });
//    cy.get(":nth-child(1) > :nth-child(2) > input").click({ force: true });
//    cy.get(":nth-child(2) > :nth-child(2) > input").clear("h");
//    cy.get(":nth-child(2) > :nth-child(2) > input").type("hello");
//    cy.get(":nth-child(2) > :nth-child(2) > .custom-select").select("Pro");
//    cy.get(":nth-child(2) > :nth-child(3) > .custom-select").select("Con");
//    cy.get(":nth-child(2) > :nth-child(3) > input").clear("n");
//    cy.get(":nth-child(2) > :nth-child(3) > input").type("nope");
//    cy.get(":nth-child(3) > :nth-child(2) > .custom-select").select("Pro");
//    cy.get(":nth-child(3) > :nth-child(2) > input").clear("fd");
//    cy.get(":nth-child(3) > :nth-child(2) > input").type("fdgrefdg");
//    cy.get(":nth-child(3) > :nth-child(3) > .custom-select").select("Con");
//    cy.get(":nth-child(3) > :nth-child(3) > input").clear("fg");
//    cy.get(":nth-child(3) > :nth-child(3) > input").type("fgfdg");
//    cy.get(".submit").click();
//  });
//});

//describe("temp", () => {
//  it("temp", () => {
//    cy.get(".submit").click();
//    cy.get(":nth-child(1) > .pro-con-select").select("Mushrooms");
//    cy.get(":nth-child(2) > .pro-con-select").select("pepperoni");
//    cy.get(".submit").click();
//    /* ==== End Cypress Studio ==== */
//  });
//});
