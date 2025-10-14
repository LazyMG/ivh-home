import { Box, Grid, Typography } from "@mui/material";
import type {
  ColorBoxProps,
  BoxContent,
  BoxSubSection,
} from "../../types/solution";

// 스타일 상수
const STYLES = {
  boxBorder: "3px solid",
  boxBorderRadius: "17px",
  boxPadding: "30px 30px 0px 30px",
  titleFontFamily: "Freesentation-7-Bold",
  titleFontSize: { xs: "20.2px", sm: "33.3px", md: "31.3px" },
  titleFontWeight: "bold",
  titleMarginBottom: 3,
  contentFontFamily: "Freesentation-5-Medium",
  contentFontSize: { xs: "13.5px", sm: "22.2px", md: "20.8px" },
} as const;

// 서브 컴포넌트: 박스 내부 콘텐츠 렌더링
const BoxContentRenderer = ({
  content,
  boxColor,
}: {
  content: BoxContent;
  boxColor: string;
}) => {
  const {
    title,
    items,
    subSections,
    subSectionColumns = { xs: 12, sm: 6 }, // 기본값: 모바일 1열, 데스크탑 2열,
    images,
    imagePosition = "right", // 이미지 위치: top, right, bottom, left
    contentLayout, // 콘텐츠와 이미지 배치: horizontal, vertical
    imageLayout = "row", // 여러 이미지 배치: row(가로), column(세로)
  } = content;

  // 이미지가 있는 경우의 flexDirection 결정
  // 콘텐츠 레이아웃 방향 결정
  const getFlexDirection = () => {
    // contentLayout이 명시적으로 지정된 경우
    // contents와 images 배치 방향 결정
    if (contentLayout === "horizontal") return "row";
    if (contentLayout === "vertical") return "column";

    // imagePosition 기반 자동 결정
    if (!images || images.length === 0) return "column";
    if (imagePosition === "right" || imagePosition === "left") return "row";
    return "column";
  };

  // 이미지 렌더링
  const renderImages = () => {
    if (!images || images.length === 0) return null;
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: imageLayout, // 이미지들의 배치 방향 제어
          gap: 2,
          flexWrap: "wrap",
          alignItems: imageLayout === "row" ? "flex-start" : "center",
        }}
      >
        {images.map((img, index) => {
          const resolvedSrc = new URL(img.src, import.meta.url).href;
          return (
            <img
              key={index}
              src={resolvedSrc}
              alt={img.alt || `image-${index}`}
              width={img.width || "300px"}
              height={img.height || "300px"}
              style={{ objectFit: "contain" }}
            />
          );
        })}
      </Box>
    );
  };

  // 단순 목록 렌더링
  // 이마가 수정: 모든 아이템에 하이픈 추가
  const renderItems = (itemList: string[]) => (
    <>
      {itemList.map((item, index) => (
        <Box sx={{ display: "flex", gap: 0.5 }} key={index}>
          <Typography
            sx={{
              fontFamily: STYLES.contentFontFamily,
              fontSize: STYLES.contentFontSize,
            }}
          >
            {content.hyphen}
          </Typography>
          <Typography
            sx={{
              fontFamily: STYLES.contentFontFamily,
              fontSize: STYLES.contentFontSize,
              wordBreak: "keep-all",
            }}
          >
            {item}
          </Typography>
        </Box>
      ))}
    </>
  );
  // 서브섹션 렌더링 (중첩 목록) - 그리드 컬럼 제어 가능
  const renderSubSections = (sections: BoxSubSection[]) => (
    <Grid container spacing={4}>
      {sections.map((section, index) => (
        <Grid
          size={subSectionColumns} // 동적으로 컬럼 설정
          key={index}
        >
          {section.title && (
            <Typography
              sx={{
                fontFamily: STYLES.contentFontFamily,
                fontSize: STYLES.contentFontSize,
                fontWeight: "bold",
                mb: 1,
              }}
            >
              {section.title}
            </Typography>
          )}
          {renderItems(section.items)}
        </Grid>
      ))}
    </Grid>
  );

  // 텍스트 콘텐츠
  const textContent = (
    <Box sx={{ flex: 1 }}>
      {items && renderItems(items)}
      {subSections && renderSubSections(subSections)}
    </Box>
  );

  return (
    <Box>
      {/* 제목 */}
      <Typography
        sx={{
          fontFamily: STYLES.titleFontFamily,
          fontSize: STYLES.titleFontSize,
          fontWeight: STYLES.titleFontWeight,
          color: boxColor,
          mb: STYLES.titleMarginBottom,
        }}
      >
        {title}
      </Typography>

      {/* 콘텐츠 + 이미지 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: getFlexDirection(),
          },
          gap: 2,
          alignItems: "flex-start",
        }}
      >
        {/* 순서만으로 위치가 결정되므로, 순서를 조정하면 위치가 변경됨 */}
        {imagePosition === "left" && renderImages()}
        {imagePosition === "top" && renderImages()}
        {textContent}
        {imagePosition === "right" && renderImages()}
        {imagePosition === "bottom" && renderImages()}
      </Box>
    </Box>
  );
};

// 메인 컴포넌트
const ColorBox = ({
  boxColor,
  layout,
  boxes,
  rowSpacing = 8,
  columnSpacing = 4,
}: ColorBoxProps) => {
  let boxIndex = 0;

  return (
    <Grid container rowSpacing={rowSpacing} columnSpacing={columnSpacing}>
      {layout.map(
        (
          row,
          rowIndex // layout의 각 행에 대해 반복
        ) =>
          row.map((gridSize, colIndex) => {
            // 각 행의 내부 박스 순회(4, 4, 4)
            // json의 boxes 배열에서 현재 데이터 선택
            const currentBox = boxes[boxIndex];
            boxIndex++;

            return (
              <Grid
                key={`${rowIndex}-${colIndex}`} // key의 고유성을 위한 중복 방지
                size={{ xs: 12, md: gridSize >= 8 ? 12 : 6, lg: gridSize }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: currentBox?.autoHeight ? "auto" : "100%", // autoHeight 속성에 따라 박스 높이 결정 auto면 컨텐츠만큼만 높이
                    border: `${STYLES.boxBorder} ${boxColor}`,
                    borderRadius: STYLES.boxBorderRadius,
                    pt: "30px", // 개별 속성으로 분리
                    px: "30px",
                    pb: currentBox?.pb ? "30px" : "0px", // 다른 박스와 달리 컨텐츠만큼만 높이를 차지하면 pb를 따로 설정해줘야함
                  }}
                >
                  {currentBox && (
                    <BoxContentRenderer
                      content={currentBox}
                      boxColor={boxColor}
                    />
                  )}
                </Box>
              </Grid>
            );
          })
      )}
    </Grid>
  );
};

export default ColorBox;
