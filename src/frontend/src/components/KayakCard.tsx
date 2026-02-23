import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar } from 'lucide-react';
import type { KayakDesign } from '../backend';

interface KayakCardProps {
  design: KayakDesign;
}

export default function KayakCard({ design }: KayakCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-flow border-border/50 hover:border-primary/30">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={design.imageUrl}
            alt={design.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EKayak Image%3C/text%3E%3C/svg%3E';
            }}
          />
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
              <Calendar className="mr-1 h-3 w-3" />
              {design.designYear.toString()}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-5">
        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
          {design.name}
        </CardTitle>
        <p className="text-sm text-muted-foreground font-medium">
          {design.manufacturer}
        </p>
      </CardContent>
      
      <CardFooter className="p-5 pt-0">
        <Button
          asChild
          className="w-full group/btn"
          variant="outline"
        >
          <a
            href={design.externalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Details
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
