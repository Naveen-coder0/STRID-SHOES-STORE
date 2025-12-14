export interface Product {
  id: string;
  name: string;
  price: number;
  images?: string[];
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
    images: [
  "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/wzitsrb4oucx9jukxsmc/AIR+MAX+90.png",
  "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/br8haus6k9a32jpzqdgl/AIR+MAX+90.png",
  "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/dbi49oifzh0x0dypfoex/AIR+MAX+90.png",
  "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/xqchinkvcz4pk2oblf2p/AIR+MAX+90.png",
  "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/isbxqhwho1qibq0t0gxt/AIR+MAX+90.png",



],
    category: "Nike",
    description: "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "nike-dunk-low",
    name: "Nike Dunk Low Retro",
    price: 10999,
    images: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/b1bcbca4-e853-4df7-b329-5be3c61ee057/NIKE+DUNK+LOW+RETRO.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/e863ca32-5f23-49eb-9ee6-da62958650f9/NIKE+DUNK+LOW+RETRO.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/2c25c676-832d-453f-9cd9-dd6b492d7636/NIKE+DUNK+LOW+RETRO.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/30ed2748-cf6a-4697-a59f-105bbc4de8dc/NIKE+DUNK+LOW+RETRO.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/2f7301c8-1550-4207-8360-0490266cf821/NIKE+DUNK+LOW+RETRO.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/b8083f2f-0933-4c11-9438-5497d751ce62/NIKE+DUNK+LOW+RETRO.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/ebd299fe-f5b4-45c6-9bf5-88bce1dc9878/NIKE+DUNK+LOW+RETRO.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/b64e38ae-4c2b-446d-9378-d100a190f847/NIKE+DUNK+LOW+RETRO.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/ff34d958-eebb-44b0-b5b8-1f2e6cc9a7ae/NIKE+DUNK+LOW+RETRO.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/c3dc0063-c5e8-49c3-9934-63315cdbfe21/NIKE+DUNK+LOW+RETRO.png"
    ],
    category: "Nike",
    description: "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors.",
    sizes: [7, 8, 9, 10, 11],
    featured: true
  },
  {
    id: "nike-jordan-1",
    name: "Air Jordan 1 High OG",
    price: 16999,
    images: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7950b1e6-5a84-4843-94f6-68d741cbb463/WMNS+AIR+JORDAN+1+RETRO+HI+OG.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/eaaf99c0-9fbb-4fa2-b6a8-034895313080/WMNS+AIR+JORDAN+1+RETRO+HI+OG.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/07db54ca-d762-4004-8e09-41c8196cc0f0/WMNS+AIR+JORDAN+1+RETRO+HI+OG.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a91ccdfb-26e8-4f5e-9b12-df4bf8100482/WMNS+AIR+JORDAN+1+RETRO+HI+OG.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/19984b0d-2e41-49f8-adf0-a924a811a9fb/WMNS+AIR+JORDAN+1+RETRO+HI+OG.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/167293e6-6532-424f-b936-854a0dd297b6/WMNS+AIR+JORDAN+1+RETRO+HI+OG.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/77d97147-8f4f-41b4-9a78-9e3b4f96abe7/WMNS+AIR+JORDAN+1+RETRO+HI+OG.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/77d97147-8f4f-41b4-9a78-9e3b4f96abe7/WMNS+AIR+JORDAN+1+RETRO+HI+OG.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5517b994-5ae0-455f-a238-a94c2f79d5b2/WMNS+AIR+JORDAN+1+RETRO+HI+OG.png",

    ],
    category: "Nike",
    description: "The Air Jordan 1 High OG remains faithful to the original. Premium leather upper, encapsulated Nike Air technology.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "nike-air-force-1",
    name: "Nike Air Force 1 '07",
    price: 9999,
    images: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/00375837-849f-4f17-ba24-d201d27be49b/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/3cc96f43-47b6-43cb-951d-d8f73bb2f912/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/33533fe2-1157-4001-896e-1803b30659c8/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/a0a300da-2e16-4483-ba64-9815cf0598ac/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/82aa97ed-98bf-4b6f-9d0b-31a9f907077b/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/ef92df87-6098-4fa5-bc88-7107492febcf/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/120a31b0-efa7-41c7-9a84-87b1e56ab9c3/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/1c1e5f55-99c2-4522-b398-2352e01ba566/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/0a0e1b96-043c-46d4-96a0-22408b6c771d/AIR+FORCE+1+%2707.png",

    ],
    category: "Nike",
    description: "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "nike-air-max-90-premium",
    name: "Nike Air Max 90 Premium",
    price: 17999,
    images: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/d5c3669a-4225-44bf-8ffd-1bc5703a2711/AIR+MAX+90+PRM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/f5ff9c1e-23ed-4084-b88d-eb8e74918824/AIR+MAX+90+PRM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/4a397894-153d-4db3-be16-c234813e207e/AIR+MAX+90+PRM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/80ce0757-6c8d-4d63-9c77-50fb519f4cef/AIR+MAX+90+PRM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/0ae9c49e-8920-4767-b7c7-2bea74f25b94/AIR+MAX+90+PRM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/1135a3f9-f757-4cd0-9c86-ca5d056f8a4d/AIR+MAX+90+PRM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/5588799e-5718-418d-b5a1-712fd12f0fa4/AIR+MAX+90+PRM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/b39f4edd-767e-4f9d-967c-37803008a816/AIR+MAX+90+PRM.png",
    ],
    category: "Nike",
    description: "Push your style full speed ahead with the Nike Air Max 90 Premium. Its design draws inspiration from Japanese bullet trains.",
    sizes: [7, 8, 9, 10, 11],
    featured: true
  },
  {
    id: "nike-blazer-mid",
    name: "Nike Blazer Mid '77",
    price: 10999,
    images: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/7dcc6fd4-b41c-493e-85bd-58b8944b6b1d/W+BLAZER+MID+%2777.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/32d21a35-fb1f-4c4f-a8cc-78e34095db35/W+BLAZER+MID+%2777.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/eaf02642-fb6b-47e7-b472-cc76f5801dac/W+BLAZER+MID+%2777.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/a8ab0634-f892-4bcb-b703-5564cfe4f8b7/W+BLAZER+MID+%2777.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/14772c5f-5a12-4151-baf3-ee5cf53deb1a/W+BLAZER+MID+%2777.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/a8daec61-e6ee-4939-b380-416dd77a4c60/W+BLAZER+MID+%2777.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/d8f37043-0761-482f-8e71-190ea6804738/W+BLAZER+MID+%2777.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/117d1d69-abbf-4c62-8ac6-9031480173b3/W+BLAZER+MID+%2777.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/fedffbeb-0766-4ff2-b73d-d7b6de29f39f/W+BLAZER+MID+%2777.png",
    ],
    category: "Nike",
    description: "The Nike Blazer Mid '77 brings back the classic basketball look with a vintage midsole finish.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "nike-vapormax",
    name: "Nike Air VaporMax Plus",
    price: 19999,
    images: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/87a2bcdf-c846-4747-a3dd-7b5401bc1ca3/NIKE+AIR+MAX+PLUS.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/04682e9d-8c71-4fd4-8f4a-29630b7fc714/NIKE+AIR+MAX+PLUS.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/9ff11d83-d063-4bb9-81ed-0bf524126cd9/NIKE+AIR+MAX+PLUS.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/b333b646-2206-4ce7-9eb3-8854c562f05f/NIKE+AIR+MAX+PLUS.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/35142d3f-321c-4954-a270-420e0051499a/NIKE+AIR+MAX+PLUS.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/e915e05e-9dc7-44c4-b0dd-ca28fcd8b195/NIKE+AIR+MAX+PLUS.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/c163b6d4-a9b0-43d3-82ed-845acf46f1e4/NIKE+AIR+MAX+PLUS.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/073c7763-3334-4d66-9df5-6d012cfc7015/NIKE+AIR+MAX+PLUS.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/a85738bd-cf71-4957-af4a-f6a02a9aede6/NIKE+AIR+MAX+PLUS.png",
    ],
    category: "Nike",
    description: "The Nike Air VaporMax Plus features the iconic plastic upper of the Air Max Plus with revolutionary VaporMax Air technology.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "nike-pegasus-premium",
    name: "Nike Pegasus Premium",
    price: 15999,
    images: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/e60c0de2-8f4d-450e-ac4f-9032744fe6a2/W+NIKE+PEGASUS+PREMIUM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/c3386cc5-09a7-4dee-864d-e3097f0cd65a/W+NIKE+PEGASUS+PREMIUM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/1e898329-177a-4ed7-984d-d62b5e0316be/W+NIKE+PEGASUS+PREMIUM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/6b63b99d-b938-4551-91f4-98a107c0e0f0/W+NIKE+PEGASUS+PREMIUM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/f40040f5-be12-46a1-98e6-eaae48acc8df/W+NIKE+PEGASUS+PREMIUM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/6154ecd6-4ff2-4817-ac54-40035b357ecd/W+NIKE+PEGASUS+PREMIUM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/2549679f-ce97-4aac-a74d-1aa4dfd55c36/W+NIKE+PEGASUS+PREMIUM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/474d06f2-96fc-4f31-b5be-947f2642949f/W+NIKE+PEGASUS+PREMIUM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/ba2e6076-6ab8-4337-a1f9-bfb99bf08cd7/W+NIKE+PEGASUS+PREMIUM.png",
    ],
    category: "Nike",
    description: "Nike React Infinity Run is designed to help reduce injury and keep you on the run.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "nike-pegasus-41",
    name: "Nike Pegasus 41",
    price: 13999,
    images: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/3cfa0374-d35c-4083-a466-35c5ce5e8eaa/AIR+ZOOM+PEGASUS+41.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/f8e33a2b-1d47-47e4-8239-8e84ff08a222/AIR+ZOOM+PEGASUS+41.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/a895a595-a93c-49e4-8ddb-93ce3eebf6cd/AIR+ZOOM+PEGASUS+41.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/515721f8-331c-44c1-9580-7348d99b44c4/AIR+ZOOM+PEGASUS+41.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/d53a8f06-85e1-4f2a-a79a-edd5887adc56/AIR+ZOOM+PEGASUS+41.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/cecedc20-2859-46e8-8c64-a0224b0e9b59/AIR+ZOOM+PEGASUS+41.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/f86c4ed9-afe1-40d7-9659-a00707798c83/AIR+ZOOM+PEGASUS+41.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/0d3f27c4-8055-4394-905b-b25f89bad5c1/AIR+ZOOM+PEGASUS+41.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/08f37732-b02f-41f2-984d-582a047512ae/AIR+ZOOM+PEGASUS+41.png",
    ],
    category: "Nike",
    description: "The Nike Pegasus 41 is responsive and versatile enough for your everyday run.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "nike-huarache",
    name: "Nike Air Huarache",
    price: 12999,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/844d1e27-a857-4172-b42c-0a60468620c8/custom-huarache-run-by-you.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5fe08e29-d6d7-4040-92ae-4628f70094c7/custom-huarache-run-by-you.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6e6db714-9c47-4a85-ba1e-655402b14bee/custom-huarache-run-by-you.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/773194ed-db90-4287-9ed2-717f1d49f664/custom-huarache-run-by-you.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/773194ed-db90-4287-9ed2-717f1d49f664/custom-huarache-run-by-you.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b6503171-3250-4251-894f-f0a26b6b9cbe/custom-huarache-run-by-you.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/33448768-28c8-46fb-96c7-f26ea4878174/custom-huarache-run-by-you.png",
    ],
    category: "Nike",
    description: "Stretchy neoprene and soft leather blend in the Nike Air Huarache for a sneaker that's unlike any other.",
    sizes: [7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "nike-free-metcon-6",
    name: "Nike Free Metcon 6",
    price: 11999,
    images: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/12712cc5-4310-4127-8223-34207857222f/NIKE+FREE+METCON+6.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/6faefaec-f99f-4f47-a783-68a21095f3fe/NIKE+FREE+METCON+6.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/de63e8d0-f080-49c0-baa5-b51d417eb5fe/NIKE+FREE+METCON+6.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/1a647d01-a622-4b8f-8d23-965cbafd79be/NIKE+FREE+METCON+6.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/3e09f82a-846f-4572-ab42-95a01a889b7c/NIKE+FREE+METCON+6.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/2bb244b2-4ff3-4fad-8ba9-43b0cce7deec/NIKE+FREE+METCON+6.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/fdf43a9f-2bc5-484a-b090-4ecb36bdd96b/NIKE+FREE+METCON+6.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/fee5a892-3715-4427-b40b-2764ee47c099/NIKE+FREE+METCON+6.png",
    ],
    category: "Nike",
    description: "The Nike Free Metcon 6 is designed for short runs with a barefoot-like feel.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "nike-zoom-fly",
    name: "Nike Zoom Fly 6",
    price: 16999,
    images: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/a825ef16-d83c-4bd8-9285-aca9e8d923fe/W+ZOOM+FLY+6.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/99ec3230-6a99-43b5-a25e-6a766ca0de3e/W+ZOOM+FLY+6.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/3322d500-54af-4e9c-afb3-39065ec4aebc/W+ZOOM+FLY+6.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/2e87a4d4-0bfc-4d00-b0f0-56cc93cfd78e/W+ZOOM+FLY+6.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/4f0517a6-d24e-487a-a9a1-8c333001d2c7/W+ZOOM+FLY+6.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/d32bee39-4660-43ce-acdc-587fa6682b8d/W+ZOOM+FLY+6.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/823f48bb-77fa-4cb5-8dbc-ca096cbc656d/W+ZOOM+FLY+6.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/823f48bb-77fa-4cb5-8dbc-ca096cbc656d/W+ZOOM+FLY+6.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/15a64303-caeb-47cd-ad8e-b13e4181230d/W+ZOOM+FLY+6.png",
    ],
    category: "Nike",
    description: "Continue your speedy running ways with the Nike Zoom Fly 6. The responsive design returns.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "nike-court-legacy",
    name: "Nike Court Legacy",
    price: 7999,
    images: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/1eec7095-1807-47ab-a0f5-16b048d1bb61/NIKE+COURT+LEGACY+%28GS%29.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/a2ab61fa-c0f8-4ea9-9c5a-f291957bf033/NIKE+COURT+LEGACY+%28GS%29.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/a4ba8fda-3282-4983-96ca-b6a576e2fb73/NIKE+COURT+LEGACY+%28GS%29.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/9f5b3d69-b32f-46ed-9d9c-0d53991a911b/NIKE+COURT+LEGACY+%28GS%29.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/cfbd9d95-2bb5-47d3-8a2a-357b6b60e3ba/NIKE+COURT+LEGACY+%28GS%29.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/c57138c7-c980-4407-9cfb-50d9eec73ebe/NIKE+COURT+LEGACY+%28GS%29.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/82e89f2d-88e3-49f0-9735-419d7191b1bc/NIKE+COURT+LEGACY+%28GS%29.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/dfc99db2-9331-4fe5-b57c-4a95345d2010/NIKE+COURT+LEGACY+%28GS%29.png",
    ],
    category: "Nike",
    description: "The Nike Court Legacy is a clean, classic tennis shoe with heritage styling.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "nike-sb-dunk",
    name: "Nike SB Dunk Low Pro",
    price: 11999,
    images: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/19b14cdd-865e-4d3e-9b79-c108416eb38c/NIKE+SB+DUNK+LOW+PRO.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/79198bdd-ff05-4810-a9ac-9c8813614d7b/NIKE+SB+DUNK+LOW+PRO.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/8085e23a-6586-4c91-8045-52d330228998/NIKE+SB+DUNK+LOW+PRO.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/95ad42a9-b22f-44b5-980d-48c7b28b1eb3/NIKE+SB+DUNK+LOW+PRO.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/150aa149-95d8-436f-87ac-7b9d5f21908e/NIKE+SB+DUNK+LOW+PRO.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/ffa89858-f389-4d19-ba94-6f28ef0a571d/NIKE+SB+DUNK+LOW+PRO.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/45c944b3-a1e5-4db9-b9eb-488874541ce9/NIKE+SB+DUNK+LOW+PRO.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/ee12c2af-a2a7-4e56-9b45-e3347b9f48ea/NIKE+SB+DUNK+LOW+PRO.png",
    ],
    category: "Nike",
    description: "Built for skateboarding's demanding requirements, the Nike SB Dunk Low Pro is the original.",
    sizes: [7, 8, 9, 10, 11],
    featured: true
  },
  {
    id: "nike-lebron-21",
    name: "Nike LeBron 21",
    price: 19999,
    images: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/3b45260f-1db5-453e-aa3f-5fb1684c97a7/LEBRON+XXIII+EP.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/7e116d57-85fc-4998-bff2-2e39cd7c5a54/LEBRON+XXIII+EP.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/b2068f22-3aad-4cba-bc0e-a2d5921c7daf/LEBRON+XXIII+EP.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/0bc3736f-006d-4e32-901f-e42b9791dad9/LEBRON+XXIII+EP.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/ffbbd161-5f70-4e64-a6e3-4b0e3501ea3e/LEBRON+XXIII+EP.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/a9618d66-c7c6-4640-9958-197ead536ded/LEBRON+XXIII+EP.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/07d1c9d2-eec9-4379-801d-e789978b7bb1/LEBRON+XXIII+EP.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/52aa73ee-26ef-4657-ac43-4f1c372c966c/LEBRON+XXIII+EP.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/9652b295-5ae8-4bb0-85d7-a25c27216973/LEBRON+XXIII+EP.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/6fc03cd0-a987-47f9-bcd7-8eb634b2969c/LEBRON+XXIII+EP.png",
    ],
    category: "Nike",
    description: "LeBron's latest game shoe is built for power players who play in the paint and beyond.",
    sizes: [8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "nike-jordan-4",
    name: "Air Jordan 4 Retro",
    price: 21999,
    images: [
      "https://static.nike.com/a/images/w_1280,q_auto,f_auto/bd787f96-dbfd-43df-8e5e-0b112ed90bc5/air-jordan-4-black-cat-fv5029-010-release-date.jpg",
      "https://static.nike.com/a/images/w_1280,q_auto,f_auto/b5ca863c-a5b9-43cb-9a4d-3ef2196c8837/air-jordan-4-black-cat-fv5029-010-release-date.jpg",
      "https://static.nike.com/a/images/w_1280,q_auto,f_auto/461e0200-8291-4273-9877-e3a2a053ea63/air-jordan-4-black-cat-fv5029-010-release-date.jpg",
      "https://static.nike.com/a/images/w_1280,q_auto,f_auto/2cbe215f-d07c-41fb-8cf5-7783c20b0046/air-jordan-4-black-cat-fv5029-010-release-date.jpg",
      "https://static.nike.com/a/images/w_1280,q_auto,f_auto/3154fb7e-0574-4aa4-9331-cf1efec9e27d/air-jordan-4-black-cat-fv5029-010-release-date.jpg",
      "https://static.nike.com/a/images/w_1280,q_auto,f_auto/697cc620-f371-46cf-a5fa-2fb74d02f581/air-jordan-4-black-cat-fv5029-010-release-date.jpg",
    ],
    category: "Nike",
    description: "The Air Jordan 4 Retro features legendary style with its mesh paneling and iconic design.",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: "nike-air-max-moto-2k",
    name: "Nike Air Max Moto 2K",
    price: 14999,
    images: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/bf20dc88-fb87-453d-ab06-6fdc710a11cd/W+NIKE+AIR+MAX+MOTO+2K.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/f8022fa9-f544-4871-b7cb-b3fb71151c0d/W+NIKE+AIR+MAX+MOTO+2K.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/036cb723-180f-4316-aa02-7b774b18421b/W+NIKE+AIR+MAX+MOTO+2K.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/abc0598d-a3d5-4c0c-8511-79ea3d271a38/W+NIKE+AIR+MAX+MOTO+2K.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/3fe371a0-83bb-498c-987f-ae30836b7b55/W+NIKE+AIR+MAX+MOTO+2K.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/bf5ec04c-8688-43b8-b9b8-51bf34235b2d/W+NIKE+AIR+MAX+MOTO+2K.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/ef50d4b9-be52-4689-abb7-91abd95689c4/W+NIKE+AIR+MAX+MOTO+2K.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/30c41b75-97eb-42a3-a202-6174f550e7b9/W+NIKE+AIR+MAX+MOTO+2K.png",
    ],
    category: "Nike",
    description: "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max Moto 2K.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    featured: false
  },
  {
    id: "nike-presto",
    name: "Nike Air Presto",
    price: 13999,
    images: [
      "https://api.nike.com/customization/images/v2?vn=1&bi=38e4525b-9b61-49eb-907f-02fa3bea12a3&bs=1744383664401&bgc=f5f5f5&qlt=90&wid=864&designs=PgaIEAAFUEAMAFqAZBZgcQbIAwBQChA+3gK4BoAJwPUoAmA6wDIAjAVQFcBNGLHAMAI4AggKwAwAMoAbAGUBMAKoBfAO8A9AFAAQAMK8AbKICmAVDwBngLkBnFAFeAo+QDjwAPABoAILkA7QCIASABJADuAXAB3AGoAegAyCIB7gAuLZQA+gH6ATYBvKIB4gCjKAB+AMYBegGPjAGZPADVVADCrAIB+AGaogC8nIJaAP2MAB7CAEIB-AHU0AAKAHQA6TUEAEQAkgHKfQXmozIBlgBe9KIAlgCEAEgAJnH5ygAc0AAwAWQBzgDMALQAEQAVn4AJE0AHIABIAI4AMQAaACIAGsAIBvG4AZE2ACmABQAMQAogA0lAAG4AlfwAAs-ABOfgApQApCKLDAAaoKXIApwBwAgEABfADbcgA5AC3miiigA9lyALAANwuvRuEAAnwACK4w1xMLAABCwGF1ogiEQAjTCADkABPcxGEADyADUIAA+sgAiTB7BNcABDjDSACDyoAawA5hn2SoAOoAAyhcgAut72sIAa+IHrMAEJtABNABwAEMAJ0AYqpLD0AF44m9y0EAKvuaROAABAEvWXhSwA-gBWeEkywprlBR11DKOPgAyQBzJMAf7uAF+AK3PRIsLlU4wAHEEAHTdW8ML0i2gAHs3ctFgAsAHmKXgAAcim5AgoAFsrEEAAuIYUCsABxXcogAQoAIo9dQoIATmrAAmUEghFVQAFo3XkABFxQAEUIROVcjiGHBMlQgB0ABHzRKy6YwIXcABsKCGCsG4AEmAF1QIAD1VAAS2wUAADgAfMEI5KwpdIMNPYg-n4RYIEaVwAEDbBoABpZJiWePR+CKSV6N3SV8QRb8i1cABpkMaH7BDGkqasABTFisdYOAZAA7XcO2lAANRJcXfZJ0nIIjONPABjNg6jdABUlgAB3BDCdLZCCgBGaNhDoAA33NKCORRS1k6NthtAAsxq+QBBkERhXgAH0ssrXEAC3ywAYdUAAsAANsqjgAPmkwDthubR7X7SVjDFdYPgAHrRAAjABtAAGm0AGIRKLBAZnfcb8SciNvJoStllIAJmT5ClpQAb49AAzgAOup+oRQzyAAAQvGAHwCESM3WN1K2jJKLC6gB2aQIgQaRkYAcIAPB+MV8WZFAvgQ3EImUH5tlpHAIERmg0GZJLsm+gAPjc4ipIEktzbI6H7LoFVKABdgBPZRQJFLrXA7e1kkkWw+VQxZtmUYAnF+3VRkUD4wgAFW9bZBBaWlGPfABIjCWAATNcEJ1juX6sBtVCaDRVVRnLAAZ3EPvWDdtVcP4cHcIiuppiAgA",
      "https://api.nike.com/customization/images/v2?vn=2&bi=38e4525b-9b61-49eb-907f-02fa3bea12a3&bs=1744383664401&bgc=f5f5f5&qlt=90&wid=864&designs=PgaIEAAFUEAMAFqAZBZgcQbIAwBQChA+3gK4BoAJwPUoAmA6wDIAjAVQFcBNGLHAMAI4AggKwAwAMoAbAGUBMAKoBfAO8A9AFAAQAMK8AbKICmAVDwBngLkBnFAFeAo+QDjwAPABoAILkA7QCIASABJADuAXAB3AGoAegAyCIB7gAuLZQA+gH6ATYBvKIB4gCjKAB+AMYBegGPjAGZPADVVADCrAIB+AGaogC8nIJaAP2MAB7CAEIB-AHU0AAKAHQA6TUEAEQAkgHKfQXmozIBlgBe9KIAlgCEAEgAJnH5ygAc0AAwAWQBzgDMALQAEQAVn4AJE0AHIABIAI4AMQAaACIAGsAIBvG4AZE2ACmABQAMQAogA0lAAG4AlfwAAs-ABOfgApQApCKLDAAaoKXIApwBwAgEABfADbcgA5AC3miiigA9lyALAANwuvRuEAAnwACK4w1xMLAABCwGF1ogiEQAjTCADkABPcxGEADyADUIAA+sgAiTB7BNcABDjDSACDyoAawA5hn2SoAOoAAyhcgAut72sIAa+IHrMAEJtABNABwAEMAJ0AYqpLD0AF44m9y0EAKvuaROAABAEvWXhSwA-gBWeEkywprlBR11DKOPgAyQBzJMAf7uAF+AK3PRIsLlU4wAHEEAHTdW8ML0i2gAHs3ctFgAsAHmKXgAAcim5AgoAFsrEEAAuIYUCsABxXcogAQoAIo9dQoIATmrAAmUEghFVQAFo3XkABFxQAEUIROVcjiGHBMlQgB0ABHzRKy6YwIXcABsKCGCsG4AEmAF1QIAD1VAAS2wUAADgAfMEI5KwpdIMNPYg-n4RYIEaVwAEDbBoABpZJiWePR+CKSV6N3SV8QRb8i1cABpkMaH7BDGkqasABTFisdYOAZAA7XcO2lAANRJcXfZJ0nIIjONPABjNg6jdABUlgAB3BDCdLZCCgBGaNhDoAA33NKCORRS1k6NthtAAsxq+QBBkERhXgAH0ssrXEAC3ywAYdUAAsAANsqjgAPmkwDthubR7X7SVjDFdYPgAHrRAAjABtAAGm0AGIRKLBAZnfcb8SciNvJoStllIAJmT5ClpQAb49AAzgAOup+oRQzyAAAQvGAHwCESM3WN1K2jJKLC6gB2aQIgQaRkYAcIAPB+MV8WZFAvgQ3EImUH5tlpHAIERmg0GZJLsm+gAPjc4ipIEktzbI6H7LoFVKABdgBPZRQJFLrXA7e1kkkWw+VQxZtmUYAnF+3VRkUD4wgAFW9bZBBaWlGPfABIjCWAATNcEJ1juX6sBtVCaDRVVRnLAAZ3EPvWDdtVcP4cHcIiuppiAgA",
      "https://api.nike.com/customization/images/v2?vn=3&bi=38e4525b-9b61-49eb-907f-02fa3bea12a3&bs=1744383664401&bgc=f5f5f5&qlt=90&wid=864&designs=PgaIEAAFUEAMAFqAZBZgcQbIAwBQChA+3gK4BoAJwPUoAmA6wDIAjAVQFcBNGLHAMAI4AggKwAwAMoAbAGUBMAKoBfAO8A9AFAAQAMK8AbKICmAVDwBngLkBnFAFeAo+QDjwAPABoAILkA7QCIASABJADuAXAB3AGoAegAyCIB7gAuLZQA+gH6ATYBvKIB4gCjKAB+AMYBegGPjAGZPADVVADCrAIB+AGaogC8nIJaAP2MAB7CAEIB-AHU0AAKAHQA6TUEAEQAkgHKfQXmozIBlgBe9KIAlgCEAEgAJnH5ygAc0AAwAWQBzgDMALQAEQAVn4AJE0AHIABIAI4AMQAaACIAGsAIBvG4AZE2ACmABQAMQAogA0lAAG4AlfwAAs-ABOfgApQApCKLDAAaoKXIApwBwAgEABfADbcgA5AC3miiigA9lyALAANwuvRuEAAnwACK4w1xMLAABCwGF1ogiEQAjTCADkABPcxGEADyADUIAA+sgAiTB7BNcABDjDSACDyoAawA5hn2SoAOoAAyhcgAut72sIAa+IHrMAEJtABNABwAEMAJ0AYqpLD0AF44m9y0EAKvuaROAABAEvWXhSwA-gBWeEkywprlBR11DKOPgAyQBzJMAf7uAF+AK3PRIsLlU4wAHEEAHTdW8ML0i2gAHs3ctFgAsAHmKXgAAcim5AgoAFsrEEAAuIYUCsABxXcogAQoAIo9dQoIATmrAAmUEghFVQAFo3XkABFxQAEUIROVcjiGHBMlQgB0ABHzRKy6YwIXcABsKCGCsG4AEmAF1QIAD1VAAS2wUAADgAfMEI5KwpdIMNPYg-n4RYIEaVwAEDbBoABpZJiWePR+CKSV6N3SV8QRb8i1cABpkMaH7BDGkqasABTFisdYOAZAA7XcO2lAANRJcXfZJ0nIIjONPABjNg6jdABUlgAB3BDCdLZCCgBGaNhDoAA33NKCORRS1k6NthtAAsxq+QBBkERhXgAH0ssrXEAC3ywAYdUAAsAANsqjgAPmkwDthubR7X7SVjDFdYPgAHrRAAjABtAAGm0AGIRKLBAZnfcb8SciNvJoStllIAJmT5ClpQAb49AAzgAOup+oRQzyAAAQvGAHwCESM3WN1K2jJKLC6gB2aQIgQaRkYAcIAPB+MV8WZFAvgQ3EImUH5tlpHAIERmg0GZJLsm+gAPjc4ipIEktzbI6H7LoFVKABdgBPZRQJFLrXA7e1kkkWw+VQxZtmUYAnF+3VRkUD4wgAFW9bZBBaWlGPfABIjCWAATNcEJ1juX6sBtVCaDRVVRnLAAZ3EPvWDdtVcP4cHcIiuppiAgA",
      "https://api.nike.com/customization/images/v2?vn=4&bi=38e4525b-9b61-49eb-907f-02fa3bea12a3&bs=1744383664401&bgc=f5f5f5&qlt=90&wid=864&designs=PgaIEAAFUEAMAFqAZBZgcQbIAwBQChA+3gK4BoAJwPUoAmA6wDIAjAVQFcBNGLHAMAI4AggKwAwAMoAbAGUBMAKoBfAO8A9AFAAQAMK8AbKICmAVDwBngLkBnFAFeAo+QDjwAPABoAILkA7QCIASABJADuAXAB3AGoAegAyCIB7gAuLZQA+gH6ATYBvKIB4gCjKAB+AMYBegGPjAGZPADVVADCrAIB+AGaogC8nIJaAP2MAB7CAEIB-AHU0AAKAHQA6TUEAEQAkgHKfQXmozIBlgBe9KIAlgCEAEgAJnH5ygAc0AAwAWQBzgDMALQAEQAVn4AJE0AHIABIAI4AMQAaACIAGsAIBvG4AZE2ACmABQAMQAogA0lAAG4AlfwAAs-ABOfgApQApCKLDAAaoKXIApwBwAgEABfADbcgA5AC3miiigA9lyALAANwuvRuEAAnwACK4w1xMLAABCwGF1ogiEQAjTCADkABPcxGEADyADUIAA+sgAiTB7BNcABDjDSACDyoAawA5hn2SoAOoAAyhcgAut72sIAa+IHrMAEJtABNABwAEMAJ0AYqpLD0AF44m9y0EAKvuaROAABAEvWXhSwA-gBWeEkywprlBR11DKOPgAyQBzJMAf7uAF+AK3PRIsLlU4wAHEEAHTdW8ML0i2gAHs3ctFgAsAHmKXgAAcim5AgoAFsrEEAAuIYUCsABxXcogAQoAIo9dQoIATmrAAmUEghFVQAFo3XkABFxQAEUIROVcjiGHBMlQgB0ABHzRKy6YwIXcABsKCGCsG4AEmAF1QIAD1VAAS2wUAADgAfMEI5KwpdIMNPYg-n4RYIEaVwAEDbBoABpZJiWePR+CKSV6N3SV8QRb8i1cABpkMaH7BDGkqasABTFisdYOAZAA7XcO2lAANRJcXfZJ0nIIjONPABjNg6jdABUlgAB3BDCdLZCCgBGaNhDoAA33NKCORRS1k6NthtAAsxq+QBBkERhXgAH0ssrXEAC3ywAYdUAAsAANsqjgAPmkwDthubR7X7SVjDFdYPgAHrRAAjABtAAGm0AGIRKLBAZnfcb8SciNvJoStllIAJmT5ClpQAb49AAzgAOup+oRQzyAAAQvGAHwCESM3WN1K2jJKLC6gB2aQIgQaRkYAcIAPB+MV8WZFAvgQ3EImUH5tlpHAIERmg0GZJLsm+gAPjc4ipIEktzbI6H7LoFVKABdgBPZRQJFLrXA7e1kkkWw+VQxZtmUYAnF+3VRkUD4wgAFW9bZBBaWlGPfABIjCWAATNcEJ1juX6sBtVCaDRVVRnLAAZ3EPvWDdtVcP4cHcIiuppiAgA",
      "https://api.nike.com/customization/images/v2?vn=5&bi=38e4525b-9b61-49eb-907f-02fa3bea12a3&bs=1744383664401&bgc=f5f5f5&qlt=90&wid=864&designs=PgaIEAAFUEAMAFqAZBZgcQbIAwBQChA+3gK4BoAJwPUoAmA6wDIAjAVQFcBNGLHAMAI4AggKwAwAMoAbAGUBMAKoBfAO8A9AFAAQAMK8AbKICmAVDwBngLkBnFAFeAo+QDjwAPABoAILkA7QCIASABJADuAXAB3AGoAegAyCIB7gAuLZQA+gH6ATYBvKIB4gCjKAB+AMYBegGPjAGZPADVVADCrAIB+AGaogC8nIJaAP2MAB7CAEIB-AHU0AAKAHQA6TUEAEQAkgHKfQXmozIBlgBe9KIAlgCEAEgAJnH5ygAc0AAwAWQBzgDMALQAEQAVn4AJE0AHIABIAI4AMQAaACIAGsAIBvG4AZE2ACmABQAMQAogA0lAAG4AlfwAAs-ABOfgApQApCKLDAAaoKXIApwBwAgEABfADbcgA5AC3miiigA9lyALAANwuvRuEAAnwACK4w1xMLAABCwGF1ogiEQAjTCADkABPcxGEADyADUIAA+sgAiTB7BNcABDjDSACDyoAawA5hn2SoAOoAAyhcgAut72sIAa+IHrMAEJtABNABwAEMAJ0AYqpLD0AF44m9y0EAKvuaROAABAEvWXhSwA-gBWeEkywprlBR11DKOPgAyQBzJMAf7uAF+AK3PRIsLlU4wAHEEAHTdW8ML0i2gAHs3ctFgAsAHmKXgAAcim5AgoAFsrEEAAuIYUCsABxXcogAQoAIo9dQoIATmrAAmUEghFVQAFo3XkABFxQAEUIROVcjiGHBMlQgB0ABHzRKy6YwIXcABsKCGCsG4AEmAF1QIAD1VAAS2wUAADgAfMEI5KwpdIMNPYg-n4RYIEaVwAEDbBoABpZJiWePR+CKSV6N3SV8QRb8i1cABpkMaH7BDGkqasABTFisdYOAZAA7XcO2lAANRJcXfZJ0nIIjONPABjNg6jdABUlgAB3BDCdLZCCgBGaNhDoAA33NKCORRS1k6NthtAAsxq+QBBkERhXgAH0ssrXEAC3ywAYdUAAsAANsqjgAPmkwDthubR7X7SVjDFdYPgAHrRAAjABtAAGm0AGIRKLBAZnfcb8SciNvJoStllIAJmT5ClpQAb49AAzgAOup+oRQzyAAAQvGAHwCESM3WN1K2jJKLC6gB2aQIgQaRkYAcIAPB+MV8WZFAvgQ3EImUH5tlpHAIERmg0GZJLsm+gAPjc4ipIEktzbI6H7LoFVKABdgBPZRQJFLrXA7e1kkkWw+VQxZtmUYAnF+3VRkUD4wgAFW9bZBBaWlGPfABIjCWAATNcEJ1juX6sBtVCaDRVVRnLAAZ3EPvWDdtVcP4cHcIiuppiAgA",
      "https://api.nike.com/customization/images/v2?vn=6&bi=38e4525b-9b61-49eb-907f-02fa3bea12a3&bs=1744383664401&bgc=f5f5f5&qlt=90&wid=864&designs=PgaIEAAFUEAMAFqAZBZgcQbIAwBQChA+3gK4BoAJwPUoAmA6wDIAjAVQFcBNGLHAMAI4AggKwAwAMoAbAGUBMAKoBfAO8A9AFAAQAMK8AbKICmAVDwBngLkBnFAFeAo+QDjwAPABoAILkA7QCIASABJADuAXAB3AGoAegAyCIB7gAuLZQA+gH6ATYBvKIB4gCjKAB+AMYBegGPjAGZPADVVADCrAIB+AGaogC8nIJaAP2MAB7CAEIB-AHU0AAKAHQA6TUEAEQAkgHKfQXmozIBlgBe9KIAlgCEAEgAJnH5ygAc0AAwAWQBzgDMALQAEQAVn4AJE0AHIABIAI4AMQAaACIAGsAIBvG4AZE2ACmABQAMQAogA0lAAG4AlfwAAs-ABOfgApQApCKLDAAaoKXIApwBwAgEABfADbcgA5AC3miiigA9lyALAANwuvRuEAAnwACK4w1xMLAABCwGF1ogiEQAjTCADkABPcxGEADyADUIAA+sgAiTB7BNcABDjDSACDyoAawA5hn2SoAOoAAyhcgAut72sIAa+IHrMAEJtABNABwAEMAJ0AYqpLD0AF44m9y0EAKvuaROAABAEvWXhSwA-gBWeEkywprlBR11DKOPgAyQBzJMAf7uAF+AK3PRIsLlU4wAHEEAHTdW8ML0i2gAHs3ctFgAsAHmKXgAAcim5AgoAFsrEEAAuIYUCsABxXcogAQoAIo9dQoIATmrAAmUEghFVQAFo3XkABFxQAEUIROVcjiGHBMlQgB0ABHzRKy6YwIXcABsKCGCsG4AEmAF1QIAD1VAAS2wUAADgAfMEI5KwpdIMNPYg-n4RYIEaVwAEDbBoABpZJiWePR+CKSV6N3SV8QRb8i1cABpkMaH7BDGkqasABTFisdYOAZAA7XcO2lAANRJcXfZJ0nIIjONPABjNg6jdABUlgAB3BDCdLZCCgBGaNhDoAA33NKCORRS1k6NthtAAsxq+QBBkERhXgAH0ssrXEAC3ywAYdUAAsAANsqjgAPmkwDthubR7X7SVjDFdYPgAHrRAAjABtAAGm0AGIRKLBAZnfcb8SciNvJoStllIAJmT5ClpQAb49AAzgAOup+oRQzyAAAQvGAHwCESM3WN1K2jJKLC6gB2aQIgQaRkYAcIAPB+MV8WZFAvgQ3EImUH5tlpHAIERmg0GZJLsm+gAPjc4ipIEktzbI6H7LoFVKABdgBPZRQJFLrXA7e1kkkWw+VQxZtmUYAnF+3VRkUD4wgAFW9bZBBaWlGPfABIjCWAATNcEJ1juX6sBtVCaDRVVRnLAAZ3EPvWDdtVcP4cHcIiuppiAgA",
      "https://api.nike.com/customization/images/v2?vn=7&bi=38e4525b-9b61-49eb-907f-02fa3bea12a3&bs=1744383664401&bgc=f5f5f5&qlt=90&wid=864&designs=PgaIEAAFUEAMAFqAZBZgcQbIAwBQChA+3gK4BoAJwPUoAmA6wDIAjAVQFcBNGLHAMAI4AggKwAwAMoAbAGUBMAKoBfAO8A9AFAAQAMK8AbKICmAVDwBngLkBnFAFeAo+QDjwAPABoAILkA7QCIASABJADuAXAB3AGoAegAyCIB7gAuLZQA+gH6ATYBvKIB4gCjKAB+AMYBegGPjAGZPADVVADCrAIB+AGaogC8nIJaAP2MAB7CAEIB-AHU0AAKAHQA6TUEAEQAkgHKfQXmozIBlgBe9KIAlgCEAEgAJnH5ygAc0AAwAWQBzgDMALQAEQAVn4AJE0AHIABIAI4AMQAaACIAGsAIBvG4AZE2ACmABQAMQAogA0lAAG4AlfwAAs-ABOfgApQApCKLDAAaoKXIApwBwAgEABfADbcgA5AC3miiigA9lyALAANwuvRuEAAnwACK4w1xMLAABCwGF1ogiEQAjTCADkABPcxGEADyADUIAA+sgAiTB7BNcABDjDSACDyoAawA5hn2SoAOoAAyhcgAut72sIAa+IHrMAEJtABNABwAEMAJ0AYqpLD0AF44m9y0EAKvuaROAABAEvWXhSwA-gBWeEkywprlBR11DKOPgAyQBzJMAf7uAF+AK3PRIsLlU4wAHEEAHTdW8ML0i2gAHs3ctFgAsAHmKXgAAcim5AgoAFsrEEAAuIYUCsABxXcogAQoAIo9dQoIATmrAAmUEghFVQAFo3XkABFxQAEUIROVcjiGHBMlQgB0ABHzRKy6YwIXcABsKCGCsG4AEmAF1QIAD1VAAS2wUAADgAfMEI5KwpdIMNPYg-n4RYIEaVwAEDbBoABpZJiWePR+CKSV6N3SV8QRb8i1cABpkMaH7BDGkqasABTFisdYOAZAA7XcO2lAANRJcXfZJ0nIIjONPABjNg6jdABUlgAB3BDCdLZCCgBGaNhDoAA33NKCORRS1k6NthtAAsxq+QBBkERhXgAH0ssrXEAC3ywAYdUAAsAANsqjgAPmkwDthubR7X7SVjDFdYPgAHrRAAjABtAAGm0AGIRKLBAZnfcb8SciNvJoStllIAJmT5ClpQAb49AAzgAOup+oRQzyAAAQvGAHwCESM3WN1K2jJKLC6gB2aQIgQaRkYAcIAPB+MV8WZFAvgQ3EImUH5tlpHAIERmg0GZJLsm+gAPjc4ipIEktzbI6H7LoFVKABdgBPZRQJFLrXA7e1kkkWw+VQxZtmUYAnF+3VRkUD4wgAFW9bZBBaWlGPfABIjCWAATNcEJ1juX6sBtVCaDRVVRnLAAZ3EPvWDdtVcP4cHcIiuppiAgA"
    ],
    category: "Nike",
    description: "Originally designed as a running shoe, the Nike Air Presto's stretchy sleeve and mesh upper fit like a glove.",
    sizes: [7, 8, 9, 10, 11],
    featured: false
  },
  {
    id: "nike-air-max-90-premium",
    name: "Nike Air Max 90 Premium",
    price: 8999,
    images: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/8fedc51d-14d7-4fcb-bce4-cbd834ce9fee/AIR+MAX+90+PRM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/60c30c55-4048-4fbf-9f0a-b59dda5cbb8a/AIR+MAX+90+PRM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/1e889592-0514-4b29-b729-299489d11f9d/AIR+MAX+90+PRM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/a556c339-231e-4f90-b89d-0bccbb7c2306/AIR+MAX+90+PRM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/3d26c3c6-b05a-4723-87d0-1002d698c528/AIR+MAX+90+PRM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/b94c403b-6ce0-45d8-b149-cc73708ce9ca/AIR+MAX+90+PRM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/6213954c-c2e1-4d3f-82db-5965eb55f0d8/AIR+MAX+90+PRM.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/f0cb58bc-2d96-4dca-8cea-113b14dd36c8/AIR+MAX+90+PRM.png",
    ],
    category: "Nike",
    description: "The Nike Air Max 90 Premium brings back the original 1978 running icon in its purest form.",
    sizes: [6, 7, 8, 9, 10, 11],
    featured: false
  },
  // {
  //   id: "nike-waffle-one",
  //   name: "Nike Waffle One",
  //   price: 10999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Nike",
  //   description: "The Nike Waffle One features a deconstructed design with an emphasis on Nike heritage.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "nike-metcon-8",
  //   name: "Nike Metcon 8",
  //   price: 12999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Nike",
  //   description: "The Nike Metcon 8 is made for your toughest training sessions. Stable and durable.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "nike-flyknit-racer",
  //   name: "Nike Flyknit Racer",
  //   price: 14999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Nike",
  //   description: "The Nike Flyknit Racer brings record-breaking speed to the streets with its featherlight design.",
  //   sizes: [7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "nike-monarch",
  //   name: "Nike Air Monarch IV",
  //   price: 6999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Nike",
  //   description: "The Nike Air Monarch IV sets you up for comfortable training with durable leather on top.",
  //   sizes: [6, 7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "nike-revolution-6",
  //   name: "Nike Revolution 6",
  //   price: 6499,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Nike",
  //   description: "The Nike Revolution 6 cushions your stride with soft foam to keep you running in comfort.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "nike-cortez",
  //   name: "Nike Cortez",
  //   price: 8999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Nike",
  //   description: "The Nike Cortez is a classic that never goes out of style. Clean lines and retro charm.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "nike-invincible-3",
  //   name: "Nike Invincible 3",
  //   price: 17999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Nike",
  //   description: "Max out on cushioning in Nike's softest, most responsive running shoes.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "nike-alphafly-2",
  //   name: "Nike Alphafly 2",
  //   price: 27999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Nike",
  //   description: "The Nike Alphafly 2 is pure marathon racing technology for the elite runner.",
  //   sizes: [7, 8, 9, 10, 11],
  //   featured: true
  // },
  // {
  //   id: "nike-kd-16",
  //   name: "Nike KD 16",
  //   price: 15999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Nike",
  //   description: "Kevin Durant's 16th signature shoe brings responsive cushioning for basketball.",
  //   sizes: [8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "nike-kyrie-9",
  //   name: "Nike Kyrie 9",
  //   price: 13999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Nike",
  //   description: "The Nike Kyrie 9 helps you change direction on a dime with quick-response cushioning.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "nike-tiempo-legend",
  //   name: "Nike Tiempo Legend 10",
  //   price: 22999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Nike",
  //   description: "The Nike Tiempo Legend 10 combines leather luxury with modern football tech.",
  //   sizes: [7, 8, 9, 10, 11],
  //   featured: false
  // },

  // // ADIDAS PRODUCTS (30)
  // {
  //   id: "adidas-ultraboost",
  //   name: "Adidas Ultraboost 23",
  //   price: 18999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "Experience epic energy return with the Adidas Ultraboost 23. Responsive Boost cushioning and Primeknit upper.",
  //   sizes: [6, 7, 8, 9, 10, 11, 12],
  //   featured: true
  // },
  // {
  //   id: "adidas-stan-smith",
  //   name: "Adidas Stan Smith",
  //   price: 8999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "The Adidas Stan Smith shoe has been an icon for decades with clean lines and perforated 3-Stripes.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "adidas-nmd",
  //   name: "Adidas NMD_R1",
  //   price: 14999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "The NMD_R1 brings together a heritage of running design with today's most advanced technology.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "adidas-superstar",
  //   name: "Adidas Superstar",
  //   price: 9999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "The legendary Adidas Superstar shell toe brings basketball heritage to the streets.",
  //   sizes: [6, 7, 8, 9, 10, 11, 12],
  //   featured: true
  // },
  // {
  //   id: "adidas-gazelle",
  //   name: "Adidas Gazelle",
  //   price: 10,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "First released in 1968, the Gazelle is a timeless silhouette that's been re-energized.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "adidas-samba",
  //   name: "Adidas Samba OG",
  //   price: 10999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "From the soccer field to street style icon, the Adidas Samba never goes out of fashion.",
  //   sizes: [6, 7, 8, 9, 10, 11, 12],
  //   featured: true
  // },
  // {
  //   id: "adidas-forum",
  //   name: "Adidas Forum Low",
  //   price: 10999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "The Adidas Forum debuted in 1984 and quickly became a basketball and street icon.",
  //   sizes: [7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "adidas-ozweego",
  //   name: "Adidas Ozweego",
  //   price: 11999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "The Adidas Ozweego blends '90s running design with futuristic chunky styling.",
  //   sizes: [6, 7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "adidas-yeezy-350",
  //   name: "Adidas Yeezy Boost 350 V2",
  //   price: 22999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "The Yeezy Boost 350 V2 features Primeknit upper and full-length Boost cushioning.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: true
  // },
  // {
  //   id: "adidas-zx-750",
  //   name: "Adidas ZX 750",
  //   price: 9999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "The ZX 750 brings '80s running heritage with mesh and suede construction.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "adidas-alphaboost",
  //   name: "Adidas Alphaboost V1",
  //   price: 13999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "Alphaboost V1 delivers Boost cushioning in a sleek, street-ready package.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "adidas-swift-run",
  //   name: "Adidas Swift Run",
  //   price: 8999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "The Swift Run brings a modern silhouette with a knit upper for everyday wear.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "adidas-continental-80",
  //   name: "Adidas Continental 80",
  //   price: 7999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "Continental 80 brings back '80s tennis style with split leather upper and rubber toe cap.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "adidas-4dfwd",
  //   name: "Adidas 4DFWD",
  //   price: 19999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "4DFWD features a 3D-printed midsole that converts vertical pressure into forward motion.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: true
  // },
  // {
  //   id: "adidas-boston-12",
  //   name: "Adidas Adizero Boston 12",
  //   price: 16999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "The Boston 12 is built for speed with Lightstrike Pro cushioning for race day.",
  //   sizes: [7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "adidas-predator",
  //   name: "Adidas Predator Elite",
  //   price: 27999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "The Predator Elite delivers precision control for complete football dominance.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "adidas-terrex-free",
  //   name: "Adidas Terrex Free Hiker",
  //   price: 19999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "Terrex Free Hiker 2 combines trail-ready grip with sock-like comfort.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "adidas-sl72",
  //   name: "Adidas SL 72",
  //   price: 8999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "Originally made for the 1972 Olympics, the SL 72 is a true retro running icon.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "adidas-nizza",
  //   name: "Adidas Nizza",
  //   price: 6999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "The Nizza brings relaxed court style with a canvas upper and vulcanized rubber outsole.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "adidas-adilette",
  //   name: "Adidas Adilette Comfort",
  //   price: 3999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "The Adilette Comfort slides feature a Cloudfoam footbed for plush cushioning.",
  //   sizes: [6, 7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "adidas-crazy-8",
  //   name: "Adidas Crazy 8",
  //   price: 15999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "The Crazy 8 returns with its iconic silhouette and Kobe Bryant legacy.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: true
  // },
  // {
  //   id: "adidas-ae1",
  //   name: "Adidas AE 1",
  //   price: 13999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "Anthony Edwards' first signature shoe brings explosive energy to basketball.",
  //   sizes: [8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "adidas-rivalry",
  //   name: "Adidas Rivalry Low",
  //   price: 8999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "The Rivalry Low brings basketball heritage with retro styling and leather upper.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "adidas-campus",
  //   name: "Adidas Campus 00s",
  //   price: 10999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "Campus 00s brings updated proportions to the classic suede sneaker.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "adidas-samoa",
  //   name: "Adidas Samoa",
  //   price: 7999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "Born in 1982, the Samoa remains a street style essential with its iconic 3-Stripes.",
  //   sizes: [6, 7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "adidas-pureboost",
  //   name: "Adidas Pureboost 23",
  //   price: 12999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "Pureboost 23 delivers energized cushioning with a flexible, sock-like upper.",
  //   sizes: [7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "adidas-prophere",
  //   name: "Adidas Prophere",
  //   price: 11999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "The Prophere features aggressive styling with a bold midsole and knit upper.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "adidas-x-speedportal",
  //   name: "Adidas X Speedportal",
  //   price: 24999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "X Speedportal is built for explosive speed with a lightweight Speedframe outsole.",
  //   sizes: [7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "adidas-dropset-2",
  //   name: "Adidas Dropset 2",
  //   price: 13999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "Dropset 2 is designed for cross-training with a stable base and flexible forefoot.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "adidas-indoor-super",
  //   name: "Adidas Indoor Super",
  //   price: 9999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Adidas",
  //   description: "Indoor Super brings '70s handball heritage with suede and leather upper.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },

  // // PUMA PRODUCTS (30)
  // {
  //   id: "puma-rs-x",
  //   name: "Puma RS-X Reinvention",
  //   price: 11999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "The RS-X Reinvention takes the original Running System technology and adds bold colors.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: true
  // },
  // {
  //   id: "puma-suede-classic",
  //   name: "Puma Suede Classic XXI",
  //   price: 6999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "The Puma Suede has been making icons since 1968 with premium suede upper.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "puma-cali",
  //   name: "Puma Cali Dream",
  //   price: 9999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "The Cali Dream brings California vibes with a stacked platform and leather upper.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "puma-future-rider",
  //   name: "Puma Future Rider",
  //   price: 7999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "The Future Rider brings '80s running DNA with lightweight cushioning.",
  //   sizes: [6, 7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "puma-nitro",
  //   name: "Puma Deviate Nitro 2",
  //   price: 16999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "Deviate Nitro 2 features NITRO foam and a carbon plate for explosive speed.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: true
  // },
  // {
  //   id: "puma-clyde",
  //   name: "Puma Clyde All-Pro",
  //   price: 12999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "The Clyde All-Pro brings basketball performance with lightweight ProFoam.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "puma-mb01",
  //   name: "Puma MB.01",
  //   price: 13999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "LaMelo Ball's signature shoe brings bold style and performance technology.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: true
  // },
  // {
  //   id: "puma-rs-z",
  //   name: "Puma RS-Z",
  //   price: 10999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "RS-Z takes RS heritage into the future with a modern tooling and layers.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "puma-roma",
  //   name: "Puma Roma Basic",
  //   price: 5999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "Originally released in 1968, the Roma is a timeless classic with T-toe design.",
  //   sizes: [6, 7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "puma-slipstream",
  //   name: "Puma Slipstream Lo",
  //   price: 10999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "The Slipstream returns with '80s basketball heritage and modern street style.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: true
  // },
  // {
  //   id: "puma-velocity-nitro",
  //   name: "Puma Velocity Nitro 2",
  //   price: 13999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "Velocity Nitro 2 delivers everyday running comfort with NITRO foam.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "puma-disc",
  //   name: "Puma Disc Blaze",
  //   price: 11999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "The Disc Blaze features the iconic Disc closure system for a custom fit.",
  //   sizes: [7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "puma-ultra",
  //   name: "Puma Ultra Ultimate",
  //   price: 22999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "Ultra Ultimate is built for lightning speed with ultra-thin ULTRAWEAVE upper.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "puma-future",
  //   name: "Puma Future Ultimate",
  //   price: 24999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "Future Ultimate features FUZIONFIT+ for adaptive agility and control.",
  //   sizes: [7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "puma-palermo",
  //   name: "Puma Palermo",
  //   price: 8999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "Palermo brings Italian terrace style with suede upper and gum outsole.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "puma-mayze",
  //   name: "Puma Mayze Stack",
  //   price: 10999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "Mayze Stack brings platform height with leather upper for standout style.",
  //   sizes: [6, 7, 8, 9, 10],
  //   featured: false
  // },
  // {
  //   id: "puma-mb02",
  //   name: "Puma MB.02",
  //   price: 12999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "LaMelo's second signature brings even bolder design and NITRO cushioning.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: true
  // },
  // {
  //   id: "puma-thunder",
  //   name: "Puma Thunder Spectra",
  //   price: 11999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "Thunder Spectra brings chunky '90s styling with multiple material layers.",
  //   sizes: [7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "puma-rider-fv",
  //   name: "Puma Rider FV",
  //   price: 9999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "Rider FV updates the classic with Federbein technology for cushioned comfort.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "puma-wild-rider",
  //   name: "Puma Wild Rider Rollin'",
  //   price: 10999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "Wild Rider Rollin' brings chunky style with visible Federbein cushioning.",
  //   sizes: [6, 7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "puma-basket-classic",
  //   name: "Puma Basket Classic",
  //   price: 6999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "The Basket Classic is a timeless leather sneaker with clean, minimal design.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "puma-smash",
  //   name: "Puma Smash v2",
  //   price: 4999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "Smash v2 is a clean, minimalist sneaker for everyday wear.",
  //   sizes: [6, 7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "puma-court-rider",
  //   name: "Puma Court Rider 2",
  //   price: 11999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "Court Rider 2 delivers basketball performance with ProFoam cushioning.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "puma-lqa-cell",
  //   name: "Puma LQA Cell",
  //   price: 12999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "LQA Cell combines bold styling with CELL cushioning technology.",
  //   sizes: [7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "puma-pwrframe",
  //   name: "Puma PWRFRAME OP-1",
  //   price: 14999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "PWRFRAME OP-1 brings trail-inspired design with bold layered construction.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "puma-mb03",
  //   name: "Puma MB.03",
  //   price: 14999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "MB.03 continues LaMelo's bold legacy with standout design and performance.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: true
  // },
  // {
  //   id: "puma-cell-venom",
  //   name: "Puma Cell Venom",
  //   price: 10999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "Cell Venom revives '90s running heritage with CELL cushioning technology.",
  //   sizes: [7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "puma-rebound",
  //   name: "Puma Rebound Layup",
  //   price: 7999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "Rebound Layup brings retro basketball style with a comfortable fit.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "puma-softride",
  //   name: "Puma Softride Enzo Evo",
  //   price: 8999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "Softride Enzo Evo delivers ultra-soft cushioning for all-day comfort.",
  //   sizes: [6, 7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "puma-ignite",
  //   name: "Puma Ignite Flash",
  //   price: 9999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Puma",
  //   description: "Ignite Flash brings responsive IGNITE foam for training and everyday wear.",
  //   sizes: [7, 8, 9, 10, 11],
  //   featured: false
  // },

  // // NEW BALANCE PRODUCTS (5)
  // {
  //   id: "new-balance-574",
  //   name: "New Balance 574 Core",
  //   price: 8499,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "New Balance",
  //   description: "The 574 is the shoe that represents the essence of New Balance with ENCAP midsole.",
  //   sizes: [6, 7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "new-balance-990",
  //   name: "New Balance 990v5",
  //   price: 17499,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "New Balance",
  //   description: "Made in the USA for over 75 years. The 990v5 continues the legacy of excellence.",
  //   sizes: [7, 8, 9, 10, 11],
  //   featured: true
  // },
  // {
  //   id: "new-balance-327",
  //   name: "New Balance 327",
  //   price: 9999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "New Balance",
  //   description: "The 327 blends '70s running DNA with bold modern styling.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: true
  // },
  // {
  //   id: "new-balance-550",
  //   name: "New Balance 550",
  //   price: 10999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "New Balance",
  //   description: "The 550 brings back '80s basketball heritage with premium leather.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: true
  // },
  // {
  //   id: "new-balance-2002r",
  //   name: "New Balance 2002R",
  //   price: 14999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "New Balance",
  //   description: "2002R brings premium materials and N-ERGY cushioning from 2010.",
  //   sizes: [7, 8, 9, 10, 11],
  //   featured: false
  // },

  // // REEBOK PRODUCTS (5)
  // {
  //   id: "reebok-classic",
  //   name: "Reebok Classic Leather",
  //   price: 7999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Reebok",
  //   description: "The Reebok Classic Leather is a timeless icon with soft garment leather upper.",
  //   sizes: [6, 7, 8, 9, 10, 11, 12],
  //   featured: false
  // },
  // {
  //   id: "reebok-nano",
  //   name: "Reebok Nano X3",
  //   price: 13999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Reebok",
  //   description: "The Nano X3 is built for all-out training with Floatride Energy Foam.",
  //   sizes: [7, 8, 9, 10, 11],
  //   featured: true
  // },
  // {
  //   id: "reebok-club-c",
  //   name: "Reebok Club C 85",
  //   price: 7499,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Reebok",
  //   description: "The Club C 85 brings tennis court heritage to the streets with soft leather.",
  //   sizes: [6, 7, 8, 9, 10, 11],
  //   featured: false
  // },
  // {
  //   id: "reebok-question",
  //   name: "Reebok Question Mid",
  //   price: 15999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ], category: "Reebok",
  //   description: "Allen Iverson's signature shoe returns with iconic red toe design.",
  //   sizes: [7, 8, 9, 10, 11, 12],
  //   featured: true
  // },
  // {
  //   id: "reebok-instapump",
  //   name: "Reebok Instapump Fury",
  //   price: 17999,
  //   images: [
  //     "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop"
  //   ],
  //   category: "Reebok",
  //   description: "The Instapump Fury features the iconic pump technology and bold design.",
  //   sizes: [7, 8, 9, 10, 11],
  //   featured: true
  // }
];

export const categories = ["All", "Nike", "Adidas", "Puma", "New Balance", "Reebok"] as const;
