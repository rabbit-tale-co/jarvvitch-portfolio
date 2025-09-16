import type { ContactContent } from "@/lib/types";

export const CONTACT: ContactContent = {
  title: "Contact me via",
  intro: "Get in touch through any of these channels:",
  contacts: [
    {
      platform: "Telegram",
      username: "@jarvvitch",
      url: "https://t.me/jarvvitch",
      icon: "message-circle",
    },
    {
      platform: "Bsky",
      username: "@jarvvitch.bsky.social",
      url: "https://bsky.app/profile/jarvvitch.bsky.social",
      icon: "at-sign",
    },
    {
      platform: "Email",
      username: "jarvvitch@gmail.com",
      url: "mailto:jarvvitch@gmail.com",
      icon: "mail",
    },
  ],
  company: {
    name: "MoonLeaf Jan Piękoś",
    address: "ul. Stefana Batorego 18/108\n02-591 Warszawa",
    nip: "NIP: 5223218365",
    regon: "REGON: 521128722",
  },
  note: "MoonLeaf entered into the Central Register and Information on Economic Activity of the Republic of Poland kept by the Minister responsible for the economy.",
};
