// ─── Site Data & Content ───────────────────────────────────────────────────

export const siteConfig = {
  name: "Matiere",
  owner: "Sebastien",
  ownerShort: "Seb",
  tagline: "Precision Carpentry for Homes That Last",
  description:
    "High-quality carpentry and handyman services in Balgowlah, Northern Beaches, and wider Sydney — blending European craftsmanship with Australian practicality.",
  address: "78A Balgowlah Rd, Balgowlah NSW 2093",
  location: "Balgowlah, Sydney, Australia",
  serviceArea: "Based in Balgowlah, servicing the Northern Beaches and greater Sydney.",
  abn: "80 920 607 326",
  email: "sebastien@matiere.com.au",
  phone: "0481 369 860",
  socials: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  image: string;
  challenge: string;
  solution: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    id: "composite-deck-stairs",
    title: "Composite Deck Stairs & Cable Railing",
    subtitle: "Custom-built composite staircase with timber posts and stainless-steel wire balustrade.",
    location: "Balgowlah",
    image: "/images/project-1.jpg",
    challenge:
      "The clients needed a durable, low-maintenance staircase connecting their upper deck to the garden on a sloping block surrounded by established trees.",
    solution:
      "Seb designed and built a multi-landing composite staircase with treated timber posts and horizontal stainless-steel cable railing — blending seamlessly with the lush garden setting.",
    outcome:
      "A safe, elegant transition between levels that requires virtually no upkeep and complements the natural surroundings perfectly.",
  },
  {
    id: "hardwood-privacy-screen",
    title: "Hardwood Privacy Screen",
    subtitle: "Custom vertical-slat privacy screen in rich hardwood with integrated trellis wiring.",
    location: "Balgowlah Heights",
    image: "/images/project-2.jpg",
    challenge:
      "The homeowners needed additional privacy and visual separation from neighbouring properties without blocking light or airflow to the entertaining area.",
    solution:
      "Seb fabricated a tall hardwood screen with evenly spaced vertical slats in a deep, warm-toned timber. Horizontal stainless-steel trellis wires were integrated for climbing plants to grow through over time.",
    outcome:
      "A striking privacy solution that doubles as a living green wall, adding both seclusion and character to the outdoor space.",
  },
  {
    id: "custom-shelving-unit",
    title: "Custom Children's Shelving Unit",
    subtitle: "Low-profile Montessori-style shelving with timber slat dividers for a playroom.",
    location: "Manly",
    image: "/images/project-3.jpg",
    challenge:
      "A young family wanted accessible, child-height storage that was both functional and visually clean — suitable for a dedicated playroom.",
    solution:
      "Seb designed and built a long, low shelving unit in white with natural timber slat dividers, keeping everything within easy reach for small children while maintaining a tidy, modern aesthetic.",
    outcome:
      "A beautiful, practical storage solution that encourages independent play and keeps the room organised effortlessly.",
  },
  {
    id: "composite-entertaining-deck",
    title: "Composite Entertaining Deck",
    subtitle: "Expansive composite deck with powder-coated aluminium balustrade nestled among tree ferns.",
    location: "Balgowlah",
    image: "/images/project-4.jpg",
    challenge:
      "A steep, heavily vegetated backyard needed a level entertaining space that preserved the existing mature plantings and met council setback requirements.",
    solution:
      "Seb built a large-format composite deck elevated on a steel subframe, with a sleek powder-coated aluminium balustrade. The design was carefully planned to work around existing tree ferns and native vegetation.",
    outcome:
      "A generous outdoor entertaining area that feels immersed in nature — low-maintenance, structurally sound, and built to last.",
  },
  {
    id: "fluted-timber-bench",
    title: "Custom Fluted Timber Bench",
    subtitle: "L-shaped bench seat with hand-crafted fluted oak panelling and a smooth birch top.",
    location: "Mosman",
    image: "/images/project-5.jpg",
    challenge:
      "The client wanted a statement seating piece for a corner nook that combined contemporary design with warmth and tactile detail.",
    solution:
      "Seb designed an L-shaped bench with individually routed fluted oak panels forming the front face, capped with a smooth birch plywood top. The curved internal corner was precision-shaped for a seamless flow.",
    outcome:
      "A refined, sculptural piece that serves as both functional seating and a design feature — regularly admired by visitors.",
  },
  {
    id: "balcony-bar-shelf",
    title: "Wall-Mounted Balcony Bar",
    subtitle: "Solid hardwood bar shelf mounted to a balcony wall with steel brackets.",
    location: "Dee Why",
    image: "/images/project-6.jpg",
    challenge:
      "The apartment owners wanted a casual outdoor dining option on a compact balcony without taking up floor space or requiring council approval for fixed structures.",
    solution:
      "Seb crafted a long, solid timber bar shelf from a single slab of finished hardwood, wall-mounted with heavy-duty powder-coated steel brackets. Paired with bar stools, it creates an instant café-style setup.",
    outcome:
      "A smart, space-saving addition that transformed an underused balcony into the owners' favourite spot for morning coffee and evening drinks.",
  },
  {
    id: "kitchen-renovation",
    title: "Kitchen Renovation",
    subtitle: "Full kitchen overhaul with white cabinetry, timber benchtops, and marble-look splashback.",
    location: "Freshwater",
    image: "/images/project-7.jpg",
    challenge:
      "An ageing, poorly laid-out kitchen needed a complete transformation — modern functionality, clean lines, and a bright feel — all within a tight timeframe.",
    solution:
      "Seb managed the full scope: demolition, new cabinetry with soft-close hardware, natural timber benchtops, a marble-look splashback, and integrated appliance housings. Every element was precision-fitted for a seamless finish.",
    outcome:
      "Completed ahead of schedule and on budget. The homeowners now describe it as the heart of the house — bright, functional, and beautifully finished.",
  },
];

export interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string; // We use inline SVG paths
}

export const services: Service[] = [
  {
    title: "Custom Cabinetry & Joinery",
    description:
      "From built-in wardrobes to entertainment units and bookshelves, Seb designs and builds cabinetry tailored to your space and lifestyle. Every piece is precision-crafted with quality hardware and beautiful finishes.",
    features: ["Built-in wardrobes", "Kitchen cabinetry", "Entertainment units", "Bookshelves & display units"],
    icon: "cabinet",
  },
  {
    title: "Renovations & Structural Carpentry",
    description:
      "Whether it's a full kitchen renovation, bathroom overhaul, or structural repair, Seb manages the carpentry scope from start to finish. Reliable timelines, clean workmanship, and honest communication throughout.",
    features: ["Kitchen renovations", "Bathroom fit-outs", "Structural repairs", "Wall & ceiling framing"],
    icon: "renovation",
  },
  {
    title: "Outdoor & Decking",
    description:
      "Extend your living space with a beautifully built hardwood deck, pergola, or outdoor entertaining area. Seb works with premium Australian and imported timbers to create durable, stunning outdoor structures.",
    features: ["Timber decking", "Pergolas & gazebos", "Fencing & screens", "Outdoor furniture"],
    icon: "deck",
  },
  {
    title: "Repairs & Handyman Works",
    description:
      "No job too small. From door hanging and skirting board replacement to patching, sanding, and general fixes — Seb brings the same level of care and quality to every task, big or small.",
    features: ["Door & window repairs", "Skirting & architraves", "Shelving & mounting", "General maintenance"],
    icon: "repair",
  },
];

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Initial Conversation & Site Visit",
    description:
      "We start with a phone call or message to understand your project. Seb then visits your home to assess the space, discuss your vision, and take measurements.",
  },
  {
    step: 2,
    title: "Detailed Quote & Timeline",
    description:
      "You receive a clear, itemised quote with a realistic timeframe. No hidden costs, no vague estimates — just honest pricing based on the scope of work.",
  },
  {
    step: 3,
    title: "Materials & Planning",
    description:
      "Seb sources quality materials suited to your project and budget. Every detail is planned before work begins so there are no surprises on site.",
  },
  {
    step: 4,
    title: "Build & Installation",
    description:
      "Work begins on schedule. Seb keeps the site clean, communicates daily progress, and ensures the build meets the highest standards of craftsmanship.",
  },
  {
    step: 5,
    title: "Final Walkthrough & Aftercare",
    description:
      "Once complete, Seb walks you through the finished work to make sure everything meets your expectations. Any adjustments are handled promptly.",
  },
];

export interface Testimonial {
  name: string;
  source: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Aanya Madhani",
    source: "Google Review",
    rating: 5,
    quote:
      "Sebastien has provided an excellent service for us with a bespoke carpentry job to fill in some small windows in our sunroom that were difficult to sort blinds or shutters for because of their size. He worked super efficiently and the finish on them is better than we hoped for!",
  },
  {
    name: "Christopher Gregson",
    source: "Google Review",
    rating: 5,
    quote:
      "Seb built a beautiful custom desk for our spare room and I couldn't be happier with it. I had limited space and needed something that could fold away when not in use, but still give me plenty of room to work when open. Seb designed and built the perfect solution – wall-mounted, great to look at, and really functional. Highly recommend!",
  },
  {
    name: "Anna Stephen",
    source: "Google Review",
    rating: 5,
    quote:
      "Sebastian was great! Very professional; with an engineering background he comes with a high level of knowledge and expertise in timber construction. Excellent communication, he was very accommodating as I had to reschedule the job. Very happy with his work and would employ him again.",
  },
  {
    name: "M W",
    source: "Google Review",
    rating: 5,
    quote:
      "Really pleased with what Sebastien did for us, which is out of ordinary. We wanted an insulated wall like door to separate two levels. He did a fantastic job. Highly recommend them to others. Here is to more jobs to come!",
  },
  {
    name: "Chris B",
    source: "Google Review",
    rating: 5,
    quote:
      "Sebastien recently retro-fitted some IKEA cabinets for us, and turned what looked like a few random cabinets into something that looked custom made for the space. Can't recommend him highly enough. Professional. Easy to work with. Looking forward to the next project.",
  },
  {
    name: "Hugo Carty",
    source: "Google Review",
    rating: 5,
    quote:
      "Sebastien helped us with the fit-out of our campervan and we're absolutely stoked with the result. He's skilled, super creative, and a total professional. It was a real pleasure working with him. The bloke's an artist!",
  },
  {
    name: "Andrea Trombone",
    source: "Google Review",
    rating: 5,
    quote:
      "Sebastien installed a set of drawers in our bedroom. He worked expertly and swiftly, my wife and I are loving the result. 100% would hire again.",
  },
  {
    name: "Rohan Cain",
    source: "Google Review",
    rating: 5,
    quote:
      "Sebastian completed my window seat job perfectly and on time. He made great suggestions to modify the concept making it better than the original idea, it looks stunning and he was a pleasure to deal and correspond with. 6 stars!",
  },
  {
    name: "Julie Anne Longano",
    source: "Google Review",
    rating: 5,
    quote:
      "Such a reliable and lovely service. Sebastian really cared about our task and the outcome. Would highly recommend and would use again in a heartbeat. He sourced all materials and was super efficient.",
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "Which areas do you service?",
    answer:
      "Matiere is based in Balgowlah and primarily services the Northern Beaches, including Manly, Dee Why, Freshwater, Mosman, and surrounding suburbs. We also take on projects across greater Sydney for larger jobs.",
  },
  {
    question: "Do you provide itemised quotes?",
    answer:
      "Yes. Every quote we provide is fully itemised with a clear breakdown of labour, materials, and timeframes. We believe in honest, transparent pricing with no hidden costs.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend reaching out at least 2–4 weeks before your preferred start date, though this varies with seasonal demand. For larger renovations, earlier is always better.",
  },
  {
    question: "Do you handle both small repairs and larger renovations?",
    answer:
      "Absolutely. Whether it's hanging a door, replacing skirting boards, or completing a full kitchen renovation, we bring the same level of care and professionalism to every project.",
  },
  {
    question: "What materials do you typically use?",
    answer:
      "We work with a range of quality timbers — both Australian hardwoods (Blackbutt, Spotted Gum, Merbau) and sustainably sourced imports. Material selection is always discussed during the quoting process to match your budget and aesthetic.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Matiere holds all relevant trade licences and carries comprehensive public liability and work-related insurance for your peace of mind.",
  },
  {
    question: "Can I see examples of your previous work?",
    answer:
      "Of course. You can view a selection of recent projects in the Work section above, or ask us directly for references and additional photos relevant to your type of project.",
  },
  {
    question: "What happens if the project scope changes?",
    answer:
      "We understand that projects evolve. If the scope changes, Seb will discuss the implications on cost and timeline with you upfront and provide a revised quote before proceeding.",
  },
];
