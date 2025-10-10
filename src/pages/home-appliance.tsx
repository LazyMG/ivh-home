import { Box, Divider, Typography } from "@mui/material";
import SubTitle from "../components/solution/SubTitle";
import ListSection from "../components/solution/ListSection";

import tempData from "../data/home-appliance.json";

import BoxGrid from "../components/solution/BoxGrid";

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
      <Box sx={{ mt: 4 }}>
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
      </Box>

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
          <SubTitle subTitle={tempData["introduction"]["subtitle"]} />
          <ListSection
            listData={tempData["introduction"]["text"]}
            sx={tempData["introduction"]["sx"]}
            img={tempData["introduction"]["img"]}
          />
        </Box>

        {/** 섹션 */}
        <Box
          component="section"
          sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
        >
          <SubTitle subTitle={tempData["context"]["subtitle"]} />
          <ListSection
            listData={tempData["context"]["text"]}
            sx={tempData["context"]["sx"]}
            img={tempData["context"]["img"]}
          />
        </Box>

        {/** 섹션 */}
        <Box
          component="section"
          sx={{ display: "flex", flexDirection: "column", gap: 1 }}
        >
          <SubTitle subTitle={tempData["necessity"]["subtitle"]} />
          <ListSection
            listData={tempData["necessity"]["text"]}
            sx={tempData["necessity"]["sx"]}
            img={tempData["necessity"]["img"]}
          />
        </Box>

        {/** 섹션 */}
        <Box
          component="section"
          sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
        >
          <SubTitle subTitle={tempData["architecture"]["subtitle"]} />
          <ListSection
            listData={tempData["architecture"]["text"]}
            sx={tempData["architecture"]["sx"]}
            img={tempData["architecture"]["img"]}
          />
        </Box>

        {/** 박스 영역 */}
        {/** BoxContainer 최대 열 개수 지정 */}
        {/* <BoxContainer maxColumn={3}>
          <BoxSection
            color="#92b843"
            listData={tempData["technology"]["text"]}
            title={tempData["technology"]["subtitle"]}
          />
          <BoxSection
            color="#92b843"
            listData={tempData["service"]["text"]}
            title={tempData["service"]["subtitle"]}
          />
          <BoxSection
            color="#92b843"
            listData={tempData["effect"]["text"]}
            title={tempData["effect"]["subtitle"]}
          />
        </BoxContainer> */}

        <BoxGrid {...tempData["box"]} height="100%" />

        {/** 섹션 */}
        <Box
          component="section"
          sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
        >
          <SubTitle subTitle={tempData["software"]["subtitle"]} />
          <ListSection
            listData={tempData["software"]["text"]}
            sx={tempData["software"]["sx"]}
            img={tempData["software"]["img"]}
          />
        </Box>

        {/** 섹션 */}
        <Box
          component="section"
          sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
        >
          <SubTitle subTitle={tempData["qna"]["subtitle"]} />
          <ListSection
            listData={tempData["qna"]["text"]}
            sx={tempData["qna"]["sx"]}
            img={tempData["qna"]["img"]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeAppliance;
