import ScrollAnimation from "../ScrollAnimation";

export default function TitleSection() {
  return (
    <>
      <ScrollAnimation
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-7xl text-center text-blue-800 font-bold mb-6">
          Showcase Your Mastery. Get Connected
        </h2>
        <p className="text-center text-black/90 md:text-2xl">
          Create your profile, showcase your skills, and let employers find you.
        </p>
      </ScrollAnimation>
    </>
  );
}
