const Logo = () => {
  return (
    <>
      <svg
        width="48"
        height="48"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="8" y="8" width="48" height="48" rx="8" fill="#4CAF50" />
        <path d="M20 20H44V24H20V20Z" fill="white" />
        <path d="M20 30H44V34H20V30Z" fill="white" />
        <path d="M20 40H36V44H20V40Z" fill="white" />
        <circle cx="16" cy="22" r="2" fill="white" />
        <circle cx="16" cy="32" r="2" fill="white" />
        <circle cx="16" cy="42" r="2" fill="white" />
      </svg>
    </>
  );
};

export default Logo;
