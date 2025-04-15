"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Remove any extension-added classes during hydration
    document.body.className = "antialiased";
  }, []);

  return <>{children}</>;
}
