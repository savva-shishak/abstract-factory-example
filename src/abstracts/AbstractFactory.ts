import { ParagraphTranslater } from "./ParagraphTranslater";
import { ButtonsTranslater } from "./ButtonsTranslater";

export interface AbstractFactory {
    getTranslaterForParagraph(): ParagraphTranslater
    getTranslaterForButtons(): ButtonsTranslater
}