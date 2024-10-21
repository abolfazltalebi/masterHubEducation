import ScrollAnimation from "../ScrollAnimation";
import location from "/public/images/icons/location.svg";
import search from "/public/images/icons/search.svg";

export default function InputSection() {
  return (
    <div className="flex items-center flex-wrap md:flex-nowrap gap-4 justify-center">
      <div className="flex items-center bg-white border rounded-full shadow p-2 divide-x-2 ">
        <ScrollAnimation
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center px-2">
            <img src={search} className="size-5" alt="" />
            <input
              type="text"
              placeholder="e.g. UX Designer"
              className="mx-2 py-1 outline-none"
            />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center px-2">
            <img src={location} className="size-5" alt="" />
            <input
              type="text"
              placeholder="e.g. Liverpool, USA"
              className="mx-3 py-1 outline-none"
            />
          </div>
        </ScrollAnimation>
      </div>
      <ScrollAnimation
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <button className="bg-blue-700 rounded-full px-6 py-3 text-white">
          Search
        </button>
      </ScrollAnimation>
    </div>
  );
}
