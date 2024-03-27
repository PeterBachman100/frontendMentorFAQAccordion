import React, { useState } from 'react';
import iconPlus from './images/icon-plus.svg';
import iconMinus from './images/icon-minus.svg';
import './AccordionItem.css';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
	  setIsOpen(!isOpen);
  }

  return (
	<div className="accordion-item">
		<div className="accordion-toggle">
			<h3  onClick={handleToggle}>{question}</h3>
			{isOpen ? <img className="toggle-icon" src={iconMinus}  onClick={handleToggle} alt="contract"/> : <img className="toggle-icon" src={iconPlus}  onClick={handleToggle} alt="expand"/>}
		</div>
		{isOpen && <p className="accordion-panel">{answer}</p>}
	</div>
  );
};

export default AccordionItem;