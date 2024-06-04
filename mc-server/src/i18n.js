import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "sk",
    resources: {
      en: {
        translation: {
            heading: "Hello world!",
            desc: "Looking for a Minecraft server with a friendly and helpful community? We've got you covered! Build friendships, block by block! Join our awesome Minecraft server today! Don't miss out on the fun! Join our friendly Minecraft server now!",
        },
      },
      sk: {
        translation: {
            heading: "Ahoj svet",
            desc: "Hľadáte Minecraft server s priateľskou a užitočnou komunitou? Pokryli sme vás! Budujte priateľstvá, blok po bloku! Pripojte sa k nášmu úžasnému Minecraft serveru ešte dnes! Nenechajte si ujsť zábavu! Pripojte sa k nášmu priateľskému Minecraft serveru teraz!",
        },
      },
      cz: {
        translation: {
            heading: "Hele vole",
            desc: "Hledáte Minecraft server s přátelskou a užitečnou komunitou? Máme vás na dosah! Budujte přátelství, blok po bloku! Připojte se k našemu skvělému serveru Minecraft ještě dnes! Nenechte si ujít zábavu! Připojte se nyní k našemu přátelskému serveru Minecraft!",
        },    
      },
    },
  });
