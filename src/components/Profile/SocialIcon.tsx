type Props = {
    href: string;
    icon: React.ReactNode;
    label?: string; // アクセシビリティ用
  };
  
  export default function SocialIcon({ href, icon, label }: Props) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md hover:scale-105 transition"
      >
        {icon}
      </a>
    );
  }
  