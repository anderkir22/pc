/* SINGLE SOURCE OF TRUTH for the site navigation IA (Kiron's "Proposed
   Navigation"). Every concept — top mega-menu, side rail, bottom dock —
   reads from window.PC_NAV so the information architecture lives in one place.
   Real Estate items are /listings-scoped → non-functional placeholders. */
window.PC_NAV = {
  logoBlack: "../../shared/logos/peoples-company-logo.png",
  logoWhite: "../../shared/logos/pc_logo_white.webp",
  phone: "(855) 800-LAND",
  utilLinks: [["Land Investment Expo", "#"], ["Client Login", "#"]],

  items: [
    { label: "Real Estate", cols: [
      { h: "For Sale", items: ["Farmland","Development Land","Commercial","Residential","Interactive Map"] },
      { h: "Auctions", items: ["Upcoming Auctions","Prior Auctions","Auction Results"] },
      { h: "Sold Properties", items: [] },
      { h: "", note: "Listings are out of scope — links are placeholders." }
    ]},
    { label: "The Company", cols: [
      { h: "The Company", items: ["Overview","Sustainability","Our Team","Culture","Careers"] },
      { h: "The Land Expo", items: [] },
      { h: "Regions", items: [] },
      { h: "Offices", items: [] },
      { h: "Our Clients", items: ["Institutional Investors","Financial Advisors","Family Offices / HNW","Landowners","Operators"] },
      { h: "Industry Collaboration", items: ["FarmWorth"] }
    ]},
    { label: "What We Do", cols: [
      { h: "Land Brokerage & Auctions", items: ["Marketing Approach","Sale Methods","Auction Platform","Find an Agent"] },
      { h: "Land Management", items: ["Management Approach","Consulting","Operators","Request an Assessment"] },
      { h: "Agricultural Appraisal", items: ["Order an Appraisal"] },
      { h: "Capital Markets", items: [] },
      { h: "Corporate Services", items: [] },
      { h: "Energy Management", items: [] },
      { h: "Crop Insurance", items: [] }
    ]},
    { label: "Insights & News", cols: [
      { h: "Insights", items: ["FarmWorth","Data & Tools","National Land Values","Industry Research","Newsletters","Blog"] },
      { h: "News", items: ["In the News","Press Releases","Industry Recognition","View All"] }
    ]}
  ]
};
