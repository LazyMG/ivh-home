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

type WirelessChargingSpec = {
  transmitter: {
    charging_module: {
      power: string;
      size: string;
      weight: string;
      input_voltage: string;
      current: string;
      voltage: string;
    };
    charging_coil_pad: {
      power: string;
      size: string;
      weight: string;
      input_voltage: string;
      current: string;
      voltage: string;
    };
  };
};

type WirelessChargingTableProps = {
  wireless_charging: WirelessChargingSpec;
};

const WirelessChargingTable = ({
  wireless_charging,
}: WirelessChargingTableProps) => {
  const theme = useTheme();
  const isTabletOrBelow = useMediaQuery(theme.breakpoints.down("desktop"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        mt: 6,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 4 }}>
        충전부 (TX)
      </Typography>

      {isTabletOrBelow ? (
        // 모바일/태블릿: 토글 리스트
        <Box sx={{ width: "100%" }}>
          {/* 충전 제어기 Accordion */}
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: "#f5f5f5",
                fontWeight: "bold",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>송전 제어기</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    py: 1,
                    borderBottom: "1px solid #e0e0e0",
                    gap: 2,
                  }}
                >
                  <Typography sx={{ flex: "0 0 180px", color: "#666" }}>
                    소비 전력
                  </Typography>
                  <Typography sx={{ flex: 1 }}>
                    {wireless_charging.transmitter.charging_module.power}
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
                  <Typography sx={{ flex: "0 0 180px", color: "#666" }}>
                    크기 (L×W×H)
                  </Typography>
                  <Typography sx={{ flex: 1 }}>
                    {wireless_charging.transmitter.charging_module.size}
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
                  <Typography sx={{ flex: "0 0 180px", color: "#666" }}>
                    중량
                  </Typography>
                  <Typography sx={{ flex: 1 }}>
                    {wireless_charging.transmitter.charging_module.weight}
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
                  <Typography sx={{ flex: "0 0 180px", color: "#666" }}>
                    입력
                  </Typography>
                  <Typography sx={{ flex: 1 }}>
                    {
                      wireless_charging.transmitter.charging_module
                        .input_voltage
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
                  <Typography sx={{ flex: "0 0 180px", color: "#666" }}>
                    전류
                  </Typography>
                  <Typography sx={{ flex: 1 }}>
                    {wireless_charging.transmitter.charging_module.current}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", py: 1, gap: 2 }}>
                  <Typography sx={{ flex: "0 0 180px", color: "#666" }}>
                    전압
                  </Typography>
                  <Typography sx={{ flex: 1 }}>
                    {wireless_charging.transmitter.charging_module.voltage}
                  </Typography>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* 충전 코일패드 Accordion */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: "#f5f5f5",
                fontWeight: "bold",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>송전 코일패드</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    py: 1,
                    borderBottom: "1px solid #e0e0e0",
                    gap: 2,
                  }}
                >
                  <Typography sx={{ flex: "0 0 180px", color: "#666" }}>
                    소비 전력
                  </Typography>
                  <Typography sx={{ flex: 1 }}>
                    {wireless_charging.transmitter.charging_coil_pad.power}
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
                  <Typography sx={{ flex: "0 0 180px", color: "#666" }}>
                    크기 (L×W×H)
                  </Typography>
                  <Typography sx={{ flex: 1 }}>
                    {wireless_charging.transmitter.charging_coil_pad.size}
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
                  <Typography sx={{ flex: "0 0 180px", color: "#666" }}>
                    중량
                  </Typography>
                  <Typography sx={{ flex: 1 }}>
                    {wireless_charging.transmitter.charging_coil_pad.weight}
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
                  <Typography sx={{ flex: "0 0 180px", color: "#666" }}>
                    입력
                  </Typography>
                  <Typography sx={{ flex: 1 }}>
                    {
                      wireless_charging.transmitter.charging_coil_pad
                        .input_voltage
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
                  <Typography sx={{ flex: "0 0 180px", color: "#666" }}>
                    전류
                  </Typography>
                  <Typography sx={{ flex: 1 }}>
                    {wireless_charging.transmitter.charging_coil_pad.current}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", py: 1, gap: 2 }}>
                  <Typography sx={{ flex: "0 0 180px", color: "#666" }}>
                    전압
                  </Typography>
                  <Typography sx={{ flex: 1 }}>
                    {wireless_charging.transmitter.charging_coil_pad.voltage}
                  </Typography>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      ) : (
        // 데스크톱: 테이블
        <Box
          component="table"
          sx={{
            width: "60%",
            borderCollapse: "collapse",
            border: "1px solid #e0e0e0",
            borderTop: "none",
            borderLeft: "none",
            margin: "0 auto",
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
                colSpan={2}
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  p: 2,
                  textAlign: "center",
                  fontWeight: "bold",
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                  송전부 (TX)
                </Typography>
              </Box>
            </Box>
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
                  backgroundColor: "#000",
                  color: "#fff",
                  p: 2,
                  textAlign: "center",
                  fontWeight: "bold",
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                  송전 제어기
                </Typography>
              </Box>
              <Box
                component="th"
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  p: 2,
                  textAlign: "center",
                  fontWeight: "bold",
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                  송전 코일패드
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box component="tbody">
            {/* 소비 전력 */}
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "200px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                  backgroundColor: "#000",
                  color: "#fff",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>소비 전력</Typography>
              </Box>
              <Box
                component="td"
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>
                  {wireless_charging.transmitter.charging_module.power}
                </Typography>
              </Box>
              <Box
                component="td"
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>
                  {wireless_charging.transmitter.charging_coil_pad.power}
                </Typography>
              </Box>
            </Box>

            {/* 크기 */}
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "200px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                  backgroundColor: "#000",
                  color: "#fff",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  크기 (L×W×H)
                </Typography>
              </Box>
              <Box
                component="td"
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>
                  {wireless_charging.transmitter.charging_module.size}
                </Typography>
              </Box>
              <Box
                component="td"
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>
                  {wireless_charging.transmitter.charging_coil_pad.size}
                </Typography>
              </Box>
            </Box>

            {/* 중량 */}
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "200px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                  backgroundColor: "#000",
                  color: "#fff",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>중량</Typography>
              </Box>
              <Box
                component="td"
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>
                  {wireless_charging.transmitter.charging_module.weight}
                </Typography>
              </Box>
              <Box
                component="td"
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>
                  {wireless_charging.transmitter.charging_coil_pad.weight}
                </Typography>
              </Box>
            </Box>

            {/* 입력 */}
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "200px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                  backgroundColor: "#000",
                  color: "#fff",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>입력</Typography>
              </Box>
              <Box
                component="td"
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>
                  {wireless_charging.transmitter.charging_module.input_voltage}
                </Typography>
              </Box>
              <Box
                component="td"
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>
                  {
                    wireless_charging.transmitter.charging_coil_pad
                      .input_voltage
                  }
                </Typography>
              </Box>
            </Box>

            {/* 전류 */}
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "200px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                  backgroundColor: "#000",
                  color: "#fff",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>전류</Typography>
              </Box>
              <Box
                component="td"
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>
                  {wireless_charging.transmitter.charging_module.current}
                </Typography>
              </Box>
              <Box
                component="td"
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>
                  {wireless_charging.transmitter.charging_coil_pad.current}
                </Typography>
              </Box>
            </Box>

            {/* 전압 */}
            <Box component="tr">
              <Box
                component="th"
                sx={{
                  width: "200px",
                  p: 2,
                  border: "1px solid #e0e0e0",
                  backgroundColor: "#000",
                  color: "#fff",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>전압</Typography>
              </Box>
              <Box
                component="td"
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>
                  {wireless_charging.transmitter.charging_module.voltage}
                </Typography>
              </Box>
              <Box
                component="td"
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>
                  {wireless_charging.transmitter.charging_coil_pad.voltage}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default WirelessChargingTable;
