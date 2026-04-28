export interface LegalSection {
  heading: string;
  content: string | string[];
  subSections?: { heading: string; content: string | string[] }[];
}

export interface LegalDocument {
  title: string;
  effectiveDate: string;
  version: string;
  intro: string;
  sections: LegalSection[];
}

export interface AppLegalDocs {
  privacyPolicy: LegalDocument;
  termsAndConditions: LegalDocument;
}

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOMER APP
// ─────────────────────────────────────────────────────────────────────────────

export const customerDocs: AppLegalDocs = {
  privacyPolicy: {
    title: "Customer Privacy Policy",
    effectiveDate: "April 26, 2026",
    version: "1.0",
    intro:
      "Welcome to Delito. We are committed to protecting your personal information and your right to privacy. This Customer Privacy Policy explains how Delito collects, uses, stores, and protects your data when you use our food delivery platform, mobile application, and related services. By creating an account or placing an order through Delito, you agree to the terms described in this policy.",
    sections: [
      {
        heading: "1. Information We Collect",
        content: [],
        subSections: [
          {
            heading: "1.1 Information You Provide Directly",
            content: [
              "Full name and profile photo",
              "Email address and mobile phone number",
              "Delivery addresses and location preferences",
              "Payment details (processed securely via third-party payment gateways)",
              "Order history, special instructions, and food preferences",
              "Ratings, reviews, and feedback submitted on the platform",
              "Customer support communications and chat history",
            ],
          },
          {
            heading: "1.2 Information Collected Automatically",
            content: [
              "Device information: device type, operating system, browser type, and unique device identifiers",
              "IP address, network type, and connection details",
              "App usage data: pages visited, features used, time spent, and click patterns",
              "GPS and location data (only when you actively use the app and with your permission)",
              "Cookies and similar tracking technologies for session management and personalization",
              "Crash reports and performance diagnostics",
            ],
          },
          {
            heading: "1.3 Information from Third Parties",
            content: [
              "Login data if you sign in using Google, Facebook, or Apple ID",
              "Payment verification and fraud detection data from payment processors",
              "Promotional data from marketing partners (only with your opt-in consent)",
            ],
          },
        ],
      },
      {
        heading: "2. How We Use Your Information",
        content: [
          "Process, confirm, and deliver your food orders accurately and on time",
          "Verify your identity and maintain the security of your account",
          "Enable real-time order tracking and delivery updates via SMS and push notifications",
          "Personalize your experience, including restaurant recommendations and offers",
          "Process payments, apply discounts, and manage refunds or cancellations",
          "Communicate important updates, service alerts, and policy changes",
          "Analyse usage patterns to improve app performance and user experience",
          "Comply with applicable legal obligations and regulatory requirements",
          "Detect, investigate, and prevent fraudulent or unauthorized activity",
          "Send you promotional offers and marketing communications (only with your consent)",
        ],
      },
      {
        heading: "3. Legal Basis for Processing",
        content: [
          "Contractual necessity: To fulfil your orders and deliver our services",
          "Legitimate interests: To improve our platform, ensure security, and prevent fraud",
          "Consent: For marketing communications and non-essential cookies",
          "Legal obligation: To comply with applicable laws and regulations",
        ],
      },
      {
        heading: "4. Sharing of Your Information",
        content: "Delito does not sell your personal data to third parties. We share your information only in the following circumstances:",
        subSections: [
          {
            heading: "4.1 With Delivery Partners",
            content:
              "We share your name, delivery address, phone number, and order details with assigned delivery personnel to fulfill your order. Delivery partners are bound by confidentiality obligations and are not permitted to use your data for any other purpose.",
          },
          {
            heading: "4.2 With Restaurant Vendors",
            content:
              "We share your order details and any special food instructions with the restaurant preparing your order. Your contact information is shared only when necessary for order fulfillment.",
          },
          {
            heading: "4.3 With Service Providers",
            content:
              "We engage trusted third-party providers for payment processing, SMS delivery, cloud storage, analytics, and customer support. These partners process data only as instructed by Delito and under strict data protection agreements.",
          },
          {
            heading: "4.4 For Legal Compliance",
            content:
              "We may disclose your information to law enforcement, regulatory authorities, or courts when required by law, legal process, or to protect the rights, property, or safety of Delito, its users, or the public.",
          },
        ],
      },
      {
        heading: "5. Data Storage and Security",
        content: [
          "Your data is stored on secure servers hosted on Google Firebase (Google Cloud Platform), which maintains ISO 27001 and SOC 2 certifications.",
          "We employ AES-256 encryption for data at rest and TLS 1.3 for data in transit.",
          "Access to personal data is restricted to authorised personnel only.",
          "We conduct regular security audits and vulnerability assessments.",
          "Despite these measures, no data transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.",
        ],
      },
      {
        heading: "6. Your Rights Under the DPDP Act, 2023",
        content: [
          "Right to Access: Request a copy of your personal data we hold.",
          "Right to Correction: Update or correct inaccurate personal data through the app or by contacting support.",
          "Right to Erasure: Request deletion of your account and personal data (subject to legal retention requirements).",
          "Right to Withdraw Consent: Withdraw consent for marketing communications at any time.",
          "Right to Grievance Redressal: Contact our Grievance Officer for any data-related concerns.",
          "Right to Nominate: Nominate another person to exercise your rights in case of incapacity.",
        ],
      },
      {
        heading: "7. Data Retention",
        content: [
          "We retain your personal data for as long as your account remains active or as needed to provide services.",
          "Order history and transaction records are retained as required under the GST Act and Income Tax Act (up to 8 years for financial records).",
          "After account deletion, identifiable data is removed within 30 days, subject to legal retention obligations.",
        ],
      },
      {
        heading: "8. Children's Privacy",
        content: [
          "The Platform is not intended for children under 18 years of age without parental supervision.",
          "We do not knowingly collect personal data from children under 18 without verifiable parental consent as required by the DPDP Act, 2023.",
          "If we learn that we have collected data from a child without proper consent, we will delete it promptly.",
        ],
      },
      {
        heading: "9. Changes to This Policy",
        content:
          "We may update this Privacy Policy from time to time. Changes will be notified through the app or by email for material changes. Continued use of the Platform after updates constitutes acceptance of the revised policy.",
      },
      {
        heading: "10. Contact Us",
        content: [
          "Grievance Officer: Deepanshu Verma",
          "Designation: Proprietor, Delito",
          "Email: grievance@delito.in",
          "Support Email: Delitosupportt@gmail.com",
          "Hours: Monday to Saturday, 10:00 AM – 6:00 PM",
          "Address: Gali No-01 Verma Colony, Hathras, Uttar Pradesh – 204101, India",
        ],
      },
    ],
  },

  termsAndConditions: {
    title: "Customer Terms & Conditions",
    effectiveDate: "April 26, 2026",
    version: "1.0",
    intro:
      "These Terms and Conditions ('Terms') govern your access to and use of the Delito food delivery platform, mobile application, and related services ('Platform'). By creating an account or placing an order, you agree to be bound by these Terms. Please read them carefully.",
    sections: [
      {
        heading: "1. About Delito & Acceptance of Terms",
        content: [
          "DEEPANSHU VERMA, a sole proprietor carrying on business under the trade name DELITO, having principal place of business at Gali No-01 Verma Colony, Hathras, Uttar Pradesh, India.",
          "By downloading the Delito app, visiting our website, creating an account, placing an order, or using our platform in any manner, you agree to be fully bound by these Terms.",
          "These Terms form a legally binding electronic contract under the Indian Contract Act, 1872 and the Information Technology Act, 2000.",
        ],
      },
      {
        heading: "2. Eligibility & Account Registration",
        content: [
          "You must be at least 18 years of age and legally competent to enter into contracts under Indian law to use this Platform independently.",
          "Users below 18 years may use the Platform only under active supervision with the explicit consent of a parent or legal guardian.",
          "You are responsible for providing accurate, complete, and current registration information.",
          "Your account is personal. Sharing your account with another person or allowing third-party access is strictly prohibited.",
          "You are fully responsible for all activity that occurs under your account.",
        ],
      },
      {
        heading: "3. Orders & Order Placement",
        content: [],
        subSections: [
          {
            heading: "3.1 Placing Orders",
            content: [
              "When you place an order on Delito, you are entering into a direct purchase agreement with the Restaurant Partner for the food items ordered.",
              "Delito acts solely as an intermediary platform facilitating the connection between customers, restaurant partners, and delivery personnel.",
              "All orders are subject to acceptance and availability. Delito and restaurant partners reserve the right to cancel orders due to unavailability of items, operational issues, or force majeure events.",
              "You are responsible for ensuring that all order details, including delivery address, special instructions, and dietary preferences, are accurate before confirming the order.",
            ],
          },
          {
            heading: "3.2 Order Modifications & Cancellations",
            content: [
              "Once an order is confirmed and accepted by the restaurant, modifications are not guaranteed and are subject to the restaurant's discretion.",
              "You may cancel an order within 2 minutes of placement without incurring a cancellation fee, provided the restaurant has not yet begun preparation.",
              "Cancellations after preparation has begun will not be eligible for a full refund. A partial refund may be issued at Delito's discretion.",
              "Repeated cancellations may result in account suspension or restrictions on placing future orders.",
            ],
          },
          {
            heading: "3.3 Order Accuracy & Quality",
            content: [
              "Delito is not responsible for the quality, taste, ingredients, allergens, or nutritional content of food items prepared by restaurant partners.",
              "In the event of a missing item, incorrect item, or quality concern, you must report the issue within 24 hours of delivery through the app's Help section.",
              "Delito will investigate the complaint and may issue a refund or Delito credits at its sole discretion.",
            ],
          },
        ],
      },
      {
        heading: "4. Pricing, Payments & Charges",
        content: [],
        subSections: [
          {
            heading: "4.1 Pricing",
            content: [
              "All prices displayed on the Platform are in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise.",
              "Prices are set by restaurant partners and are subject to change without prior notice.",
              "Delito may charge a platform fee, delivery fee, surge pricing, or other applicable charges, shown clearly at checkout.",
            ],
          },
          {
            heading: "4.2 Payments",
            content: [
              "Payments are processed through third-party payment gateways including Razorpay. Delito does not store your raw card or bank details.",
              "Card data is tokenized as per Reserve Bank of India (RBI) tokenization directions.",
              "By completing payment, you authorize the charge of the displayed amount.",
            ],
          },
        ],
      },
      {
        heading: "5. Delivery",
        content: [
          "Delivery is performed by independent Delivery Partners. Delivery times are estimates and may vary due to traffic, weather, or preparation delays.",
          "You must provide a complete and correct delivery address. If you are unreachable at the time of delivery, the Order may be cancelled without a refund.",
          "Risk in the Order passes to you upon successful handover at the delivery address.",
        ],
      },
      {
        heading: "6. Cancellation & Refunds",
        content: [
          "You may cancel an Order only before the Vendor has started preparation.",
          "Refunds are processed to the original payment instrument within 3–7 business days of approval.",
          "Eligible refunds may be full, partial, or issued as Delito credits, at Delito's discretion.",
          "Refund requests that are frivolous, repetitive, or unsubstantiated may be rejected.",
        ],
      },
      {
        heading: "7. Coins & Promotional Offers",
        content: [
          "Delito may issue Coins as promotional loyalty credits. The standard rate is 10 Coins = INR 1.",
          "Coins are NOT cash, NOT a bank deposit, and NOT legal tender. They have no monetary value outside the Platform.",
          "Coins can only be redeemed on a future eligible Order. Minimum redemption is 100 Coins per Order.",
          "Coins cannot be transferred, gifted, or exchanged for cash under any circumstances.",
          "The total outstanding Coins balance per user shall not exceed INR 500 in equivalent value at any time.",
        ],
      },
      {
        heading: "8. User Obligations & Prohibited Conduct",
        content: [
          "You agree to use the Platform only for lawful purposes and in good faith.",
          "You must NOT: create fake accounts, submit false complaints or reviews, attempt to hack the Platform, post defamatory or obscene content, impersonate any person, or harass Delito staff, Vendors, or Delivery Partners.",
          "Any serious or repeated breach may result in immediate account suspension, termination, and reporting to law enforcement.",
        ],
      },
      {
        heading: "9. Limitation of Liability",
        content: [
          "Delito's total liability for any claim shall not exceed the amount you paid for the specific Order that gave rise to the claim.",
          "Delito shall not be liable for indirect, incidental, consequential, or punitive damages.",
          "Delito is not liable for acts or omissions of Vendors, Delivery Partners, or payment gateways.",
        ],
      },
      {
        heading: "10. Grievance Redressal",
        content: [
          "Grievance Officer: Deepanshu Verma, Proprietor",
          "Email: grievance@delito.in | Support: Delitosupportt@gmail.com",
          "Hours: Monday to Saturday, 10:00 AM – 6:00 PM",
          "Complaints acknowledged within 48 hours, resolved within 30 days.",
        ],
      },
      {
        heading: "11. Governing Law",
        content:
          "These Terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts at Hathras, Uttar Pradesh, India.",
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// VENDOR APP
// ─────────────────────────────────────────────────────────────────────────────

export const vendorDocs: AppLegalDocs = {
  privacyPolicy: {
    title: "Vendor / Restaurant Partner Privacy Policy",
    effectiveDate: "April 26, 2026",
    version: "1.0",
    intro:
      "This Vendor Privacy Policy applies to all restaurant owners, food businesses, and kitchen partners (collectively 'Vendors' or 'Partners') who register on the Delito platform to list their menus, receive orders, and process deliveries. By registering as a Vendor on Delito, you agree to the collection and use of your information as described in this policy.",
    sections: [
      {
        heading: "1. Information We Collect from Vendors",
        content: [],
        subSections: [
          {
            heading: "1.1 Business Registration Information",
            content: [
              "Restaurant or business name, type of cuisine, and description",
              "FSSAI license number and certificate",
              "GST registration number (if applicable) and PAN details",
              "Physical restaurant address and operating hours",
              "Business email address and official contact number",
              "Bank account details for payment settlements",
              "Restaurant photographs and menu images",
            ],
          },
          {
            heading: "1.2 Owner / Authorized Representative Information",
            content: [
              "Full legal name and designation",
              "Personal contact number and email address",
              "Government-issued identity proof (Aadhaar, PAN, or Passport)",
              "Digital signature for agreement execution",
            ],
          },
          {
            heading: "1.3 Operational Data",
            content: [
              "Order history, acceptance rates, and cancellation records",
              "Menu updates, pricing changes, and promotional offers",
              "Customer ratings, reviews, and complaint records",
              "Preparation times and order fulfillment performance metrics",
              "Platform login activity and dashboard usage data",
            ],
          },
        ],
      },
      {
        heading: "2. How We Use Vendor Information",
        content: [
          "To verify your identity and business credentials before onboarding",
          "To create and maintain your restaurant profile on the Delito platform",
          "To process and route customer orders to your establishment accurately",
          "To calculate, process, and transfer payment settlements to your bank account",
          "To generate and share performance reports, analytics, and business insights",
          "To communicate order notifications, platform updates, and policy changes",
          "To investigate complaints, resolve disputes, and ensure quality standards",
          "To comply with food safety regulations, tax laws, and other legal obligations",
          "To detect and prevent fraudulent activity on the platform",
        ],
      },
      {
        heading: "3. Display of Vendor Information",
        content: [
          "The following information will be publicly visible to customers: Restaurant name, logo, and photographs; Cuisine type, menu items, descriptions, and prices; Average customer ratings; Operating hours and estimated preparation times; General location for delivery radius.",
          "We will NOT display your personal contact number, bank details, or government ID information to customers under any circumstances.",
        ],
      },
      {
        heading: "4. Payment & Financial Data",
        content: [
          "All banking and financial data is encrypted and stored using bank-grade security protocols.",
          "Financial data is shared only with payment processing partners for settlement transfers, auditors for financial compliance, and government tax authorities when legally required.",
          "Delito does not store your complete bank account credentials on our servers. Payment data is handled through PCI-DSS compliant third-party processors.",
        ],
      },
      {
        heading: "5. Data Sharing with Third Parties",
        content: [
          "With delivery partners: Order details and pickup address are shared for delivery fulfillment.",
          "With technology providers: Cloud hosting, analytics, and communication platform providers under strict confidentiality agreements.",
          "With regulatory bodies: FSSAI, GST authorities, or other government bodies as required by law.",
          "With legal authorities: In response to valid legal orders or government investigations.",
          "Delito does not sell vendor data to marketing agencies, competitors, or any unauthorized third parties.",
        ],
      },
      {
        heading: "6. Vendor Responsibilities",
        content: [
          "You are responsible for ensuring that all information you provide to Delito is accurate, complete, and kept up to date.",
          "You must notify Delito immediately of any changes in business ownership, FSSAI license, GST registration, or bank account details.",
          "You must protect your login credentials and not share access with unauthorized personnel.",
        ],
      },
      {
        heading: "7. Data Retention",
        content: [
          "Vendor data is retained for the duration of the partnership and for a minimum of 7 years thereafter for tax and legal compliance purposes.",
          "Upon termination of the partnership, your public profile is removed, and personal data is deleted in accordance with applicable law.",
        ],
      },
      {
        heading: "8. Your Rights Under the DPDP Act, 2023",
        content: [
          "Right to Access: Request a copy of personal data we hold about you or your authorized representative.",
          "Right to Correction: Update inaccurate or incomplete data through the Vendor Dashboard or by contacting support.",
          "Right to Erasure: Request deletion of personal data (subject to legal retention requirements).",
          "Right to Grievance Redressal: Raise concerns with our Grievance Officer.",
        ],
      },
      {
        heading: "9. Contact Us",
        content: [
          "Grievance Officer: Deepanshu Verma, Proprietor",
          "Email: grievance@delito.in",
          "Support: Delitosupportt@gmail.com",
          "Hours: Monday to Saturday, 10:00 AM – 6:00 PM",
          "Address: Gali No-01 Verma Colony, Hathras, Uttar Pradesh – 204101, India",
        ],
      },
    ],
  },

  termsAndConditions: {
    title: "Vendor / Restaurant Partner Terms & Conditions",
    effectiveDate: "April 26, 2026",
    version: "1.0",
    intro:
      "These Vendor Terms and Conditions ('Agreement') constitute a legally binding contract between Delito ('Platform') and the restaurant owner, food business, or cloud kitchen ('Vendor') registering to list, sell, and fulfill food orders through the Delito platform. By completing the vendor onboarding process or commencing operations on the Platform, you agree to be bound by this Agreement in its entirety.",
    sections: [
      {
        heading: "1. Vendor Eligibility & Onboarding",
        content: [
          "The Vendor must hold a valid and current FSSAI (Food Safety and Standards Authority of India) license applicable to its business type.",
          "If registered under applicable GST regulations, the Vendor must provide a valid GSTIN at the time of onboarding.",
          "The Vendor must operate from a fixed, verifiable premises and provide accurate business address details.",
          "Delito reserves the right to conduct physical or digital inspections and background checks as part of the onboarding process.",
          "Onboarding is subject to Delito's sole approval and does not create any obligation on Delito to accept or continue the partnership.",
          "Vendors must update Delito immediately if there is any change in ownership, business structure, licenses, or regulatory status.",
        ],
      },
      {
        heading: "2. Menu, Pricing & Listing Standards",
        content: [],
        subSections: [
          {
            heading: "2.1 Menu Management",
            content: [
              "Vendors are solely responsible for the accuracy, completeness, and legality of all menu items, descriptions, images, and prices listed on the Platform.",
              "All food items must comply with FSSAI food safety and labeling standards, including allergen disclosures where applicable.",
              "Menu images must be authentic representations of the actual dishes prepared. Use of misleading or stock images is strictly prohibited.",
              "Vendors must clearly mark vegetarian and non-vegetarian items in accordance with FSSAI regulations.",
            ],
          },
          {
            heading: "2.2 Pricing",
            content: [
              "Vendors may set their own menu prices and are responsible for ensuring prices displayed on Delito are inclusive of all applicable taxes (GST).",
              "Vendors may not offer prices on the Delito Platform that are higher than the prices offered through any other channel for the same items.",
              "Pricing changes must be updated in the Vendor Dashboard and will reflect on the Platform within the system's standard processing time.",
            ],
          },
        ],
      },
      {
        heading: "3. Order Fulfillment Obligations",
        content: [
          "Upon receiving a customer order, the Vendor must accept or reject the order promptly within the time window specified in the Vendor Dashboard.",
          "All orders must be prepared using the ingredients and methods reflected in the menu listing. Unauthorized substitution of ingredients is not permitted.",
          "Orders must be packaged in hygienic, tamper-evident packaging appropriate for food delivery.",
          "Vendors must have orders ready for pickup by the delivery partner within the preparation time stated at the time of order acceptance.",
          "In the event of a stock-out or inability to fulfill an order after acceptance, the Vendor must notify Delito operations immediately.",
        ],
      },
      {
        heading: "4. Food Safety & Hygiene Standards",
        content: [
          "Vendors must at all times comply with the Food Safety and Standards Act, 2006, and all regulations and guidelines issued by FSSAI.",
          "Vendors must maintain clean, hygienic, and pest-free kitchen premises.",
          "All food handlers must maintain personal hygiene and wear appropriate protective gear.",
          "Vendors are solely responsible for any food-borne illness or health issues arising from the food they prepare.",
        ],
      },
      {
        heading: "5. Payments & Settlement",
        content: [
          "Delito will remit to the Vendor the applicable settlement amount after deducting the agreed platform commission, delivery charges (if applicable), and any applicable taxes.",
          "Settlements are processed on a weekly basis to the Vendor's registered bank account.",
          "Delito may withhold settlements in cases of suspected fraud, unresolved customer complaints, or regulatory investigations.",
          "The applicable commission rate is as communicated in the Vendor Agreement or Vendor Dashboard.",
        ],
      },
      {
        heading: "6. Customer Complaints & Refunds",
        content: [
          "In the event of a customer complaint relating to food quality, wrong items, or missing items, Delito may initiate a refund or credit to the customer.",
          "Delito may recover the value of such refunds from the Vendor's future settlements if the complaint is found to be valid.",
          "Vendors must cooperate fully with Delito's investigation of customer complaints.",
        ],
      },
      {
        heading: "7. Platform Conduct & Restrictions",
        content: [
          "Vendors must not offer or promote any items that are illegal, banned, or require special licenses not held by the Vendor.",
          "Vendors must not attempt to redirect customers to place orders outside the Delito Platform.",
          "Vendors must not misuse customer data shared by Delito for order fulfillment.",
          "Repeated violations of Platform standards may result in reduced visibility, suspension, or permanent removal from the Platform.",
        ],
      },
      {
        heading: "8. Limitation of Liability",
        content: [
          "Delito's liability to the Vendor is limited to the settlement amount owed for the relevant period.",
          "Delito shall not be liable for loss of revenue, goodwill, or indirect damages arising from Platform downtime, technical issues, or changes to Platform policies.",
        ],
      },
      {
        heading: "9. Termination",
        content: [
          "Either party may terminate this Agreement with 30 days' written notice.",
          "Delito may terminate this Agreement immediately in cases of fraudulent activity, repeated non-compliance, FSSAI license suspension, or material breach.",
          "Upon termination, all pending settlements will be processed after deducting any amounts owed to Delito.",
        ],
      },
      {
        heading: "10. Governing Law",
        content:
          "This Agreement is governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts at Hathras, Uttar Pradesh, India.",
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// DELIVERY PARTNER APP
// ─────────────────────────────────────────────────────────────────────────────

export const deliveryDocs: AppLegalDocs = {
  privacyPolicy: {
    title: "Delivery Partner Privacy Policy",
    effectiveDate: "April 26, 2026",
    version: "1.0",
    intro:
      "This Delivery Partner Privacy Policy governs the collection, use, and protection of personal and professional data belonging to all individuals who work as delivery partners (also referred to as 'Delivery Executives', 'Riders', or 'Delivery Personnel') on the Delito platform. By registering as a Delivery Partner with Delito, you consent to the collection and use of your information as described in this policy.",
    sections: [
      {
        heading: "1. Information We Collect from Delivery Partners",
        content: [],
        subSections: [
          {
            heading: "1.1 Personal & Identity Information",
            content: [
              "Full legal name, date of birth, and gender",
              "Residential address and emergency contact details",
              "Profile photograph",
              "Government-issued photo identity proof (Aadhaar Card, PAN Card, Voter ID, or Passport)",
              "Driving License number and expiry date",
            ],
          },
          {
            heading: "1.2 Vehicle & Professional Information",
            content: [
              "Vehicle type, make, model, year, and registration number",
              "Vehicle registration certificate (RC) and insurance documents",
              "Bank account number and IFSC code for earnings transfer",
              "GST details if applicable",
              "PAN card details",
            ],
          },
          {
            heading: "1.3 Operational & Performance Data",
            content: [
              "Real-time GPS location and movement data while on active delivery duty",
              "Delivery history including order IDs, pickup locations, drop-off addresses, and timestamps",
              "Delivery completion rate, cancellation rate, and on-time performance metrics",
              "Customer ratings and feedback received after deliveries",
              "Distance traveled, active hours, and earnings data",
              "App login activity and usage patterns",
            ],
          },
          {
            heading: "1.4 Communication Data",
            content: [
              "Call logs and chat records with customers and vendor partners through the Delito platform",
              "Support tickets and communications with the Delito operations team",
            ],
          },
        ],
      },
      {
        heading: "2. How We Use Delivery Partner Data",
        content: [
          "To verify your identity, driving credentials, and vehicle documentation before onboarding",
          "To assign delivery orders based on your proximity, availability, and performance history",
          "To track deliveries in real time and provide accurate ETAs to customers",
          "To calculate, process, and transfer your earnings to your registered bank account",
          "To share relevant order information (pickup address, drop-off address, customer contact) for delivery fulfillment",
          "To monitor delivery performance, quality of service, and compliance with platform guidelines",
          "To send earnings statements, order notifications, and platform communications",
          "To investigate accidents, customer complaints, or disputes involving your deliveries",
          "To detect and prevent fraud, identity misuse, or unauthorized account access",
        ],
      },
      {
        heading: "3. Location Data — Important Notice",
        content: [
          "Delito collects your GPS location data while you are on active delivery duty exclusively for: matching you with nearby orders, providing real-time tracking to customers and vendors, calculating delivery distances, and ensuring your safety.",
          "Location tracking is active only when you log into the Delivery Partner app and mark yourself as 'Available'.",
          "Location tracking is paused when you go 'Offline' within the app.",
          "We do not track your location outside of active duty hours.",
        ],
      },
      {
        heading: "4. Sharing of Delivery Partner Information",
        content: [],
        subSections: [
          {
            heading: "4.1 With Customers",
            content:
              "When you are assigned a delivery, customers will see your first name, profile photo, vehicle type, and real-time location on the order tracking screen. Your phone number may be shared for in-app calling, masked through a proxy number to protect your privacy.",
          },
          {
            heading: "4.2 With Vendors",
            content:
              "Vendors will see your name and photo when you arrive at their restaurant for order pickup. No other personal information is shared with vendors.",
          },
          {
            heading: "4.3 With Service Providers",
            content:
              "We share data with technology partners for payment processing, cloud storage, background verification, and communication services. All partners are contractually bound to maintain confidentiality.",
          },
          {
            heading: "4.4 With Legal Authorities",
            content:
              "We may disclose your information to law enforcement or regulatory authorities in response to valid legal orders, court orders, or government investigations.",
          },
        ],
      },
      {
        heading: "5. Data Retention",
        content: [
          "Your delivery partner profile and operational data is retained for the duration of your engagement and for 7 years after termination for legal and tax compliance.",
          "Earnings records are retained as required under the Income Tax Act.",
          "Location data is retained for 90 days from the date of the delivery for dispute resolution purposes.",
        ],
      },
      {
        heading: "6. Your Rights Under the DPDP Act, 2023",
        content: [
          "Right to Access: Request a summary of personal data we hold about you.",
          "Right to Correction: Update inaccurate data through the app or by contacting support.",
          "Right to Erasure: Request deletion of personal data after disengagement (subject to legal retention requirements).",
          "Right to Grievance Redressal: Raise concerns with our Grievance Officer.",
        ],
      },
      {
        heading: "7. Contact Us",
        content: [
          "Grievance Officer: Deepanshu Verma, Proprietor",
          "Email: grievance@delito.in",
          "Support: Delitosupportt@gmail.com",
          "Hours: Monday to Saturday, 10:00 AM – 6:00 PM",
          "Address: Gali No-01 Verma Colony, Hathras, Uttar Pradesh – 204101, India",
        ],
      },
    ],
  },

  termsAndConditions: {
    title: "Delivery Partner Terms & Conditions",
    effectiveDate: "April 26, 2026",
    version: "1.0",
    intro:
      "These Delivery Partner Terms and Conditions ('Agreement') govern the engagement between Delito ('Platform') and individuals who register to provide delivery services through the Delito platform ('Delivery Partner', 'Rider'). By registering as a Delivery Partner or commencing deliveries through the Delito app, you agree to be legally bound by this Agreement.",
    sections: [
      {
        heading: "1. Eligibility Requirements",
        content: [
          "You must be at least 18 years of age to register as a Delivery Partner.",
          "You must hold a valid motor vehicle driving license appropriate for the vehicle you intend to use for deliveries.",
          "Your vehicle must be registered, insured (minimum third-party insurance as required by the Motor Vehicles Act, 1988), and in a roadworthy condition with a valid Pollution Under Control (PUC) certificate.",
          "You must provide valid government-issued identity proof (Aadhaar Card, PAN Card, Voter ID, or Passport) and a valid bank account for earnings transfer.",
          "You must own or have lawful possession of the vehicle used for deliveries.",
          "Delito reserves the right to refuse or revoke registration at any time if eligibility requirements are not met or maintained.",
        ],
      },
      {
        heading: "2. Nature of Engagement",
        content: [
          "You acknowledge and agree that your engagement with Delito is that of an independent contractor or service provider, not an employee, agent, or partner of Delito.",
          "Delito does not guarantee a minimum number of delivery assignments, hours of work, or earnings.",
          "As an independent contractor, you are solely responsible for payment of applicable taxes on your earnings.",
          "You retain the freedom to accept or decline delivery assignments and to work flexible hours.",
          "This Agreement does not create any employment relationship, and you are not entitled to any employee benefits, provident fund, gratuity, or other statutory employment entitlements from Delito.",
        ],
      },
      {
        heading: "3. Onboarding & Verification",
        content: [
          "Registration requires submission of all requested documents, including identity proof, driving license, vehicle registration certificate (RC), vehicle insurance, and PUC certificate.",
          "Delito will conduct identity and credential checks prior to activation. Submission of false or forged documents is a criminal offense and will result in immediate rejection and legal action.",
          "Delito may require periodic re-verification of your credentials and vehicle documents.",
          "Activation is at Delito's sole discretion and is subject to availability of delivery zones in your area.",
        ],
      },
      {
        heading: "4. Delivery Operations & Standards",
        content: [],
        subSections: [
          {
            heading: "4.1 Accepting & Completing Orders",
            content: [
              "Upon receiving a delivery assignment, you must confirm acceptance promptly within the time window displayed in the app.",
              "You must proceed to the restaurant for pickup and deliver the order to the customer's designated address within the estimated delivery time.",
              "You must verify the order details and packaging at pickup. If packaging is damaged or tampered with, you must report it immediately through the app.",
              "You must hand over the order directly to the customer or an authorized recipient. Leaving orders unattended without customer confirmation is not permitted.",
            ],
          },
          {
            heading: "4.2 Order Integrity",
            content: [
              "You must not open, tamper with, consume, or damage any order in your possession at any time.",
              "You must not accept cash payments from customers unless the order has been designated as Cash on Delivery (COD) in the app.",
              "For COD orders, you must collect the exact amount specified in the app and remit it to Delito as per the settlement schedule.",
            ],
          },
        ],
      },
      {
        heading: "5. Earnings & Payments",
        content: [
          "Your earnings will be calculated based on the number of completed deliveries, distance traveled, and any applicable incentives or bonuses.",
          "Earnings are settled weekly to your registered bank account after deducting any applicable platform fees.",
          "A detailed earnings breakdown will be available in the Delivery Partner app.",
          "Delito may withhold earnings in cases of suspected fraud, policy violations, or unresolved complaints.",
        ],
      },
      {
        heading: "6. Conduct & Safety",
        content: [
          "You must comply with all applicable traffic laws and road safety regulations at all times.",
          "You must wear a helmet (for two-wheelers) and carry all required vehicle documents during deliveries.",
          "You must treat customers, restaurant staff, and Delito personnel with respect and professionalism.",
          "You must not engage in any conduct that could bring Delito into disrepute.",
          "You are solely responsible for any accidents, traffic violations, or legal incidents during your deliveries.",
        ],
      },
      {
        heading: "7. Suspension & Termination",
        content: [
          "Delito may suspend your account if you repeatedly fail to maintain delivery standards, receive multiple customer complaints, or violate any provisions of this Agreement.",
          "Delito may immediately terminate this Agreement in cases of fraud, document forgery, criminal conduct, or serious safety violations.",
          "You may deactivate your account at any time through the app.",
        ],
      },
      {
        heading: "8. Limitation of Liability",
        content: [
          "Delito shall not be liable for any accidents, injuries, or losses you incur during deliveries.",
          "You are solely responsible for maintaining adequate insurance coverage for yourself and your vehicle.",
          "Delito's liability to you is limited to the earnings owed for completed deliveries.",
        ],
      },
      {
        heading: "9. Governing Law",
        content:
          "This Agreement is governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts at Hathras, Uttar Pradesh, India.",
      },
    ],
  },
};

