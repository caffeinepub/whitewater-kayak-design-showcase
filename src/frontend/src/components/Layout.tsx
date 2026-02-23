import { Link, useRouterState } from '@tanstack/react-router';
import { Waves, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiX, SiFacebook, SiInstagram } from 'react-icons/si';

export default function Layout({ children }: { children: React.ReactNode }) {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/assets/generated/kayak-logo.dim_200x200.png" 
              alt="Kayak Design Hub Logo" 
              className="h-10 w-10 transition-transform group-hover:scale-110"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight">
                Kayak Design Hub
              </span>
              <span className="text-xs text-muted-foreground">
                Discover the Latest Whitewater Designs
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-2">
            <Button
              asChild
              variant={currentPath === '/' ? 'default' : 'ghost'}
              size="sm"
            >
              <Link to="/">
                <Waves className="mr-2 h-4 w-4" />
                Gallery
              </Link>
            </Button>
            <Button
              asChild
              variant={currentPath === '/admin' ? 'default' : 'ghost'}
              size="sm"
            >
              <Link to="/admin">
                <Plus className="mr-2 h-4 w-4" />
                Add Design
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border/40 bg-muted/30 mt-16">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} Kayak Design Hub</span>
              <span>•</span>
              <span>Built with ❤️ using</span>
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'kayak-design-hub')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                caffeine.ai
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <SiX className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
