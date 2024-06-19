"use client"
import { useState } from 'react';

interface AccordionItemProps {
    title: string;
    content: string;
    isOpen: boolean;
    onToggle: () => void;
}

interface AccordionProps {
    items: {
        title: string;
        content: string;
    }[];
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onToggle }) => (
  <div className={`border-b border-b-primary mb-5 rounded`}>
    <button
      className={`w-full text-left py-4 px-4 focus:outline-none flex justify-between items-center ${isOpen ? "bg-primary text-white" : "bg-stone-100 text-black"}`}
      onClick={onToggle}
    >
      <span className='font-bold'>{title}</span>
      <span className='font-bold'>{isOpen ? '-' : '+'}</span>
    </button>
    {isOpen && <div className="p-6 text-sm">{content}</div>}
  </div>
);

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
