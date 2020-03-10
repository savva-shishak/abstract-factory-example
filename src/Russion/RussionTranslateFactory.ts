import { AbstractFactory } from "../abstracts/AbstractFactory";
import { ButtonsTranslater } from "../abstracts/ButtonsTranslater";
import { ParagraphTranslater } from "../abstracts/ParagraphTranslater";
import { RussionParagraphTranslater } from "./ParagraphTranslater";
import { RussionButtonsTranslater } from "./ButtonsTranslater";


export class RussionTranslateFactory implements AbstractFactory {
    getTranslaterForButtons(): ButtonsTranslater {
        return new RussionButtonsTranslater();
    }

    getTranslaterForParagraph(): ParagraphTranslater {
        return new RussionParagraphTranslater();
    }
}