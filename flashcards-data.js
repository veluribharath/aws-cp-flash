const flashcardsData = [
    // Cloud Concepts (24%)
    {
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "What are the six advantages of cloud computing?",
        answer: "1. Trade capital expense for variable expense 2. Benefit from massive economies of scale 3. Stop guessing capacity 4. Increase speed and agility 5. Stop spending money on data center maintenance 6. Go global in minutes"
    },
    {
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "What are the three cloud computing models?",
        answer: "1. Infrastructure as a Service (IaaS) - You manage servers, storage, and networking. 2. Platform as a Service (PaaS) - Provider manages infrastructure, you manage applications. 3. Software as a Service (SaaS) - Entire application is managed by provider."
    },
    {
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "What are the three cloud deployment models?",
        answer: "1. Public Cloud - Deployed on cloud provider (AWS, Azure, GCP). 2. Private Cloud (On-premises) - Deployed on private infrastructure. 3. Hybrid Cloud - Combination of public and private cloud."
    },
    {
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "What is elasticity in cloud computing?",
        answer: "The ability to acquire resources as you need them and release resources when you no longer need them. In the cloud, you can scale up or down quickly based on demand."
    },
    {
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "What is high availability in AWS?",
        answer: "A system that is designed to operate continuously without failure for a long time. AWS achieves this through multiple Availability Zones, allowing applications to remain available even if one data center fails."
    },
    {
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "What is fault tolerance?",
        answer: "The ability of a system to remain operational even if some components fail. AWS provides fault tolerance through redundancy across multiple Availability Zones and Regions."
    },
    {
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "What is the difference between scalability and elasticity?",
        answer: "Scalability is the ability to handle increased load by adding resources. Elasticity is the ability to automatically scale resources up or down based on demand in real-time."
    },

    // Security and Compliance (30%)
    {
        category: "security",
        categoryName: "Security & Compliance",
        question: "What is the AWS Shared Responsibility Model?",
        answer: "AWS is responsible for security OF the cloud (infrastructure, hardware, facilities). Customers are responsible for security IN the cloud (data, applications, OS, network configuration, encryption)."
    },
    {
        category: "security",
        categoryName: "Security & Compliance",
        question: "What does AWS manage under the Shared Responsibility Model?",
        answer: "AWS manages: Physical security of data centers, hardware and software infrastructure, network infrastructure, virtualization layer, and managed services infrastructure."
    },
    {
        category: "security",
        categoryName: "Security & Compliance",
        question: "What does the customer manage under the Shared Responsibility Model?",
        answer: "Customers manage: Customer data, platform and application management, operating system patches and updates, network and firewall configuration, encryption (at rest and in transit), and IAM."
    },
    {
        category: "security",
        categoryName: "Security & Compliance",
        question: "What is AWS IAM?",
        answer: "AWS Identity and Access Management - A service that helps you securely control access to AWS resources. It manages authentication (who) and authorization (what permissions)."
    },
    {
        category: "security",
        categoryName: "Security & Compliance",
        question: "What is an IAM User?",
        answer: "An entity you create in AWS to represent a person or application that interacts with AWS. It consists of a name and credentials (password and/or access keys)."
    },
    {
        category: "security",
        categoryName: "Security & Compliance",
        question: "What is an IAM Group?",
        answer: "A collection of IAM users. Groups let you specify permissions for multiple users, making it easier to manage permissions for those users."
    },
    {
        category: "security",
        categoryName: "Security & Compliance",
        question: "What is an IAM Role?",
        answer: "An IAM identity with specific permissions. Unlike users, roles are intended to be assumable by anyone who needs them (users, applications, or services). Roles don't have passwords or access keys."
    },
    {
        category: "security",
        categoryName: "Security & Compliance",
        question: "What is an IAM Policy?",
        answer: "A document that defines permissions. Policies are written in JSON and specify what actions are allowed or denied on which AWS resources."
    },
    {
        category: "security",
        categoryName: "Security & Compliance",
        question: "What is the principle of least privilege?",
        answer: "A security best practice where users are granted only the minimum permissions needed to perform their job functions. Start with minimal permissions and grant additional permissions as needed."
    },
    {
        category: "security",
        categoryName: "Security & Compliance",
        question: "What is Multi-Factor Authentication (MFA)?",
        answer: "An extra layer of security requiring not only a password but also a physical device or authentication app. It's strongly recommended for the root user and privileged IAM users."
    },
    {
        category: "security",
        categoryName: "Security & Compliance",
        question: "What is AWS CloudTrail?",
        answer: "A service that enables governance, compliance, and operational auditing by logging all API calls made in your AWS account. It answers 'who did what, when, and from where'."
    },
    {
        category: "security",
        categoryName: "Security & Compliance",
        question: "What is AWS Config?",
        answer: "A service that assesses, audits, and evaluates configurations of AWS resources. It continuously monitors and records resource configurations and allows you to automate compliance checking."
    },
    {
        category: "security",
        categoryName: "Security & Compliance",
        question: "What is Amazon GuardDuty?",
        answer: "An intelligent threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect AWS accounts, workloads, and data."
    },
    {
        category: "security",
        categoryName: "Security & Compliance",
        question: "What is AWS Shield?",
        answer: "A managed DDoS (Distributed Denial of Service) protection service. Shield Standard is free and protects against common attacks. Shield Advanced provides enhanced protections and 24/7 DDoS response team."
    },
    {
        category: "security",
        categoryName: "Security & Compliance",
        question: "What is AWS WAF?",
        answer: "AWS Web Application Firewall - Protects web applications from common web exploits like SQL injection and cross-site scripting (XSS). You can create custom rules to filter web traffic."
    },
    {
        category: "security",
        categoryName: "Security & Compliance",
        question: "What is AWS Artifact?",
        answer: "A self-service portal for on-demand access to AWS compliance reports and security documents. It provides access to AWS security and compliance certifications."
    },

    // Technology and Services (34%)
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon EC2?",
        answer: "Elastic Compute Cloud - Provides scalable virtual servers (instances) in the cloud. You have complete control over the OS and can scale capacity up or down as needed."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What are the main EC2 instance types?",
        answer: "General Purpose (balanced), Compute Optimized (high performance processors), Memory Optimized (large datasets in memory), Storage Optimized (high sequential read/write), and Accelerated Computing (GPU/FPGA)."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is AWS Lambda?",
        answer: "A serverless compute service that runs code in response to events without provisioning or managing servers. You pay only for compute time consumed. Supports multiple languages."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon S3?",
        answer: "Simple Storage Service - Object storage service offering industry-leading scalability, data availability, security, and performance. Stores data as objects within buckets."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What are the S3 storage classes?",
        answer: "S3 Standard (frequently accessed), S3 Intelligent-Tiering (automatic cost optimization), S3 Standard-IA (infrequent access), S3 One Zone-IA, S3 Glacier (archival), S3 Glacier Deep Archive (long-term archive)."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon EBS?",
        answer: "Elastic Block Store - Provides persistent block storage volumes for use with EC2 instances. Data persists independently from instance lifetime. Used for databases and applications requiring low-latency."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon EFS?",
        answer: "Elastic File System - A fully managed, scalable, elastic NFS file system for use with AWS Cloud and on-premises resources. Multiple EC2 instances can access simultaneously."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon RDS?",
        answer: "Relational Database Service - Makes it easy to set up, operate, and scale relational databases. Supports MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Amazon Aurora."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon DynamoDB?",
        answer: "A fully managed NoSQL database service providing fast and predictable performance with seamless scalability. Supports key-value and document data models."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon Aurora?",
        answer: "A MySQL and PostgreSQL-compatible relational database built for the cloud. It's up to 5x faster than MySQL and 3x faster than PostgreSQL, with automated backups and replication."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon VPC?",
        answer: "Virtual Private Cloud - Lets you provision a logically isolated section of AWS Cloud where you can launch resources in a virtual network that you define. Full control over IP ranges, subnets, routing."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is a Security Group?",
        answer: "A virtual firewall that controls inbound and outbound traffic for EC2 instances. Acts at the instance level. By default, denies all inbound traffic and allows all outbound traffic."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is a Network ACL?",
        answer: "Network Access Control List - An optional security layer at the subnet level that acts as a firewall. Controls both inbound and outbound traffic. Operates at the subnet level, while Security Groups operate at instance level."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon CloudFront?",
        answer: "A fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs globally with low latency by caching content at edge locations."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon Route 53?",
        answer: "A highly available and scalable Domain Name System (DNS) web service. Connects user requests to infrastructure running in AWS and can route users to infrastructure outside of AWS."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Elastic Load Balancing (ELB)?",
        answer: "Automatically distributes incoming application traffic across multiple targets (EC2 instances, containers, IP addresses). Increases fault tolerance by spreading load across Availability Zones."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What are the types of Load Balancers in AWS?",
        answer: "Application Load Balancer (HTTP/HTTPS, Layer 7), Network Load Balancer (TCP/UDP, Layer 4, high performance), Gateway Load Balancer (3rd party appliances), and Classic Load Balancer (legacy)."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon SNS?",
        answer: "Simple Notification Service - A fully managed pub/sub messaging service. Enables message delivery from publishers to subscribers (endpoints like email, SMS, Lambda, SQS)."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon SQS?",
        answer: "Simple Queue Service - A fully managed message queuing service for decoupling and scaling microservices, distributed systems, and serverless applications. Eliminates complexity of managing message queues."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is AWS CloudFormation?",
        answer: "Infrastructure as Code service that allows you to model and provision AWS resources using templates (JSON or YAML). Automates resource creation and management."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon CloudWatch?",
        answer: "A monitoring service for AWS resources and applications. Collects and tracks metrics, logs, and events. Can set alarms and automatically react to changes in your AWS resources."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is AWS Auto Scaling?",
        answer: "Monitors applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost. Can scale EC2 instances, DynamoDB tables, and more."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is AWS Elastic Beanstalk?",
        answer: "A Platform as a Service (PaaS) that makes it easy to deploy and scale web applications. You upload code and Elastic Beanstalk handles deployment, capacity provisioning, load balancing, and auto-scaling."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon Lightsail?",
        answer: "The easiest way to launch and manage a virtual private server with AWS. Includes everything needed to launch a project quickly: instances, containers, databases, storage, at a low, predictable price."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is AWS Systems Manager?",
        answer: "Provides operational insights and helps you manage AWS resources. View operational data, automate tasks, patch management, run commands, and parameter management."
    },

    // Well-Architected Framework
    {
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "What are the 6 pillars of the AWS Well-Architected Framework?",
        answer: "1. Operational Excellence 2. Security 3. Reliability 4. Performance Efficiency 5. Cost Optimization 6. Sustainability"
    },
    {
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "What is the Operational Excellence pillar?",
        answer: "Focuses on running and monitoring systems to deliver business value and continually improving processes. Includes automating changes, responding to events, and defining standards."
    },
    {
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "What is the Security pillar?",
        answer: "Focuses on protecting information and systems. Key topics include data confidentiality and integrity, managing user permissions, and establishing controls to detect security events."
    },
    {
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "What is the Reliability pillar?",
        answer: "Focuses on ensuring workloads perform their intended functions correctly and consistently, and how to recover quickly from failures to meet demand."
    },
    {
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "What is the Performance Efficiency pillar?",
        answer: "Focuses on using computing resources efficiently to meet system requirements and maintaining that efficiency as demand changes and technologies evolve."
    },
    {
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "What is the Cost Optimization pillar?",
        answer: "Focuses on running systems to deliver business value at the lowest price point. Includes understanding spending, selecting appropriate resources, and scaling to meet needs without overspending."
    },
    {
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "What is the Sustainability pillar?",
        answer: "Focuses on minimizing environmental impacts of running cloud workloads. Includes shared responsibility for sustainability, understanding impact, and maximizing utilization to minimize required resources."
    },

    // Billing, Pricing, and Support (12%)
    {
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What are the 4 EC2 pricing models?",
        answer: "1. On-Demand (pay by hour/second, no commitment) 2. Reserved Instances (1-3 year commitment, up to 75% discount) 3. Spot Instances (bid on unused capacity, up to 90% discount) 4. Savings Plans (flexible pricing, up to 72% discount)"
    },
    {
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What is On-Demand pricing?",
        answer: "Pay for compute capacity by the hour or second with no long-term commitments. Highest flexibility, highest cost. Good for short-term, unpredictable workloads."
    },
    {
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What are Reserved Instances?",
        answer: "Commit to using EC2 for 1 or 3 years in exchange for significant discounts (up to 75%). Best for steady-state usage. Types: Standard (most discount), Convertible (flexibility), Scheduled."
    },
    {
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What are Spot Instances?",
        answer: "Use spare EC2 capacity at up to 90% discount. Can be interrupted by AWS with 2-minute warning. Best for fault-tolerant, flexible workloads like batch processing."
    },
    {
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What are Savings Plans?",
        answer: "Flexible pricing model offering savings up to 72% in exchange for 1 or 3 year commitment to consistent usage ($/hour). Two types: Compute (most flexible) and EC2 Instance (higher discount)."
    },
    {
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What is the AWS Free Tier?",
        answer: "Allows you to try certain AWS services for free. Three types: Always Free (never expires), 12 Months Free (starts at signup), and Trials (short-term offers)."
    },
    {
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What is AWS Cost Explorer?",
        answer: "A tool to visualize, understand, and manage AWS costs and usage over time. Shows spending patterns, identifies cost drivers, and forecasts future costs."
    },
    {
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What is AWS Budgets?",
        answer: "Allows you to set custom budgets for costs and usage. Sends alerts when you exceed or are forecasted to exceed your budgeted amount."
    },
    {
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What is AWS Cost and Usage Report?",
        answer: "The most comprehensive cost and usage data available. Provides detailed information about AWS costs and usage, which can be published to S3 for analysis."
    },
    {
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What are AWS Support Plans?",
        answer: "5 tiers: Basic (free, 24/7 customer service), Developer ($29+/mo, business hours email), Business ($100+/mo, 24/7 phone/chat), Enterprise On-Ramp ($5500+/mo), Enterprise ($15000+/mo, TAM)."
    },
    {
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What is included in AWS Basic Support?",
        answer: "Free for all customers. Includes 24/7 customer service, documentation, whitepapers, support forums, AWS Trusted Advisor (7 core checks), and AWS Personal Health Dashboard."
    },
    {
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What is included in AWS Developer Support?",
        answer: "For testing/development. Includes Basic Support plus email support during business hours, general guidance response <24 hours, system impaired response <12 hours."
    },
    {
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What is included in AWS Business Support?",
        answer: "For production workloads. Includes 24/7 phone/chat support, full Trusted Advisor checks, production system impaired <4hr response, production down <1hr response, infrastructure event management (additional fee)."
    },
    {
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What is included in AWS Enterprise Support?",
        answer: "For mission-critical workloads. Includes Business Support benefits plus Technical Account Manager (TAM), Concierge Support Team, business-critical system down <15min response, architecture reviews, infrastructure event management (no fee)."
    },
    {
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What is AWS Trusted Advisor?",
        answer: "Online tool that provides real-time guidance to help provision resources following AWS best practices. Checks: Cost Optimization, Performance, Security, Fault Tolerance, Service Limits."
    },
    {
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What is AWS Organizations?",
        answer: "Account management service to consolidate multiple AWS accounts into an organization. Provides centralized billing (consolidated billing), account management, and policy-based access control."
    },
    {
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What is Consolidated Billing?",
        answer: "Feature of AWS Organizations that combines usage across all accounts to share volume pricing discounts and Reserved Instance discounts. One bill for all accounts."
    },

    // Global Infrastructure
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is an AWS Region?",
        answer: "A physical location around the world where AWS clusters data centers. Each Region consists of multiple isolated Availability Zones. Choose based on latency, compliance, and service availability."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is an Availability Zone (AZ)?",
        answer: "One or more discrete data centers with redundant power, networking, and connectivity within a Region. AZs are physically separated and connected with low-latency links for high availability."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is an Edge Location?",
        answer: "A site where content is cached for faster delivery to users. Part of the CloudFront CDN network. There are many more edge locations than Regions, reducing latency for content delivery."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "How many Availability Zones are in each Region?",
        answer: "Each AWS Region consists of at least 3 independent, physically separate Availability Zones to provide high availability and fault tolerance."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What factors should you consider when choosing an AWS Region?",
        answer: "1. Compliance and data governance requirements 2. Latency to end users 3. Service availability (not all services in all Regions) 4. Pricing (varies by Region)"
    },

    // Additional Important Services
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon Redshift?",
        answer: "A fast, scalable data warehouse service that makes it simple and cost-effective to analyze data using SQL and business intelligence tools. Optimized for OLAP workloads."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is AWS Database Migration Service (DMS)?",
        answer: "Helps migrate databases to AWS quickly and securely. The source database remains operational during migration, minimizing downtime. Supports homogeneous and heterogeneous migrations."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon ElastiCache?",
        answer: "A fully managed in-memory caching service that improves application performance by retrieving data from fast, managed, in-memory caches. Supports Redis and Memcached."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is AWS Fargate?",
        answer: "A serverless compute engine for containers that works with Amazon ECS and EKS. Removes the need to provision and manage servers, letting you focus on application development."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon ECS?",
        answer: "Elastic Container Service - A fully managed container orchestration service that makes it easy to deploy, manage, and scale containerized applications using Docker."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon EKS?",
        answer: "Elastic Kubernetes Service - A managed service that makes it easy to run Kubernetes on AWS without needing to install and operate your own Kubernetes control plane."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is AWS Step Functions?",
        answer: "A serverless orchestration service that lets you coordinate multiple AWS services into serverless workflows. Makes it easy to build distributed applications as a series of steps."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon API Gateway?",
        answer: "A fully managed service that makes it easy to create, publish, maintain, monitor, and secure APIs at any scale. Acts as a front door for applications to access backend services."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is AWS KMS?",
        answer: "AWS Key Management Service - A managed service to create and control encryption keys. Integrates with many AWS services to encrypt data. Uses Hardware Security Modules (HSMs)."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is Amazon Athena?",
        answer: "An interactive query service that makes it easy to analyze data in S3 using standard SQL. Serverless, pay only for queries run. No infrastructure to manage."
    },
    {
        category: "technology",
        categoryName: "Technology & Services",
        question: "What is AWS Glue?",
        answer: "A fully managed ETL (Extract, Transform, Load) service that makes it easy to prepare and load data for analytics. Automatically discovers and catalogs data."
    },
    {
        category: "security",
        categoryName: "Security & Compliance",
        question: "What is Amazon Cognito?",
        answer: "Provides authentication, authorization, and user management for web and mobile apps. Users can sign in directly or through social identity providers like Google, Facebook, and Amazon."
    },
    {
        category: "security",
        categoryName: "Security & Compliance",
        question: "What is AWS Secrets Manager?",
        answer: "Helps protect access to applications, services, and IT resources without upfront cost. Easily rotate, manage, and retrieve database credentials, API keys, and other secrets."
    },
    {
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What is AWS Marketplace?",
        answer: "A digital catalog with thousands of software listings from independent software vendors. Makes it easy to find, test, buy, and deploy software that runs on AWS."
    },
    {
        category: "billing",
        categoryName: "Billing, Pricing & Support",
        question: "What is AWS Pricing Calculator?",
        answer: "A web-based tool to estimate the cost of AWS services. Create cost estimates for your use cases and explore AWS services and pricing."
    },
    {
        category: "cloud-concepts",
        categoryName: "Cloud Concepts",
        question: "What is AWS Cloud Adoption Framework (CAF)?",
        answer: "Provides guidance to help organizations design and travel an accelerated path to cloud adoption. Organizes guidance into 6 perspectives: Business, People, Governance, Platform, Security, Operations."
    }
];
