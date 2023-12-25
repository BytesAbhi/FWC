const plans = [
  {
    key: 1,
    name: "Basic Plan",
    developmentCost: "$799",
    monthlyMaintenanceCost: "$99",
    description: {
      short: "A cost-effective solution for small businesses.",
      long: "The Basic Plan is a cost-effective solution for small businesses that need regular updates and basic security for their website. It includes website updates, monthly backups, and basic security monitoring. This plan is perfect for businesses that are just starting out or have simple website needs.",
    },
    features: [
      {
        name: "Website updates and minor changes",
        description:
          "This feature ensures your website stays up-to-date. We'll make regular updates and minor changes as per your requirements.",
      },
      {
        name: "Monthly website backup",
        description:
          "To prevent data loss, we'll create a backup of your website every month. This ensures your data is always safe.",
      },
      {
        name: "Basic security monitoring",
        description:
          "We'll keep an eye on your website for common security threats. This basic monitoring helps keep your site secure.",
      },
    ],
  },
  {
    key: 2,
    name: "Advanced Plan",
    developmentCost: "$1099",
    monthlyMaintenanceCost: "$149",
    description: {
      short: "Enhanced features for growing businesses.",
      long: "The Advanced Plan offers enhanced features for growing businesses. In addition to all the features of the Basic Plan, it includes weekly website backups, advanced security monitoring, and SEO optimization. This plan is ideal for businesses that are expanding and need a website that can grow with them.",
    },
    features: [
      {
        name: "All features of the Basic Plan",
        description:
          "This plan includes all the features of the Basic Plan, providing a solid foundation for your website's maintenance.",
      },
      {
        name: "Weekly website backup",
        description:
          "For added data security, we'll create a backup of your website every week. This ensures your data is always available.",
      },
      {
        name: "Advanced security monitoring",
        description:
          "We'll monitor your website for both common and uncommon security threats, providing a higher level of security.",
      },
      {
        name: "SEO optimization",
        description:
          "We'll optimize your website for search engines. This improves your website's visibility and can increase traffic.",
      },
    ],
  },
  {
    key: 3,
    name: "Premium Plan",
    developmentCost: "$1499",
    monthlyMaintenanceCost: "$199",
    description: {
      short: "Comprehensive maintenance for large businesses.",
      long: "The Premium Plan offers comprehensive maintenance for large businesses or those with significant web traffic. It includes all the features of the Advanced Plan, plus premium security monitoring, SEO tracking, and priority support. This plan is the best choice for businesses that need the highest level of service.",
    },
    features: [
      {
        name: "All features of the Advanced Plan",
        description:
          "This plan includes all the features of the Advanced Plan, providing comprehensive maintenance for your website.",
      },
      {
        name: "Weekly website backup",
        description:
          "For maximum data security, we'll create a backup of your website every week. This ensures your data is always secure.",
      },
      {
        name: "Premium security monitoring",
        description:
          "We'll provide comprehensive security monitoring for your website, ensuring the highest level of security for your data.",
      },
      {
        name: "SEO optimization and tracking",
        description:
          "We'll optimize your website for search engines and track its rankings. This helps improve visibility and monitor performance.",
      },
      {
        name: "Priority support",
        description:
          "You'll receive priority support for any issues or questions. This means faster response times and quicker resolutions.",
      },
    ],
  },
];
