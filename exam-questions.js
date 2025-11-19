const examQuestions = [
    // Cloud Concepts (24% of exam = ~16 questions)
    {
        id: 1,
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "Which of the following are advantages of cloud computing? (Select TWO)",
        type: "multiple-response",
        options: [
            "Trade capital expense for variable expense",
            "Maintain physical servers in your own data center",
            "Benefit from massive economies of scale",
            "Spend money running and maintaining data centers",
            "Limited global reach"
        ],
        correctAnswers: [0, 2],
        explanation: "Cloud computing allows you to trade capital expense (purchasing servers) for variable expense (pay as you go). AWS's massive scale allows customers to benefit from economies of scale through lower prices."
    },
    {
        id: 2,
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "Which cloud deployment model allows a company to maintain some servers on-premises while using cloud services?",
        type: "single-choice",
        options: [
            "Public cloud",
            "Private cloud",
            "Hybrid cloud",
            "Community cloud"
        ],
        correctAnswers: [2],
        explanation: "Hybrid cloud is a combination of public cloud (AWS) and private cloud (on-premises infrastructure), allowing companies to keep sensitive data on-premises while leveraging cloud scalability."
    },
    {
        id: 3,
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "What is the ability to acquire resources as you need them and release resources when you no longer need them called?",
        type: "single-choice",
        options: [
            "High availability",
            "Elasticity",
            "Durability",
            "Agility"
        ],
        correctAnswers: [1],
        explanation: "Elasticity is the ability to automatically scale resources up or down based on demand, acquiring resources when needed and releasing them when not needed."
    },
    {
        id: 4,
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "Which pillar of the AWS Well-Architected Framework focuses on the ability to recover from failures and meet demand?",
        type: "single-choice",
        options: [
            "Performance Efficiency",
            "Reliability",
            "Operational Excellence",
            "Cost Optimization"
        ],
        correctAnswers: [1],
        explanation: "The Reliability pillar focuses on ensuring workloads perform their intended functions correctly and consistently, including the ability to recover quickly from failures to meet demand."
    },
    {
        id: 5,
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "Which AWS Cloud Adoption Framework (CAF) perspective focuses on minimizing business disruption during cloud migration?",
        type: "single-choice",
        options: [
            "Business Perspective",
            "Platform Perspective",
            "Security Perspective",
            "Operations Perspective"
        ],
        correctAnswers: [0],
        explanation: "The Business Perspective helps IT finance, business analysts, and business owners ensure cloud investments accelerate digital transformation ambitions and business outcomes."
    },

    // Security and Compliance (30% of exam = ~20 questions)
    {
        id: 6,
        category: "security",
        categoryName: "Security & Compliance",
        question: "According to the AWS Shared Responsibility Model, which of the following is AWS responsible for? (Select TWO)",
        type: "multiple-response",
        options: [
            "Physical security of data centers",
            "Encryption of data at rest",
            "Hardware and infrastructure maintenance",
            "Security group configuration",
            "IAM user permissions"
        ],
        correctAnswers: [0, 2],
        explanation: "AWS is responsible for security OF the cloud, including physical security of data centers and hardware/infrastructure maintenance. Customers are responsible for security IN the cloud."
    },
    {
        id: 7,
        category: "security",
        categoryName: "Security & Compliance",
        question: "Which AWS service helps protect web applications from common web exploits like SQL injection and cross-site scripting?",
        type: "single-choice",
        options: [
            "AWS Shield",
            "AWS WAF",
            "Amazon GuardDuty",
            "AWS Inspector"
        ],
        correctAnswers: [1],
        explanation: "AWS WAF (Web Application Firewall) protects web applications from common web exploits. You can create custom rules to filter web traffic based on conditions like SQL injection and XSS."
    },
    {
        id: 8,
        category: "security",
        categoryName: "Security & Compliance",
        question: "What is the AWS service that provides on-demand access to AWS security and compliance reports?",
        type: "single-choice",
        options: [
            "AWS Config",
            "AWS Artifact",
            "AWS CloudTrail",
            "AWS Trusted Advisor"
        ],
        correctAnswers: [1],
        explanation: "AWS Artifact is a self-service portal for on-demand access to AWS compliance reports and security documents such as SOC reports, PCI reports, and certifications."
    },
    {
        id: 9,
        category: "security",
        categoryName: "Security & Compliance",
        question: "Which IAM best practice should be implemented for the AWS account root user?",
        type: "single-choice",
        options: [
            "Use the root user for daily administrative tasks",
            "Share root user credentials with trusted administrators",
            "Enable multi-factor authentication (MFA)",
            "Create access keys for programmatic access"
        ],
        correctAnswers: [2],
        explanation: "Best practice is to enable MFA for the root user and use it only for tasks that require root credentials. Day-to-day tasks should use IAM users or roles."
    },
    {
        id: 10,
        category: "security",
        categoryName: "Security & Compliance",
        question: "Which AWS service continuously monitors for malicious activity and unauthorized behavior?",
        type: "single-choice",
        options: [
            "AWS CloudTrail",
            "Amazon Inspector",
            "Amazon GuardDuty",
            "AWS Config"
        ],
        correctAnswers: [2],
        explanation: "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect AWS accounts and workloads."
    },
    {
        id: 11,
        category: "security",
        categoryName: "Security & Compliance",
        question: "What does AWS CloudTrail record?",
        type: "single-choice",
        options: [
            "Resource performance metrics",
            "API calls made in your AWS account",
            "Network traffic patterns",
            "Application logs"
        ],
        correctAnswers: [1],
        explanation: "AWS CloudTrail records API calls made in your AWS account, providing governance, compliance, and operational auditing. It logs who did what, when, and from where."
    },
    {
        id: 12,
        category: "security",
        categoryName: "Security & Compliance",
        question: "Which service helps you rotate, manage, and retrieve database credentials and API keys?",
        type: "single-choice",
        options: [
            "AWS IAM",
            "AWS KMS",
            "AWS Secrets Manager",
            "AWS Certificate Manager"
        ],
        correctAnswers: [2],
        explanation: "AWS Secrets Manager helps you protect access to applications, services, and IT resources. It makes it easy to rotate, manage, and retrieve database credentials, API keys, and other secrets."
    },
    {
        id: 13,
        category: "security",
        categoryName: "Security & Compliance",
        question: "What is the principle of least privilege in IAM?",
        type: "single-choice",
        options: [
            "Give users administrator access to all resources",
            "Grant only the minimum permissions required to perform a task",
            "Share credentials among team members",
            "Use the root account for all operations"
        ],
        correctAnswers: [1],
        explanation: "The principle of least privilege means granting only the minimum permissions necessary for users to perform their job functions, reducing security risks."
    },
    {
        id: 14,
        category: "security",
        categoryName: "Security & Compliance",
        question: "Which AWS service provides DDoS protection?",
        type: "single-choice",
        options: [
            "AWS WAF",
            "AWS Shield",
            "Amazon GuardDuty",
            "AWS Config"
        ],
        correctAnswers: [1],
        explanation: "AWS Shield is a managed DDoS protection service. Shield Standard is automatically included at no extra cost, while Shield Advanced provides enhanced protections."
    },
    {
        id: 15,
        category: "security",
        categoryName: "Security & Compliance",
        question: "What type of IAM identity can be assumed by anyone who needs it and doesn't have a password or access keys?",
        type: "single-choice",
        options: [
            "IAM User",
            "IAM Group",
            "IAM Role",
            "IAM Policy"
        ],
        correctAnswers: [2],
        explanation: "IAM Roles are identities that can be assumed by users, applications, or services. Unlike users, roles don't have permanent credentials (passwords or access keys)."
    },

    // Technology and Services (34% of exam = ~22 questions)
    {
        id: 16,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which AWS compute service allows you to run code without provisioning or managing servers?",
        type: "single-choice",
        options: [
            "Amazon EC2",
            "AWS Lambda",
            "Amazon ECS",
            "AWS Batch"
        ],
        correctAnswers: [1],
        explanation: "AWS Lambda is a serverless compute service that runs code in response to events without requiring you to provision or manage servers. You only pay for compute time consumed."
    },
    {
        id: 17,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which Amazon S3 storage class is designed for infrequently accessed data that requires rapid access when needed?",
        type: "single-choice",
        options: [
            "S3 Standard",
            "S3 Glacier",
            "S3 Standard-IA",
            "S3 Glacier Deep Archive"
        ],
        correctAnswers: [2],
        explanation: "S3 Standard-IA (Infrequent Access) is designed for data accessed less frequently but requires rapid access when needed. It offers lower storage costs than S3 Standard."
    },
    {
        id: 18,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which service provides a fully managed NoSQL database?",
        type: "single-choice",
        options: [
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon Aurora",
            "Amazon Redshift"
        ],
        correctAnswers: [1],
        explanation: "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability."
    },
    {
        id: 19,
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is the AWS service that distributes incoming application traffic across multiple targets?",
        type: "single-choice",
        options: [
            "Amazon CloudFront",
            "Amazon Route 53",
            "Elastic Load Balancing",
            "AWS Global Accelerator"
        ],
        correctAnswers: [2],
        explanation: "Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple targets such as EC2 instances, containers, and IP addresses."
    },
    {
        id: 20,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which AWS database service is compatible with MySQL and PostgreSQL and offers up to 5x performance?",
        type: "single-choice",
        options: [
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon Aurora",
            "Amazon Redshift"
        ],
        correctAnswers: [2],
        explanation: "Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud, offering up to 5x the performance of MySQL and 3x the performance of PostgreSQL."
    },
    {
        id: 21,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which service provides a content delivery network (CDN) to deliver data globally with low latency?",
        type: "single-choice",
        options: [
            "Amazon Route 53",
            "Amazon CloudFront",
            "AWS Global Accelerator",
            "Elastic Load Balancing"
        ],
        correctAnswers: [1],
        explanation: "Amazon CloudFront is a fast content delivery network (CDN) that securely delivers data, videos, applications, and APIs globally with low latency by caching content at edge locations."
    },
    {
        id: 22,
        category: "technology",
        categoryName: "Technology & Services",
        question: "What type of storage is Amazon EBS?",
        type: "single-choice",
        options: [
            "Object storage",
            "File storage",
            "Block storage",
            "Archive storage"
        ],
        correctAnswers: [2],
        explanation: "Amazon EBS (Elastic Block Store) provides persistent block storage volumes for use with EC2 instances, ideal for databases and applications requiring low-latency access."
    },
    {
        id: 23,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which service allows multiple EC2 instances to access a shared file system simultaneously?",
        type: "single-choice",
        options: [
            "Amazon EBS",
            "Amazon S3",
            "Amazon EFS",
            "AWS Storage Gateway"
        ],
        correctAnswers: [2],
        explanation: "Amazon EFS (Elastic File System) is a fully managed, scalable file system that can be accessed concurrently by multiple EC2 instances."
    },
    {
        id: 24,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which AWS service monitors your AWS resources and applications in real-time?",
        type: "single-choice",
        options: [
            "AWS CloudTrail",
            "Amazon CloudWatch",
            "AWS Config",
            "AWS X-Ray"
        ],
        correctAnswers: [1],
        explanation: "Amazon CloudWatch monitors AWS resources and applications in real-time, collecting and tracking metrics, logs, and events. You can set alarms and automatically react to changes."
    },
    {
        id: 25,
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon VPC?",
        type: "single-choice",
        options: [
            "A virtual private server",
            "A logically isolated section of the AWS Cloud",
            "A database service",
            "A content delivery network"
        ],
        correctAnswers: [1],
        explanation: "Amazon VPC (Virtual Private Cloud) lets you provision a logically isolated section of the AWS Cloud where you can launch resources in a virtual network that you define."
    },
    {
        id: 26,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which service allows you to deploy and scale web applications without managing infrastructure?",
        type: "single-choice",
        options: [
            "AWS Lambda",
            "Amazon EC2",
            "AWS Elastic Beanstalk",
            "Amazon ECS"
        ],
        correctAnswers: [2],
        explanation: "AWS Elastic Beanstalk is a Platform as a Service (PaaS) that allows you to deploy and scale web applications. You upload your code and Elastic Beanstalk handles deployment, capacity, load balancing, and auto-scaling."
    },
    {
        id: 27,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which messaging service enables decoupling of microservices through a queue?",
        type: "single-choice",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon EventBridge",
            "AWS Step Functions"
        ],
        correctAnswers: [1],
        explanation: "Amazon SQS (Simple Queue Service) is a fully managed message queuing service that enables decoupling and scaling of microservices, distributed systems, and serverless applications."
    },
    {
        id: 28,
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is the minimum number of Availability Zones in an AWS Region?",
        type: "single-choice",
        options: [
            "One",
            "Two",
            "Three",
            "Four"
        ],
        correctAnswers: [2],
        explanation: "Each AWS Region consists of at least 3 independent, physically separate Availability Zones to provide high availability and fault tolerance."
    },
    {
        id: 29,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which service provides automated backups for databases?",
        type: "single-choice",
        options: [
            "AWS Backup",
            "Amazon RDS",
            "Both A and B",
            "Neither A nor B"
        ],
        correctAnswers: [2],
        explanation: "Amazon RDS provides automated backups for managed databases. AWS Backup also provides centralized backup across multiple AWS services including RDS."
    },
    {
        id: 30,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which AWS service allows you to create infrastructure using code templates?",
        type: "single-choice",
        options: [
            "AWS CloudFormation",
            "AWS CodeDeploy",
            "AWS OpsWorks",
            "AWS CodePipeline"
        ],
        correctAnswers: [0],
        explanation: "AWS CloudFormation is an Infrastructure as Code service that allows you to model and provision AWS resources using templates written in JSON or YAML."
    },
    {
        id: 31,
        category: "technology",
        categoryName: "Technology & Services",
        question: "What operates at the instance level and controls inbound and outbound traffic?",
        type: "single-choice",
        options: [
            "Network ACL",
            "Security Group",
            "Route Table",
            "Internet Gateway"
        ],
        correctAnswers: [1],
        explanation: "Security Groups act as virtual firewalls at the instance level, controlling both inbound and outbound traffic. By default, they deny all inbound and allow all outbound traffic."
    },
    {
        id: 32,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which service is a managed container orchestration service?",
        type: "single-choice",
        options: [
            "AWS Lambda",
            "Amazon EC2",
            "Amazon ECS",
            "AWS Batch"
        ],
        correctAnswers: [2],
        explanation: "Amazon ECS (Elastic Container Service) is a fully managed container orchestration service that makes it easy to deploy, manage, and scale containerized applications."
    },

    // Billing, Pricing, and Support (12% of exam = ~8 questions)
    {
        id: 33,
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "Which EC2 pricing model provides up to 90% discount but can be interrupted by AWS?",
        type: "single-choice",
        options: [
            "On-Demand Instances",
            "Reserved Instances",
            "Spot Instances",
            "Dedicated Hosts"
        ],
        correctAnswers: [2],
        explanation: "Spot Instances let you use spare EC2 capacity at up to 90% discount compared to On-Demand prices. However, AWS can interrupt them with a 2-minute warning."
    },
    {
        id: 34,
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "Which pricing model requires a 1 or 3-year commitment for significant discounts?",
        type: "single-choice",
        options: [
            "On-Demand Instances",
            "Spot Instances",
            "Reserved Instances",
            "Dedicated Instances"
        ],
        correctAnswers: [2],
        explanation: "Reserved Instances require a commitment of 1 or 3 years in exchange for significant discounts (up to 75%) compared to On-Demand pricing."
    },
    {
        id: 35,
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "Which tool helps you visualize and manage your AWS costs and usage over time?",
        type: "single-choice",
        options: [
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS Pricing Calculator",
            "AWS Billing Dashboard"
        ],
        correctAnswers: [1],
        explanation: "AWS Cost Explorer is a tool that helps you visualize, understand, and manage your AWS costs and usage over time with customizable reports and forecasts."
    },
    {
        id: 36,
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "Which AWS Support plan provides 24/7 technical support via phone, chat, and email?",
        type: "single-choice",
        options: [
            "Basic",
            "Developer",
            "Business",
            "All plans include this"
        ],
        correctAnswers: [2],
        explanation: "AWS Business Support and above provide 24/7 technical support via phone, chat, and email. Basic only has customer service, and Developer has business-hours email support."
    },
    {
        id: 37,
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "Which service allows you to consolidate billing across multiple AWS accounts?",
        type: "single-choice",
        options: [
            "AWS Cost Explorer",
            "AWS Organizations",
            "AWS Budgets",
            "AWS Billing Dashboard"
        ],
        correctAnswers: [1],
        explanation: "AWS Organizations provides consolidated billing, combining usage across all accounts to share volume pricing discounts and Reserved Instance discounts with one bill."
    },
    {
        id: 38,
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "Which AWS tool provides real-time guidance to help provision resources following best practices?",
        type: "single-choice",
        options: [
            "AWS CloudTrail",
            "AWS Config",
            "AWS Trusted Advisor",
            "Amazon Inspector"
        ],
        correctAnswers: [2],
        explanation: "AWS Trusted Advisor provides real-time guidance across five categories: Cost Optimization, Performance, Security, Fault Tolerance, and Service Limits."
    },
    {
        id: 39,
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "Which support plan includes access to a Technical Account Manager (TAM)?",
        type: "single-choice",
        options: [
            "Business",
            "Developer",
            "Enterprise",
            "Basic"
        ],
        correctAnswers: [2],
        explanation: "AWS Enterprise Support includes a dedicated Technical Account Manager (TAM) who provides consultative architectural and operational guidance."
    },
    {
        id: 40,
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What is the main benefit of AWS Organizations consolidated billing?",
        type: "single-choice",
        options: [
            "Lower support costs",
            "Volume pricing discounts across accounts",
            "Free data transfer",
            "Automatic resource optimization"
        ],
        correctAnswers: [1],
        explanation: "Consolidated billing combines usage from all accounts in the organization, allowing you to receive volume pricing discounts and share Reserved Instance benefits across accounts."
    },

    // Additional questions to reach 65 total
    {
        id: 41,
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "Which Well-Architected Framework pillar focuses on minimizing environmental impact?",
        type: "single-choice",
        options: [
            "Cost Optimization",
            "Sustainability",
            "Operational Excellence",
            "Performance Efficiency"
        ],
        correctAnswers: [1],
        explanation: "The Sustainability pillar focuses on minimizing the environmental impacts of running cloud workloads, including energy efficiency and reducing carbon footprint."
    },
    {
        id: 42,
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "What does IaaS stand for in cloud computing?",
        type: "single-choice",
        options: [
            "Internet as a Service",
            "Infrastructure as a Service",
            "Integration as a Service",
            "Information as a Service"
        ],
        correctAnswers: [1],
        explanation: "IaaS (Infrastructure as a Service) provides virtualized computing resources over the internet. You manage servers, storage, and networking while the provider manages the physical infrastructure."
    },
    {
        id: 43,
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "Which characteristic of cloud computing allows you to pay only for what you use?",
        type: "single-choice",
        options: [
            "Elasticity",
            "Scalability",
            "Variable expense",
            "High availability"
        ],
        correctAnswers: [2],
        explanation: "Variable expense (pay-as-you-go) means you only pay for the computing resources you consume, rather than investing heavily in data centers and servers before knowing how you'll use them."
    },
    {
        id: 44,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which service is used for DNS and domain registration?",
        type: "single-choice",
        options: [
            "Amazon CloudFront",
            "Amazon Route 53",
            "AWS Direct Connect",
            "Amazon VPC"
        ],
        correctAnswers: [1],
        explanation: "Amazon Route 53 is a highly available and scalable DNS web service used for domain registration, DNS routing, and health checking."
    },
    {
        id: 45,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which AWS service is designed for data warehousing and analytics?",
        type: "single-choice",
        options: [
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon Redshift",
            "Amazon Aurora"
        ],
        correctAnswers: [2],
        explanation: "Amazon Redshift is a fast, fully managed data warehouse that makes it simple and cost-effective to analyze data using SQL and business intelligence tools."
    },
    {
        id: 46,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which service helps migrate databases to AWS with minimal downtime?",
        type: "single-choice",
        options: [
            "AWS Database Migration Service",
            "AWS DataSync",
            "AWS Transfer Family",
            "AWS Snow Family"
        ],
        correctAnswers: [0],
        explanation: "AWS Database Migration Service (DMS) helps migrate databases to AWS quickly and securely. The source database remains operational during migration, minimizing downtime."
    },
    {
        id: 47,
        category: "security",
        categoryName: "Security & Compliance",
        question: "What is Amazon Cognito used for?",
        type: "single-choice",
        options: [
            "Network security",
            "User authentication and authorization",
            "Data encryption",
            "Threat detection"
        ],
        correctAnswers: [1],
        explanation: "Amazon Cognito provides authentication, authorization, and user management for web and mobile applications. Users can sign in directly or through third-party identity providers."
    },
    {
        id: 48,
        category: "security",
        categoryName: "Security & Compliance",
        question: "Which service helps you create and control encryption keys?",
        type: "single-choice",
        options: [
            "AWS IAM",
            "AWS KMS",
            "AWS Secrets Manager",
            "AWS Certificate Manager"
        ],
        correctAnswers: [1],
        explanation: "AWS KMS (Key Management Service) is a managed service to create and control encryption keys used to encrypt your data. It uses Hardware Security Modules (HSMs)."
    },
    {
        id: 49,
        category: "security",
        categoryName: "Security & Compliance",
        question: "What does AWS Config help you do?",
        type: "single-choice",
        options: [
            "Monitor API calls",
            "Assess and audit resource configurations",
            "Protect against DDoS attacks",
            "Manage user access"
        ],
        correctAnswers: [1],
        explanation: "AWS Config continuously monitors and records your AWS resource configurations, allowing you to assess, audit, and evaluate configurations against desired settings."
    },
    {
        id: 50,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which serverless service orchestrates multiple AWS services into workflows?",
        type: "single-choice",
        options: [
            "AWS Lambda",
            "AWS Step Functions",
            "Amazon EventBridge",
            "AWS Batch"
        ],
        correctAnswers: [1],
        explanation: "AWS Step Functions is a serverless orchestration service that lets you coordinate multiple AWS services into serverless workflows, making it easy to build distributed applications."
    },
    {
        id: 51,
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is the purpose of Amazon API Gateway?",
        type: "single-choice",
        options: [
            "Manage EC2 instances",
            "Create and manage APIs",
            "Store API credentials",
            "Monitor API performance"
        ],
        correctAnswers: [1],
        explanation: "Amazon API Gateway is a fully managed service for creating, publishing, maintaining, monitoring, and securing APIs at any scale. It acts as a front door for applications."
    },
    {
        id: 52,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which service allows you to query data in S3 using SQL without moving the data?",
        type: "single-choice",
        options: [
            "Amazon Redshift",
            "Amazon Athena",
            "Amazon EMR",
            "AWS Glue"
        ],
        correctAnswers: [1],
        explanation: "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL. It's serverless with no infrastructure to manage."
    },
    {
        id: 53,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which service provides managed ETL (Extract, Transform, Load)?",
        type: "single-choice",
        options: [
            "AWS Data Pipeline",
            "AWS Glue",
            "Amazon Athena",
            "Amazon Kinesis"
        ],
        correctAnswers: [1],
        explanation: "AWS Glue is a fully managed ETL service that makes it easy to prepare and load data for analytics. It automatically discovers and catalogs data."
    },
    {
        id: 54,
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon ElastiCache used for?",
        type: "single-choice",
        options: [
            "Content delivery",
            "In-memory caching",
            "Object storage",
            "Database backups"
        ],
        correctAnswers: [1],
        explanation: "Amazon ElastiCache is a fully managed in-memory caching service that improves application performance. It supports Redis and Memcached engines."
    },
    {
        id: 55,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which service runs containers without managing servers?",
        type: "single-choice",
        options: [
            "Amazon EC2",
            "AWS Fargate",
            "AWS Lambda",
            "Amazon Lightsail"
        ],
        correctAnswers: [1],
        explanation: "AWS Fargate is a serverless compute engine for containers that works with Amazon ECS and EKS, removing the need to provision and manage servers."
    },
    {
        id: 56,
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "Which AWS service provides a digital catalog of third-party software?",
        type: "single-choice",
        options: [
            "AWS Marketplace",
            "AWS Service Catalog",
            "AWS AppStore",
            "AWS Partner Network"
        ],
        correctAnswers: [0],
        explanation: "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors, making it easy to find, test, buy, and deploy software on AWS."
    },
    {
        id: 57,
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "Which tool helps estimate the cost of AWS services before using them?",
        type: "single-choice",
        options: [
            "AWS Cost Explorer",
            "AWS Pricing Calculator",
            "AWS Budgets",
            "AWS Cost and Usage Report"
        ],
        correctAnswers: [1],
        explanation: "AWS Pricing Calculator is a web-based tool that helps you estimate the cost of AWS services for your use cases before actually deploying them."
    },
    {
        id: 58,
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What is included in the AWS Free Tier?",
        type: "single-choice",
        options: [
            "Unlimited access to all services",
            "Limited access to certain services with usage limits",
            "Free Enterprise Support",
            "Free Reserved Instances"
        ],
        correctAnswers: [1],
        explanation: "The AWS Free Tier provides limited free access to certain services. It includes three types: Always Free (never expires), 12 Months Free, and Trials (short-term)."
    },
    {
        id: 59,
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "Which cloud computing model includes email services like Gmail?",
        type: "single-choice",
        options: [
            "IaaS",
            "PaaS",
            "SaaS",
            "FaaS"
        ],
        correctAnswers: [2],
        explanation: "SaaS (Software as a Service) provides complete applications managed by the provider. Users access the software through a web browser. Examples include Gmail, Office 365, and Salesforce."
    },
    {
        id: 60,
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is an Availability Zone in AWS?",
        type: "single-choice",
        options: [
            "A geographical area containing multiple Regions",
            "One or more discrete data centers with redundant resources",
            "A CDN edge location",
            "A virtual private network"
        ],
        correctAnswers: [1],
        explanation: "An Availability Zone is one or more discrete data centers with redundant power, networking, and connectivity within an AWS Region, designed for high availability and fault tolerance."
    },
    {
        id: 61,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which service provides pub/sub messaging for microservices?",
        type: "single-choice",
        options: [
            "Amazon SQS",
            "Amazon SNS",
            "Amazon MQ",
            "Amazon EventBridge"
        ],
        correctAnswers: [1],
        explanation: "Amazon SNS (Simple Notification Service) is a fully managed pub/sub messaging service that enables message delivery from publishers to subscribers (e.g., email, SMS, Lambda, SQS)."
    },
    {
        id: 62,
        category: "security",
        categoryName: "Security & Compliance",
        question: "What is an IAM Policy?",
        type: "single-choice",
        options: [
            "A user account",
            "A JSON document defining permissions",
            "A security group rule",
            "An encryption key"
        ],
        correctAnswers: [1],
        explanation: "An IAM Policy is a JSON document that defines permissions, specifying which actions are allowed or denied on which AWS resources."
    },
    {
        id: 63,
        category: "technology",
        categoryName: "Technology & Services",
        question: "Which service automatically adjusts EC2 capacity based on demand?",
        type: "single-choice",
        options: [
            "AWS CloudFormation",
            "AWS Auto Scaling",
            "Amazon CloudWatch",
            "AWS Systems Manager"
        ],
        correctAnswers: [1],
        explanation: "AWS Auto Scaling monitors applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost."
    },
    {
        id: 64,
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is the easiest way to launch and manage a virtual private server on AWS?",
        type: "single-choice",
        options: [
            "Amazon EC2",
            "AWS Lambda",
            "Amazon Lightsail",
            "AWS Elastic Beanstalk"
        ],
        correctAnswers: [2],
        explanation: "Amazon Lightsail is the easiest way to launch and manage a virtual private server with AWS. It includes everything needed to launch a project quickly at a low, predictable price."
    },
    {
        id: 65,
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "Which Well-Architected Framework pillar focuses on using computing resources efficiently?",
        type: "single-choice",
        options: [
            "Operational Excellence",
            "Performance Efficiency",
            "Cost Optimization",
            "Reliability"
        ],
        correctAnswers: [1],
        explanation: "The Performance Efficiency pillar focuses on using computing resources efficiently to meet system requirements and maintaining that efficiency as demand changes and technologies evolve."
    }
];
