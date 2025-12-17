import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type IMOVATechnologySpec = {
  technology_spec_title: string;
  technology_spec_products: {
    product: string;
    product_standard: {
      color: string;
      size: string;
      weight: string;
      box_size: string;
    };
    performance: {
      max_load: string;
      speed: string;
      motor_performance: string;
      motor_rated_output: string;
      permitted_step: string;
      permitted_gap_width: string;
      max_inclination_angle: string;
      noise: string;
    };
    electrical: {
      input_voltage: string;
      output_voltage: string;
      input_voltage_battery: string;
      capacity: string;
      permitted_voltage: string;
    };
    environment: {
      ip_rating: string;
      wifi_frequency: string;
      wifi_current: string;
    };
    battery: {
      lifespan: string;
      charging_time: string;
    };
    environmental_monitoring: {
      temperature: {
        range: string;
        accuracy: string;
      };
      humidity: {
        range: string;
        accuracy: string;
      };
      dust: {
        particle_size: string;
        concentration_range: string;
        accuracy: string;
      };
      camera: {
        sensor: string;
        resolution: string;
      };
    };
  }[];
  technology_spec_application: string;
  technology_spec_sub: string;
};
const TechSpecTable = (technology_spec: IMOVATechnologySpec) => {
  const theme = useTheme();
  const isTabletOrBelow = useMediaQuery(theme.breakpoints.down("desktop"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <Typography
          sx={{ fontFamily: "Freesentation-5-Medium", fontSize: "18px" }}
        >
          기술 사양
        </Typography>
        <Typography
          variant="h5"
          sx={{ mb: 4, fontFamily: "Freesentation-7-Bold", fontSize: "24px" }}
        >
          {technology_spec.technology_spec_title}
        </Typography>
      </Box>

      {isTabletOrBelow ? (
        // 모바일/태블릿: 토글 리스트
        <Box sx={{ width: "100%" }}>
          {/* 제품규격 Accordion */}
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: "#f5f5f5",
              }}
            >
              <Typography
                sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "20px" }}
              >
                제품규격
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {technology_spec.technology_spec_products.map(
                  (product, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Typography
                        sx={{
                          fontFamily: "Freesentation-7-Bold",
                          mb: 1,
                          pb: 1,
                          borderBottom: "2px solid #000",
                        }}
                      >
                        {product.product}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            색상
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.product_standard.color}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            크기(길이 × 폭 × 높이)
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.product_standard.size}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            중량
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.product_standard.weight}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", py: 1, gap: 2 }}>
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            적재함 크기(길이 × 폭)
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.product_standard.box_size}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  )
                )}
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* 성능 Accordion */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: "#f5f5f5",
                fontWeight: "bold",
              }}
            >
              <Typography
                sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "20px" }}
              >
                성능
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {technology_spec.technology_spec_products.map(
                  (product, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Typography
                        sx={{
                          mb: 1,
                          pb: 1,
                          borderBottom: "2px solid #000",
                          fontFamily: "Freesentation-7-Bold",
                        }}
                      >
                        {product.product}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            최대 적재량
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.performance.max_load}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            주행 속도
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.performance.speed}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            구동모터 성능
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.performance.motor_performance}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            구동모터 정격출력
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.performance.motor_rated_output}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            허용 바닥 단차
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.performance.permitted_step}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            허용 바닥 틈새 폭
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.performance.permitted_gap_width}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            최대 주행 가능 경사각
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.performance.max_inclination_angle}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", py: 1, gap: 2 }}>
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            소음
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.performance.noise}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  )
                )}
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* 전기사양 Accordion */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: "#f5f5f5",
              }}
            >
              <Typography
                sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "20px" }}
              >
                전기사양
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {technology_spec.technology_spec_products.map(
                  (product, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Typography
                        sx={{
                          fontFamily: "Freesentation-7-Bold",
                          mb: 1,
                          pb: 1,
                          borderBottom: "2px solid #000",
                        }}
                      >
                        {product.product}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            입력 전압
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.electrical.input_voltage}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            출력 전압
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.electrical.output_voltage}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            배터리 입력 전압
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.electrical.input_voltage_battery}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            용량
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.electrical.capacity}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", py: 1, gap: 2 }}>
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            허용 전압
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.electrical.permitted_voltage}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  )
                )}
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* 환경사양 Accordion */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: "#f5f5f5",
              }}
            >
              <Typography
                sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "20px" }}
              >
                환경사양
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {technology_spec.technology_spec_products.map(
                  (product, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Typography
                        sx={{
                          fontFamily: "Freesentation-7-Bold",
                          mb: 1,
                          pb: 1,
                          borderBottom: "2px solid #000",
                        }}
                      >
                        {product.product}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            IP 등급
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.environment.ip_rating}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            Wi-Fi 주파수
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.environment.wifi_frequency}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", py: 1, gap: 2 }}>
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            Wi-Fi 전류
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.environment.wifi_current}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  )
                )}
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* 배터리 Accordion */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: "#f5f5f5",
              }}
            >
              <Typography
                sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "20px" }}
              >
                배터리
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {technology_spec.technology_spec_products.map(
                  (product, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Typography
                        sx={{
                          fontFamily: "Freesentation-7-Bold",
                          mb: 1,
                          pb: 1,
                          borderBottom: "2px solid #000",
                        }}
                      >
                        {product.product}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            수명
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.battery.lifespan}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", py: 1, gap: 2 }}>
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            충전 시간
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.battery.charging_time}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  )
                )}
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* 환경 모니터링 Accordion */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: "#f5f5f5",
              }}
            >
              <Typography
                sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "20px" }}
              >
                환경 모니터링
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {technology_spec.technology_spec_products.map(
                  (product, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Typography
                        sx={{
                          fontFamily: "Freesentation-7-Bold",
                          mb: 1,
                          pb: 1,
                          borderBottom: "2px solid #000",
                        }}
                      >
                        {product.product}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            온도 범위
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.environmental_monitoring.temperature.range}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            온도 정확도
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {
                              product.environmental_monitoring.temperature
                                .accuracy
                            }
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            습도 범위
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.environmental_monitoring.humidity.range}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            습도 정확도
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.environmental_monitoring.humidity.accuracy}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            미세먼지 입자 크기
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {
                              product.environmental_monitoring.dust
                                .particle_size
                            }
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            py: 1,
                            borderBottom: "1px solid #e0e0e0",
                            gap: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            미세먼지 농도 범위
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {
                              product.environmental_monitoring.dust
                                .concentration_range
                            }
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", py: 1, gap: 2 }}>
                          <Typography
                            sx={{
                              flex: "0 0 180px",
                              color: "#666",
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            카메라
                          </Typography>
                          <Typography
                            sx={{
                              flex: 1,
                              fontFamily: "Freesentation-5-Medium",
                            }}
                          >
                            {product.environmental_monitoring.camera.sensor}
                            <br />
                            {product.environmental_monitoring.camera.resolution}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  )
                )}
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* 적용 분야 섹션 */}
          <Box
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              p: 3,
              mt: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Freesentation-7-Bold",
                mb: 2,
                fontSize: { mobile: "24px", tablet: "24px", desktop: "18px" },
              }}
            >
              적용 분야
            </Typography>
            <Typography
              sx={{
                lineHeight: 1.8,
                fontSize: { mobile: "14px", tablet: "15px", desktop: "16px" },
                whiteSpace: "pre-line",
                fontFamily: "Freesentation-5-Medium",
              }}
            >
              {technology_spec.technology_spec_application}
            </Typography>
          </Box>
        </Box>
      ) : (
        // 데스크톱: 기존 테이블
        <Box
          component="table"
          sx={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #e0e0e0",
            borderTop: "none",
            borderLeft: "none",
            mx: "auto",
          }}
        >
          <Box component="thead">
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "200px",
                  backgroundColor: "#fff",
                  p: 2,
                }}
              />
              <Box
                component="th"
                sx={{
                  backgroundColor: "#fff",
                  p: 2,
                }}
              />
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="th"
                    key={index}
                    sx={{
                      backgroundColor: "#000",
                      color: "#fff",
                      p: 2,
                      textAlign: "center",
                      fontWeight: "bold",
                      border: "1px solid #e0e0e0",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontFamily: "Freesentation-7-Bold",
                      }}
                    >
                      {product.product}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
          </Box>
          <Box component="tbody">
            {/* 제품 규격 섹션 */}
            <Box component="tr">
              <Box
                component="th"
                rowSpan={4}
                sx={{
                  width: "200px",
                  backgroundColor: "#000",
                  color: "#fff",
                  p: 2,
                  fontWeight: "bold",
                  textAlign: "center",
                  border: "1px solid #e0e0e0",
                  verticalAlign: "middle",
                }}
              >
                <Typography
                  sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "18px" }}
                >
                  제품 규격
                </Typography>
              </Box>
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  색상
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.product_standard.color}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  크기 (L x W x H)
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.product_standard.size}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  중량
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.product_standard.weight}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  적재함 치수
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.product_standard.box_size}
                    </Typography>
                  </Box>
                )
              )}
            </Box>

            {/* 구동 성능 섹션 */}
            <Box component="tr">
              <Box
                component="th"
                rowSpan={8}
                sx={{
                  width: "200px",
                  backgroundColor: "#000",
                  color: "#fff",
                  p: 2,
                  fontWeight: "bold",
                  textAlign: "center",
                  border: "1px solid #e0e0e0",
                  verticalAlign: "middle",
                }}
              >
                <Typography
                  sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "18px" }}
                >
                  구동 성능
                </Typography>
              </Box>
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  최대 적재량
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.performance.max_load}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  주행 속도
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.performance.speed}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  구동모터 성능
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.performance.motor_performance}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  구동모터 정격출력
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.performance.motor_rated_output}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  허용 바닥 단차
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.performance.permitted_step}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  허용 바닥 틈새 폭
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.performance.permitted_gap_width}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  최대 주행 가능 경사각
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.performance.max_inclination_angle}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  소음
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.performance.noise}
                    </Typography>
                  </Box>
                )
              )}
            </Box>

            {/* 전기 사양 섹션 */}
            <Box component="tr">
              <Box
                component="th"
                rowSpan={5}
                sx={{
                  width: "200px",
                  backgroundColor: "#000",
                  color: "#fff",
                  p: 2,
                  fontWeight: "bold",
                  textAlign: "center",
                  border: "1px solid #e0e0e0",
                  verticalAlign: "middle",
                }}
              >
                <Typography
                  sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "18px" }}
                >
                  전기 사양
                </Typography>
              </Box>
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  입력 전압
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.electrical.input_voltage}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  출력 전압
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.electrical.output_voltage}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  배터리 입력 전압
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.electrical.input_voltage_battery}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  용량
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.electrical.capacity}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  허용 전압
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.electrical.permitted_voltage}
                    </Typography>
                  </Box>
                )
              )}
            </Box>

            {/* 환경 섹션 */}
            <Box component="tr">
              <Box
                component="th"
                rowSpan={3}
                sx={{
                  width: "200px",
                  backgroundColor: "#000",
                  color: "#fff",
                  p: 2,
                  fontWeight: "bold",
                  textAlign: "center",
                  border: "1px solid #e0e0e0",
                  verticalAlign: "middle",
                }}
              >
                <Typography
                  sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "18px" }}
                >
                  환경
                </Typography>
              </Box>
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  IP 등급
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.environment.ip_rating}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  Wi-Fi 주파수
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.environment.wifi_frequency}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  Wi-Fi 전류
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.environment.wifi_current}
                    </Typography>
                  </Box>
                )
              )}
            </Box>

            {/* 배터리 섹션 */}
            <Box component="tr">
              <Box
                component="th"
                rowSpan={2}
                sx={{
                  width: "200px",
                  backgroundColor: "#000",
                  color: "#fff",
                  p: 2,
                  fontWeight: "bold",
                  textAlign: "center",
                  border: "1px solid #e0e0e0",
                  verticalAlign: "middle",
                }}
              >
                <Typography
                  sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "18px" }}
                >
                  배터리
                </Typography>
              </Box>
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  수명
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.battery.lifespan}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  충전 시간
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.battery.charging_time}
                    </Typography>
                  </Box>
                )
              )}
            </Box>

            {/* 환경 모니터링 - 온도 */}
            <Box component="tr">
              <Box
                component="th"
                rowSpan={7}
                sx={{
                  width: "200px",
                  backgroundColor: "#000",
                  color: "#fff",
                  p: 2,
                  fontWeight: "bold",
                  textAlign: "center",
                  border: "1px solid #e0e0e0",
                  verticalAlign: "middle",
                }}
              >
                <Typography
                  sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "18px" }}
                >
                  환경 모니터링
                </Typography>
              </Box>
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  온도 범위
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.environmental_monitoring.temperature.range}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  온도 정확도
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.environmental_monitoring.temperature.accuracy}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  습도 범위
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.environmental_monitoring.humidity.range}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  습도 정확도
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography>
                      {product.environmental_monitoring.humidity.accuracy}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  미세먼지 입자 크기
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.environmental_monitoring.dust.particle_size}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  미세먼지 농도 범위
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "14px",
                      }}
                    >
                      {
                        product.environmental_monitoring.dust
                          .concentration_range
                      }
                    </Typography>
                  </Box>
                )
              )}
            </Box>
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "150px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  sx={{
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                  }}
                >
                  카메라
                </Typography>
              </Box>
              {technology_spec.technology_spec_products.map(
                (product, index) => (
                  <Box
                    component="td"
                    key={index}
                    sx={{
                      p: 2,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#364B60",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      {product.environmental_monitoring.camera.sensor}
                      <br />
                      {product.environmental_monitoring.camera.resolution}
                    </Typography>
                  </Box>
                )
              )}
            </Box>

            {/* 적용 분야 섹션 */}
            <Box component="tr">
              <Box
                component="th"
                colSpan={2}
                sx={{
                  width: "350px",
                  backgroundColor: "#000",
                  color: "#fff",
                  p: 2,
                  fontWeight: "bold",
                  textAlign: "center",
                  border: "1px solid #e0e0e0",
                  verticalAlign: "middle",
                }}
              >
                <Typography
                  sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "18px" }}
                >
                  적용 분야
                </Typography>
              </Box>
              <Box
                component="td"
                colSpan={technology_spec.technology_spec_products.length}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "left",
                }}
              >
                <Typography
                  sx={{
                    lineHeight: 1.8,
                    whiteSpace: "pre-line",
                    color: "#364B60",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "16px",
                  }}
                >
                  {technology_spec.technology_spec_application}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
export default TechSpecTable;
