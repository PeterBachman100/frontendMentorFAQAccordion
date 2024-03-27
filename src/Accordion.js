import React from 'react';
import AccordionItem from './AccordionItem';
import './Accordion.css';

const Accordion = ({ faqs }) => (
  <div className="accordion">
	{faqs.map(faq => (
	  <AccordionItem key={faq.id} question={faq.question} answer={faq.answer} />
	))}
  </div>
);

export default Accordion;