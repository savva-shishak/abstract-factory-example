import React from 'react';
import './App.css';
import { Paragraph } from './components/Paragraph';
import { ParagraphTranslater } from './abstracts/ParagraphTranslater';
import { ButtonsTranslater } from './abstracts/ButtonsTranslater';
import { Buttons } from './components/Buttons';
import { factoryOfFactories } from './FactoryOfFactories';

class App extends React.Component<{}, {pt: ParagraphTranslater, bt: ButtonsTranslater}> {
  constructor(props: {}) {
    super(props)

    const factory = factoryOfFactories.getFactory('en-en')

    this.state = {
      pt: factory.getTranslaterForParagraph(),
      bt: factory.getTranslaterForButtons()
    }
  }

  setContent(nameTranslate: string) {
    const factory = factoryOfFactories.getFactory(nameTranslate)

    this.setState({
      pt: factory.getTranslaterForParagraph(),
      bt: factory.getTranslaterForButtons()
    })
  }

  render() {
    const {pt, bt} = this.state
    return (
      <div className="App">
        <Paragraph text={pt.getText()} title={pt.getTitle()} />
        <hr/>
        <Buttons 
          russion={bt.getRussionLabel()} 
          english={bt.getEnglishLabel()} 
          toRussion={() => this.setContent('ru-ru')}
          toEnglish={() => this.setContent('en-en')}
          />
      </div>
    );
  }
}

export default App;
