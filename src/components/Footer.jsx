import { TbWorld } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4 m-auto max-w-[1200px]">
      <nav>
        <ul className="flex flex-wrap justify-center md:justify-start items-center gap-1 p-3 text-sm">
          <li>&copy; Airbnb, Inc.</li>
          <li>&#183;</li>
          <li><a href="#" className="hover:underline">Confidentialité</a></li>
          <li>&#183;</li>
          <li><a href="#" className="hover:underline">Conditions générales</a></li>
          <li>&#183;</li>
          <li><a href="#" className="hover:underline">Plan du site</a></li>
          <li>&#183;</li>
          <li><a href="#" className="hover:underline">Fonctionnement du site</a></li>
          <li>&#183;</li>
          <li><a href="#" className="hover:underline">Infos sur l'entreprise</a></li>
        </ul>
      </nav>
      <nav>
        <ul className="flex justify-center md:justify-end items-center gap-2 p-3">
          <li>
            <a href="#" className="font-bold flex items-center gap-1 hover:underline">
              <TbWorld /> <span>Français (FR)</span>
            </a>
          </li>
          <li>
            <a href="#" className="font-bold hover:underline">€ EUR</a>
          </li>
          <li className="bg-[#484848] p-1 rounded-full">
            <a href="#" className="text-white text-sm" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </li>
          <li className="bg-[#484848] p-1 rounded-full">
            <a href="#" className="text-white text-sm" aria-label="Twitter">
              <FaTwitter />
            </a>
          </li>
          <li className="bg-[#484848] p-1 rounded-full">
            <a href="#" className="text-white text-sm" aria-label="Instagram">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
