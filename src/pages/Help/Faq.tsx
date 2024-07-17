import { faqs } from "../../../data/faqs.json";
import Accordian from "./Accordian";

const faq = () => {
  return (
    <div className="w-full h-screen">
      <div className="p-4">
          {faqs.map((faq) => (
            <Accordian question={faq.question} answer={faq.answer} />
          ))}
      </div>
    </div>
  );
};

export default faq;
