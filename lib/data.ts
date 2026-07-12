export type Product = {
  name: string;
  category: 'Rice' | 'Spices' | 'Fresh Onion';
  image: string;
  spec: string;
  packaging: string;
};

export const products: Product[] = [
  { name: 'Fresh Red Onion', category: 'Fresh Onion', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=800&h=900&fit=crop', spec: '40–80mm, 90 days shelf life', packaging: '25kg mesh bags' },
  { name: 'Pink / Poona Onion', category: 'Fresh Onion', image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=800&h=900&fit=crop', spec: 'Premium size grading', packaging: 'Custom sizing available' },
  { name: 'Turmeric Finger & Powder', category: 'Spices', image: '/images/Turmeric.png', spec: 'Curcumin 2–5%, sun-dried', packaging: '25kg PP / 50kg jute' },
  { name: 'Red Chilli (Whole & Powder)', category: 'Spices', image: '/images/RedChilli.jpg', spec: 'Teja, Byadgi & S17 varieties', packaging: '20/25kg bags' },
  { name: 'Black Pepper', category: 'Spices', image: '/images/BlackPepper.jpg', spec: 'MG1, 500–550 g/l density', packaging: '25kg bags' },
  { name: 'Cardamom & Cloves', category: 'Spices', image: '/images/CardamomCloves.jpg', spec: 'Bold green, hand-sorted', packaging: '10kg / 25kg' },
  { name: 'Coriander Seeds', category: 'Spices', image: '/images/Coriander.jpg', spec: 'Whole & split, sortex cleaned, 99% purity', packaging: '25kg / 50kg' },
  { name: 'Fenugreek Seeds', category: 'Spices', image: '/images/Fenugreek.jpg', spec: 'Machine-cleaned, export quality', packaging: '25kg / 50kg' },
  { name: 'Garam Masala Blend', category: 'Spices', image: '/images/GaramMasala.jpg', spec: 'Custom blends to buyer spec', packaging: 'Retail & bulk' },
  { name: '1121 Basmati Rice', category: 'Rice', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=900&fit=crop', spec: 'Extra-long grain, 8.3mm+, aged 12 months', packaging: '5kg / 25kg / 50kg PP & jute bags' },
  { name: 'Sona Masoori', category: 'Rice', image: '/images/SonaMasoori.jpeg', spec: 'Medium grain, light aromatic', packaging: '25kg / 50kg PP bags' },
  { name: 'IR64 Non-Basmati', category: 'Rice', image: '/images/IR64RawRice.jpg', spec: '5% broken, steam & raw variants', packaging: '25kg / 50kg jute bags' },
  { name: 'Raw & Steam Rice', category: 'Rice', image: '/images/RawSteamRice.jpg', spec: 'Custom broken % on request', packaging: 'Bulk & retail-ready' },
];

export type Country = {
  name: string;
  code: string;
  flag: string;
};

export const countries: Country[] = [
  { name: 'United Arab Emirates', code: 'AE', flag: 'https://flagcdn.com/w80/ae.png' },
  { name: 'Malaysia', code: 'MY', flag: 'https://flagcdn.com/w80/my.png' },
  { name: 'Indonesia', code: 'ID', flag: 'https://flagcdn.com/w80/id.png' },
  { name: 'Singapore', code: 'SG', flag: 'https://flagcdn.com/w80/sg.png' },
  { name: 'Sri Lanka', code: 'LK', flag: 'https://flagcdn.com/w80/lk.png' },
  { name: 'Vietnam', code: 'VN', flag: 'https://flagcdn.com/w80/vn.png' },
  { name: 'Saudi Arabia', code: 'SA', flag: 'https://flagcdn.com/w80/sa.png' },
  { name: 'Oman', code: 'OM', flag: 'https://flagcdn.com/w80/om.png' },
  { name: 'Kuwait', code: 'KW', flag: 'https://flagcdn.com/w80/kw.png' },
  { name: 'Qatar', code: 'QA', flag: 'https://flagcdn.com/w80/qa.png' },
];

export const stats = [
  { value: 10, suffix: '+', label: 'Countries Served' },
  { value: 500, suffix: '+', label: 'Shipments Delivered' },
  { value: 100, suffix: '+', label: 'Buyers Onboarded' },
  { value: 24, suffix: '/7', label: 'Support Desk' },
];

export const whyChooseUs = [
  { title: '100% Export Quality', desc: 'Every lot sortex-cleaned and graded before it sees a container.' },
  { title: 'Competitive Pricing', desc: 'Direct farm and mill sourcing removes layers of middlemen.' },
  { title: 'On-Time Delivery', desc: 'Shipment schedules tracked against buyer commitments, not ours.' },
  { title: 'Export-Grade Packaging', desc: 'Moisture-barrier lining built for long sea transit.' },
  { title: 'Verified Suppliers', desc: 'Long-standing farmer and mill network across three states.' },
  { title: 'Pre-Shipment Inspection', desc: 'Third-party quality checks available on request.' },
  { title: 'Global Logistics', desc: 'FCL/LCL booking support to all ten primary markets.' },
  { title: 'Dedicated Support', desc: 'One point of contact from enquiry to bill of lading.' },
];

export const processSteps = [
  { label: 'Farmer', desc: 'Sourced directly from contracted growers.' },
  { label: 'Processing', desc: 'Cleaning, milling and sortex grading.' },
  { label: 'Quality Check', desc: 'Moisture, purity and sample testing.' },
  { label: 'Packaging', desc: 'Export-grade bags, sealed and labelled.' },
  { label: 'Container Loading', desc: 'Supervised FCL stuffing at origin.' },
  { label: 'Shipping', desc: 'Port handling and ocean freight.' },
  { label: 'Customer', desc: 'Delivered with full documentation.' },
];

export const testimonials = [
  { name: 'Ahmed Al-Farsi', role: 'Procurement Head, Gulf Foods Trading — Dubai, UAE', quote: 'Consistent grain quality across every shipment, and paperwork that clears customs without delay.' },
  { name: 'Nguyen Van Minh', role: 'Import Director, Mekong Agri Co. — Ho Chi Minh City, Vietnam', quote: 'Their moisture testing and packaging held up perfectly over a five-week sea transit.' },
  { name: 'Farida Hassan', role: 'Owner, Hassan Spice House — Muscat, Oman', quote: 'We switched our entire spice sourcing to HAMD after one trial container.' },
];

export const faqs = [
  { q: 'What is your minimum order quantity?', a: 'MOQ varies by product — typically one FCL (18-27 MT) for rice and spices, and one reefer container for fresh onion. Smaller trial orders can be discussed.' },
  { q: 'Can you provide private-label packaging?', a: 'Yes. We support custom bag printing, retail pouches and branded cartons for qualifying order volumes.' },
  { q: 'What documentation do you provide?', a: 'Commercial invoice, packing list, certificate of origin, phytosanitary certificate, fumigation certificate and quality/inspection reports as required by destination country.' },
  { q: 'Which incoterms do you work with?', a: 'FOB, CFR and CIF from major Indian ports including Mundra, Nhava Sheva (JNPT) and Kandla.' },
  { q: 'Do you offer pre-shipment samples?', a: 'Yes, samples are dispatched for approval before container stuffing on all new buyer relationships.' },
];

export const certifications = [
  { name: 'FSSAI Central License', logo: '/images/fssai.png', scale: 0.9 },
  { name: 'APEDA Registration', logo: '/images/APEDA.png', scale: 1.2 },
  { name: 'Spice Board of India', logo: '/images/SPICES_BOARD.jpg', scale: 1.15 },
  { name: 'Phytosanitary Certification', logo: 'https://placehold.co/200x100/1F4536/FFFFFF/png?text=PHYTO', scale: 0.9 },
  { name: 'RCMC — FIEO', logo: '/images/RCMC.jpg', scale: 1.35 },
  { name: 'Udyam Registration', logo: '/images/Udyam.png', scale: 1.1 },
];
