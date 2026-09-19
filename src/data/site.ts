export const site = {
  name: "AgentOS",
  url: "https://agentos.homes",
  app: "https://app.agentos.homes",
  title: "AgentOS | Real-estate operating system for professionals",
  description:
    "CRM, AI calling, buyer matching, deal progression, listing marketing, and client portals in one workspace. Built for agents, teams, and brokerages.",
  phoneDisplay: "+1 (812) 808-8621",
  phoneTel: "+18128088621",
  whatsapp: "https://wa.me/18128088621",
  x: "https://x.com/TheAgentOS_RE",
  instagram: "https://www.instagram.com/agentos.homes/",
} as const;

export const app = {
  login: `${site.app}/login`,
  signup: `${site.app}/signup`,
  signupBuyer: `${site.app}/signup?type=buyer`,
  signupSeller: `${site.app}/signup?type=seller`,
  signupPro: `${site.app}/signup?type=professional`,
  marketplace: `${site.app}/marketplace`,
  support: `${site.app}/support`,
  abuse: `${site.app}/report-abuse`,
} as const;

export const plans = [
  {
    id: "solo",
    name: "Solo",
    price: 94,
    blurb: "For one professional running the practice from AgentOS.",
    detail:
      "The core workspace, CRM, lead workflows, listings, buyer and seller workflows, content tools, and AI-assisted calling within plan allowances.",
  },
  {
    id: "pro",
    name: "Pro",
    price: 169,
    blurb: "For professionals ready to let AgentOS handle more of the work.",
    detail:
      "Expanded usage capacity, higher automation volume, and increased allowances across every AgentOS professional tool.",
    featured: true,
  },
  {
    id: "team",
    name: "Team",
    price: 512,
    blurb: "For teams operating in one shared workspace.",
    detail:
      "A shared workspace, additional seats, higher automation volume, and increased usage allowances for the whole team.",
  },
  {
    id: "brokerage",
    name: "Brokerage",
    price: 1102,
    blurb: "For brokerages and larger organizations.",
    detail:
      "The highest usage capacity, the most seats, and centralized administration across the organization.",
  },
] as const;

export const includedTools = [
  "CRM and lead management",
  "AI-assisted calling and follow-up",
  "Listings and showing requests",
  "Buyer matching",
  "Seller intake",
  "Content and property-video workflows",
  "Social publishing workflows",
  "Referrals and private messaging",
  "Professional networking",
  "Finance and usage tools",
  "Public marketplace for eligible published listings and profiles",
] as const;
