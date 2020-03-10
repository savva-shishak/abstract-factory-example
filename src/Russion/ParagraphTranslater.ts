import { ParagraphTranslater } from "../abstracts/ParagraphTranslater";

export class RussionParagraphTranslater implements ParagraphTranslater {
    getTitle(): string {
        return "Контент на русском"
    }    
    
    getText(): string {
        return "Этот контент написан на русском языке, чтобы переключиться на английский язык, нажмите на кнопку \"Английский\" "
    }
}