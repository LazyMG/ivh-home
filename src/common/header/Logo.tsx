import logoWhite from "/images/header/ivh_logo_white.png";

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
      style={{
        display: "flex",
        cursor: "pointer",
        alignItems: "center",
      }}
    >
      <img
        src={logoWhite}
        alt="iVH 로고"
        style={{ width: "64px", height: "27.4px" }}
      />
    </a>
  );
};
