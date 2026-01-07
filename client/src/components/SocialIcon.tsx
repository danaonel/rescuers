import { 
  Twitter, 
  Github, 
  Instagram, 
  Linkedin, 
  Facebook, 
  Youtube, 
  Globe, 
  Mail 
} from "lucide-react";

interface SocialIconProps {
  platform: string;
  className?: string;
}

export function SocialIcon({ platform, className }: SocialIconProps) {
  const normalized = platform.toLowerCase().trim();

  switch (normalized) {
    case "twitter":
    case "x":
      return <Twitter className={className} />;
    case "github":
      return <Github className={className} />;
    case "instagram":
      return <Instagram className={className} />;
    case "linkedin":
      return <Linkedin className={className} />;
    case "facebook":
      return <Facebook className={className} />;
    case "youtube":
      return <Youtube className={className} />;
    case "email":
    case "mail":
      return <Mail className={className} />;
    default:
      return <Globe className={className} />;
  }
}
