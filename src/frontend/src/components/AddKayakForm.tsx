import { useState } from 'react';
import { useAddKayakDesign } from '../hooks/useQueries';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, CheckCircle2 } from 'lucide-react';

export default function AddKayakForm() {
  const [formData, setFormData] = useState({
    name: '',
    manufacturer: '',
    designYear: '',
    imageUrl: '',
    externalLink: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const addKayakMutation = useAddKayakDesign();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await addKayakMutation.mutateAsync({
        name: formData.name,
        manufacturer: formData.manufacturer,
        designYear: BigInt(formData.designYear),
        imageUrl: formData.imageUrl,
        externalLink: formData.externalLink,
      });

      // Clear form
      setFormData({
        name: '',
        manufacturer: '',
        designYear: '',
        imageUrl: '',
        externalLink: '',
      });

      // Show success message
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Failed to add kayak design:', error);
    }
  };

  const isFormValid = 
    formData.name.trim() !== '' &&
    formData.manufacturer.trim() !== '' &&
    formData.designYear.trim() !== '' &&
    formData.imageUrl.trim() !== '' &&
    formData.externalLink.trim() !== '' &&
    !isNaN(Number(formData.designYear)) &&
    Number(formData.designYear) > 1900 &&
    Number(formData.designYear) <= new Date().getFullYear() + 1;

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-display">Add New Kayak Design</CardTitle>
        <CardDescription>
          Share the latest whitewater kayak designs with the community
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {showSuccess && (
          <Alert className="mb-6 border-primary/50 bg-primary/5">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <AlertDescription className="text-primary">
              Kayak design added successfully!
            </AlertDescription>
          </Alert>
        )}

        {addKayakMutation.isError && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>
              Failed to add kayak design. Please try again.
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Kayak Name *</Label>
            <Input
              id="name"
              placeholder="e.g., Pyranha Burn III"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="manufacturer">Manufacturer *</Label>
            <Input
              id="manufacturer"
              placeholder="e.g., Pyranha"
              value={formData.manufacturer}
              onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="designYear">Design Year *</Label>
            <Input
              id="designYear"
              type="number"
              placeholder="e.g., 2024"
              min="1900"
              max={new Date().getFullYear() + 1}
              value={formData.designYear}
              onChange={(e) => setFormData({ ...formData, designYear: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="imageUrl">Image URL *</Label>
            <Input
              id="imageUrl"
              type="url"
              placeholder="https://example.com/kayak-image.jpg"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              required
            />
            <p className="text-xs text-muted-foreground">
              Enter a direct link to the kayak image
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="externalLink">External Link *</Label>
            <Input
              id="externalLink"
              type="url"
              placeholder="https://manufacturer.com/product-page"
              value={formData.externalLink}
              onChange={(e) => setFormData({ ...formData, externalLink: e.target.value })}
              required
            />
            <p className="text-xs text-muted-foreground">
              Link to the manufacturer's product page or more details
            </p>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={!isFormValid || addKayakMutation.isPending}
          >
            {addKayakMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Adding Design...
              </>
            ) : (
              'Add Kayak Design'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
