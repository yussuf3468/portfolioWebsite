export interface Testimony {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const trust: Testimony[] = [
  {
    quote:
      "We came to Yussuf with paper records and no online presence. He delivered the website and the full training platform faster than we expected, and the certificate verification has changed how people see the school — anyone can scan a code and confirm a certificate is genuine. We have not worked with anyone like him.",
    name: "Mahad",
    role: "Manager",
    company: "ISLII Barista School",
  },
  {
    quote:
      "Yussuf rebuilt our retail operations from spreadsheets into a system the whole team trusts. The product moves at the pace of the business — not the other way around.",
    name: "Abdimalik Mohamed",
    role: "Chief Executive",
    company: "Alnur Textiles",
  },
  {
    quote:
      "We shipped a month ahead of plan because of the clarity Yussuf brought to the architecture. He thinks like a product engineer first.",
    name: "Amina Hassan",
    role: "General Manager",
    company: "Golden Star Coffee",
  },
  {
    quote:
      "The marketing automation Yussuf built is still the backbone of our lead funnel two years on.",
    name: "Fatima Noor",
    role: "Marketing Director",
    company: "Taqwa Electronics",
  },
];
