// src/components/layout/navbar.tsx
export const Navbar = () => {
  return (
    <header className="h-16 bg-background border-b flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="text-sm text-muted-foreground">Welcome, Sarthak!</div>
    </header>
  );
};
