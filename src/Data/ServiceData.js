// src/data/serviceData.js
import webLogo from '../assets/web logo.png';
import webDesign from '../assets/web design.png';
import digitalMarket from '../assets/digital market.png';
import localSEO from '../assets/Local SEO.jpg';
import graphicDesign from '../assets/graphic designer.jpg';
import googleBusiness from '../assets/google business.jpg';
import socialMedia from '../assets/social media.jpg';
import contentWriter from '../assets/content writer.jpg';
import videoAd from '../assets/video ad.jpg';
import eCommerce from '../assets/e- commerce.jpg';

const serviceData = [
  {
    id: 'web-dev',
    title: 'Web Develop',
    titleImage: webLogo,
    description: 'Web development is the process of building and maintaining websites and web applications that are accessed through the internet...',
    icon: webDesign,
    details: `Web development involves designing, building, and maintaining websites and web applications...`,
    benefits: [
      "Improves brand credibility and digital presence.",
      "Enables 24/7 accessibility for users and customers.",
      "Provides scalable platforms for business growth."
    ]
  },
  {
    id: 'Digital Marketing',
    title: 'Digital Market',
    titleImage: digitalMarket,
    description: 'Digital marketing is the promotion of brands to connect with potential customers...',
    icon: digitalMarket,
    details: `We focus on human-centered design, delivering seamless experiences that convert visitors into customers.`,
    benefits: [
      "Boosts online visibility and brand recognition effectively.",
      "Targets specific audiences with measurable results.",
      "Delivers cost-effective marketing across multiple digital platforms."
    ]
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    titleImage: localSEO,
    description: 'Improve visibility and organic search ranking...',
    icon: localSEO,
    details: `From technical SEO to content strategy, we help your website get noticed...`,
    benefits: [
      "Improves website visibility in search engine results.",
      "Drives consistent, organic traffic without paid ads.",
      "Builds trust and credibility with long-term results."
    ]
  },
  {
    id: 'Graphic Designing',
    title: 'Graphic Design',
    titleImage: graphicDesign,
    description: 'A graphic designer creates visual concepts to communicate ideas...',
    icon: graphicDesign,
    details: `We focus on human-centered design, delivering seamless experiences...`,
    benefits: [
      "Enhances brand identity with visually striking designs.",
      "Communicates complex ideas through creative visuals.",
      "Improves user engagement and builds lasting impressions."
    ]
  },
  {
    id: 'Google Ads',
    title: 'Google Ads',
    titleImage: googleBusiness,
    description: 'Google Ads allows businesses to target specific demographics...',
    icon: googleBusiness,
    details: `We focus on human-centered design, delivering seamless experiences...`,
    benefits: [
      "Drives targeted traffic with high intent to your website.",
      "Provides measurable ROI through real-time performance tracking.",
      "Enables precise audience targeting based on keywords, location, and behavior."
    ]
  },
  {
    id: 'Social media market',
    title: 'Social media market',
    titleImage: socialMedia,
    description: 'A form of digital marketing that uses social media platforms to promote...',
    icon: socialMedia,
    details: `We focus on human-centered design, delivering seamless experiences...`,
    benefits: [
      "Builds strong brand awareness and community engagement.",
      "Drives traffic and conversions through organic and paid campaigns.",
      "Provides direct customer interaction and instant feedback."
    ]
  },
  {
    id: 'Content writer',
    title: 'Content writer',
    titleImage: contentWriter,
    description: 'A content writer is a specialist who writes informative and engaging content...',
    icon: contentWriter,
    details: `We focus on human-centered design, delivering seamless experiences...`,
    benefits: [
      "Improves SEO rankings and drives organic website traffic.",
      "Builds brand authority and educates your target audience.",
      "Boosts engagement and conversion through persuasive messaging."
    ]
  },
  {
    id: 'video Ads',
    title: 'video Ads',
    titleImage: videoAd,
    description: 'Video ad descriptions should be concise, engaging, and relevant...',
    icon: videoAd,
    details: `We focus on human-centered design, delivering seamless experiences...`,
    benefits: [
      "Captures attention quickly and increases audience retention.",
      "Boosts brand visibility and engagement on social platforms.",
      "Drives higher conversion rates through visual storytelling."
    ]
  },
  {
    id: 'E-commerce',
    title: 'E-commerce',
    titleImage: eCommerce,
    description: 'E-commerce, or electronic commerce, refers to the buying and selling...',
    icon: eCommerce,
    details: `We focus on human-centered design, delivering seamless experiences...`,
    benefits: [
      "Offers 24/7 business availability and global reach.",
      "Reduces operational costs with automated systems.",
      "Provides personalized shopping experiences and data insights."
    ]
  }
];

export default serviceData;
