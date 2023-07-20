import React from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const items = [
    {
      title: "Accordion Item 1",
      content: "Content for Accordion Item 1",
      defaultExpanded: true, // Initially expanded
    },
    {
      title: "Accordion Item 2",
      content: "Content for Accordion Item 2",
      defaultExpanded: false, // Initially collapsed (default)
    },
    // Add more items as needed
  ];
  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          defaultExpanded={item.defaultExpanded}
        />
      ))}
    </div>
  );
};

export default Accordion;
