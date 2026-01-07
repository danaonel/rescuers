import { SocialLink } from "@shared/schema";
import { SocialIcon } from "./SocialIcon";

interface FooterProps {
  name: string;
  links: SocialLink[];
}

export function Footer({ name, links }: FooterProps) {
  return (
    <footer className="py-12 border-t border-border/40 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-bold">{name}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 transform hover:scale-110"
                aria-label={link.platform}
              >
                <SocialIcon platform={link.platform} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
