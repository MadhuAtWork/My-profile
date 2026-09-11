import React from 'react';

interface TechIconProps {
  name: string;
  size?: number;
  color?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, size = 22, color }) => {
  const normalized = name.toLowerCase().trim();

  // React / React.js / React Native
  if (normalized.includes('react native')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="3" stroke={color || '#61dafb'} strokeWidth="1.7" />
        <ellipse cx="12" cy="11" rx="4" ry="1.5" stroke={color || '#61dafb'} strokeWidth="1.2" />
        <ellipse cx="12" cy="11" rx="1.5" ry="4" stroke={color || '#61dafb'} strokeWidth="1.2" />
        <circle cx="12" cy="11" r="0.8" fill={color || '#61dafb'} />
        <line x1="10" y1="18" x2="14" y2="18" stroke={color || '#61dafb'} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (normalized.includes('react') && !normalized.includes('flow')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2.2" fill={color || '#61dafb'} />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke={color || '#61dafb'} strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke={color || '#61dafb'} strokeWidth="1.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke={color || '#61dafb'} strokeWidth="1.6" transform="rotate(120 12 12)" />
      </svg>
    );
  }

  // JavaScript
  if (normalized.includes('javascript') || normalized.includes('js')) {
    if (normalized.includes('next')) {
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#000000" stroke={color || '#ffffff'} strokeWidth="1.5" />
          <path d="M8 8v8l8-9.5h0V16" stroke={color || '#ffffff'} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
    if (normalized.includes('node')) {
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 2l8.5 4.9v9.8L12 21.6l-8.5-4.9V6.9L12 2z" stroke={color || '#68a063'} strokeWidth="1.7" fill="rgba(104, 160, 99, 0.15)" />
          <path d="M12 7.5v9M8 10l4 2 4-2" stroke={color || '#68a063'} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    }
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="4" fill="#f7df1e" />
        <path d="M9 16.5c0 .8-.5 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-3.5h1.2v3.5c0 .3.1.5.3.5s.3-.2.3-.5V13H9v3.5zm4.8 0c0 .9-.8 1.5-1.8 1.5s-1.8-.6-1.8-1.5h1.2c0 .3.2.5.6.5s.6-.2.6-.5c0-.9-1.8-.7-1.8-2 0-.9.8-1.5 1.8-1.5s1.7.6 1.7 1.5h-1.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5c0 .8 1.8.7 1.8 2z" fill="#000000" />
      </svg>
    );
  }

  // Next.js
  if (normalized.includes('next')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#000000" stroke={color || '#ffffff'} strokeWidth="1.5" />
        <path d="M8 8v8l8-9.5h0V16" stroke={color || '#ffffff'} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // HTML & CSS
  if (normalized.includes('html') || normalized.includes('css')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M4 3l1.8 15.5L12 21l6.2-2.5L20 3H4z" stroke={color || '#e34f26'} strokeWidth="1.7" fill="rgba(227, 79, 38, 0.15)" strokeLinejoin="round" />
        <path d="M7.5 7h9M7.5 11h8.5l-.5 4.5-3.5 1-3.5-1-.2-2" stroke={color || '#e34f26'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // SCSS / SASS
  if (normalized.includes('scss') || normalized.includes('sass')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="6" fill="rgba(207, 100, 154, 0.2)" stroke={color || '#cf649a'} strokeWidth="1.6" />
        <path d="M8 15c0-2 2-2 4-3s4-1 4-3-2-2-4-2-4 1-4 3" stroke={color || '#cf649a'} strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes('tailwind')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M6 12c1-2 3-3 5-3 3 0 4 2 5 3s2.5 2 4.5 2c1.5 0 2.5-.5 3.5-1.5-1 2-3 3-5 3-3 0-4-2-5-3s-2.5-2-4.5-2c-1.5 0-2.5.5-3.5 1.5z" fill={color || '#38bdf8'} />
        <path d="M2 17c1-2 3-3 5-3 3 0 4 2 5 3s2.5 2 4.5 2c1.5 0 2.5-.5 3.5-1.5-1 2-3 3-5 3-3 0-4-2-5-3s-2.5-2-4.5-2c-1.5 0-2.5.5-3.5 1.5z" fill={color || '#38bdf8'} opacity="0.75" />
      </svg>
    );
  }

  // Material UI
  if (normalized.includes('material') || normalized.includes('mui')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke={color || '#007fff'} strokeWidth="1.6" fill="rgba(0, 127, 255, 0.15)" />
        <path d="M12 22V12M12 12L3 7M12 12l9-5" stroke={color || '#007fff'} strokeWidth="1.4" />
      </svg>
    );
  }

  // Bootstrap
  if (normalized.includes('bootstrap')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" fill="rgba(121, 82, 179, 0.2)" stroke={color || '#7952b3'} strokeWidth="1.6" />
        <path d="M9 7h4c1.5 0 2.5.7 2.5 2s-.8 1.8-2 2c1.5.2 2.5 1 2.5 2.5S14.8 16 13 16H9V7zm2.2 3.5h1.5c.6 0 1-.3 1-.8s-.4-.8-1-.8h-1.5v1.6zm0 3.8h1.8c.7 0 1.2-.4 1.2-1s-.5-1-1.2-1h-1.8v2z" fill={color || '#7952b3'} />
      </svg>
    );
  }

  // Redux / Redux Toolkit
  if (normalized.includes('redux')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M16.5 8.5C18 10 19 12 19 14.5c0 3-2.5 5.5-5.5 5.5-2.5 0-4.5-1.5-5.5-3.5M7.5 15.5C6 14 5 12 5 9.5 5 6.5 7.5 4 10.5 4c2.5 0 4.5 1.5 5.5 3.5" stroke={color || '#764abc'} strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2.5" fill={color || '#764abc'} />
      </svg>
    );
  }

  // Context API
  if (normalized.includes('context')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" fill={color || '#61dafb'} />
        <circle cx="5" cy="7" r="2" stroke={color || '#61dafb'} strokeWidth="1.5" />
        <circle cx="19" cy="7" r="2" stroke={color || '#61dafb'} strokeWidth="1.5" />
        <circle cx="12" cy="20" r="2" stroke={color || '#61dafb'} strokeWidth="1.5" />
        <line x1="7" y1="8.5" x2="10" y2="10.5" stroke={color || '#61dafb'} strokeWidth="1.3" />
        <line x1="17" y1="8.5" x2="14" y2="10.5" stroke={color || '#61dafb'} strokeWidth="1.3" />
        <line x1="12" y1="15" x2="12" y2="18" stroke={color || '#61dafb'} strokeWidth="1.3" />
      </svg>
    );
  }

  // Zustand
  if (normalized.includes('zustand')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="8" r="3" fill="rgba(68, 62, 56, 0.4)" stroke={color || '#e5e7eb'} strokeWidth="1.4" />
        <circle cx="16" cy="8" r="3" fill="rgba(68, 62, 56, 0.4)" stroke={color || '#e5e7eb'} strokeWidth="1.4" />
        <circle cx="12" cy="14" r="7" stroke={color || '#e5e7eb'} strokeWidth="1.7" fill="rgba(68, 62, 56, 0.25)" />
        <circle cx="9.5" cy="13" r="1" fill={color || '#e5e7eb'} />
        <circle cx="14.5" cy="13" r="1" fill={color || '#e5e7eb'} />
        <ellipse cx="12" cy="16" rx="2" ry="1" fill={color || '#e5e7eb'} />
      </svg>
    );
  }

  // MobX
  if (normalized.includes('mobx')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke={color || '#ff9955'} strokeWidth="1.7" fill="rgba(255, 153, 85, 0.15)" />
        <circle cx="8" cy="12" r="2" fill={color || '#ff9955'} />
        <circle cx="16" cy="12" r="2" fill={color || '#ff9955'} />
        <circle cx="12" cy="8" r="1.5" fill={color || '#ff9955'} />
      </svg>
    );
  }

  // Riverpod
  if (normalized.includes('riverpod')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M4 12a8 8 0 0 1 14.5-4.8L20 9M20 12a8 8 0 0 1-14.5 4.8L4 15" stroke={color || '#02569b'} strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2.5" fill={color || '#02569b'} />
      </svg>
    );
  }

  // Three.js (3D)
  if (normalized.includes('three') || normalized.includes('3d')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2z" stroke={color || '#049ef4'} strokeWidth="1.6" fill="rgba(4, 158, 244, 0.15)" />
        <path d="M12 2v10.5M12 12.5l9-5.3M12 12.5l-9-5.3" stroke={color || '#049ef4'} strokeWidth="1.4" />
        <circle cx="12" cy="12.5" r="1.5" fill={color || '#049ef4'} />
      </svg>
    );
  }

  // React Flow
  if (normalized.includes('flow')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="6" height="5" rx="1.5" stroke={color || '#ff0072'} strokeWidth="1.5" fill="rgba(255, 0, 114, 0.2)" />
        <rect x="15" y="4" width="6" height="5" rx="1.5" stroke={color || '#ff0072'} strokeWidth="1.5" fill="rgba(255, 0, 114, 0.2)" />
        <rect x="9" y="15" width="6" height="5" rx="1.5" stroke={color || '#ff0072'} strokeWidth="1.5" fill="rgba(255, 0, 114, 0.2)" />
        <path d="M6 9v3a2 2 0 0 0 2 2h4M18 9v3a2 2 0 0 1-2 2h-4" stroke={color || '#ff0072'} strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  // ECharts
  if (normalized.includes('chart')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="13" width="4" height="8" rx="1" fill={color || '#e43961'} />
        <rect x="10" y="8" width="4" height="13" rx="1" fill={color || '#e43961'} opacity="0.8" />
        <rect x="17" y="4" width="4" height="17" rx="1" fill={color || '#e43961'} opacity="0.6" />
        <path d="M4 11l6-5 6 3 4-6" stroke={color || '#e43961'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Flutter & Dart
  if (normalized.includes('flutter') || normalized.includes('dart')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M14.5 2L4 12.5l3.2 3.2L17.7 5.2h4.8L14.5 2z" fill={color || '#02569b'} />
        <path d="M14.5 12l-4.8 4.8 3.2 3.2 4.8-4.8h4.8l-8-8z" fill={color || '#29b6f6'} />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes('node')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2l8.5 4.9v9.8L12 21.6l-8.5-4.9V6.9L12 2z" stroke={color || '#68a063'} strokeWidth="1.7" fill="rgba(104, 160, 99, 0.15)" />
        <path d="M12 7.5v9M8 10l4 2 4-2" stroke={color || '#68a063'} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // RESTful APIs
  if (normalized.includes('api') || normalized.includes('rest')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke={color || '#00d2ff'} strokeWidth="1.6" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" stroke={color || '#00d2ff'} strokeWidth="1.3" />
      </svg>
    );
  }

  // Git / GitHub
  if (normalized.includes('git')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="6" r="3" stroke={color || '#f05032'} strokeWidth="1.6" />
        <circle cx="6" cy="18" r="3" stroke={color || '#f05032'} strokeWidth="1.6" />
        <circle cx="18" cy="9" r="3" stroke={color || '#f05032'} strokeWidth="1.6" />
        <path d="M6 9v6M9 6h4a5 5 0 0 1 5 5v0" stroke={color || '#f05032'} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  // Postman
  if (normalized.includes('postman')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke={color || '#ff6c37'} strokeWidth="1.6" fill="rgba(255, 108, 55, 0.15)" />
        <path d="M15 9l-6 3 6 3V9z" fill={color || '#ff6c37'} />
        <path d="M9 12h6" stroke="#ffffff" strokeWidth="1.2" />
      </svg>
    );
  }

  // Webpack / Vite
  if (normalized.includes('vite') || normalized.includes('webpack')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7l9 15 9-15-9-5z" stroke={color || '#8dd6f9'} strokeWidth="1.6" fill="rgba(141, 214, 249, 0.15)" />
        <path d="M13 5l-4 7h4l-2 6 7-8h-4l3-5h-4z" fill={color || '#ffd02f'} />
      </svg>
    );
  }

  // Jest
  if (normalized.includes('jest') || normalized.includes('test')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M9 3h6M10 3v6l-4 9a2 2 0 0 0 1.8 2.8h8.4a2 2 0 0 0 1.8-2.8l-4-9V3" stroke={color || '#99425b'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="11" cy="15" r="1" fill={color || '#99425b'} />
        <circle cx="14" cy="13" r="1" fill={color || '#99425b'} />
      </svg>
    );
  }

  // Default Code Icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <polyline points="16 18 22 12 16 6" stroke={color || 'var(--accent-cyan)'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="8 6 2 12 8 18" stroke={color || 'var(--accent-cyan)'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
