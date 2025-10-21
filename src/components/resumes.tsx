import React from "react";
import "../styles/style.css";
import banner from "../assets/banner.png";

const Resume: React.FC = () => {
    return (
        <article
            className="resume"
            role="document"
            aria-label="Cloud Engineer resume — Bereket Habtu"
        >
            {/* Banner Header */}
            <header>
                <div className="banner-container">
                    <img src={banner} alt="Banner" className="banner" />

                    {/* Animated AWS icons overlay */}
                    <div className="banner-effects">
                        <img src="/icons/security.svg" alt="Security" className="effect-icon security" />
                        <img src="/icons/database.svg" alt="Database" className="effect-icon database" />
                        <img src="/icons/compute.svg" alt="Compute" className="effect-icon compute" />
                        <img src="/icons/python.svg" alt="Python" className="effect-icon python" />
                    </div>
                </div>
                <div className="contact-line">
                    Chicago, IL | (773) 807-6443 |
                    <a href="mailto:bereketmhabtu@gmail.com"> Gmail</a> |
                    <a
                        href="https://www.linkedin.com/in/bereket-habtu/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>{" "}
                    |
                    <a
                        href="https://github.com/berekethabtu1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>{" "}
                    |

                </div>
            </header>

            {/* Main Content */}
            <main>
                {/* Left Panel */}
                <section className="panel" aria-labelledby="summary-heading">
                    <div className="section">
                        <h2 id="summary-heading">PROFESSIONAL Summary</h2>
                        <p className="summary">
                            AWS Certified Solutions Architect Associate & Cloud Practitioner
                            with hands-on experience as a Cloud Support Engineer. Skilled in
                            designing, deploying, and managing secure, cost-effective AWS
                            infrastructure, with expertise in Python, Terraform (IaC),
                            automation, troubleshooting, monitoring, incident response, and
                            cloud security best practices in Agile environments.
                        </p>
                    </div>
                    { /*Techical skills */}
                    <h2>🧰 Tech Stack</h2>

                    <h3>☁️ Cloud & Infrastructure</h3>
                    <p className="badges">
                        <img src="https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" />
                        <img src="https://img.shields.io/badge/EC2-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="EC2" />
                        <img src="https://img.shields.io/badge/S3-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="S3" />
                        <img src="https://img.shields.io/badge/RDS-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="RDS" />
                        <img src="https://img.shields.io/badge/Lambda-FF9900?style=for-the-badge&logo=aws-lambda&logoColor=white" alt="Lambda" />
                        <img src="https://img.shields.io/badge/IAM-FF9900?style=for-the-badge&logo=aws-identity-and-access-management&logoColor=white" alt="IAM" />
                        <img src="https://img.shields.io/badge/VPC-FF9900?style=for-the-badge&logo=aws-virtual-private-cloud&logoColor=white" alt="VPC" />
                        <img src="https://img.shields.io/badge/CloudFormation-FF9900?style=for-the-badge&logo=aws-cloudformation&logoColor=white" alt="CloudFormation" />
                        <img src="https://img.shields.io/badge/CloudWatch-FF9900?style=for-the-badge&logo=aws&logoColor=white" alt="CloudWatch" />
                        <img src="https://img.shields.io/badge/CloudTrail-FF9900?style=for-the-badge&logo=aws&logoColor=white" alt="CloudTrail" />
                        <img src="https://img.shields.io/badge/DynamoDB-FF9900?style=for-the-badge&logo=amazon-dynamodb&logoColor=white" alt="DynamoDB" />
                        <img src="https://img.shields.io/badge/ECS-FF9900?style=for-the-badge&logo=amazon-ecs&logoColor=white" alt="ECS" />
                        <img src="https://img.shields.io/badge/EKS-FF9900?style=for-the-badge&logo=amazon-eks&logoColor=white" alt="EKS" />
                        <img src="https://img.shields.io/badge/EBS-FF9900?style=for-the-badge&logo=aws&logoColor=white" alt="EBS" />
                        <img src="https://img.shields.io/badge/ELB-FF9900?style=for-the-badge&logo=aws&logoColor=white" alt="Elastic Load Balancing" />
                        <img src="https://img.shields.io/badge/KMS-FF9900?style=for-the-badge&logo=aws-kms&logoColor=white" alt="KMS" />
                        <img src="https://img.shields.io/badge/Systems%20Manager-FF9900?style=for-the-badge&logo=aws&logoColor=white" alt="Systems Manager" />
                    </p>

                    <h3>🐍 Programming & Automation</h3>
                    <p className="badges">
                        <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
                        <img src="https://img.shields.io/badge/Terraform-5E60CE?style=for-the-badge&logo=terraform&logoColor=white" alt="Terraform" />
                        <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                        <img src="https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnubash&logoColor=white" alt="Bash" />
                        <img src="https://img.shields.io/badge/AWS%20CLI-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS CLI" />
                    </p>

                    <h3>🛠️ Tools & DevOps</h3>
                    <p className="badges">
                        <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white" alt="VSCode" />
                        <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white" alt="Jenkins" />
                        <img src="https://img.shields.io/badge/CodePipeline-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="CodePipeline" />
                        <img src="https://img.shields.io/badge/CloudWatch-FF9900?style=for-the-badge&logo=aws&logoColor=white" alt="CloudWatch" />
                        <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
                    </p>


                    {/* Experience */}
                    <div className="section">
                        <h2>Experience</h2>
                        <div className="experience">
                            <div className="item" aria-label="Cloud Support Engineer at KitelyTech.">
                                <h3>Junior Cloud Support Engineer — KitelyTech</h3>
                                <div className="meta">Remote • June 2023 — Present</div>
                                <ul className="resp">
                                    <li>
                                        Designed and deployed secure AWS environments using VPC,
                                        EC2, IAM, and Security Groups.
                                    </li>
                                    <li>
                                        Automated EC2 instance provisioning and configuration using
                                        Python and Terraform, reducing deployment time by 40%.
                                    </li>
                                    <li>
                                        Managed S3 storage solutions with versioning and lifecycle
                                        policies to optimize costs and ensure data integrity.
                                    </li>
                                    <li>
                                        Implemented CloudWatch and CloudTrail monitoring to
                                        proactively track system performance and security events.
                                    </li>
                                </ul>
                            </div>

                            <div className="item" aria-label="IT Support at ABM Industries">
                                <h3>IT Support — ABM Industries</h3>
                                <div className="meta">Chicago, IL • Dec 2022 — Present</div>
                                <ul className="resp">
                                    <li>
                                        Managed digital parking systems and troubleshot technical
                                        issues to ensure uptime and user satisfaction.
                                    </li>
                                    <li>
                                        Maintained accurate operational records using Google
                                        Workspace and Microsoft Office.
                                    </li>
                                    <li>
                                        Collaborated with cross-functional teams to resolve
                                        incidents and enforce IT standards.
                                    </li>
                                    <li>
                                        Provided technical support for hardware, software, and
                                        network issues for ABM employees and systems.
                                    </li>
                                    <li>
                                        Troubleshoot connectivity, printer, and VPN issues to
                                        minimize downtime.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="section">
                        <h2>Projects</h2>
                        <div className="project">
                            <strong>Mentro app</strong>
                            <div className="meta">GitHub • 2023</div>
                            <p className="summary">
                                A professional development platform connecting mentors and
                                mentees to schedule sessions, exchange feedback, and track
                                career goals. A cloud-based web app that uploads resumes to S3
                                and stores metadata in DynamoDB. Automated EC2 and VPC
                                deployment using Terraform and Python. Script to automate IAM
                                user creation and least-privilege enforcement.
                            </p>

                            <p className="contact-lines">Service Used</p>

                            <div className="project-icons">
                                <div className="icon">
                                    <svg viewBox="0 0 64 64" fill="#3776AB">
                                        <path d="M32 0C14.355 0 0 14.355 0 32s14.355 32 32 32 32-14.355 32-32S49.645 0 32 0zm0 58C17.664 58 6 46.336 6 32S17.664 6 32 6s26 11.664 26 26-11.664 26-26 26z" />
                                    </svg>
                                    <p>Python</p>
                                </div>

                                <div className="icon">
                                    <svg viewBox="0 0 100 100">
                                        <path d="M50 10 L60 30 L50 50 L40 30 Z" fill="#FF9900" />
                                        <rect x="45" y="50" width="10" height="30" fill="#FF9900" />
                                    </svg>
                                    <p>AWS IAM</p>
                                </div>

                                <div className="icon">
                                    <svg viewBox="0 0 64 64" fill="#7B42BC">
                                        <path d="M32 0L24 12l8 12 8-12-8-12zm0 64l8-12-8-12-8 12 8 12z" />
                                    </svg>
                                    <p>Terraform</p>
                                </div>

                                <div className="icon">
                                    <svg viewBox="0 0 100 100">
                                        <rect x="20" y="20" width="60" height="60" fill="#FF9900" />
                                    </svg>
                                    <p>AWS EC2</p>
                                </div>

                                <div className="icon">
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="30" fill="#FF9900" />
                                    </svg>
                                    <p>AWS Lambda</p>
                                </div>

                                <div className="icon">
                                    <svg viewBox="0 0 100 100">
                                        <path d="M20 20 L80 20 L80 80 L20 80 Z" fill="#FF9900" />
                                    </svg>
                                    <p>API Gateway</p>
                                </div>

                                <div className="icon">
                                    <svg viewBox="0 0 100 100">
                                        <rect x="20" y="20" width="60" height="60" fill="#FF9900" />
                                    </svg>
                                    <p>AWS S3</p>
                                </div>

                                <div className="icon">
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="30" fill="#FF9900" />
                                    </svg>
                                    <p>DynamoDB</p>
                                </div>

                                <div className="icon">
                                    <svg viewBox="0 0 100 100">
                                        <path d="M20 20 L80 20 L80 80 L20 80 Z" fill="#FF9900" />
                                    </svg>
                                    <p>Amplify</p>
                                </div>

                                <div className="icon">
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="30" fill="#61DAFB" />
                                    </svg>
                                    <p>React</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="section">
                        <h2>Education</h2>
                        <div className="item">
                            <h3>B.S. in Computer Science</h3>
                            <div className="meta">Unity University • 2014 — 2018</div>
                        </div>
                    </div>
                </section>

                {/* Right Column (placeholder for future content) */}
                <aside className="panel right-column" aria-labelledby="skills-heading"></aside>
            </main>
        </article>
    );
};

export default Resume;
