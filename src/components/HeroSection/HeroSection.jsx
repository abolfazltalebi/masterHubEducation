import InputSection from "./InputSection";
import NotifSection from "./NotifSection";
import SliderSection from "./SliderSection";
import TitleSection from "./TitleSection";

export default function HeroSection() {
  return (
    <section className="my-6 flex flex-col items-center justify-center gap-6">
      <NotifSection />
      <div className="container space-y-5">
        <TitleSection />
        <InputSection />
        <SliderSection />
      </div>
    </section>
  );
}
