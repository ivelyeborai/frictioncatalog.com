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
  {
    slug: "kindle-paperwhite",
    emoji: "📖",
    name: "Kindle Paperwhite",
    price: "$149.99",
    tagline: "A screen that only does one thing: let you read.",
    description:
      "E-ink display, no notifications, no social media, no browser worth using. The Kindle Paperwhite is a single-purpose device in a world of multipurpose distractions. Waterproof, glare-free, and weeks of battery life. It does one thing and does it without stealing your attention for anything else.",
    features: [
      "6.8\" glare-free e-ink display",
      "Adjustable warm light",
      "Up to 10 weeks battery life",
      "IPX8 waterproof",
      "16GB storage",
      "USB-C charging",
      "300 ppi resolution",
    ],
    whyFriction:
      "Reading on a phone means competing with every app for your attention. One notification and you're gone. The Kindle removes that entire battlefield. There's nothing else to do on it. No tabs to switch to, no feeds to check. When you pick it up, you read. When you put it down, you stop. That simplicity is the friction — it forces you to commit to one activity instead of skimming across twenty.",
    url: "https://amzn.to/3MyTdid",
    category: "Reading",
  },
  {
    slug: "casio-f91w",
    emoji: "⌚",
    name: "Casio F-91W",
    price: "$14.94",
    tagline: "Tells the time. That's it. That's the point.",
    description:
      "The most iconic digital watch ever made. No step counter, no heart rate monitor, no Bluetooth, no notifications on your wrist. Just the time, a stopwatch, and an alarm. Water-resistant, seven-year battery, and weighs almost nothing. Worn by presidents, astronauts, and people who want to know what time it is without checking their phone.",
    features: [
      "Accurate quartz movement",
      "7-year battery life",
      "Water-resistant",
      "Stopwatch function",
      "Daily alarm",
      "Auto-calendar",
      "LED backlight",
      "Weighs 21 grams",
    ],
    whyFriction:
      "A smartwatch is a second screen strapped to your body. Every buzz, every notification, every ring closure gamifies your day into a series of interruptions. The Casio F-91W answers the only question a watch should answer: what time is it? You glance, you know, you move on. No temptation to scroll, no reason to linger. Fifteen dollars to reclaim your wrist from the attention economy.",
    url: "https://amzn.to/4aMfCka",
    category: "Timepiece",
  },
  {
    slug: "audio-technica-at-lp60x",
    emoji: "🎵",
    name: "Audio-Technica AT-LP60X",
    price: "$149.00",
    tagline: "Music you have to choose, flip, and be present for.",
    description:
      "A fully automatic belt-drive turntable that plays your vinyl records. No algorithms, no autoplay, no infinite queue. You pick a record, place the needle, and listen to one side at a time. When it ends, you decide: flip it, change it, or sit in the silence.",
    features: [
      "Fully automatic belt-drive",
      "Two speeds: 33-1/3 and 45 RPM",
      "Built-in phono preamp",
      "Anti-resonance die-cast platter",
      "Replaceable stylus",
      "RCA output cables included",
    ],
    whyFriction:
      "Streaming music is perfectly frictionless. An algorithm picks the next song, and the next, and the next, forever. You never have to choose, so you never really listen. Vinyl forces every part of the process to be intentional. You browse your shelf, you choose an album, you handle the record, you drop the needle. Twenty minutes later, the side ends and you make another choice. Music becomes an activity instead of background noise.",
    url: "https://amzn.to/4rBOSKu",
    category: "Audio",
  },
  {
    slug: "lamy-safari-fountain-pen",
    emoji: "🖊️",
    name: "Lamy Safari Fountain Pen",
    price: "$31.20",
    tagline: "Writing that requires ink, intention, and your actual hand.",
    description:
      "A sturdy, well-designed fountain pen with an ergonomic grip that teaches proper pen hold. Uses refillable ink cartridges or a converter for bottled ink. The nib glides across paper in a way ballpoints can't match. This is writing that feels like something — a physical, tactile connection between thought and page.",
    features: [
      "ABS plastic body, lightweight and durable",
      "Ergonomic triangular grip",
      "Steel nib (multiple sizes available)",
      "Uses Lamy T10 cartridges or Z28 converter",
      "Snap-on cap with clip",
      "Available in multiple colors",
    ],
    whyFriction:
      "Typing is fast and forgettable. A fountain pen makes you slow down enough to think about what you're writing as you write it. The ink flow demands a steady hand and consistent pressure. You can't mash delete — crossed-out words stay visible, a record of your thinking process. Writing by hand activates different cognitive pathways than typing. You retain more, process deeper, and produce more considered thoughts.",
    url: "https://amzn.to/4aJJSfA",
    category: "Creative",
  },
  {
    slug: "timeflip2-time-tracker",
    emoji: "⏳",
    name: "TimeFlip2 Time Tracker",
    price: "$79.00",
    tagline: "A physical object that makes time visible.",
    description:
      "A 12-sided polygon you place on your desk. Each side represents an activity — work, reading, exercise, family time. Flip it to the current activity and it tracks how you spend your day. No app to open, no timer to start. Just a physical flip that makes your time allocation tangible and honest.",
    features: [
      "12 trackable activities",
      "Bluetooth connectivity",
      "Companion app for reports",
      "Rechargeable battery (1 month)",
      "LED light feedback",
      "Magnetic sides",
      "Export data as CSV",
    ],
    whyFriction:
      "Time tracking apps live on your phone, which means opening your phone, which means getting distracted. The TimeFlip sits on your desk as a physical reminder of what you should be doing right now. Flipping it is a micro-ritual — a deliberate transition between activities. The physicality makes procrastination visible. When the \"work\" side has been up for 10 minutes and you've been scrolling, the disconnect is undeniable.",
    url: "https://amzn.to/3Oq8wKI",
    category: "Focus",
  },
  {
    slug: "light-phone-2",
    emoji: "📲",
    name: "Light Phone II",
    price: "$299.00",
    tagline: "The phone designed to be used as little as possible.",
    description:
      "An e-ink phone built from the ground up to be a minimal communication device. Calls, texts, an alarm, a calculator, directions, and a music player. No browser, no social media, no email. Designed by former Google employees who understood the attention economy and chose to build the opposite.",
    features: [
      "E-ink display",
      "4G LTE",
      "Calls and texts",
      "Turn-by-turn directions",
      "Music player",
      "Alarm and calculator",
      "Hotspot capability",
      "USB-C charging",
    ],
    whyFriction:
      "The Light Phone II doesn't fight your willpower — it removes the battlefield entirely. There's no browser to accidentally open, no app store to browse, no feed to scroll. The e-ink display is beautiful but deliberately slow, making the phone unpleasant to stare at for long. This is a phone you use for 5 minutes a day, not 5 hours. The premium price is the cost of a phone that respects your time.",
    url: "https://amzn.to/3MDxXYE",
    category: "Communication",
  },
  {
    slug: "polaroid-go-gen-2",
    emoji: "📸",
    name: "Polaroid Go Gen 2",
    price: "$79.99",
    tagline: "Shoot it. Wait for it. Hold it in your hand.",
    description:
      "The smallest analog instant camera. Point, shoot, and watch the photo develop in your hands over the next 15 minutes. Each pack of film gives you 16 shots. No editing, no filtering, no posting. Just a physical photograph that exists in the world, not on a server.",
    features: [
      "Smallest Polaroid camera ever",
      "Built-in flash",
      "Self-timer mode",
      "Double exposure mode",
      "Selfie mirror",
      "Rechargeable via USB-C",
      "Uses Polaroid Go film",
    ],
    whyFriction:
      "Instagram trained us to document everything, edit obsessively, and post for validation. The Polaroid reverses every part of that process. You can't review before you commit — the film is already exposed. You can't edit — what you see is what developed. You can't post — it's a physical object. And the 15-minute development time means you sit with anticipation instead of instant gratification. Photography becomes a gift you give to the moment, not content you extract from it.",
    url: "https://amzn.to/4rBP50e",
    category: "Creative",
  },
  {
    slug: "bose-quietcomfort-earbuds",
    emoji: "🎧",
    name: "Bose QuietComfort Earbuds",
    price: "$179.00",
    tagline: "Noise cancellation for the world. Not more noise from your phone.",
    description:
      "World-class noise cancellation that creates silence on demand. Use them with music or without — sometimes the most intentional thing you can do is eliminate noise rather than add more. Pair them with your vinyl player, your Kindle, or just the sound of nothing.",
    features: [
      "World-class active noise cancellation",
      "Aware mode for transparency",
      "Up to 8.5 hours battery",
      "IPX4 sweat and weather resistant",
      "Touch controls",
      "Comfortable fit",
      "Charging case included",
    ],
    whyFriction:
      "This is friction by subtraction. The noise cancellation doesn't add stimulation — it removes it. In a world designed to grab your attention from every direction, the ability to create silence is a superpower. Use them to protect a reading session, deepen a vinyl listening experience, or just sit in quiet. The friction isn't in the device — it's in choosing silence when everything around you is screaming for attention.",
    url: "https://amzn.to/4s2uP7y",
    category: "Audio",
  },
  {
    slug: "ongoing-concepts-hourglass",
    emoji: "⏰",
    name: "30-Minute Hourglass Timer",
    price: "$24.99",
    tagline: "Time you can see falling. No snooze button.",
    description:
      "A beautifully crafted 30-minute sand timer. Set it on your desk when you start a focus session, a family dinner, or a screen-free hour. The falling sand makes time tangible — you can see it passing without checking a device. When the sand runs out, the session is over. No notifications, no extensions, no negotiations.",
    features: [
      "30-minute duration",
      "Handblown glass",
      "Wooden base",
      "Silent operation",
      "No batteries required",
      "Works forever",
    ],
    whyFriction:
      "Phone timers require unlocking your phone to check them — and once you're in, you're vulnerable to every notification waiting for you. An hourglass sits in your peripheral vision, silently counting down. Glance at it and you know roughly where you are. No screen, no temptation, no rabbit hole. It's also a shared object — everyone at the table can see the sand. Time becomes a collective experience instead of a private notification.",
    url: "https://amzn.to/3MSivb8",
    category: "Focus",
  },
];

export const categories = [...new Set(products.map((p) => p.category))];

export function categorySlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export function getCategoryBySlug(slug: string): string | undefined {
  return categories.find((c) => categorySlug(c) === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
