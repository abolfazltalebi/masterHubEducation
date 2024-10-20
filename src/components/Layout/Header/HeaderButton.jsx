import { MdArrowOutward } from "react-icons/md";

export default function HeaderButton() {
  return (
    <div>
      <button className="flex items-center bg-transparent border-2 border-white rounded-full pl-8 pr-2 py-1 gap-3 hover:bg-white hover:text-blue-800 group transition-all">
        Register Now
        <div className="bg-white size-10 rounded-full flex items-center justify-center group-hover:bg-blue-800  transition-all">
          <MdArrowOutward className="size-7 text-blue-800 group-hover:text-white transition-all" />
        </div>
      </button>
    </div>
  );
}
