import AddKayakForm from '../components/AddKayakForm';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function Admin() {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <Button asChild variant="ghost" size="sm" className="mb-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gallery
          </Link>
        </Button>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-display font-bold mb-2">
            Add New Design
          </h1>
          <p className="text-muted-foreground">
            Contribute to the whitewater kayaking community
          </p>
        </div>
      </div>

      <AddKayakForm />
    </div>
  );
}
