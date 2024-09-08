import { HomeElements } from "./home.elements";

export class HomeMethods {
    static clicOnPhonesOptions() {
        HomeElements.categoriesMenu.phones.click();
    }
    static clicOnLaptopsOptions() {
        HomeElements.categoriesMenu.laptops.click();
    }
    static clicOnMonitorsOptions() {
        HomeElements.categoriesMenu.monitors.click();
    }
    static clicOnProductLink(productoName){
        HomeElements.product(productoName).click();
    }


}