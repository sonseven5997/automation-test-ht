import "../../../commands/login";
const { faker } = require("@faker-js/faker");

describe("login", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", () => false);
    cy.login();
    cy.visit("/app/80/schedule/calendar");
    cy.get(".ant-btn > span").click();
  });

  it("create TopCv", () => {
    cy.get("#name").type("Lich TopCV");

    //Tao ca sang
    cy.get(".ant-col-lg-10 > .ant-btn > span").click();
    cy.get("#name").type("Ca sang");
    cy.get("#standardWorkCount").type("{selectAll}0.5");
    cy.get(
      '[data-mapping-key="index_working_point"] > .ant-btn > span'
    ).click();
    cy.get("#rc_select_1").click();
    cy.get("body > div:nth-child(6) > div > div > div > button > span").click();
    cy.get("#label").type("KHONG MAC DINH");
    cy.get("#condition-mention-input").type(`@checkin <> ""`);
    cy.get(
      ".ant-col-md-10 > .ant-form > .flex > .ant-btn-primary > span"
    ).click();
    cy.get("#rc_select_2").click();
    cy.get(
      "body > div:nth-child(10) > div > div > div > button > span"
    ).click();
    cy.get(
      "body > div:nth-child(11) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > div > div.ant-col.ant-col-xs-24.ant-col-md-10.ant-col-lg-10 > form > div.mb-20 > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div"
    ).type("DUOC TINH CONG");
    cy.get("#formula-mention-input").type("@S{enter}");
    cy.get(".ant-modal-footer > .ant-btn-primary > span").click();
    cy.get('[data-mapping-key="index_minute_late"] > .ant-btn > span').click();
    cy.get("#rc_select_3").click();
    cy.get(
      "body > div:nth-child(12) > div > div > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div.ant-select-item.ant-select-item-option.ant-select-item-option-active > div > div > div:nth-child(1)"
    ).click();
    cy.get(
      "#root > section > section > section > main > div.p-24.bg-greyFA > div > div.ant-col.bg-white.rounded.ant-col-xs-24.ant-col-xl-22 > form > div.p-16.rounded-5.mb-16.bg-greyFA > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div.ant-select.w-270.ant-select-single.ant-select-show-arrow > div > span.ant-select-selection-search"
    ).click();
    cy.get(
      "body > div:nth-child(14) > div > div > div > button > span"
    ).click();
    cy.get(
      "body > div:nth-child(11) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > div > div.ant-col.ant-col-xs-24.ant-col-md-10.ant-col-lg-10 > form > div.mb-20 > div > div.ant-col.ant-form-item-control > div.ant-form-item-control-input > div"
    ).type("PHUT DI MUON");
    cy.get("#formula-mention-input").type(
      "ROUND{enter}MAX{enter}@G{downArrow}{enter}-@checkin{enter},0{rightArrow},0{moveToEnd}*1440"
    );
    cy.get(".ant-modal-footer > .ant-btn-primary > span").click();
    for (let i = 1; i < 6; i++) {
      cy.get(
        `.ant-form-item-control-input-content > :nth-child(${i}) > span`
      ).click();
    }
    cy.get(
      ".ant-col-xl-22 > .ant-form > .justify-end > .ant-btn-primary > span"
    ).click();

    //Tao ca chieu
    cy.get(".ant-col-lg-10 > .ant-btn > span").click();
    cy.get("#name").type("Ca chieu");
    cy.get("#standardWorkCount").type("{selectAll}0.5");
    cy.get(
      '[data-mapping-key="index_working_point"] > .ant-btn > span'
    ).click();
    cy.get("#rc_select_12").click();
    cy.get("body > div:nth-child(8) > div > div > div > button > span").click();
    cy.get("#label").type("KHONG MAC DINH");
    cy.get("#condition-mention-input").type(`@checkout <> ""`);
    cy.get(
      ".ant-col-md-10 > .ant-form > .flex > .ant-btn-primary > span"
    ).click();
    cy.get("#rc_select_13").click();
    cy.get(
      "body > div:nth-child(10) > div > div > div > button > span"
    ).click();
    cy.get(
      "body > div:nth-child(11) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > div > div.ant-col.ant-col-xs-24.ant-col-md-10.ant-col-lg-10 > form > div.mb-20 > div > div.ant-col.ant-form-item-control > div > div"
    ).type("DUOC TINH CONG");
    cy.get("#formula-mention-input").type("@S{enter}");
    cy.get(".ant-modal-footer > .ant-btn-primary > span").click();
    cy.get(
      '[data-mapping-key="index_minute_leave_early"] > .ant-btn > span'
    ).click();
    cy.get("#rc_select_16").click();
    cy.get(
      "body > div:nth-child(12) > div > div > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div.ant-select-item.ant-select-item-option.ant-select-item-option-active > div > div > div:nth-child(1)"
    ).click();
    cy.get("#rc_select_17").click();
    cy.get(
      "body > div:nth-child(14) > div > div > div > button > span"
    ).click();
    cy.get(
      "body > div:nth-child(11) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > div > div.ant-col.ant-col-xs-24.ant-col-md-10.ant-col-lg-10 > form > div.mb-20 > div > div.ant-col.ant-form-item-control > div > div"
    ).type("PHUT VE SOM");
    cy.get("#formula-mention-input").type(
      "ROUND{enter}MAX{enter}@G{downArrow}{downArrow}{enter}-@checkout{enter},0{rightArrow},0{moveToEnd}*1440"
    );
    cy.get(
      ":nth-child(1) > .ant-row > :nth-child(1) > .bg-greyFA > :nth-child(1) > :nth-child(2) > .ant-picker > .ant-picker-input > input"
    ).type("{selectAll}13:00{enter}", { force: true });
    cy.get(
      ":nth-child(1) > .ant-row > :nth-child(2) > .bg-greyFA > :nth-child(1) > :nth-child(2) > .ant-picker > .ant-picker-input > input"
    ).type("{selectAll}17:30{enter}", { force: true });
    cy.get(
      ":nth-child(2) > .ant-row > :nth-child(1) > .bg-greyFA > :nth-child(1) > :nth-child(2) > .ant-picker > .ant-picker-input > input"
    ).type("{selectAll}10:01{enter}", { force: true });
    cy.get(
      ":nth-child(2) > .ant-row > :nth-child(2) > .bg-greyFA > :nth-child(1) > :nth-child(2) > .ant-picker > .ant-picker-input > input"
    ).type("{selectAll}14:00{enter}", { force: true });
    cy.get(
      ":nth-child(3) > .ant-row > :nth-child(1) > .bg-greyFA > :nth-child(1) > :nth-child(2) > .ant-picker > .ant-picker-input > input"
    ).type("{selectAll}16:30{enter}", { force: true });

    cy.get(".ant-modal-footer > .ant-btn-primary > span").click();
    //chon ngay & tao lich
    for (let i = 1; i < 6; i++) {
      cy.get(
        `.ant-form-item-control-input-content > :nth-child(${i}) > span`
      ).click();
    }
    cy.get(
      ".ant-col-xl-22 > .ant-form > .justify-end > .ant-btn-primary > span"
    ).click();
    //type date
    cy.get(".ant-picker").type("06/04/2022{enter}09/04/2022{enter}");
    cy.get("button[type=submit]").click();
    cy.get("tbody > tr > td").should("contain", "Lich TopCV");
  });
});
