'use client';

interface ClientBodyProps {
  children: React.ReactNode;
  className?: string;
}

export default function ClientBody({ children, className }: ClientBodyProps) {
  return (
    <body suppressHydrationWarning className={`antialiased ${className || ''}`}>
      {children}
    </body>
  );
}
