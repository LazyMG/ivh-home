import { Box, Divider, Typography } from "@mui/material";
import ListSection from "../components/solution/ListSection";
import BoxGrid from "../components/solution/BoxGrid";

import tempData from "../data/home-appliance.json";
import SolutionHeader from "../components/solution/SolutionHeader";

const HomeAppliance = () => {
  return (
    <Box
      sx={{
        m: 0,
        py: "50px",
        px: "100px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {/** 전체 컨테이너 (수정 필요) */}
      {/* <Container
        maxWidth="lg"
        sx={{ display: "flex", flexDirection: "column", gap: 8, pb: 8 }}
      ></Container> */}
      {/** 헤더 영역 | 텍스트, 색상 필요 */}
      {/* <Box sx={{ mt: 4 }}>
        <Typography
          sx={{
            fontFamily: "Freesentation-8-ExtraBold",
            fontWeight: "800",
            color: "#92b843",
            fontSize: "22px",
            letterSpacing: 3,
            py: 2,
          }}
        >
          Home appliance
        </Typography>
        <Divider
          sx={{
            borderBottomWidth: 3,
            borderColor: "#92b843",
          }}
        />
        <Box
          sx={{
            background: "linear-gradient( #bbf14c, #ffffff)",
          }}
        >
          <Typography
            sx={{
              py: 2,
              color: "#3b4551",
              fontFamily: "Freesentation-6-SemiBold",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            PCB 열관리 성능 예측
          </Typography>
        </Box>
      </Box> */}

      <SolutionHeader
        title={"Home appliance"}
        subtitle={"PCB 열관리 성능 예측"}
        color={"#92b843"}
      />

      {/** 본문 영역 | 소제목, 텍스트, 항목, 박스 요소, 이미지 */}
      <Box
        component="main"
        sx={{ display: "flex", flexDirection: "column", gap: 8 }}
      >
        {/** 섹션 */}
        <Box
          component="section"
          sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
        >
          <ListSection {...tempData["introduction"]} />
        </Box>

        {/** 섹션 */}
        <Box
          component="section"
          sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
        >
          <ListSection {...tempData["context"]} />
        </Box>

        {/** 섹션 */}
        <Box
          component="section"
          sx={{ display: "flex", flexDirection: "column", gap: 1 }}
        >
          <ListSection {...tempData["necessity"]} />
        </Box>

        {/** 섹션 */}
        <Box
          component="section"
          sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
        >
          <ListSection {...tempData["architecture"]} />
        </Box>

        {/** 박스 영역 */}
        <BoxGrid {...tempData["box"]} height="100%" />

        {/** 섹션 */}
        <Box
          component="section"
          sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
        >
          <ListSection {...tempData["software"]} />
        </Box>

        {/** 섹션 */}
        <Box
          component="section"
          sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
        >
          <ListSection {...tempData["qna"]} />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeAppliance;
