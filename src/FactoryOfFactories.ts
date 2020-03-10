import { RussionTranslateFactory } from "./Russion/RussionTranslateFactory";
import { EnglishTranslaterFactory } from "./English/EnglishFactory";

export class FactoryOfFactories {
    getFactory(nameTranslate: string) {
        switch (nameTranslate) {
            case 'ru-ru':
                return new RussionTranslateFactory();
                
            case 'en-en': 
                return new EnglishTranslaterFactory();

            default:
                return new RussionTranslateFactory();
        }
    }
}

export const factoryOfFactories = new FactoryOfFactories();