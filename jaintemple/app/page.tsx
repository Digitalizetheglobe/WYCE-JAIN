import Home from "./components/Home";
import About from "./components/About";
import Ourguruji from "./components/Ourguruji";
import Ourstory from "./components/Ourstory";
import Event from "./components/Event";
import Wanitrust from "./components/Wanitrust";
import MediaSection from "./components/MediaSection";
import Faqs from "./components/Faqs";
import Contactus from "./components/Contactus";
import ComingSoon from "./coming-soon/page";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      {/* <Home />
      <About />
      <Ourguruji />
      <Event />
      <Wanitrust />

      <Ourstory />
      <MediaSection />
      <Faqs />

      <Contactus/> */}
      <ComingSoon />

    </main>
  );
}
