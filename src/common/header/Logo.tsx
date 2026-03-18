import logoBlack from "/images/header/ivh_logo_black.png";

interface LogoProps {
  onClick: () => void;
}

export const Logo = ({ onClick }: LogoProps) => {
  return (
    <a
      href="/"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      aria-label="iVH 홈으로 이동"
      style={{ display: "inline-flex", cursor: "pointer" }}
    >
      <img
        src={logoBlack}
        alt="iVH 로고"
        style={{ width: "64px", height: "27.4px" }}
      />
    </a>
  );
};
