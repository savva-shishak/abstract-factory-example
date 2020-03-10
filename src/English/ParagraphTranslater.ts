import { ParagraphTranslater } from "../abstracts/ParagraphTranslater";

export class EnglishParagraphTranslater implements ParagraphTranslater {
    getTitle(): string {
        return "The Content on English"
    }    
    
    getText(): string {
        return "This is content writed on English, so that switch on Russion click to \"Russion\""
    }
}