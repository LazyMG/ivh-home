import { Box, Typography } from "@mui/material";

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
  technology_spec_example: string;
  technology_spec_sub: string;
};

const TechSpecTable = (technology_spec: IMOVATechnologySpec) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        gap: 8,
        mt: 20,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 4 }}>
        {technology_spec.technology_spec_title}
      </Typography>

      {/* 표 */}
      <Box
        component="table"
        sx={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #e0e0e0",
          borderTop: "none",
          borderLeft: "none",
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
            {technology_spec.technology_spec_products.map((product, index) => (
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
                <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                  {product.product}
                </Typography>
              </Box>
            ))}
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
              <Typography sx={{ fontWeight: "bold" }}>제품 규격</Typography>
            </Box>
            <Box
              component="th"
              sx={{
                width: "150px",
                p: 2,
                border: "1px solid #e0e0e0",
              }}
            >
              <Typography>색상</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
              <Box
                component="td"
                key={index}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>{product.product_standard.color}</Typography>
              </Box>
            ))}
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
              <Typography>크기 (L x W x H)</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
              <Box
                component="td"
                key={index}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>{product.product_standard.size}</Typography>
              </Box>
            ))}
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
              <Typography>중량</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
              <Box
                component="td"
                key={index}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>{product.product_standard.weight}</Typography>
              </Box>
            ))}
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
              <Typography>적재함 치수</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
              <Box
                component="td"
                key={index}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>{product.product_standard.box_size}</Typography>
              </Box>
            ))}
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
              <Typography sx={{ fontWeight: "bold" }}>구동 성능</Typography>
            </Box>
            <Box
              component="th"
              sx={{
                width: "150px",
                p: 2,
                border: "1px solid #e0e0e0",
              }}
            >
              <Typography>최대 적재량</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
              <Box
                component="td"
                key={index}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>{product.performance.max_load}</Typography>
              </Box>
            ))}
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
              <Typography>주행 속도</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
              <Box
                component="td"
                key={index}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>{product.performance.speed}</Typography>
              </Box>
            ))}
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
              <Typography>구동모터 성능</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
              <Box
                component="td"
                key={index}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>{product.performance.motor_performance}</Typography>
              </Box>
            ))}
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
              <Typography>구동모터 정격출력</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
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
                  {product.performance.motor_rated_output}
                </Typography>
              </Box>
            ))}
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
              <Typography>허용 바닥 단차</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
              <Box
                component="td"
                key={index}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>{product.performance.permitted_step}</Typography>
              </Box>
            ))}
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
              <Typography>허용 바닥 틈새 폭</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
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
                  {product.performance.permitted_gap_width}
                </Typography>
              </Box>
            ))}
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
              <Typography>최대 주행 가능 경사각</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
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
                  {product.performance.max_inclination_angle}
                </Typography>
              </Box>
            ))}
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
              <Typography>소음</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
              <Box
                component="td"
                key={index}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>{product.performance.noise}</Typography>
              </Box>
            ))}
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
              <Typography sx={{ fontWeight: "bold" }}>전기 사양</Typography>
            </Box>
            <Box
              component="th"
              sx={{
                width: "150px",
                p: 2,
                border: "1px solid #e0e0e0",
              }}
            >
              <Typography>입력 전압</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
              <Box
                component="td"
                key={index}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>{product.electrical.input_voltage}</Typography>
              </Box>
            ))}
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
              <Typography>출력 전압</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
              <Box
                component="td"
                key={index}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>{product.electrical.output_voltage}</Typography>
              </Box>
            ))}
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
              <Typography>배터리 입력 전압</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
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
                  {product.electrical.input_voltage_battery}
                </Typography>
              </Box>
            ))}
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
              <Typography>용량</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
              <Box
                component="td"
                key={index}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>{product.electrical.capacity}</Typography>
              </Box>
            ))}
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
              <Typography>허용 전압</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
              <Box
                component="td"
                key={index}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>{product.electrical.permitted_voltage}</Typography>
              </Box>
            ))}
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
              <Typography sx={{ fontWeight: "bold" }}>환경</Typography>
            </Box>
            <Box
              component="th"
              sx={{
                width: "150px",
                p: 2,
                border: "1px solid #e0e0e0",
              }}
            >
              <Typography>IP 등급</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
              <Box
                component="td"
                key={index}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>{product.environment.ip_rating}</Typography>
              </Box>
            ))}
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
              <Typography>Wi-Fi 주파수</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
              <Box
                component="td"
                key={index}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>{product.environment.wifi_frequency}</Typography>
              </Box>
            ))}
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
              <Typography>Wi-Fi 전류</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
              <Box
                component="td"
                key={index}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>{product.environment.wifi_current}</Typography>
              </Box>
            ))}
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
              <Typography sx={{ fontWeight: "bold" }}>배터리</Typography>
            </Box>
            <Box
              component="th"
              sx={{
                width: "150px",
                p: 2,
                border: "1px solid #e0e0e0",
              }}
            >
              <Typography>수명</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
              <Box
                component="td"
                key={index}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>{product.battery.lifespan}</Typography>
              </Box>
            ))}
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
              <Typography>충전 시간</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
              <Box
                component="td"
                key={index}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography>{product.battery.charging_time}</Typography>
              </Box>
            ))}
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
              <Typography sx={{ fontWeight: "bold" }}>환경 모니터링</Typography>
            </Box>
            <Box
              component="th"
              sx={{
                width: "150px",
                p: 2,
                border: "1px solid #e0e0e0",
              }}
            >
              <Typography>온도 범위</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
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
                  {product.environmental_monitoring.temperature.range}
                </Typography>
              </Box>
            ))}
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
              <Typography>온도 정확도</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
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
                  {product.environmental_monitoring.temperature.accuracy}
                </Typography>
              </Box>
            ))}
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
              <Typography>습도 범위</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
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
                  {product.environmental_monitoring.humidity.range}
                </Typography>
              </Box>
            ))}
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
              <Typography>습도 정확도</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
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
            ))}
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
              <Typography>미세먼지 입자 크기</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
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
                  {product.environmental_monitoring.dust.particle_size}
                </Typography>
              </Box>
            ))}
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
              <Typography>미세먼지 농도 범위</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
              <Box
                component="td"
                key={index}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
              >
                <Typography sx={{ fontSize: "12px" }}>
                  {product.environmental_monitoring.dust.concentration_range}
                </Typography>
              </Box>
            ))}
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
              <Typography>카메라</Typography>
            </Box>
            {technology_spec.technology_spec_products.map((product, index) => (
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
                  {product.environmental_monitoring.camera.sensor}
                  <br />
                  {product.environmental_monitoring.camera.resolution}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default TechSpecTable;
