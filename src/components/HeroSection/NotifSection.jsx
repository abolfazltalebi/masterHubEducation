import ScrollAnimation from "../ScrollAnimation";
import jobLink from "/public/images/icons/job-link.svg";

export default function NotifSection() {
  return (
    <ScrollAnimation
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white/80 px-4 py-1 shadow rounded-xl text-blue-900 flex items-center gap-2">
        <img src={jobLink} alt="" />
        Your #1 Platform for Skill Sharing
      </div>
    </ScrollAnimation>
  );
}
