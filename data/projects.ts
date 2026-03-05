import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-1",
    name: "Distributed API Gateway",
    category: "Backend",
    problem:
      "A fintech startup needed a unified API layer to handle multi-tenant traffic with dynamic routing, authentication, and rate limiting across 12 microservices.",
    architecture:
      "Event-driven gateway using Node.js with Redis for rate-limiting state, JWT-based multi-tenant auth, and dynamic service discovery. Load balanced across regions with health-check failover.",
    stack: ["Node.js", "Redis", "PostgreSQL", "Docker", "AWS", "Nginx"],
    scalability:
      "Horizontal scaling across 3 availability zones. Auto-scaling triggers at 70% CPU. Handles 50k+ req/min with sub-100ms p95 latency.",
  },
  {
    id: "project-2",
    name: "AI Document Intelligence",
    category: "AI / Automation",
    problem:
      "An enterprise required automated extraction and classification of data from thousands of unstructured documents per day with high accuracy requirements.",
    architecture:
      "LLM-powered extraction pipeline with structured output schemas, confidence scoring, and human-in-the-loop validation workflow. Async job queuing with Celery.",
    stack: ["FastAPI", "OpenAI", "Celery", "PostgreSQL", "S3", "Python"],
    scalability:
      "Queue-based architecture processes 10k documents/hour. Retry logic handles transient failures. Cost-optimized with model routing based on document complexity.",
  },
  {
    id: "project-3",
    name: "Real-Time Analytics Platform",
    category: "Data Infrastructure",
    problem:
      "An e-commerce platform needed real-time inventory and sales analytics with sub-second update latency for dashboards serving 500+ concurrent users.",
    architecture:
      "WebSocket-based streaming with event sourcing. CQRS pattern separates write and read models. Materialized views for dashboard queries.",
    stack: ["Next.js", "WebSocket", "PostgreSQL", "TimescaleDB", "Redis"],
    scalability:
      "Read replicas handle dashboard queries. Time-series partitioning keeps query performance constant as data grows. Handles 1M+ events/day.",
  },
  {
    id: "project-4",
    name: "Multi-Tenant SaaS Platform",
    category: "Full Stack",
    problem:
      "A B2B startup needed a white-label SaaS product with complete data isolation, custom branding per tenant, and fine-grained permission systems.",
    architecture:
      "Row-level security in PostgreSQL for data isolation. Subdomain-based tenant routing. Feature flag system for plan-based capability management.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "TailwindCSS"],
    scalability:
      "Supports 1000+ tenants with shared infrastructure. Database connection pooling with PgBouncer. Edge caching for tenant-specific assets.",
  },
  {
    id: "project-5",
    name: "Serverless Event Pipeline",
    category: "Cloud Infrastructure",
    problem:
      "A logistics company needed reliable event processing across their supply chain with guaranteed delivery and exactly-once semantics.",
    architecture:
      "Lambda-based consumer/producer pattern with SQS for guaranteed delivery. Dead letter queues for failed events. Idempotency keys for exactly-once processing.",
    stack: ["AWS Lambda", "SQS", "DynamoDB", "EventBridge", "TypeScript"],
    scalability:
      "Scales to zero when idle. Auto-scales to handle peak traffic of 100k events/hour. 99.99% delivery guarantee with DLQ monitoring.",
  },
];
