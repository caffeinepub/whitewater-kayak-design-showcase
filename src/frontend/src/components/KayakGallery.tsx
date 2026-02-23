import { useGetAllKayakDesigns } from '../hooks/useQueries';
import KayakCard from './KayakCard';
import { Loader2, Waves } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function KayakGallery() {
  const { data: designs, isLoading, error } = useGetAllKayakDesigns();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="text-muted-foreground">Loading kayak designs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-12">
        <Alert variant="destructive">
          <AlertTitle>Error Loading Designs</AlertTitle>
          <AlertDescription>
            Unable to fetch kayak designs. Please try again later.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (!designs || designs.length === 0) {
    return (
      <div className="container py-20">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="rounded-full bg-muted p-6">
            <Waves className="h-12 w-12 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-display font-semibold">No Designs Yet</h3>
          <p className="text-muted-foreground max-w-md">
            Be the first to add a whitewater kayak design to the gallery!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-display font-bold mb-2">
          Latest Designs
        </h2>
        <p className="text-muted-foreground">
          {designs.length} {designs.length === 1 ? 'design' : 'designs'} available
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {designs.map((design, index) => (
          <KayakCard key={`${design.name}-${index}`} design={design} />
        ))}
      </div>
    </div>
  );
}
