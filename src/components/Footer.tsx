import symbolSvg from "@/assets/symbol.svg";
import flagSvg from "@/assets/flag.svg";

const Footer = () => (
  <footer className="bg-congress-green text-primary-foreground py-8 px-6 mt-16">
    <div className="max-w-4xl mx-auto text-center">
      <div className="flex items-center justify-center gap-3 mb-3">
        <img src={flagSvg} alt="Nepalese Flag" className="w-8 h-12 object-contain" />
        <img src={symbolSvg} alt="Nepali Congress Symbol" className="w-12 h-12 brightness-0 invert opacity-80" />
      </div>
      <p className="font-devanagari text-lg mb-1">
        नेपाली जनसम्पर्क समिति – स्पेन
      </p>
      <p className="font-body text-sm opacity-70">
        Nepalese People Co-ordination Committee, Spain
      </p>
      <p className="font-body text-xs opacity-50 mt-1">
        A Committee of Nepali Congress (नेपाली काँग्रेस)
      </p>
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="inline-block w-8 h-1 rounded bg-spain-red" />
        <span className="inline-block w-8 h-1 rounded bg-spain-yellow" />
        <span className="inline-block w-8 h-1 rounded bg-spain-red" />
      </div>
      <p className="mt-4 text-xs opacity-50 font-body">
        © {new Date().getFullYear()} Nepali Janasamparka Samiti – Spain. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
