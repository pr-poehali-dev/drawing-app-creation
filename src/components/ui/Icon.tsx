
import React from "react";
import { LucideIcon, LucideProps } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface IconProps extends LucideProps {
  name: string;
  fallback?: string;
}

const Icon: React.FC<IconProps> = ({ name, fallback = "CircleAlert", ...props }) => {
  // Попробуем найти иконку по имени
  const LucideIcon = (LucideIcons as Record<string, LucideIcon>)[name] || 
                     (LucideIcons as Record<string, LucideIcon>)[fallback];
  
  return <LucideIcon {...props} />;
};

export default Icon;
