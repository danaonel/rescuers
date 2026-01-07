import { DonationInfo } from "@shared/schema";
import { Heart } from "lucide-react";

interface DonationSectionProps {
  info: DonationInfo;
}

export function DonationSection({ info }: DonationSectionProps) {
  return (
    <section id="donate" className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 border border-border/50 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 text-primary mb-6">
            <Heart className="w-8 h-8 fill-current" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            {info.title}
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {info.description}
          </p>
          
          <a
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 w-full sm:w-auto"
          >
            {info.linkText}
          </a>
        </div>
      </div>
    </section>
  );
}
