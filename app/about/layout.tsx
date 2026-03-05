import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Abdullahi N. Buhmean — Software Engineer, Systems Architect, AI Builder, and Founder building scalable digital infrastructure.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
