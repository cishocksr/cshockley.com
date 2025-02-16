import Image, { ImageProps } from "next/image";

export type DevIconTypes =
  | "bun-icon"
  | "csharp-icon"
  | "docker-icon"
  | "figma-icon"
  | "git-icon"
  | "github"
  | "java-icon"
  | "javascript"
  | "next"
  | "npm-icon"
  | "python"
  | "react"
  | "tailwindcss"
  | "typescript"


interface DevIconProps extends Omit<ImageProps, "src" | "width" | "height"> { // Omit width and height
  kind: DevIconTypes;
}

export function DevIcon({ kind, alt, ...rest }: DevIconProps) {
  const src = `/images/tech-stack/${kind}.svg`;

  return (
    <div style={{ position: 'relative', width: 50, height: 50 }}> {/* Container for the image */}
      <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} {...rest} quality={100} unoptimized />
    </div>
  );
}