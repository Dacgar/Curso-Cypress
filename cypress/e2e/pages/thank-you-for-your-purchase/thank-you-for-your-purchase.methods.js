import { ThankYouForYourPurchaseElements } from "./thank-you-for-your-purchase.elements";

export class ThankYouForYourPurchaseMethods{
    static clickOkButton(){
        ThankYouForYourPurchaseElements.buttons.ok.click();
    }
    static verifyGreenCheckmarkIsDisplayed(){
        ThankYouForYourPurchaseElements.icons.greencheckmarck.should('exist');
    }

}