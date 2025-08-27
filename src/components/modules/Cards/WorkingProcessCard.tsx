
import { FaMinus, FaPlus } from "react-icons/fa";


interface WorkingProcessCardProps {
  id: string;
  title: string;
  text: string;
  isOpen: boolean;
  onToggle: () => void;
}

const WorkingProcessCard = ({ id, title, text, isOpen, onToggle }: WorkingProcessCardProps) => {
 

  return (
     <div
      className={`p-8 rounded-4xl border border-black dark:text-black border-b-8 my-5 transition-all duration-500 ${
        isOpen ? "bg-[#B9FF66]" : "bg-gray-100"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <p className="text-4xl font-bold">{id}</p>
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <button
          className="text-2xl rounded-full bg-gray-100 p-2 border border-black cursor-pointer transition-all duration-300 hover:bg-gray-200"
          onClick={onToggle}
        >
          {isOpen ? <FaMinus size={20} /> : <FaPlus size={20} />}
        </button>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <hr className="border-black mb-4" />
        <p className="text-sm leading-relaxed text-black">{text}</p>
      </div>
    </div>
  );
};
export default WorkingProcessCard;