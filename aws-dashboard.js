// Data structure for all services
const servicesData = {
    compute: {
        name: 'Compute Services',
        total: 40,
        services: [
            {
                name: 'EC2 (Elastic Compute Cloud)',
                subItems: [
                    'EC2 Overview & Concepts',
                    'General Purpose Instances (T3, T4g, M5, M6i)',
                    'Compute Optimized (C5, C6i, C7g)',
                    'Memory Optimized (R5, R6i, X2idn)',
                    'Storage Optimized (I3, D3, H1)',
                    'On-Demand Pricing',
                    'Reserved Instances',
                    'Savings Plans',
                    'Spot Instances',
                    'Dedicated Hosts',
                    'Auto Scaling',
                    'Elastic Load Balancing',
                    'EC2 Cost Optimization'
                ]
            },
            {
                name: 'Lambda (Serverless Functions)',
                subItems: [
                    'Lambda Overview',
                    'Runtime Support',
                    'Memory & Timeout Config',
                    'Concurrency Management',
                    'Lambda Layers',
                    'Versions & Aliases',
                    'VPC Integration',
                    'Trigger Sources',
                    'Lambda Cost Optimization'
                ]
            },
            {
                name: 'Elastic Beanstalk',
                subItems: [
                    'Beanstalk Overview',
                    'Platform Support',
                    'Auto-scaling Features'
                ]
            },
            {
                name: 'AWS Lightsail',
                subItems: [
                    'Lightsail Overview',
                    'Fixed Pricing Plans',
                    'Use Cases'
                ]
            },
            {
                name: 'AWS Batch',
                subItems: [
                    'Batch Overview',
                    'Job Queues',
                    'Spot Integration'
                ]
            },
            {
                name: 'AWS Outposts',
                subItems: [
                    'Outposts Overview',
                    'Hybrid Cloud Use Cases'
                ]
            }
        ]
    },
    storage: {
        name: 'Storage Services',
        total: 47,
        services: [
            {
                name: 'S3 (Simple Storage Service)',
                subItems: [
                    'S3 Overview',
                    'S3 Standard',
                    'S3 Intelligent-Tiering',
                    'S3 Standard-IA',
                    'S3 One Zone-IA',
                    'S3 Glacier Instant Retrieval',
                    'S3 Glacier Flexible Retrieval',
                    'S3 Glacier Deep Archive',
                    'Versioning',
                    'Lifecycle Policies',
                    'Replication (CRR, SRR)',
                    'Bucket Policies & IAM',
                    'Encryption (SSE)',
                    'S3 Transfer Acceleration',
                    'Multipart Upload',
                    'S3 Select',
                    'Event Notifications',
                    'Object Lock',
                    'S3 Cost Optimization'
                ]
            },
            {
                name: 'EBS (Elastic Block Store)',
                subItems: [
                    'EBS Overview',
                    'General Purpose SSD (gp3, gp2)',
                    'Provisioned IOPS SSD (io2, io1)',
                    'Throughput Optimized HDD (st1)',
                    'Cold HDD (sc1)',
                    'EBS Snapshots',
                    'Encryption',
                    'Multi-Attach',
                    'EBS Cost Optimization'
                ]
            },
            {
                name: 'EFS (Elastic File System)',
                subItems: [
                    'EFS Overview',
                    'EFS Standard',
                    'EFS Infrequent Access (IA)',
                    'EFS One Zone',
                    'Performance Modes',
                    'Throughput Modes',
                    'Lifecycle Management',
                    'EFS Cost Optimization'
                ]
            },
            {
                name: 'Storage Gateway',
                subItems: [
                    'Storage Gateway Overview',
                    'File Gateway',
                    'Volume Gateway',
                    'Tape Gateway'
                ]
            },
            {
                name: 'AWS Backup',
                subItems: [
                    'AWS Backup Overview',
                    'Backup Plans',
                    'Cross-Region Backups'
                ]
            }
        ]
    },
    database: {
        name: 'Database Services',
        total: 56,
        services: [
            {
                name: 'RDS (Relational Database Service)',
                subItems: [
                    'RDS Overview',
                    'MySQL Support',
                    'PostgreSQL Support',
                    'MariaDB Support',
                    'Oracle Support',
                    'SQL Server Support',
                    'Multi-AZ Deployment',
                    'Read Replicas',
                    'Automated Backups',
                    'Encryption',
                    'Performance Insights',
                    'Enhanced Monitoring',
                    'RDS Cost Optimization'
                ]
            },
            {
                name: 'Aurora (MySQL/PostgreSQL Compatible)',
                subItems: [
                    'Aurora Overview',
                    'Aurora Standard',
                    'Aurora Serverless v2',
                    'Aurora Multi-Master',
                    'Aurora Global Database',
                    'Storage Auto-scaling',
                    'High Availability',
                    'Aurora I/O-Optimized',
                    'Aurora Cost Optimization'
                ]
            },
            {
                name: 'DynamoDB (NoSQL)',
                subItems: [
                    'DynamoDB Overview',
                    'Tables & Items',
                    'Primary Keys (Partition & Sort)',
                    'Global Secondary Index (GSI)',
                    'Local Secondary Index (LSI)',
                    'On-Demand Mode',
                    'Provisioned Mode',
                    'DynamoDB Streams',
                    'Global Tables',
                    'Point-in-Time Recovery',
                    'DAX (DynamoDB Accelerator)',
                    'TTL (Time To Live)',
                    'Transactions',
                    'PartiQL',
                    'DynamoDB Cost Optimization'
                ]
            },
            {
                name: 'ElastiCache (Redis/Memcached)',
                subItems: [
                    'ElastiCache Overview',
                    'Redis Features',
                    'Memcached Features',
                    'Cluster Mode',
                    'Multi-AZ',
                    'Read Replicas',
                    'Snapshots',
                    'Encryption',
                    'ElastiCache Cost Optimization'
                ]
            },
            {
                name: 'Other Database Services',
                subItems: [
                    'Redshift (Data Warehouse)',
                    'DocumentDB (MongoDB)',
                    'Neptune (Graph)',
                    'Timestream (Time-Series)',
                    'Keyspaces (Cassandra)'
                ]
            }
        ]
    },
    networking: {
        name: 'Networking & Content Delivery',
        total: 57,
        services: [
            {
                name: 'VPC (Virtual Private Cloud)',
                subItems: [
                    'VPC Overview',
                    'Subnets (Public & Private)',
                    'Internet Gateway (IGW)',
                    'NAT Gateway',
                    'NAT Instance',
                    'Route Tables',
                    'Security Groups',
                    'Network ACLs',
                    'VPC Peering',
                    'VPC Endpoints',
                    'AWS PrivateLink',
                    'Transit Gateway',
                    'VPN Connection',
                    'Direct Connect',
                    'VPC Cost Optimization'
                ]
            },
            {
                name: 'CloudFront (CDN)',
                subItems: [
                    'CloudFront Overview',
                    'Edge Locations',
                    'Origin Types',
                    'SSL/TLS Support',
                    'AWS Shield',
                    'WAF Integration',
                    'OAI (Origin Access Identity)',
                    'Signed URLs/Cookies',
                    'Lambda@Edge',
                    'CloudFront Functions',
                    'Geo-restriction',
                    'CloudFront Cost Optimization'
                ]
            },
            {
                name: 'Route 53 (DNS)',
                subItems: [
                    'Route 53 Overview',
                    'DNS Record Types',
                    'Simple Routing',
                    'Weighted Routing',
                    'Latency Routing',
                    'Failover Routing',
                    'Geolocation Routing',
                    'Health Checks',
                    'Traffic Flow',
                    'DNSSEC',
                    'Route 53 Cost Optimization'
                ]
            },
            {
                name: 'ELB (Elastic Load Balancing)',
                subItems: [
                    'Application Load Balancer (ALB)',
                    'Network Load Balancer (NLB)',
                    'Gateway Load Balancer (GWLB)',
                    'Path-based Routing',
                    'Host-based Routing',
                    'WebSocket Support',
                    'Lambda Targets',
                    'Static IP Support',
                    'ELB Cost Optimization'
                ]
            },
            {
                name: 'Other Networking Services',
                subItems: [
                    'API Gateway',
                    'Global Accelerator',
                    'App Mesh'
                ]
            }
        ]
    },
    security: {
        name: 'Security, Identity & Compliance',
        total: 33,
        services: [
            {
                name: 'IAM (Identity and Access Management)',
                subItems: [
                    'IAM Overview',
                    'IAM Users',
                    'IAM Groups',
                    'IAM Roles',
                    'IAM Policies',
                    'MFA Configuration',
                    'Password Policies',
                    'Access Keys',
                    'IAM Best Practices'
                ]
            },
            {
                name: 'AWS Organizations',
                subItems: [
                    'Organizations Overview',
                    'Organizational Units (OUs)',
                    'Service Control Policies (SCPs)',
                    'Consolidated Billing',
                    'Account Management'
                ]
            },
            {
                name: 'KMS (Key Management Service)',
                subItems: [
                    'KMS Overview',
                    'AWS Managed Keys',
                    'Customer Managed Keys',
                    'Key Rotation',
                    'KMS Cost Optimization'
                ]
            },
            {
                name: 'Secrets Manager',
                subItems: [
                    'Secrets Manager Overview',
                    'Automatic Rotation',
                    'Cross-Region Replication',
                    'vs Parameter Store'
                ]
            },
            {
                name: 'Other Security Services',
                subItems: [
                    'AWS WAF',
                    'AWS Shield',
                    'GuardDuty',
                    'Security Hub',
                    'Inspector',
                    'Macie',
                    'Certificate Manager (ACM)',
                    'CloudHSM'
                ]
            }
        ]
    },
    management: {
        name: 'Management & Governance',
        total: 30,
        services: [
            {
                name: 'CloudWatch',
                subItems: [
                    'CloudWatch Overview',
                    'Metrics (Standard & Custom)',
                    'CloudWatch Alarms',
                    'CloudWatch Logs',
                    'CloudWatch Dashboards',
                    'CloudWatch Insights',
                    'Synthetics (Canaries)',
                    'Log Retention',
                    'CloudWatch Cost Optimization'
                ]
            },
            {
                name: 'CloudTrail',
                subItems: [
                    'CloudTrail Overview',
                    'Event History',
                    'Trails',
                    'CloudTrail Insights',
                    'Management vs Data Events',
                    'CloudTrail Cost Optimization'
                ]
            },
            {
                name: 'AWS Config',
                subItems: [
                    'AWS Config Overview',
                    'Configuration Recorder',
                    'Config Rules',
                    'Conformance Packs',
                    'Config Cost Optimization'
                ]
            },
            {
                name: 'Other Management Services',
                subItems: [
                    'Systems Manager',
                    'CloudFormation',
                    'Control Tower',
                    'Service Catalog',
                    'Trusted Advisor',
                    'Cost Explorer',
                    'AWS Budgets',
                    'Compute Optimizer'
                ]
            }
        ]
    },
    analytics: {
        name: 'Analytics Services',
        total: 24,
        services: [
            {
                name: 'Athena',
                subItems: [
                    'Athena Overview',
                    'Query S3 with SQL',
                    'Supported Formats',
                    'Partitioning',
                    'Athena Cost Optimization'
                ]
            },
            {
                name: 'EMR (Elastic MapReduce)',
                subItems: [
                    'EMR Overview',
                    'Hadoop/Spark Support',
                    'EMR Cluster Types',
                    'EMR Serverless',
                    'EMR on EKS',
                    'EMR Cost Optimization'
                ]
            },
            {
                name: 'Kinesis',
                subItems: [
                    'Kinesis Overview',
                    'Data Streams',
                    'Data Firehose',
                    'Data Analytics',
                    'Video Streams',
                    'Shards Management',
                    'On-Demand Mode',
                    'Kinesis Cost Optimization'
                ]
            },
            {
                name: 'Other Analytics Services',
                subItems: [
                    'Redshift',
                    'AWS Glue',
                    'QuickSight',
                    'Data Pipeline',
                    'Lake Formation'
                ]
            }
        ]
    },
    integration: {
        name: 'Application Integration',
        total: 24,
        services: [
            {
                name: 'SQS (Simple Queue Service)',
                subItems: [
                    'SQS Overview',
                    'Standard Queue',
                    'FIFO Queue',
                    'Visibility Timeout',
                    'Dead Letter Queue',
                    'Long Polling',
                    'Message Retention',
                    'SQS Cost Optimization'
                ]
            },
            {
                name: 'SNS (Simple Notification Service)',
                subItems: [
                    'SNS Overview',
                    'Topics & Subscriptions',
                    'Protocols (SQS, Lambda, Email, SMS)',
                    'Message Filtering',
                    'FIFO Topics',
                    'SNS Cost Optimization'
                ]
            },
            {
                name: 'EventBridge',
                subItems: [
                    'EventBridge Overview',
                    'Event Buses',
                    'Rules & Patterns',
                    'Target Types',
                    'Schema Registry',
                    'Archive & Replay',
                    'EventBridge Cost Optimization'
                ]
            },
            {
                name: 'Other Integration Services',
                subItems: [
                    'Step Functions',
                    'AppSync',
                    'MQ'
                ]
            }
        ]
    },
    devtools: {
        name: 'Developer Tools',
        total: 16,
        services: [
            {
                name: 'CodeCommit',
                subItems: [
                    'CodeCommit Overview',
                    'Git Repository Management'
                ]
            },
            {
                name: 'CodeBuild',
                subItems: [
                    'CodeBuild Overview',
                    'Build Environments',
                    'Build Minutes',
                    'CodeBuild Cost Optimization'
                ]
            },
            {
                name: 'CodeDeploy',
                subItems: [
                    'CodeDeploy Overview',
                    'Deployment Types',
                    'Blue/Green Deployments'
                ]
            },
            {
                name: 'CodePipeline',
                subItems: [
                    'CodePipeline Overview',
                    'Pipeline Stages'
                ]
            },
            {
                name: 'Other Dev Tools',
                subItems: [
                    'Cloud9',
                    'X-Ray',
                    'CodeStar',
                    'CodeArtifact',
                    'CloudShell'
                ]
            }
        ]
    },
    containers: {
        name: 'Containers & Orchestration',
        total: 17,
        services: [
            {
                name: 'ECS (Elastic Container Service)',
                subItems: [
                    'ECS Overview',
                    'EC2 Launch Type',
                    'Fargate Launch Type',
                    'Task Definitions',
                    'Services & Clusters',
                    'Fargate Spot',
                    'ECS Cost Optimization'
                ]
            },
            {
                name: 'EKS (Elastic Kubernetes Service)',
                subItems: [
                    'EKS Overview',
                    'Control Plane',
                    'Managed Node Groups',
                    'Fargate for EKS',
                    'EKS Add-ons',
                    'EKS Cost Optimization'
                ]
            },
            {
                name: 'Other Container Services',
                subItems: [
                    'ECR (Container Registry)',
                    'App Runner',
                    'Copilot',
                    'ECS vs EKS'
                ]
            }
        ]
    },
    serverless: {
        name: 'Serverless Services',
        total: 12,
        services: [
            {
                name: 'Lambda',
                subItems: [
                    'Lambda Deep Dive',
                    'Event-driven Architecture'
                ]
            },
            {
                name: 'Step Functions',
                subItems: [
                    'Step Functions Overview',
                    'Standard Workflows',
                    'Express Workflows',
                    'State Types',
                    'Error Handling'
                ]
            },
            {
                name: 'API Gateway',
                subItems: [
                    'API Gateway Overview',
                    'REST APIs',
                    'HTTP APIs',
                    'WebSocket APIs'
                ]
            },
            {
                name: 'Other Serverless',
                subItems: [
                    'AppSync'
                ]
            }
        ]
    },
    ml: {
        name: 'Machine Learning & AI',
        total: 28,
        services: [
            {
                name: 'SageMaker',
                subItems: [
                    'SageMaker Overview',
                    'Studio Environment',
                    'Training Jobs',
                    'Inference Hosting',
                    'Autopilot (AutoML)',
                    'Ground Truth',
                    'Serverless Inference',
                    'Multi-Model Endpoints',
                    'SageMaker Cost Optimization'
                ]
            },
            {
                name: 'Rekognition',
                subItems: [
                    'Rekognition Overview',
                    'Face Detection',
                    'Object Detection',
                    'Text in Images',
                    'Content Moderation'
                ]
            },
            {
                name: 'Textract',
                subItems: [
                    'Textract Overview',
                    'Document Text Detection',
                    'Forms & Tables Analysis'
                ]
            },
            {
                name: 'Other AI Services',
                subItems: [
                    'Comprehend (NLP)',
                    'Translate',
                    'Polly (Text-to-Speech)',
                    'Transcribe (Speech-to-Text)',
                    'Lex (Chatbots)',
                    'Personalize',
                    'Forecast',
                    'Kendra',
                    'Bedrock'
                ]
            }
        ]
    },
    cost: {
        name: 'Cost Optimization',
        total: 36,
        services: [
            {
                name: 'Compute Optimization',
                subItems: [
                    'EC2 Reserved Instances',
                    'EC2 Savings Plans',
                    'Spot Instances Strategy',
                    'Graviton Migration',
                    'Right-sizing Analysis',
                    'Instance Scheduler',
                    'Auto Scaling Setup',
                    'Lambda Optimization'
                ]
            },
            {
                name: 'Storage Optimization',
                subItems: [
                    'S3 Lifecycle Policies',
                    'S3 Intelligent-Tiering',
                    'Compression Strategies',
                    'EBS gp2 to gp3',
                    'Delete Unattached Volumes',
                    'EFS Lifecycle',
                    'Snapshot Cleanup'
                ]
            },
            {
                name: 'Database Optimization',
                subItems: [
                    'RDS Reserved Instances',
                    'Aurora vs RDS',
                    'Database Right-sizing',
                    'DynamoDB Capacity',
                    'DynamoDB Reserved',
                    'ElastiCache Reserved'
                ]
            },
            {
                name: 'Network Optimization',
                subItems: [
                    'CloudFront Implementation',
                    'Same-AZ Traffic',
                    'VPC Endpoints',
                    'NAT Optimization',
                    'Data Transfer Analysis'
                ]
            },
            {
                name: 'Tools & Strategies',
                subItems: [
                    'Cost Explorer',
                    'Cost Anomaly Detection',
                    'Compute Optimizer',
                    'Tagging Strategy',
                    'Billing Alerts',
                    'AWS Organizations',
                    'Regular Reviews',
                    'Third-party Tools'
                ]
            }
        ]
    }
};

let progress = JSON.parse(localStorage.getItem('awsProgress')) || {};

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

function renderService(service, categoryKey) {
    let html = `<div class="service-item">`;
    html += `<div class="service-header">`;
    html += `<input type="checkbox" class="checkbox" data-category="${categoryKey}" data-service="${service.name}" onchange="updateProgress(this)">`;
    html += `<span class="service-name">${service.name}</span>`;
    html += `</div>`;
    
    if (service.subItems && service.subItems.length > 0) {
        html += `<div class="sub-items">`;
        service.subItems.forEach(subItem => {
            const key = `${categoryKey}-${service.name}-${subItem}`;
            const checked = progress[key] ? 'checked' : '';
            html += `<div class="sub-item">`;
            html += `<input type="checkbox" class="checkbox" data-key="${key}" ${checked} onchange="updateSubProgress(this)">`;
            html += `<span>${subItem}</span>`;
            html += `</div>`;
        });
        html += `</div>`;
    }
    
    html += `</div>`;
    return html;
}

function renderCategory(categoryKey) {
    const category = servicesData[categoryKey];
    const container = document.getElementById(`${categoryKey}-content`);
    let html = '';
    
    category.services.forEach(service => {
        html += renderService(service, categoryKey);
    });
    
    container.innerHTML = html;
    updateCategoryProgress(categoryKey);
}

function updateSubProgress(checkbox) {
    const key = checkbox.dataset.key;
    if (checkbox.checked) {
        progress[key] = true;
    } else {
        delete progress[key];
    }
    localStorage.setItem('awsProgress', JSON.stringify(progress));
    updateAllProgress();
}

function updateProgress(checkbox) {
    const category = checkbox.dataset.category;
    const serviceName = checkbox.dataset.service;
    const service = servicesData[category].services.find(s => s.name === serviceName);
    
    if (service && service.subItems) {
        service.subItems.forEach(subItem => {
            const key = `${category}-${serviceName}-${subItem}`;
            const subCheckbox = document.querySelector(`[data-key="${key}"]`);
            if (subCheckbox) {
                subCheckbox.checked = checkbox.checked;
                if (checkbox.checked) {
                    progress[key] = true;
                } else {
                    delete progress[key];
                }
            }
        });
        localStorage.setItem('awsProgress', JSON.stringify(progress));
        updateAllProgress();
    }
}

function updateCategoryProgress(categoryKey) {
    const category = servicesData[categoryKey];
    let completed = 0;
    
    category.services.forEach(service => {
        if (service.subItems) {
            service.subItems.forEach(subItem => {
                const key = `${categoryKey}-${service.name}-${subItem}`;
                if (progress[key]) completed++;
            });
        }
    });
    
    const percentage = Math.round((completed / category.total) * 100);
    
    document.getElementById(`${categoryKey}-progress-text`).textContent = `${completed}/${category.total}`;
    const progressBar = document.getElementById(`${categoryKey}-progress`);
    if (progressBar) {
        progressBar.style.width = percentage + '%';
        progressBar.textContent = percentage + '%';
    }
    
    return { completed, total: category.total, percentage };
}

function updateAllProgress() {
    let totalCompleted = 0;
    let totalItems = 486;
    const categoryProgress = [];
    
    Object.keys(servicesData).forEach(key => {
        const catProgress = updateCategoryProgress(key);
        totalCompleted += catProgress.completed;
        categoryProgress.push({
            name: servicesData[key].name,
            completed: catProgress.completed,
            total: catProgress.total,
            percentage: catProgress.percentage
        });
    });
    
    const overallPercentage = Math.round((totalCompleted / totalItems) * 100);
    
    document.getElementById('overall-percentage').textContent = overallPercentage + '%';
    document.getElementById('completed-total').textContent = totalCompleted;
    
    const overallProgress = document.getElementById('overall-progress');
    overallProgress.style.width = overallPercentage + '%';
    overallProgress.textContent = overallPercentage + '%';
    
    const masterCount = categoryProgress.filter(c => c.percentage === 100).length;
    document.getElementById('services-mastered').textContent = masterCount;
    
    updateCategoryChart(categoryProgress);
}

function updateCategoryChart(categoryProgress) {
    const chartContainer = document.getElementById('category-chart');
    let html = '';
    
    categoryProgress.forEach(cat => {
        html += `
            <div class="bar-item">
                <div class="bar-label">${cat.name}</div>
                <div class="bar">
                    <div class="bar-fill" style="width: ${cat.percentage}%">${cat.percentage}%</div>
                </div>
                <div class="bar-percentage">${cat.completed}/${cat.total}</div>
            </div>
        `;
    });
    
    chartContainer.innerHTML = html;
}

function exportData() {
    let csv = 'Category,Service,Item,Completed\n';
    
    Object.keys(servicesData).forEach(categoryKey => {
        const category = servicesData[categoryKey];
        category.services.forEach(service => {
            if (service.subItems) {
                service.subItems.forEach(subItem => {
                    const key = `${categoryKey}-${service.name}-${subItem}`;
                    const completed = progress[key] ? 'Yes' : 'No';
                    csv += `"${category.name}","${service.name}","${subItem}","${completed}"\n`;
                });
            }
        });
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'aws-learning-progress.csv';
    a.click();
    window.URL.revokeObjectURL(url);
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        localStorage.removeItem('awsProgress');
        progress = {};
        location.reload();
    }
}

// Initialize all categories on page load
document.addEventListener('DOMContentLoaded', function() {
    Object.keys(servicesData).forEach(key => {
        renderCategory(key);
    });
    updateAllProgress();
});
