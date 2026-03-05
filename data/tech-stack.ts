import { TechCategory } from "@/types";

export const techStack: TechCategory[] = [
  {
    category: "Backend",
    technologies: [
      {
        name: "Node.js",
        description:
          "High-performance server-side JavaScript runtime for I/O-intensive applications.",
      },
      {
        name: "FastAPI",
        description:
          "Modern Python framework for building high-performance APIs with automatic OpenAPI docs.",
      },
      {
        name: "PostgreSQL",
        description:
          "Production-grade relational database with advanced features like RLS and JSONB.",
      },
      {
        name: "Prisma",
        description:
          "Next-generation ORM for Node.js with type-safe database access.",
      },
      {
        name: "Redis",
        description:
          "In-memory data structure store for caching, queuing, and session management.",
      },
      {
        name: "GraphQL",
        description:
          "Flexible query language for APIs with strongly typed schemas and efficient data fetching.",
      },
      {
        name: "tRPC",
        description:
          "End-to-end type-safe APIs without code generation — full-stack TypeScript.",
      },
      {
        name: "Drizzle ORM",
        description:
          "Lightweight, type-safe SQL ORM with zero-overhead query building.",
      },
    ],
  },
  {
    category: "Frontend",
    technologies: [
      {
        name: "Next.js",
        description:
          "Production React framework with App Router, RSC, and edge runtime support.",
      },
      {
        name: "React",
        description:
          "Component-based UI library for building dynamic, reactive interfaces.",
      },
      {
        name: "TypeScript",
        description:
          "Statically typed superset of JavaScript for building reliable, maintainable systems.",
      },
      {
        name: "TailwindCSS",
        description:
          "Utility-first CSS framework for building consistent, scalable design systems.",
      },
      {
        name: "Framer Motion",
        description:
          "Production-ready animation library for React with layout animation support.",
      },
      {
        name: "Zustand",
        description:
          "Minimal, unopinionated state management for React applications.",
      },
      {
        name: "React Query",
        description:
          "Powerful async state management for data fetching, caching, and synchronization.",
      },
    ],
  },
  {
    category: "App Development",
    technologies: [
      {
        name: "React Native",
        description:
          "Cross-platform mobile framework sharing logic and components across iOS and Android.",
      },
      {
        name: "Expo",
        description:
          "Managed workflow for React Native with OTA updates, EAS builds, and native APIs.",
      },
      {
        name: "Flutter",
        description:
          "Google's UI toolkit for crafting natively compiled apps across mobile, web, and desktop.",
      },
      {
        name: "Capacitor",
        description:
          "Bridges web apps to native mobile and desktop using a unified plugin API.",
      },
      {
        name: "Deep Linking",
        description:
          "Universal links and app scheme routing for seamless web-to-app navigation.",
      },
      {
        name: "Push Notifications",
        description:
          "FCM and APNs integration for real-time user engagement across platforms.",
      },
      {
        name: "Offline First",
        description:
          "Local-first architecture with sync strategies for reliable mobile experiences.",
      },
      {
        name: "App Store Deployment",
        description:
          "End-to-end publishing to Apple App Store and Google Play with CI/CD pipelines.",
      },
    ],
  },
  {
    category: "AI",
    technologies: [
      {
        name: "OpenAI",
        description:
          "GPT-4 and GPT-4o integration for intelligent automation and generation.",
      },
      {
        name: "Anthropic Claude",
        description:
          "Claude API for safe, steerable AI with large context windows and tool use.",
      },
      {
        name: "LangChain",
        description:
          "Framework for building LLM-powered applications with chains and agents.",
      },
      {
        name: "RAG Pipelines",
        description:
          "Retrieval-augmented generation systems for grounded, accurate AI responses.",
      },
      {
        name: "Vector DBs",
        description:
          "Pinecone, pgvector, and Weaviate for semantic search and embedding storage.",
      },
      {
        name: "Whisper / TTS",
        description:
          "Speech-to-text and text-to-speech pipelines for voice-enabled AI products.",
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      {
        name: "AWS",
        description:
          "Core cloud provider: Lambda, S3, RDS, SQS, ECS, and CloudFormation.",
      },
      {
        name: "GCP",
        description:
          "Google Cloud Platform — BigQuery, Cloud Run, and Firebase for real-time apps.",
      },
      {
        name: "Docker",
        description:
          "Container platform for consistent development and production environments.",
      },
      {
        name: "Kubernetes",
        description:
          "Container orchestration for auto-scaling, self-healing deployments.",
      },
      {
        name: "CI/CD",
        description:
          "Automated testing and deployment pipelines with GitHub Actions.",
      },
      {
        name: "Terraform",
        description:
          "Infrastructure as code for reproducible, version-controlled cloud environments.",
      },
      {
        name: "Serverless",
        description:
          "Event-driven, auto-scaling compute for cost-efficient workloads.",
      },
      {
        name: "Vercel",
        description:
          "Edge-optimized deployment platform for Next.js applications.",
      },
    ],
  },
];
