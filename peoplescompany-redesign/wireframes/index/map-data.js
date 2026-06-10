/* ──────────────────────────────────────────────────────────────────────────
   PC_MAP — sample data for the FarmWorth listings-map module.
   SINGLE SOURCE OF TRUTH for the map mockup's dummy content.

   ⚠ NON-FUNCTIONAL PLACEHOLDER. Per the /listings exclusion, this is a static
   visual mockup: dummy listings + offices, no real search/data. The look is
   fully designed; the data is fake. Thumbnails are Unsplash stand-ins for PC's
   own property photography.

   Status colours are a DELIBERATE, SCOPED exception to the site's no-red /
   no-red-green rule — Kiron's explicit call (2026-06-09) for THIS module only,
   to match the existing FarmWorth legend. Every status is ALSO labelled in
   text, so meaning is never conveyed by colour alone.

   Pin positions (x/y) are percentages over the map surface.
   ────────────────────────────────────────────────────────────────────────── */
window.PC_MAP = {
  statuses: {
    available: { label: "Available", color: "#1F9D57" },
    pending:   { label: "Pending",   color: "#E0A100" },
    auction:   { label: "Auction",   color: "#0077A8" },
    sold:      { label: "Sold",      color: "#C5392F" }
  },

  filters: {
    states: ["All States", "Iowa", "Illinois", "Minnesota", "Nebraska", "Missouri", "Kansas", "South Dakota"],
    types: ["Land", "Auctions", "Commercial", "Residential", "Development", "Energy"],
    sorts: ["Newest", "Oldest", "Price: Low to High", "Price: High to Low", "Acreage: Low to High", "Acreage: High to Low"]
  },

  listings: [
    { id: "L-2401", price: "$1.24M", acres: 240, county: "Wapello County", state: "IA", status: "available", per: "$5,167/ac", x: 58, y: 64,
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=420&q=60" },
    { id: "L-2402", price: "$880K", acres: 158, county: "Story County", state: "IA", status: "auction", per: "$5,570/ac", x: 49, y: 42,
      img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=420&q=60" },
    { id: "L-2403", price: "$2.10M", acres: 320, county: "Hardin County", state: "IA", status: "pending", per: "$6,563/ac", x: 52, y: 33,
      img: "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?auto=format&fit=crop&w=420&q=60" },
    { id: "L-2404", price: "$640K", acres: 80, county: "Polk County", state: "IA", status: "available", per: "$8,000/ac", x: 47, y: 52,
      img: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=420&q=60" },
    { id: "L-2405", price: "$3.40M", acres: 510, county: "Kossuth County", state: "IA", status: "sold", per: "$6,667/ac", x: 44, y: 18,
      img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=420&q=60" },
    { id: "L-2406", price: "$1.05M", acres: 200, county: "Dallas County", state: "IA", status: "auction", per: "$5,250/ac", x: 40, y: 50,
      img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=420&q=60" },
    { id: "L-2407", price: "$720K", acres: 120, county: "Madison County", state: "IA", status: "available", per: "$6,000/ac", x: 41, y: 61,
      img: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=420&q=60" },
    { id: "L-2408", price: "$1.90M", acres: 295, county: "Webster County", state: "IA", status: "pending", per: "$6,441/ac", x: 38, y: 34,
      img: "https://images.unsplash.com/photo-1757170889478-e6768a4e36c1?auto=format&fit=crop&w=420&q=60" },
    { id: "L-2409", price: "$2.65M", acres: 400, county: "Carroll County", state: "IA", status: "available", per: "$6,625/ac", x: 33, y: 45,
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=420&q=60" },
    { id: "L-2410", price: "$995K", acres: 175, county: "Marion County", state: "IA", status: "auction", per: "$5,686/ac", x: 50, y: 60,
      img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=420&q=60" }
  ],

  offices: [
    { name: "Cumming, IA — Headquarters", x: 45, y: 55 },
    { name: "Ames, IA", x: 48, y: 41 },
    { name: "West Des Moines, IA", x: 44, y: 53 },
    { name: "Mason City, IA", x: 50, y: 20 },
    { name: "Council Bluffs, IA", x: 22, y: 56 }
  ]
};
