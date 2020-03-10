import { AbstractFactory } from "../abstracts/AbstractFactory";
import { EnglishParagraphTranslater } from "./ParagraphTranslater";
import { EnglishButtonsTranslater } from "./ButtonsTranslater";
import { ParagraphTranslater } from "../abstracts/ParagraphTranslater";
import { ButtonsTranslater } from "../abstracts/ButtonsTranslater";

export class EnglishTranslaterFactory implements AbstractFactory {
    getTranslaterForParagraph(): ParagraphTranslater {
        return new EnglishParagraphTranslater();
    }    
    
    getTranslaterForButtons(): ButtonsTranslater {
        return new EnglishButtonsTranslater();
    }
}