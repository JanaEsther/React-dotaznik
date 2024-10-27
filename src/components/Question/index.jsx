import { useState } from 'react';
import { QuestionBody } from '../QuestionBody/index';
import { Option } from '../Option/index';
import './style.css';

export const Question = ({ text }) => {
  const [answer, setAnswer] = useState('symbolQuestion');

  const handleClick = () => {
    setAnswer((prevState) => !prevState);
  };

  const handleSelect = (iconType) => {
    setAnswer(iconType);
  };

  return (
    <div className="question">
      <QuestionBody
        iconType={answer}
        onClick={() => {
          handleClick;
        }}
        text={text}
      />
      <div className="question__options" onSelected={()=>{handleSelect}}> 
        <Option type="smileyStrongYes" text="Souhlasím" onSelected={handleSelect} />
        <Option type="smileyYes" text="Spíše souhlasím" onSelected={handleSelect} />
        <Option type="smileyNeutral" text="Nevím" onSelected={handleSelect} />
        <Option type="smileyNo" text="Spíše nesouhlasím" onSelected={handleSelect} />
        <Option type="smileyStrongNo" text="Nesouhlasím" onSelected={handleSelect}/>
      </div>
    </div>
  );
};
