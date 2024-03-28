interface QiLogoProps {
  className?: String;
  colors?: string[];
}

export const QiLogo: React.FC<QiLogoProps> = ({ className, colors }) => {
  return (
    <svg
      id="Logo-img"
      xmlns="http://www.w3.org/2000/svg"
      width="1.337em"
      height="1em"
      viewBox="0 0 32.08 24"
      className={`${className}`}
    >
      <path
        d="M84.37,37H60.66A1.7,1.7,0,0,1,59,34.9l5-20.6A1.71,1.71,0,0,1,65.63,13H89.34A1.7,1.7,0,0,1,91,15.1L86,35.7A1.71,1.71,0,0,1,84.37,37Z"
        transform="translate(-58.96 -13)"
        fill={`${colors?.[0] || "#73925b"}`}
      />
      <path
        d="M79.38,18.22l1.1-.94,1.1.8a.5.5,0,0,1,.2.36.35.35,0,0,1-.38.34H70.6l-1.16,1.55a9,9,0,0,1-2.7,2.39c-.09,0-.14-.11-.14-.14a.16.16,0,0,1,.05-.11,11.93,11.93,0,0,0,2.4-2.67,7.76,7.76,0,0,0,1.55-3.33l1,.33c.18.05.28.16.28.27a.26.26,0,0,1-.25.27c-.14,0-.23,0-.25.09l-.43.79ZM72.7,27.83C71.42,31,67.28,32.52,67,32.52c-.11,0-.16-.08-.16-.18a.22.22,0,0,1,.1-.17,9.61,9.61,0,0,0,4.78-4.34H67.46l-.14-.54H72.7V24l1,.12c.29,0,.43.15.43.29a.37.37,0,0,1-.27.36.34.34,0,0,0-.27.31v2.21h1.28l.72-1.4.42-1.3.07-.55,1.06.3c.18.07.29.16.29.29a.23.23,0,0,1-.25.22.31.31,0,0,0-.27.1l-.83,1.43-.65.91h1.44l1-.95.94.85a.4.4,0,0,1,.11.27.36.36,0,0,1-.36.37h-5v.55c1.57.55,4.69,2.05,4.69,3.16a.49.49,0,0,1-.44.53s-.09,0-.34-.18a11.21,11.21,0,0,0-3.91-3.1v4.32c0,.32-.54.41-.7.41s-.18-.05-.18-.16Zm6.81-5.18L80,22l.82.64a.24.24,0,0,1,.11.2.4.4,0,0,1-.29.36.27.27,0,0,0-.23.26c0,.34,0,.66,0,1A16.89,16.89,0,0,0,81,29.58l.55,1.3c.16.27.28.39.35.39s.17-.18.28-.5l.55-1.8c0-.09.09-.13.17-.13s.27.06.23.25l-.41,2a3.87,3.87,0,0,0-.09.72.73.73,0,0,0,0,.34.64.64,0,0,1,.22.43.41.41,0,0,1-.38.4c-.18,0-1-.27-1.79-1.66-1.2-2.14-1.2-6.25-1.2-8.08H68.38l-.11-.56ZM70.2,26.52a3.9,3.9,0,0,0-1-2.21.16.16,0,0,1-.07-.13.15.15,0,0,1,.16-.14,3.68,3.68,0,0,1,1.8,2.28c0,.33-.1.58-.43.58A.45.45,0,0,1,70.2,26.52Zm7.26-6.05,1.15-.94,1.13.85a.33.33,0,0,1,.15.29.36.36,0,0,1-.4.36H71.12L71,20.47Z"
        transform="translate(-58.96 -13)"
        fill={`${colors?.[1] || "#fff"}`}
      />
    </svg>
  );
};

export const QiLogoName: React.FC<QiLogoProps> = ({ className, colors }) => {
  return (
    <svg
      id="Logo-name"
      xmlns="http://www.w3.org/2000/svg"
      width="5.3em"
      height="1em"
      viewBox="0 0 127.28 24"
      className={`${className}`}
    >
      <path
        d="M35.77,37H12.06a1.7,1.7,0,0,1-1.65-2.1l5-20.6A1.71,1.71,0,0,1,17,13H40.74a1.7,1.7,0,0,1,1.65,2.1l-5,20.6A1.71,1.71,0,0,1,35.77,37Z"
        transform="translate(-10.36 -13)"
        fill={`${colors?.[0] || "#73925b"}`}
      />
      <path
        d="M49.56,19.83h6.91v1H50.52v4.14h3.84v1H50.52v4.18h5.95v1H49.56Z"
        transform="translate(-10.36 -13)"
        fill={`${colors?.[2] || "#000000"}`}
      />
      <path
        d="M59,30.33a2.44,2.44,0,0,1-.58-.67,1.49,1.49,0,0,1-.22-.71h1a.6.6,0,0,0,.12.28,1.13,1.13,0,0,0,.32.34,2.38,2.38,0,0,0,1.6.5,2.88,2.88,0,0,0,1.61-.38.87.87,0,0,0,.43-.74,1,1,0,0,0-.56-.88,5.88,5.88,0,0,0-1.34-.51l-.53-.16a6.31,6.31,0,0,1-1.57-.63,2.27,2.27,0,0,1-.72-.65,1.81,1.81,0,0,1-.09-1.91,1.94,1.94,0,0,1,.64-.67A3.79,3.79,0,0,1,61.18,23a3.36,3.36,0,0,1,2.19.7,2.16,2.16,0,0,1,.58.67,1.39,1.39,0,0,1,.22.72h-1a.66.66,0,0,0-.11-.29,1.47,1.47,0,0,0-.32-.35,2.46,2.46,0,0,0-1.6-.49,2.91,2.91,0,0,0-1.63.38.88.88,0,0,0-.44.75,1,1,0,0,0,.58.87,5.65,5.65,0,0,0,1.34.53l.53.14a6.42,6.42,0,0,1,1.57.62,2.58,2.58,0,0,1,.72.66,1.89,1.89,0,0,1,.3,1,1.79,1.79,0,0,1-.21.86,2,2,0,0,1-.63.68,3.84,3.84,0,0,1-2.16.54A3.37,3.37,0,0,1,59,30.33Z"
        transform="translate(-10.36 -13)"
        fill={`${colors?.[2] || "#000000"}`}
      />
      <path
        d="M67.13,30.33a2.28,2.28,0,0,1-.58-.67,1.39,1.39,0,0,1-.22-.71h1a.68.68,0,0,0,.11.28,1.27,1.27,0,0,0,.32.34,2.41,2.41,0,0,0,1.6.5,2.92,2.92,0,0,0,1.62-.38.87.87,0,0,0,.43-.74,1,1,0,0,0-.56-.88,6.09,6.09,0,0,0-1.34-.51l-.53-.16a6,6,0,0,1-1.57-.63,2.07,2.07,0,0,1-.72-.65,1.79,1.79,0,0,1-.32-1,1.77,1.77,0,0,1,.22-.88,2,2,0,0,1,.64-.67A3.84,3.84,0,0,1,69.35,23a3.37,3.37,0,0,1,2.2.7,2.3,2.3,0,0,1,.58.67,1.49,1.49,0,0,1,.22.72h-1a.59.59,0,0,0-.12-.29,1.29,1.29,0,0,0-.32-.35,2.43,2.43,0,0,0-1.6-.49,3,3,0,0,0-1.63.38.87.87,0,0,0-.43.75,1,1,0,0,0,.58.87,5.31,5.31,0,0,0,1.34.53l.53.14a6.78,6.78,0,0,1,1.57.62,2.58,2.58,0,0,1,.72.66,1.89,1.89,0,0,1,.3,1,1.69,1.69,0,0,1-.22.86,1.78,1.78,0,0,1-.63.68,3.79,3.79,0,0,1-2.16.54A3.36,3.36,0,0,1,67.13,30.33Z"
        transform="translate(-10.36 -13)"
        fill={`${colors?.[2] || "#000000"}`}
      />
      <path
        d="M76.9,30.73a4.22,4.22,0,0,1-1.31-.87,3.89,3.89,0,0,1-.86-1.29,4.06,4.06,0,0,1-.3-1.54,4,4,0,0,1,.3-1.53,4.11,4.11,0,0,1,.86-1.29,4.25,4.25,0,0,1,1.31-.88,4,4,0,0,1,3,0,4.25,4.25,0,0,1,1.31.88,4.11,4.11,0,0,1,.86,1.29A3.84,3.84,0,0,1,82.43,27v.48h-7a3.07,3.07,0,0,0,.55,1.3,3,3,0,0,0,1.06.92,2.9,2.9,0,0,0,1.4.34,3,3,0,0,0,1.18-.24,3.05,3.05,0,0,0,1-.69l.69.67a3.72,3.72,0,0,1-1.28.9,4.06,4.06,0,0,1-1.58.32A3.94,3.94,0,0,1,76.9,30.73Zm4.52-4.18a2.93,2.93,0,0,0-.54-1.3,3,3,0,0,0-1.07-.92,3,3,0,0,0-2.78,0,3,3,0,0,0-1.06.92,3.07,3.07,0,0,0-.55,1.3Zm-3.27-6h.55l1.77,1.68H79.31l-.88-.85-.88.85H76.38Z"
        transform="translate(-10.36 -13)"
        fill={`${colors?.[2] || "#000000"}`}
      />
      <path
        d="M85.87,23v1a2.85,2.85,0,0,1,1-.71A3.93,3.93,0,0,1,88.38,23a4,4,0,0,1,1.53.27,3,3,0,0,1,1.54,1.54,3.93,3.93,0,0,1,.34,1.35c0,.53.06,1.14.06,1.85v3h-1V28c0-.62,0-1.17,0-1.65a3.33,3.33,0,0,0-.25-1.15,1.94,1.94,0,0,0-1-1A3,3,0,0,0,88.38,24a3.13,3.13,0,0,0-1.27.25,1.86,1.86,0,0,0-.92,1,3.3,3.3,0,0,0-.27,1.15c0,.48,0,1,0,1.65v3h-1V23Z"
        transform="translate(-10.36 -13)"
        fill={`${colors?.[2] || "#000000"}`}
      />
      <path
        d="M96.72,30.73a4.21,4.21,0,0,1-1.3-.88,4.14,4.14,0,0,1-.87-1.29,4.05,4.05,0,0,1,0-3.06,4.18,4.18,0,0,1,.87-1.3,4.36,4.36,0,0,1,1.3-.87,4,4,0,0,1,1.53-.3,3.89,3.89,0,0,1,2.22.67l-.54.8A2.92,2.92,0,0,0,98.25,24a3,3,0,0,0-3,3,3,3,0,0,0,.41,1.51,3,3,0,0,0,1.1,1.11,2.94,2.94,0,0,0,1.53.42,3,3,0,0,0,1.71-.53l.53.79a3.81,3.81,0,0,1-2.24.7A4,4,0,0,1,96.72,30.73Z"
        transform="translate(-10.36 -13)"
        fill={`${colors?.[2] || "#000000"}`}
      />
      <path
        d="M103,19.83h1v1h-1Zm0,3.2h1v8h-1Z"
        transform="translate(-10.36 -13)"
        fill={`${colors?.[2] || "#000000"}`}
      />
      <path
        d="M108.91,30.73a4,4,0,0,1-2.16-2.17,4,4,0,0,1,0-3.07,4,4,0,0,1,2.16-2.17,4,4,0,0,1,1.53-.31,4.07,4.07,0,0,1,1.54.31,3.66,3.66,0,0,1,1.29.88l.23.22V23h1v8h-1V29.62l-.23.24a3.92,3.92,0,0,1-1.29.87,4.06,4.06,0,0,1-1.54.3A4,4,0,0,1,108.91,30.73ZM112,29.66a3.11,3.11,0,0,0,1.11-1.11,3,3,0,0,0,0-3.05A3.27,3.27,0,0,0,112,24.39a3,3,0,0,0-3,0,3.11,3.11,0,0,0-1.11,1.11,3,3,0,0,0,0,3.05,3,3,0,0,0,1.11,1.11,3,3,0,0,0,3,0Z"
        transform="translate(-10.36 -13)"
        fill={`${colors?.[2] || "#000000"}`}
      />
      <path
        d="M126.2,30.58a5.67,5.67,0,0,1-3-3,5.59,5.59,0,0,1-.45-2.2,5.41,5.41,0,0,1,.45-2.17,5.22,5.22,0,0,1,1.2-1.79,5.05,5.05,0,0,1,1.77-1.2,5.58,5.58,0,0,1,2.19-.45,5.42,5.42,0,0,1,2.18.45,5.22,5.22,0,0,1,1.79,1.2,5.53,5.53,0,0,1,1.2,1.79,5.41,5.41,0,0,1,.45,2.17,5.59,5.59,0,0,1-.45,2.2,5.34,5.34,0,0,1-1.2,1.77,5,5,0,0,1-.83.69H134v1h-5.62A5.58,5.58,0,0,1,126.2,30.58Zm4-.86a4.81,4.81,0,0,0,1.52-1,4.66,4.66,0,0,0,1-1.51,4.76,4.76,0,0,0,.35-1.79,4.66,4.66,0,0,0-.35-1.77,4.62,4.62,0,0,0-2.53-2.53,4.7,4.7,0,0,0-3.56,0,4.64,4.64,0,0,0-2.52,2.53,4.47,4.47,0,0,0-.35,1.77,4.57,4.57,0,0,0,.35,1.79,4.5,4.5,0,0,0,1,1.51,4.66,4.66,0,0,0,1.51,1,4.7,4.7,0,0,0,3.56,0Z"
        transform="translate(-10.36 -13)"
        fill={`${colors?.[2] || "#000000"}`}
      />
      <path
        d="M136.65,19.83h1v1h-1Zm0,3.2h1v8h-1Z"
        transform="translate(-10.36 -13)"
        fill={`${colors?.[2] || "#000000"}`}
      />
      <path
        d="M30.43,18.4l1.1-.94,1.09.79a.53.53,0,0,1,.2.37.34.34,0,0,1-.38.34H21.64l-1.15,1.55a9.22,9.22,0,0,1-2.7,2.39c-.09,0-.15-.11-.15-.14a.14.14,0,0,1,.06-.11A12.14,12.14,0,0,0,20.09,20a7.76,7.76,0,0,0,1.55-3.33l1,.33c.18.05.29.16.29.27s0,.27-.25.27-.24,0-.26.09L22,18.4ZM23.75,28C22.47,31.15,18.33,32.7,18,32.7c-.1,0-.16-.08-.16-.19s0-.1.11-.16A9.63,9.63,0,0,0,22.72,28H18.51l-.15-.54h5.39V24.18l1,.12c.29,0,.43.15.43.29a.39.39,0,0,1-.27.36.34.34,0,0,0-.27.31v2.21h1.28l.72-1.4.41-1.3.07-.56,1.07.31c.18.07.28.16.28.29a.22.22,0,0,1-.25.21.34.34,0,0,0-.27.11l-.83,1.43-.64.91h1.44l1-.95.93.85a.4.4,0,0,1,.11.27.36.36,0,0,1-.36.37H24.63v.54c1.57.56,4.68,2.06,4.68,3.17a.48.48,0,0,1-.43.53c-.06,0-.09,0-.34-.19A11.3,11.3,0,0,0,24.63,29v4.32c0,.32-.54.41-.7.41s-.18-.05-.18-.16Zm6.8-5.18.47-.61.83.64a.27.27,0,0,1,.11.2.4.4,0,0,1-.29.36.27.27,0,0,0-.23.25c0,.35,0,.67,0,1A16.58,16.58,0,0,0,32,29.76l.54,1.3c.16.27.29.39.36.39s.16-.18.27-.5l.56-1.8a.17.17,0,0,1,.16-.13s.27.06.23.25l-.41,2a5,5,0,0,0-.09.72.9.9,0,0,0,.05.34.6.6,0,0,1,.22.43.41.41,0,0,1-.38.4c-.18,0-1-.27-1.78-1.66-1.21-2.14-1.21-6.25-1.21-8.08H19.43l-.11-.56ZM21.24,26.7a4,4,0,0,0-1-2.22.12.12,0,0,1-.07-.12.16.16,0,0,1,.16-.15,3.73,3.73,0,0,1,1.8,2.29c0,.33-.11.58-.43.58A.45.45,0,0,1,21.24,26.7Zm7.26-6.05,1.15-.94,1.14.85a.32.32,0,0,1,.14.29.36.36,0,0,1-.39.36H22.16L22,20.65Z"
        transform="translate(-10.36 -13)"
        fill={`${colors?.[1] || "#fff"}`}
      />
    </svg>
  );
};
