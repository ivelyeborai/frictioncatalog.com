export interface Product {
  slug: string;
  emoji: string;
  name: string;
  price: string;
  tagline: string;
  description: string;
  features: string[];
  whyFriction: string;
  url: string;
  category: string;
}

export const products: Product[] = [
  {
    slug: "nokia-2780-flip",
    emoji: "📱",
    name: "Nokia 2780 Flip",
    price: "$88.99",
    tagline: "The phone that makes you think before you text.",
    description:
      "4G flip phone running KaiOS. No app store rabbit holes, no infinite scroll, no algorithmic feeds. Just calls, texts, and a camera for when you actually need one. The physical act of opening the phone creates a micro-pause — a moment of intention before every interaction.",
    features: [
      "4G LTE connectivity",
      "KaiOS operating system",
      "T9 physical keypad",
      "2.7\" main display + external screen",
      "5MP rear camera",
      "Bluetooth, Wi-Fi, GPS",
      "Up to 7.2 hours talk time",
    ],
    whyFriction:
      "A smartphone puts zero distance between impulse and action. The Nokia 2780 puts a hinge there. You have to open it. You have to press buttons, not tap glass. Texting takes effort, so you say what you mean. There's no pull-to-refresh, no notification badges competing for your attention. Communication becomes intentional.",
    url: "https://amzn.to/4rnEBRv",
    category: "Communication",
  },
  {
    slug: "kodak-m35-film-camera",
    emoji: "📷",
    name: "Kodak M35 Film Camera",
    price: "$59.99",
    tagline: "35mm film. 36 shots. No do-overs. Every frame matters.",
    description:
      "A reusable 35mm point-and-shoot with a fixed-focus lens and built-in flash. Load a roll of 36 exposures, and that's it — 36 chances to capture something worth keeping. No review screen, no filters, no delete button. You won't know what you got until the film comes back from the lab.",
    features: [
      "Reusable 35mm film camera",
      "Fixed-focus lens",
      "Built-in flash",
      "Lightweight and portable",
      "Uses standard 35mm film rolls",
      "Simple wind-and-shoot mechanism",
    ],
    whyFriction:
      "Digital cameras give you unlimited shots and instant review. This means you never commit to a moment — you're always hedging, always checking, always taking one more. Film forces commitment. 36 shots per roll means each frame costs attention. You compose more carefully, wait for the right moment, and then trust your instinct. The delay between shooting and seeing your photos teaches patience and presence.",
    url: "https://amzn.to/4bWVBcH",
    category: "Creative",
  },
  {
    slug: "motorola-t100-talkabout",
    emoji: "📡",
    name: "Motorola T100 Talkabout",
    price: "$27.49",
    tagline: "Basic 16-mile range. Perfect for coordinating without screens.",
    description:
      "A pair of two-way radios with 16-mile range and 22 channels. Push to talk, release to listen. No screen time, no text threads, no read receipts. Just voice communication for coordinating with your family at the park, on a hike, or around the neighborhood.",
    features: [
      "16-mile range",
      "22 channels",
      "Push-to-talk operation",
      "10 hours battery life",
      "Built-in LED flashlight",
      "Comes as a pair",
    ],
    whyFriction:
      "Walkie-talkies solve the coordination problem without the attention cost. When your kid needs to check in, they press a button and talk — no unlocking a phone, no seeing notifications, no getting pulled into an app. Communication happens and then it's done. No chat history to scroll through, no typing indicators. Just human voices.",
    url: "https://amzn.to/4qqz4Jb",
    category: "Communication",
  },
  {
    slug: "midland-gxt1000vp4",
    emoji: "📻",
    name: "Midland GXT1000VP4",
    price: "$74.99",
    tagline:
      "Serious 36-mile range. NOAA weather alerts. For when communication matters.",
    description:
      "Professional-grade two-way radios with 36-mile range, 50 channels, and NOAA weather alerts. When you need reliable, screen-free communication for camping, emergencies, or daily family coordination. Includes rechargeable batteries and desktop charger.",
    features: [
      "36-mile range",
      "50 channels with 142 privacy codes",
      "NOAA weather alerts",
      "SOS siren",
      "Rechargeable batteries included",
      "Desktop charger included",
      "Water-resistant",
    ],
    whyFriction:
      "For families who are serious about reducing screen dependency but need reliable communication. The Midland handles everything from daily check-ins to emergency coordination. Weather alerts keep you informed without a smartphone. The extended range means freedom to explore without anxiety. This is what communication looks like when you strip away everything that isn't communication.",
    url: "https://amzn.to/4rjDP7Q",
    category: "Communication",
  },
  {
    slug: "leuchtturm1917-hardcover",
    emoji: "📓",
    name: "Leuchtturm1917 Hardcover",
    price: "$31.50",
    tagline:
      "Dotted notebook. Paper that doesn't judge. 249 pages of actual thought.",
    description:
      "A premium hardcover notebook with 249 numbered dotted pages, a table of contents, and an index. The dotted grid gives structure without rigidity — perfect for writing, sketching, planning, or thinking. Ink-proof paper, lay-flat binding, and a pocket in the back.",
    features: [
      "249 numbered pages",
      "Dotted grid pattern",
      "Ink-proof 80g/m² paper",
      "Lay-flat binding",
      "Table of contents and index",
      "Back pocket for loose pages",
      "Elastic closure band",
      "Built-in bookmark ribbons",
    ],
    whyFriction:
      "A notes app is frictionless. You type, it saves, it syncs. You never have to commit because you can always edit later. Paper doesn't work like that. When you write by hand, you slow down. You process more deeply. You can't copy-paste your way through a thought — you have to actually think it through. The permanence of ink creates accountability. The slowness creates depth.",
    url: "https://amzn.to/4qb4zH1",
    category: "Creative",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
