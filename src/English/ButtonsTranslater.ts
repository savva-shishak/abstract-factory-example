import { ButtonsTranslater } from "../abstracts/ButtonsTranslater";

export class EnglishButtonsTranslater implements ButtonsTranslater {
    getRussionLabel(): string {
        return "Russion"
    }    
    
    getEnglishLabel(): string {
        return "English"
    }
}