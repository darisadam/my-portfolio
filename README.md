# DevOps Engineer Portfolio

<div align="center">

![Portfolio Banner](https://via.placeholder.com/1200x300/0f172a/3b82f6?text=DevOps+Engineer+Portfolio)

**A modern, interactive portfolio website demonstrating the convergence of Mobile Development precision and Cloud-Native scalability.**

[![Build Status](https://img.shields.io/github/workflow/status/yourusername/portfolio/CI?style=flat-square)](https://github.com/yourusername/portfolio/actions)
[![Docker Image](https://img.shields.io/badge/docker-ready-blue?style=flat-square&logo=docker)](https://hub.docker.com/r/yourusername/devops-portfolio)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

</div>

---

## 🎯 Overview

This project is not just a showcase of my work—it is a **live demonstration** of my engineering capabilities, featuring:

- ✅ Complete CI/CD pipeline
- ✅ Containerization with Docker
- ✅ Infrastructure as Code (IaC)
- ✅ Production-ready Kubernetes manifests
- ✅ Cloud-native architecture

---

## 🚀 Architecture & Tech Stack

This project uses a hybrid architecture to showcase full-stack and DevOps proficiencies:

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | React 18, Vite, Tailwind CSS | Mobile-First Design & Fast Development |
| **Containerization** | Docker | Multi-stage builds for optimized images |
| **Orchestration** | Docker Compose, Kubernetes | Local development & Production scaling |
| **CI/CD** | GitHub Actions | Automated testing, building & deployment |
| **Infrastructure** | Terraform | Cloud provisioning (AWS/GCP/Azure ready) |

---

## 📂 Project Structure

This repository follows a modular, scalable structure:

```
.
├── infra/                    # Infrastructure as Code
│   ├── terraform/           # Terraform configurations
│   └── k8s/                 # Kubernetes manifests
├── src/
│   ├── components/          # Reusable UI components
│   ├── data/                # JSON-based content (CMS simulation)
│   ├── pages/               # Application views
│   └── styles/              # Global styling (Tailwind)
├── .github/
│   └── workflows/           # CI/CD pipeline definitions
├── Dockerfile               # Production-grade container
├── docker-compose.yml       # Local development orchestration
└── README.md                # You are here!
```

---

## 🛠️ Quick Start

### Option 1: Run with Docker (Recommended)

The easiest way to view the portfolio is using Docker. This ensures you are viewing the exact environment used in production.

```bash
# 1. Build the image
docker build -t devops-portfolio .

# 2. Run the container
docker run -p 8080:80 devops-portfolio
```

🌐 Visit **`http://localhost:8080`** in your browser.

### Option 2: Local Development

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/devops-portfolio.git
cd devops-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

🌐 Visit **`http://localhost:5173`** in your browser.

### Option 3: Docker Compose (Full Stack)

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

---

## 🔧 DevOps Highlights

### 🐳 Multi-Stage Docker Builds

The `Dockerfile` uses a multi-stage build process:

1. **Build Stage**: Compiles the React app in a Node.js environment
2. **Production Stage**: Copies static artifacts to a lightweight Nginx Alpine image

**Result**: Image size reduced by over **90%** (from ~1.2GB to ~25MB)

```dockerfile
# Stage 1: Build
FROM node:18-alpine AS builder
# ... build process

# Stage 2: Production
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
```

### 🏗️ Infrastructure as Code

Check the `infra/` folder to see how supporting infrastructure is provisioned:

- **Terraform modules** for cloud resources (VPC, ECS/EKS, Load Balancers)
- **Kubernetes manifests** for container orchestration
- **GitOps-ready** configurations

### ⚙️ Automated CI/CD Workflows

Every push to `main` triggers a GitHub Actions workflow that:

1. ✅ Runs linters (ESLint, Prettier)
2. 🧪 Executes unit tests
3. 🏗️ Builds Docker images
4. 🚀 Deploys to staging/production
5. 📊 Generates deployment reports

---

## 📊 Performance Metrics

| Metric | Value |
|--------|-------|
| **Lighthouse Score** | 95+ (Performance) |
| **Docker Image Size** | ~25MB (production) |
| **Build Time** | <2 minutes (CI/CD) |
| **First Contentful Paint** | <1.5s |

---

## 🚀 Deployment

### Deploy to Kubernetes

```bash
# Apply manifests
kubectl apply -f infra/k8s/

# Check deployment status
kubectl get pods -n portfolio

# Access via LoadBalancer
kubectl get svc -n portfolio
```

### Deploy to AWS (Terraform)

```bash
cd infra/terraform

# Initialize Terraform
terraform init

# Plan infrastructure changes
terraform plan

# Apply changes
terraform apply
```

---

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run integration tests
npm run test:integration

# Generate coverage report
npm run test:coverage
```

---

## 📬 Contact

I am currently **open to roles** focusing on DevOps, SRE, or Mobile Infrastructure.

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/damdaris)
[![Email](https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail)](mailto:darisadam.office@gmail.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-green?style=for-the-badge&logo=google-chrome)](https://darisadam.online)

</div>