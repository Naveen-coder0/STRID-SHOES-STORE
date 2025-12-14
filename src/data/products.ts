export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "Nike" | "Adidas" | "Puma" | "New Balance" | "Reebok";
  description: string;
  sizes: number[];
  featured?: boolean;
}

export const products: Product[] = [
  // NIKE PRODUCTS (30)
  {
    id: "nike-air-max-90",
    name: "Nike Air Max 90",
    price: 12999,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop",
    category: "Nike",
    description: "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "nike-dunk-low",
    name: "Nike Dunk Low Retro",
    price: 10999,
    image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
    category: "Nike",
    description: "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors.",
    sizes: [7, 8, 9, 10, 11],
    featured: true
  },
  {
    id: "nike-jordan-1",
    name: "Air Jordan 1 High OG",
    price: 16999,
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop",
    category: "Nike",
    description: "The Air Jordan 1 High OG remains faithful to the original. Premium leather upper, encapsulated Nike Air technology.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "nike-air-force-1",
    name: "Nike Air Force 1 '07",
    price: 9999,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
    category: "Nike",
    description: "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "nike-air-max-97",
    name: "Nike Air Max 97",
    price: 17999,
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&h=600&fit=crop",
    category: "Nike",
    description: "Push your style full speed ahead with the Nike Air Max 97. Its design draws inspiration from Japanese bullet trains.",
    sizes: [7, 8, 9, 10, 11],
    featured: true
  },
  {
    id: "nike-blazer-mid",
    name: "Nike Blazer Mid '77",
    price: 10999,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop",
    category: "Nike",
    description: "The Nike Blazer Mid '77 brings back the classic basketball look with a vintage midsole finish.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "nike-vapormax",
    name: "Nike Air VaporMax Plus",
    price: 19999,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop",
    category: "Nike",
    description: "The Nike Air VaporMax Plus features the iconic plastic upper of the Air Max Plus with revolutionary VaporMax Air technology.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "nike-react-infinity",
    name: "Nike React Infinity Run",
    price: 15999,
    image: "https://images.unsplash.com/photo-1491553895911-0055uj66fd22?w=600&h=600&fit=crop",
    category: "Nike",
    description: "Nike React Infinity Run is designed to help reduce injury and keep you on the run.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "nike-pegasus-40",
    name: "Nike Pegasus 40",
    price: 13999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    category: "Nike",
    description: "The Nike Pegasus 40 is responsive and versatile enough for your everyday run.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "nike-huarache",
    name: "Nike Air Huarache",
    price: 12999,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop",
    category: "Nike",
    description: "Stretchy neoprene and soft leather blend in the Nike Air Huarache for a sneaker that's unlike any other.",
    sizes: [7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "nike-free-run",
    name: "Nike Free Run 5.0",
    price: 11999,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=600&fit=crop",
    category: "Nike",
    description: "The Nike Free Run 5.0 is designed for short runs with a barefoot-like feel.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "nike-zoom-fly",
    name: "Nike Zoom Fly 5",
    price: 16999,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop",
    category: "Nike",
    description: "Continue your speedy running ways with the Nike Zoom Fly 5. The responsive design returns.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "nike-court-legacy",
    name: "Nike Court Legacy",
    price: 7999,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop",
    category: "Nike",
    description: "The Nike Court Legacy is a clean, classic tennis shoe with heritage styling.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "nike-sb-dunk",
    name: "Nike SB Dunk Low Pro",
    price: 11999,
    image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=600&h=600&fit=crop",
    category: "Nike",
    description: "Built for skateboarding's demanding requirements, the Nike SB Dunk Low Pro is the original.",
    sizes: [7, 8, 9, 10, 11],
    featured: true
  },
  {
    id: "nike-lebron-21",
    name: "Nike LeBron 21",
    price: 19999,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop",
    category: "Nike",
    description: "LeBron's latest game shoe is built for power players who play in the paint and beyond.",
    sizes: [8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "nike-jordan-4",
    name: "Air Jordan 4 Retro",
    price: 21999,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=600&fit=crop",
    category: "Nike",
    description: "The Air Jordan 4 Retro features legendary style with its mesh paneling and iconic design.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "nike-air-max-270",
    name: "Nike Air Max 270",
    price: 14999,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop",
    category: "Nike",
    description: "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Air Max 270.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "nike-presto",
    name: "Nike Air Presto",
    price: 13999,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop",
    category: "Nike",
    description: "Originally designed as a running shoe, the Nike Air Presto's stretchy sleeve and mesh upper fit like a glove.",
    sizes: [7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "nike-tailwind",
    name: "Nike Air Tailwind 79",
    price: 8999,
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=600&h=600&fit=crop",
    category: "Nike",
    description: "The Nike Air Tailwind 79 brings back the original 1978 running icon in its purest form.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "nike-waffle-one",
    name: "Nike Waffle One",
    price: 10999,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&h=600&fit=crop",
    category: "Nike",
    description: "The Nike Waffle One features a deconstructed design with an emphasis on Nike heritage.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "nike-metcon-8",
    name: "Nike Metcon 8",
    price: 12999,
    image: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=600&h=600&fit=crop",
    category: "Nike",
    description: "The Nike Metcon 8 is made for your toughest training sessions. Stable and durable.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "nike-flyknit-racer",
    name: "Nike Flyknit Racer",
    price: 14999,
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=600&h=600&fit=crop",
    category: "Nike",
    description: "The Nike Flyknit Racer brings record-breaking speed to the streets with its featherlight design.",
    sizes: [7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "nike-monarch",
    name: "Nike Air Monarch IV",
    price: 6999,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&h=600&fit=crop",
    category: "Nike",
    description: "The Nike Air Monarch IV sets you up for comfortable training with durable leather on top.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "nike-revolution-6",
    name: "Nike Revolution 6",
    price: 6499,
    image: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=600&h=600&fit=crop",
    category: "Nike",
    description: "The Nike Revolution 6 cushions your stride with soft foam to keep you running in comfort.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "nike-cortez",
    name: "Nike Cortez",
    price: 8999,
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&h=600&fit=crop",
    category: "Nike",
    description: "The Nike Cortez is a classic that never goes out of style. Clean lines and retro charm.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "nike-invincible-3",
    name: "Nike Invincible 3",
    price: 17999,
    image: "https://images.unsplash.com/photo-1491553895911-0055uj66fd22?w=600&h=600&fit=crop",
    category: "Nike",
    description: "Max out on cushioning in Nike's softest, most responsive running shoes.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "nike-alphafly-2",
    name: "Nike Alphafly 2",
    price: 27999,
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600&h=600&fit=crop",
    category: "Nike",
    description: "The Nike Alphafly 2 is pure marathon racing technology for the elite runner.",
    sizes: [7, 8, 9, 10, 11],
    featured: true
  },
  {
    id: "nike-kd-16",
    name: "Nike KD 16",
    price: 15999,
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&h=600&fit=crop",
    category: "Nike",
    description: "Kevin Durant's 16th signature shoe brings responsive cushioning for basketball.",
    sizes: [8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "nike-kyrie-9",
    name: "Nike Kyrie 9",
    price: 13999,
    image: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=600&h=600&fit=crop",
    category: "Nike",
    description: "The Nike Kyrie 9 helps you change direction on a dime with quick-response cushioning.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "nike-tiempo-legend",
    name: "Nike Tiempo Legend 10",
    price: 22999,
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=600&h=600&fit=crop",
    category: "Nike",
    description: "The Nike Tiempo Legend 10 combines leather luxury with modern football tech.",
    sizes: [7, 8, 9, 10, 11],
    featured: false
  },

  // ADIDAS PRODUCTS (30)
  {
    id: "adidas-ultraboost",
    name: "Adidas Ultraboost 23",
    price: 18999,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "Experience epic energy return with the Adidas Ultraboost 23. Responsive Boost cushioning and Primeknit upper.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "adidas-stan-smith",
    name: "Adidas Stan Smith",
    price: 8999,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "The Adidas Stan Smith shoe has been an icon for decades with clean lines and perforated 3-Stripes.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "adidas-nmd",
    name: "Adidas NMD_R1",
    price: 14999,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "The NMD_R1 brings together a heritage of running design with today's most advanced technology.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "adidas-superstar",
    name: "Adidas Superstar",
    price: 9999,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "The legendary Adidas Superstar shell toe brings basketball heritage to the streets.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "adidas-gazelle",
    name: "Adidas Gazelle",
    price: 10,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "First released in 1968, the Gazelle is a timeless silhouette that's been re-energized.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "adidas-samba",
    name: "Adidas Samba OG",
    price: 10999,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "From the soccer field to street style icon, the Adidas Samba never goes out of fashion.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "adidas-forum",
    name: "Adidas Forum Low",
    price: 10999,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "The Adidas Forum debuted in 1984 and quickly became a basketball and street icon.",
    sizes: [7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "adidas-ozweego",
    name: "Adidas Ozweego",
    price: 11999,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "The Adidas Ozweego blends '90s running design with futuristic chunky styling.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "adidas-yeezy-350",
    name: "Adidas Yeezy Boost 350 V2",
    price: 22999,
    image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "The Yeezy Boost 350 V2 features Primeknit upper and full-length Boost cushioning.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "adidas-zx-750",
    name: "Adidas ZX 750",
    price: 9999,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "The ZX 750 brings '80s running heritage with mesh and suede construction.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "adidas-alphaboost",
    name: "Adidas Alphaboost V1",
    price: 13999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "Alphaboost V1 delivers Boost cushioning in a sleek, street-ready package.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "adidas-swift-run",
    name: "Adidas Swift Run",
    price: 8999,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "The Swift Run brings a modern silhouette with a knit upper for everyday wear.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "adidas-continental-80",
    name: "Adidas Continental 80",
    price: 7999,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "Continental 80 brings back '80s tennis style with split leather upper and rubber toe cap.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "adidas-4dfwd",
    name: "Adidas 4DFWD",
    price: 19999,
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "4DFWD features a 3D-printed midsole that converts vertical pressure into forward motion.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "adidas-boston-12",
    name: "Adidas Adizero Boston 12",
    price: 16999,
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "The Boston 12 is built for speed with Lightstrike Pro cushioning for race day.",
    sizes: [7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "adidas-predator",
    name: "Adidas Predator Elite",
    price: 27999,
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "The Predator Elite delivers precision control for complete football dominance.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "adidas-terrex-free",
    name: "Adidas Terrex Free Hiker",
    price: 19999,
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "Terrex Free Hiker 2 combines trail-ready grip with sock-like comfort.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "adidas-sl72",
    name: "Adidas SL 72",
    price: 8999,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "Originally made for the 1972 Olympics, the SL 72 is a true retro running icon.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "adidas-nizza",
    name: "Adidas Nizza",
    price: 6999,
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "The Nizza brings relaxed court style with a canvas upper and vulcanized rubber outsole.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "adidas-adilette",
    name: "Adidas Adilette Comfort",
    price: 3999,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "The Adilette Comfort slides feature a Cloudfoam footbed for plush cushioning.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "adidas-crazy-8",
    name: "Adidas Crazy 8",
    price: 15999,
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "The Crazy 8 returns with its iconic silhouette and Kobe Bryant legacy.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "adidas-ae1",
    name: "Adidas AE 1",
    price: 13999,
    image: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "Anthony Edwards' first signature shoe brings explosive energy to basketball.",
    sizes: [8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "adidas-rivalry",
    name: "Adidas Rivalry Low",
    price: 8999,
    image: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "The Rivalry Low brings basketball heritage with retro styling and leather upper.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "adidas-campus",
    name: "Adidas Campus 00s",
    price: 10999,
    image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "Campus 00s brings updated proportions to the classic suede sneaker.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "adidas-samoa",
    name: "Adidas Samoa",
    price: 7999,
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "Born in 1982, the Samoa remains a street style essential with its iconic 3-Stripes.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "adidas-pureboost",
    name: "Adidas Pureboost 23",
    price: 12999,
    image: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "Pureboost 23 delivers energized cushioning with a flexible, sock-like upper.",
    sizes: [7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "adidas-prophere",
    name: "Adidas Prophere",
    price: 11999,
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "The Prophere features aggressive styling with a bold midsole and knit upper.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "adidas-x-speedportal",
    name: "Adidas X Speedportal",
    price: 24999,
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "X Speedportal is built for explosive speed with a lightweight Speedframe outsole.",
    sizes: [7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "adidas-dropset-2",
    name: "Adidas Dropset 2",
    price: 13999,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "Dropset 2 is designed for cross-training with a stable base and flexible forefoot.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "adidas-indoor-super",
    name: "Adidas Indoor Super",
    price: 9999,
    image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
    category: "Adidas",
    description: "Indoor Super brings '70s handball heritage with suede and leather upper.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },

  // PUMA PRODUCTS (30)
  {
    id: "puma-rs-x",
    name: "Puma RS-X Reinvention",
    price: 11999,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop",
    category: "Puma",
    description: "The RS-X Reinvention takes the original Running System technology and adds bold colors.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "puma-suede-classic",
    name: "Puma Suede Classic XXI",
    price: 6999,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop",
    category: "Puma",
    description: "The Puma Suede has been making icons since 1968 with premium suede upper.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "puma-cali",
    name: "Puma Cali Dream",
    price: 9999,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=600&fit=crop",
    category: "Puma",
    description: "The Cali Dream brings California vibes with a stacked platform and leather upper.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "puma-future-rider",
    name: "Puma Future Rider",
    price: 7999,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop",
    category: "Puma",
    description: "The Future Rider brings '80s running DNA with lightweight cushioning.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "puma-nitro",
    name: "Puma Deviate Nitro 2",
    price: 16999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    category: "Puma",
    description: "Deviate Nitro 2 features NITRO foam and a carbon plate for explosive speed.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "puma-clyde",
    name: "Puma Clyde All-Pro",
    price: 12999,
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop",
    category: "Puma",
    description: "The Clyde All-Pro brings basketball performance with lightweight ProFoam.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "puma-mb01",
    name: "Puma MB.01",
    price: 13999,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=600&fit=crop",
    category: "Puma",
    description: "LaMelo Ball's signature shoe brings bold style and performance technology.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "puma-rs-z",
    name: "Puma RS-Z",
    price: 10999,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop",
    category: "Puma",
    description: "RS-Z takes RS heritage into the future with a modern tooling and layers.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "puma-roma",
    name: "Puma Roma Basic",
    price: 5999,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
    category: "Puma",
    description: "Originally released in 1968, the Roma is a timeless classic with T-toe design.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "puma-slipstream",
    name: "Puma Slipstream Lo",
    price: 10999,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop",
    category: "Puma",
    description: "The Slipstream returns with '80s basketball heritage and modern street style.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: true
  },
  {
    id: "puma-velocity-nitro",
    name: "Puma Velocity Nitro 2",
    price: 13999,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop",
    category: "Puma",
    description: "Velocity Nitro 2 delivers everyday running comfort with NITRO foam.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "puma-disc",
    name: "Puma Disc Blaze",
    price: 11999,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop",
    category: "Puma",
    description: "The Disc Blaze features the iconic Disc closure system for a custom fit.",
    sizes: [7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "puma-ultra",
    name: "Puma Ultra Ultimate",
    price: 22999,
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=600&h=600&fit=crop",
    category: "Puma",
    description: "Ultra Ultimate is built for lightning speed with ultra-thin ULTRAWEAVE upper.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "puma-future",
    name: "Puma Future Ultimate",
    price: 24999,
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=600&h=600&fit=crop",
    category: "Puma",
    description: "Future Ultimate features FUZIONFIT+ for adaptive agility and control.",
    sizes: [7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "puma-palermo",
    name: "Puma Palermo",
    price: 8999,
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&h=600&fit=crop",
    category: "Puma",
    description: "Palermo brings Italian terrace style with suede upper and gum outsole.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "puma-mayze",
    name: "Puma Mayze Stack",
    price: 10999,
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=600&h=600&fit=crop",
    category: "Puma",
    description: "Mayze Stack brings platform height with leather upper for standout style.",
    sizes: [6, 7, 8, 9, 10],
    featured: false
  },
  {
    id: "puma-mb02",
    name: "Puma MB.02",
    price: 12999,
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&h=600&fit=crop",
    category: "Puma",
    description: "LaMelo's second signature brings even bolder design and NITRO cushioning.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "puma-thunder",
    name: "Puma Thunder Spectra",
    price: 11999,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop",
    category: "Puma",
    description: "Thunder Spectra brings chunky '90s styling with multiple material layers.",
    sizes: [7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "puma-rider-fv",
    name: "Puma Rider FV",
    price: 9999,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&h=600&fit=crop",
    category: "Puma",
    description: "Rider FV updates the classic with Federbein technology for cushioned comfort.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "puma-wild-rider",
    name: "Puma Wild Rider Rollin'",
    price: 10999,
    image: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=600&h=600&fit=crop",
    category: "Puma",
    description: "Wild Rider Rollin' brings chunky style with visible Federbein cushioning.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "puma-basket-classic",
    name: "Puma Basket Classic",
    price: 6999,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop",
    category: "Puma",
    description: "The Basket Classic is a timeless leather sneaker with clean, minimal design.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "puma-smash",
    name: "Puma Smash v2",
    price: 4999,
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&h=600&fit=crop",
    category: "Puma",
    description: "Smash v2 is a clean, minimalist sneaker for everyday wear.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "puma-court-rider",
    name: "Puma Court Rider 2",
    price: 11999,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&h=600&fit=crop",
    category: "Puma",
    description: "Court Rider 2 delivers basketball performance with ProFoam cushioning.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "puma-lqa-cell",
    name: "Puma LQA Cell",
    price: 12999,
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=600&h=600&fit=crop",
    category: "Puma",
    description: "LQA Cell combines bold styling with CELL cushioning technology.",
    sizes: [7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "puma-pwrframe",
    name: "Puma PWRFRAME OP-1",
    price: 14999,
    image: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=600&h=600&fit=crop",
    category: "Puma",
    description: "PWRFRAME OP-1 brings trail-inspired design with bold layered construction.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "puma-mb03",
    name: "Puma MB.03",
    price: 14999,
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600&h=600&fit=crop",
    category: "Puma",
    description: "MB.03 continues LaMelo's bold legacy with standout design and performance.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "puma-cell-venom",
    name: "Puma Cell Venom",
    price: 10999,
    image: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=600&h=600&fit=crop",
    category: "Puma",
    description: "Cell Venom revives '90s running heritage with CELL cushioning technology.",
    sizes: [7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "puma-rebound",
    name: "Puma Rebound Layup",
    price: 7999,
    image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=600&h=600&fit=crop",
    category: "Puma",
    description: "Rebound Layup brings retro basketball style with a comfortable fit.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "puma-softride",
    name: "Puma Softride Enzo Evo",
    price: 8999,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop",
    category: "Puma",
    description: "Softride Enzo Evo delivers ultra-soft cushioning for all-day comfort.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "puma-ignite",
    name: "Puma Ignite Flash",
    price: 9999,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop",
    category: "Puma",
    description: "Ignite Flash brings responsive IGNITE foam for training and everyday wear.",
    sizes: [7, 8, 9, 10, 11],
    featured: false
  },

  // NEW BALANCE PRODUCTS (5)
  {
    id: "new-balance-574",
    name: "New Balance 574 Core",
    price: 8499,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop",
    category: "New Balance",
    description: "The 574 is the shoe that represents the essence of New Balance with ENCAP midsole.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "new-balance-990",
    name: "New Balance 990v5",
    price: 17499,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=600&fit=crop",
    category: "New Balance",
    description: "Made in the USA for over 75 years. The 990v5 continues the legacy of excellence.",
    sizes: [7, 8, 9, 10, 11],
    featured: true
  },
  {
    id: "new-balance-327",
    name: "New Balance 327",
    price: 9999,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop",
    category: "New Balance",
    description: "The 327 blends '70s running DNA with bold modern styling.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: true
  },
  {
    id: "new-balance-550",
    name: "New Balance 550",
    price: 10999,
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop",
    category: "New Balance",
    description: "The 550 brings back '80s basketball heritage with premium leather.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "new-balance-2002r",
    name: "New Balance 2002R",
    price: 14999,
    image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
    category: "New Balance",
    description: "2002R brings premium materials and N-ERGY cushioning from 2010.",
    sizes: [7, 8, 9, 10, 11],
    featured: false
  },

  // REEBOK PRODUCTS (5)
  {
    id: "reebok-classic",
    name: "Reebok Classic Leather",
    price: 7999,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
    category: "Reebok",
    description: "The Reebok Classic Leather is a timeless icon with soft garment leather upper.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "reebok-nano",
    name: "Reebok Nano X3",
    price: 13999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    category: "Reebok",
    description: "The Nano X3 is built for all-out training with Floatride Energy Foam.",
    sizes: [7, 8, 9, 10, 11],
    featured: true
  },
  {
    id: "reebok-club-c",
    name: "Reebok Club C 85",
    price: 7499,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop",
    category: "Reebok",
    description: "The Club C 85 brings tennis court heritage to the streets with soft leather.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "reebok-question",
    name: "Reebok Question Mid",
    price: 15999,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop",
    category: "Reebok",
    description: "Allen Iverson's signature shoe returns with iconic red toe design.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "reebok-instapump",
    name: "Reebok Instapump Fury",
    price: 17999,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop",
    category: "Reebok",
    description: "The Instapump Fury features the iconic pump technology and bold design.",
    sizes: [7, 8, 9, 10, 11],
    featured: true
  }
];

export const categories = ["All", "Nike", "Adidas", "Puma", "New Balance", "Reebok"] as const;
