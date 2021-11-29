import { browser, element, by } from "protractor";

describe ('Test2', ()=>{

    beforeEach(()=>{
        browser.get("/");
    });

    it ("La prueba N°2 se paso exitiosamente" ,()=>{
        expect(element(by.css(".subtitulos ion-card.subtitle")).getText()).toContain("Bolsa de Santiago");
    })      ;
});