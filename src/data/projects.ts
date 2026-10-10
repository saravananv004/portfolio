export interface ProjectScreenshot {
  url: string;
  caption: string;
  alt: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  filterCategory: "Full Stack" | "Data Analytics" | "Python and Security";
  shortDescription: string;
  fullDescription: string;
  problemStatement: string;
  goals?: string[];
  status: string;
  technologies: string[];
  features: string[];
  architectureDescription?: string;
  screenshots: ProjectScreenshot[];
  futureImprovements?: string[];
  metrics?: ProjectMetric[];
  githubUrl?: string; // empty string if not configured
  liveDemoUrl?: string; // empty string if not deployed
  featured: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "wholesale-ledger",
    slug: "wholesale-ledger",
    title: "Wholesale Ledger",
    category: "Full Stack Development | Business Management | Inventory and Ledger",
    filterCategory: "Full Stack",
    shortDescription:
      "A distribution and ledger management system for wholesale businesses. It helps manage products, stock, retailers, orders, payments, and retailer balances, with a public catalog where retailers can browse products and submit order requests.",
    fullDescription:
      "Wholesale Ledger is an end-to-end distribution and khata management application built specifically for wholesale merchants. It replaces fragmented paper notebooks and disconnected spreadsheets with a unified system coordinating product inventory, retailer accounts, order processing, and transaction settlements.",
    problemStatement:
      "Wholesale businesses need to manage inventory, retailer accounts, orders, payments, and outstanding balances. A disconnected workflow can make it difficult to track stock movements, identify retailer dues, and process incoming orders consistently. Wholesale Ledger is designed to centralize these operations in one application.",
    goals: [
      "Unify inventory tracking with real-time stock alert thresholds.",
      "Eliminate ledger discrepancies through atomic order and balance transactions.",
      "Provide public product browsing for retailers without requiring manual phone inquiries.",
      "Streamline payment reminders and accounts receivable reviews."
    ],
    status: "Local Development Project",
    technologies: [
      "React",
      "Vite",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "REST APIs",
      "JWT Authentication"
    ],
    features: [
      "Retailer Management: Add, edit, and delete retailer shops, view individual retailer ledgers, review account statements, and send WhatsApp payment reminders.",
      "Product & Stock Management: Manage product records, set prices in INR, track available stock quantities, and display products in the catalog with low-stock alerts.",
      "Order Management: Create retailer orders, update stock upon processing, and update the retailer balance in a single atomic transaction.",
      "Atomic Transaction Integrity: When an order is placed, the stock reduction, order record creation, and retailer balance update execute in a single database transaction — succeeding or failing together to prevent inconsistent ledgers.",
      "Payment Tracking: Record settlements against retailer balances and maintain transparent historical statements.",
      "Public Product Catalog: Allow retail store owners to browse the available inventory without needing administrative credentials.",
      "Order Request Pipeline: Enable retailers to submit digital purchase requests, allowing wholesale managers to review and confirm incoming orders.",
      "Secure Access: JWT-based administrative authentication guarding back-office inventory and financial records."
    ],
    architectureDescription:
      "The application separates client-side presentation and business logic into a modern decoupled architecture. The React + Vite frontend communicates with a high-performance FastAPI Python backend via REST APIs. Data persistence and ACID-compliant transaction consistency are maintained in PostgreSQL.",
    screenshots: [
      {
        url: "/images/projects/wholesale-ledger/screenshot-1.png",
        caption: "Inventory & Products Management view showing product entries with INR pricing, stock alerts, and quick actions to add or adjust stock levels.",
        alt: "Wholesale Ledger Products Management View"
      },
      {
        url: "/images/projects/wholesale-ledger/screenshot-2.png",
        caption: "Wholesale Ledger Dashboard view displaying key business metrics, low stock warnings, and top shops ranked by outstanding balance due.",
        alt: "Wholesale Ledger Dashboard View"
      },
      {
        url: "/images/projects/wholesale-ledger/screenshot-3.png",
        caption: "Authentication Portal featuring secure JWT sign-in to protect inventory records, order workflows, and retailer credit balances.",
        alt: "Wholesale Ledger Login View"
      }
    ],
    futureImprovements: [
      "Order cancellation and editing interface with automatic stock reversal",
      "Excel and PDF financial report exports for quarterly tax reconciliation",
      "Self-service password-change and profile management functionality",
      "Production deployment with managed PostgreSQL and automated backups"
    ],
    githubUrl: "", // Local development project - not yet hosted on a public repository
    liveDemoUrl: "", // Local development project - no public deployment exists
    featured: true
  },
  {
    id: "customer-churn-prediction",
    slug: "customer-churn-prediction",
    title: "Customer Churn Prediction — Telecom",
    category: "Data Analytics | Machine Learning",
    filterCategory: "Data Analytics",
    shortDescription:
      "A telecom customer churn analysis project focused on exploring customer data, identifying potential churn patterns, preparing features, and evaluating machine learning models to support customer-retention insights.",
    fullDescription:
      "An end-to-end data analytics and predictive modeling project that analyzes customer usage patterns, contract commitments, and support touchpoints to predict customer churn risk in the telecommunications industry. Model outputs and risk segmentations were translated into an interactive Power BI dashboard.",
    problemStatement:
      "Telecommunications providers experience revenue loss when customers cancel services. Identifying early indicators of churn enables retention teams to proactively intervene. This project investigates churn drivers and evaluates predictive classification models to prioritize high-risk customer accounts.",
    goals: [
      "Conduct in-depth exploratory data analysis to uncover primary churn triggers.",
      "Engineer predictive features and compare supervised machine learning models.",
      "Prioritize model recall to capture the maximum number of potential churners.",
      "Deliver actionable Power BI dashboards and SQL revenue-at-risk queries for retention teams."
    ],
    status: "Completed ML Pipeline & Dashboard",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "SQL",
      "Power BI"
    ],
    features: [
      "Data Cleaning & Feature Engineering: Handling missing charges, encoding contract types, payment methods, and calculating tenure bands.",
      "Exploratory Data Analysis: Statistical analysis revealing that month-to-month contract customers churn at 42.71% compared to 11.27% (1-year) and 2.83% (2-year).",
      "Model Comparison: Training and evaluating Logistic Regression and Random Forest classifiers on a held-out 20% test dataset.",
      "Recall Optimization: Selecting Logistic Regression for higher ROC-AUC (0.842) and recall (0.783) to catch 78% of actual churners for proactive outreach.",
      "SQL Analytics: Authored SQL scripts (churn_queries.sql) computing key performance indicators, customer segmentations, and total revenue at risk.",
      "Power BI Dashboard: Designed multi-page visual reports covering Executive KPIs, Customer Segmentation, Retention Actions, and Model Explainability."
    ],
    metrics: [
      { label: "Customer Dataset", value: "7,043", subtext: "Total customer records analyzed" },
      { label: "Baseline Churn Rate", value: "26.54%", subtext: "Observed population churn" },
      { label: "Top Model ROC-AUC", value: "0.842", subtext: "Logistic Regression benchmark" },
      { label: "Recall Rate", value: "78.3%", subtext: "Catches 78% of at-risk accounts" }
    ],
    screenshots: [
      {
        url: "/images/projects/telco-churn/01_executive_kpis.png",
        caption: "Power BI Executive KPIs view showing high-level churn metrics, monthly revenue at risk, and contract distribution.",
        alt: "Power BI Executive KPIs Dashboard"
      },
      {
        url: "/images/projects/telco-churn/02_segmentation.png",
        caption: "Power BI Customer Segmentation view breaking down churn patterns by service type, payment method, and tenure group.",
        alt: "Power BI Customer Segmentation View"
      },
      {
        url: "/images/projects/telco-churn/03_retention_actions.png",
        caption: "Retention Actions view surfacing prioritized customer cohorts with specific outreach recommendations.",
        alt: "Power BI Retention Actions View"
      },
      {
        url: "/images/projects/telco-churn/04_model_explainability.png",
        caption: "Model Explainability view illustrating top feature weights and churn probability distribution.",
        alt: "Power BI Model Explainability View"
      }
    ],
    futureImprovements: [
      "Real-time scoring API endpoint using FastAPI to evaluate live customer event streams",
      "A/B testing retention incentive campaigns based on predicted churn probabilities",
      "SHAP-based individual customer risk factor explanations directly in CRM views"
    ],
    githubUrl: "",
    liveDemoUrl: "",
    featured: false
  },
  {
    id: "secure-data-wiping-system",
    slug: "secure-data-wiping-system",
    title: "Secure Data Wiping System",
    category: "Python Development | Data Security",
    filterCategory: "Python and Security",
    shortDescription:
      "A project focused on secure data removal concepts and the development of a system intended to help manage data-wiping operations.",
    fullDescription:
      "A capstone data security application built in Python and Flask designed to manage reliable file sanitization. The system implements multi-pass overwrite routines using cryptographically generated byte sequences, enforces strict path safeguards, and generates auditable PDF verification certificates upon completion.",
    problemStatement:
      "Standard OS deletion commands simply unbind file pointers, leaving underlying storage sectors intact and recoverable. To ensure data privacy before hardware decommissioning or file retirement, a systematic overwriting mechanism is required to prevent forensic file restoration while safeguarding essential system files from accidental erasure.",
    goals: [
      "Implement configurable multi-pass file overwrite algorithms.",
      "Enforce path safety validations to prevent wiping operating system and root folders.",
      "Verify data eradication through post-wipe byte inspection.",
      "Generate automated compliance audit certificates in PDF format."
    ],
    status: "Completed Capstone Engine",
    technologies: [
      "Python",
      "Flask",
      "HTML5 / CSS3",
      "ReportLab",
      "Cryptographic PRNG",
      "OS File APIs"
    ],
    features: [
      "Configurable Multi-Pass Overwriting: Core engine supporting 3-pass and 7-pass overwrite cycles using cryptographic pseudo-random byte sequences (secrets.token_bytes) and direct disk flushes.",
      "Safety Boundary Validation: Built-in safety check (is_path_allowed) that halts execution if system paths (C:\\, Windows, Program Files, root) or overly broad root directories are targeted.",
      "Streamlined Zero-Length Handling: Special handling for zero-byte files to safely unbind without unneeded disk cycles.",
      "Post-Wipe Verification: Integrated verification module inspecting targeted file sectors to confirm irreversible content replacement.",
      "PDF Compliance Certificates: Automated report generation using ReportLab that creates timestamped certificates recording the job ID, file count, algorithm, and completion status.",
      "Activity Logging: Comprehensive audit trail tracking all operation parameters for verification reporting."
    ],
    futureImprovements: [
      "Support for whole-drive sanitization targeting block storage devices",
      "Hardware-level SSD TRIM command integration alongside magnetic disk overwrites",
      "Asynchronous wiping queue with live WebSocket progress bar updates"
    ],
    screenshots: [],
    githubUrl: "",
    liveDemoUrl: "",
    featured: false
  }
];
