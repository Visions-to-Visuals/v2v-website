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
    <div className={`border rounded-lg overflow-hidden mb-4 ${isOpen ? 'border-[#CCCCCC]' : 'border-gray-200'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between mobile:py-6 mobile:px-6 px-4 py-5 text-left"
      >
        <span className="text-[16px] leading-[130%] font-[500] max-w-[85%]">{faq.question}</span>
        <Image 
          src="/assets/faq-dropdown.svg"
          alt="Dropdown arrow"
          width={10}
          height={16}
          className={`transform transition-transform duration-[400ms] ${isOpen ? 'rotate-90' : ''}`}
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-[300ms] ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="mobile:px-6 px-4 pt-0 pb-6 text-[16px] text-[#3D3D3D]">{faq.answer}</p>
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
      answer: "Our pricing varies depending on the complexity and scope of the project. That being said, our pricing starts at $1000 for smaller websites, and starts at $2000 for larger complex sites. For more details on pricing, contact us to discuss the right solution for your specific project."
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
    <section id="faq" className="flex flex-col items-center w-full bg-white text-black pt-12 mobile:pt-4 mobile:pb-32 pb-20">
      <div className="max-w-[800px] mx-auto mobile:px-8 px-5 w-full">
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