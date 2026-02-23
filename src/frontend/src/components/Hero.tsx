import { Waves } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/hero-rapids.dim_1920x600.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>
      
      <div className="relative container h-full flex flex-col justify-center items-center text-center px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-flow">
          <Waves className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Explore the Latest Designs</span>
        </div>
        
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 max-w-4xl">
          Discover Cutting-Edge
          <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Whitewater Kayak Designs
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          Browse the newest innovations in whitewater kayaking. From playboats to creek boats, 
          explore designs that push the boundaries of performance and style.
        </p>
      </div>
    </section>
  );
}
