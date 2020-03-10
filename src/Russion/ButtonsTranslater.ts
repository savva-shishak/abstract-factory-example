import { ButtonsTranslater } from "../abstracts/ButtonsTranslater";

export class RussionButtonsTranslater implements ButtonsTranslater {
    getRussionLabel(): string {
        return "Русский"
    }    
    
    getEnglishLabel(): string {
        return "Английский"
    }
}