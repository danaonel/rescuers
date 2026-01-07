import { useContent } from "@/hooks/use-content";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { DonationSection } from "@/components/DonationSection";
import { Footer } from "@/components/Footer";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Home() {
  const { data: content, isLoading, error, lang } = useContent();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (content?.name) {
      document.title = content.name;
    }
  }, [content?.name]);

  const scrollToDonate = () => {
    const element = document.getElementById('donate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 animate-spin text-primary/50" />
          <p className="text-muted-foreground font-medium animate-pulse">Loading experience...</p>
        </div>
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-serif font-bold text-destructive mb-2">Something went wrong</h2>
          <p className="text-muted-foreground">We couldn't load the content. Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {content.logoUrl ? (
              <img 
                src={content.logoUrl} 
                alt={content.name} 
                className="h-8 md:h-10 w-auto object-contain"
              />
            ) : (
              <span className="text-xl md:text-2xl font-serif font-bold tracking-tight">
                {content.name}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-muted rounded-full p-1">
              <Link href="/en">
                <a className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${lang === 'en' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                  EN
                </a>
              </Link>
              <Link href="/ro">
                <a className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${lang === 'ro' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                  RO
                </a>
              </Link>
            </div>

            <button 
              onClick={scrollToDonate}
              className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 border border-primary/20 rounded-full hover:bg-primary/5"
            >
              {lang === 'ro' ? 'Donează' : 'Donate'}
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Hero 
          tagline={content.tagline} 
          description={content.description} 
          onDonateClick={scrollToDonate}
        />
        
        <Gallery images={content.gallery} />
        
        <DonationSection info={content.donation} />
      </main>

      <Footer name={content.name} links={content.socialLinks} />
    </div>
  );
}
