import React, { useState } from 'react';

const AccordionItem = ({ title, content, defaultExpanded }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded || false);

  const handleAccordionClick = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="accordion-item">
      <button className="accordion-title" onClick={handleAccordionClick}>
        {title}
      </button>
      {isExpanded && <div className="accordion-content">{content}</div>}
    </div>
  );
};


export default AccordionItem;
