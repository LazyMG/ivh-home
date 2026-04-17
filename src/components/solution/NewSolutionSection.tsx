import { Box, Typography } from "@mui/material";
import { createContext, useContext, type ReactNode } from "react";
import { useBreakpoint } from "../../hooks/useBreakpoint";

const DEFAULT_COLOR = "#00758F";

const SectionColorContext = createContext<string>(DEFAULT_COLOR);

export const Bold = ({ children }: { children: ReactNode }) => (
  <Typography component="span" sx={{ fontFamily: "Freesentation-7-Bold" }}>
    {children}
  </Typography>
);

export const P = ({ children }: { children: ReactNode }) => (
  <Typography sx={{ color: "#424242", fontFamily: "Freesentation-5-Medium" }}>
    {children}
  </Typography>
);

interface PageGroupProps {
  title: string;
  color?: string;
  image?: string;
  children: ReactNode;
}

export const PageGroup = ({
  title,
  color = DEFAULT_COLOR,
  image,
  children,
}: PageGroupProps) => {
  const { isMobile } = useBreakpoint();
  return (
    <SectionColorContext.Provider value={color}>
      <PageTitle title={title} color={color} image={image} />
      <Box
        sx={{
          px: isMobile ? "5%" : "10%",
          my: 8,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {children}
      </Box>
    </SectionColorContext.Provider>
  );
};

interface PageTitleProps {
  title: string;
  color?: string;
  image?: string;
}

export const PageTitle = ({
  title,
  color = DEFAULT_COLOR,
  image,
}: PageTitleProps) => {
  const { isMobile } = useBreakpoint();
  return (
    <Box
      sx={{
        px: isMobile ? "4%" : "8%",
        mt: 12,
        mb: 6,
        display: "flex",
        alignItems: "stretch",
        gap: 2,
        position: "relative",
      }}
    >
      {image && (
        <Box
          component="img"
          src={image}
          sx={{
            position: "absolute",
            left: "100px",
            top: "0",
            transform: "translateY(-50%)",
            width: 90,
            height: "auto",
            objectFit: "contain",
            opacity: 0.6,
            maskImage: "linear-gradient(135deg, #000 5%, transparent 70%)",
            WebkitMaskImage:
              "linear-gradient(135deg, #000 5%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}
      <Box
        sx={{
          width: 12,
          flexShrink: 0,
          backgroundColor: color,
          position: "relative",
          zIndex: 1,
        }}
      />
      <Typography
        sx={{
          fontSize: isMobile ? "28px" : "40px",
          lineHeight: 1.2,
          fontFamily: "Freesentation-2-ExtraLight",
          position: "relative",
          zIndex: 1,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

interface SectionProps {
  title: string;
  children: ReactNode;
  color?: string;
  subtitle?: string;
}

export const Section = ({ title, children, color, subtitle }: SectionProps) => {
  const contextColor = useContext(SectionColorContext);
  const resolvedColor = color ?? contextColor;
  const { isMobile } = useBreakpoint();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Typography
        sx={{
          fontSize: "24px",
          fontFamily: "Freesentation-7-Bold",
          color: resolvedColor,
          lineHeight: isMobile ? 1.1 : 1.2,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: "Freesentation-7-Bold",
            textDecoration: "underline",
            color: "#424242",
          }}
        >
          {subtitle}
        </Typography>
      )}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        {children}
      </Box>
    </Box>
  );
};

interface SubBlockProps {
  children: ReactNode;
}

export const SubBlock = ({ children }: SubBlockProps) => (
  <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 0.5 }}>
    {children}
  </Box>
);

interface BulletListProps {
  items: ReactNode[];
}

export const BulletList = ({ items }: BulletListProps) => {
  const { isMobile } = useBreakpoint();
  return (
    <Box
      component="ul"
      sx={{
        mt: 2,
        pl: isMobile ? 0.5 : 2,
        listStyle: "none",
        "& li::before": {
          content: "'·'",
          mr: 1,
          color: "#424242",
        },
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      {items.map((item, i) => (
        <Typography
          key={i}
          component="li"
          sx={{ color: "#424242", fontFamily: "Freesentation-5-Medium" }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
};

interface LabeledBulletListProps {
  label: ReactNode;
  items: ReactNode[];
}

export const LabeledBulletList = ({ label, items }: LabeledBulletListProps) => (
  <Box sx={{ my: 3, "& + &": { mt: 0 } }}>
    <Typography
      sx={{
        color: "#424242",
        fontFamily: "Freesentation-7-Bold",
      }}
    >
      {label}
    </Typography>
    <BulletList items={items} />
  </Box>
);

interface VideoEmbedProps {
  src: string;
  title?: string;
  aspectRatio?: string;
}

export const VideoEmbed = ({
  src,
  title = "YouTube video player",
  aspectRatio,
}: VideoEmbedProps) => {
  const { isMobile } = useBreakpoint();
  const resolvedRatio = aspectRatio ?? (isMobile ? "16 / 9" : "3 / 1");
  return (
    <Box
      sx={{
        width: "100%",
        aspectRatio: resolvedRatio,
        "& iframe": {
          width: "100%",
          height: "100%",
          border: 0,
          display: "block",
        },
      }}
    >
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowFullScreen
      />
    </Box>
  );
};

interface CalloutProps {
  children: ReactNode;
  barGradient?: string;
  textGradient?: string;
}

const DEFAULT_BAR_GRADIENT =
  "linear-gradient(180deg, #31B386 5%, #266DEA 100%)";
const DEFAULT_TEXT_GRADIENT =
  "linear-gradient(150deg, #31B386 5%, #266DEA 100%)";

export const Callout = ({
  children,
  barGradient = DEFAULT_BAR_GRADIENT,
  textGradient = DEFAULT_TEXT_GRADIENT,
}: CalloutProps) => (
  <Box
    display="flex"
    flexDirection="row"
    alignItems="stretch"
    gap={2}
    sx={{ my: 3 }}
  >
    <Box
      sx={{
        width: 4,
        flexShrink: 0,
        my: 1,
        background: barGradient,
      }}
    />
    <Typography
      sx={{
        whiteSpace: "pre-wrap",
        background: textGradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        color: "transparent",
        fontSize: "24px",
        fontFamily: "Freesentation-7-Bold",
      }}
    >
      {children}
    </Typography>
  </Box>
);
