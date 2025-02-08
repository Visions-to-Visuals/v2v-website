"use client"

import { useState } from 'react'
import Image from 'next/image'

interface FAQ {
  question: string;
  answer: string;
}

function FAQItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border rounded-lg overflow-hidden mb-4 ${isOpen ? 'border-[#e47226]' : 'border-gray-200'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="text-[16px] font-[500] max-w-[80%]">{faq.question}</span>
        <Image 
          src="/assets/faq-dropdown.svg"
          alt="Dropdown arrow"
          width={10}
          height={16}
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pt-0 pb-6 text-[16px] text-[#3D3D3D]">{faq.answer}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const faqs: FAQ[] = [
    {
      question: "How long does it usually take to complete a website?",
      answer: "The timeline varies depending on the specific needs and complexity of the project. Typically, the process takes 2-3 months from start to finish. This includes everything from initial consultation and design to development and final revisions."
    },
    {
      question: "Can you help me update an existing website?",
      answer: "Absolutely! We can help revamp your site with the latest design trends and technologies. Get in touch with us and we'll provide more detailed information on all the services we can provide for you."
    },
    {
      question: "How much do you charge for a website?",
      answer: "Our pricing varies depending on the complexity and scope of the project. That being said, our pricing starts at $1500 for smaller websites, and starts at $3000 for larger complex sites. For more details on pricing, contact us to discuss the right solution for your specific project."
    },
    {
      question: "Do I have to pay the full price of the website upfront?",
      answer: "We charge 50% the total price upfront for the designs of the website. Once we move onto website development, the following 25% will be invoiced. After the website is developed, reviewed, and deployed, the final 25% of the price will be invoiced."
    },
    {
      question: "What happens if I need changes after the project is completed?",
      answer: "Once your website is launched, we provide four weeks of complimentary support to ensure everything runs smoothly at no extra cost. If you want to modify the design or add new pages, we are happy to help with these changes, but it would be charged separately."
    }
  ];

  return (
    <section className="flex flex-col items-center w-full bg-white text-black pt-20 pb-32">
      <div className="max-w-[800px] mx-auto px-8 w-full">
        {/* Section Title */}
        <p className="mb-6 text-[#3D3D3D] text-center text-[18px]">Frequently Asked Questions</p>

        {/* FAQ List */}
        <div className="w-full">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
} 