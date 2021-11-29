import { browser, element, by } from "protractor";

describe ('Test1', ()=>{

    beforeEach(()=>{
        browser.get("/");
    });

    it ("La prueba N°1 se paso exitiosamente" ,()=>{
        expect(element(by.css(".subtitulos ion-card.subtitle")).getText()).toContain("Islas Galápagos");
    })      ;
});