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
import { MobileSpecRow, DesktopSpecRow } from "./TechSpecRow";
import type { IMOVATechnologySpec } from "../../../types/product";

const TechSpecTable = (technology_spec: IMOVATechnologySpec) => {
  const theme = useTheme();
  const isTabletOrBelow = useMediaQuery(theme.breakpoints.down("desktop"));
  const { labels } = technology_spec;

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
          variant="h5"
          sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "24px" }}
        >
          {labels.tech_spec}
        </Typography>
        <Typography
          sx={{ fontFamily: "Freesentation-5-Medium", fontSize: "18px", mb: 4 }}
        >
          {technology_spec.technology_spec_title}
        </Typography>
      </Box>

      {isTabletOrBelow ? (
        // 모바일/태블릿: 토글 리스트
        <Box sx={{ width: "100%" }}>
          {/* {labels.product_standard} Accordion */}
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
                {labels.product_standard}
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
                        <MobileSpecRow
                          label={labels.color}
                          value={product.product_standard.color}
                        />
                        <MobileSpecRow
                          label={labels.size}
                          value={product.product_standard.size}
                        />
                        <MobileSpecRow
                          label={labels.weight}
                          value={product.product_standard.weight}
                        />
                        <MobileSpecRow
                          label={labels.box_size}
                          value={product.product_standard.box_size}
                          isLast
                        />
                      </Box>
                    </Box>
                  ),
                )}
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* {labels.performance} Accordion */}
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
                {labels.performance}
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
                        <MobileSpecRow
                          label={labels.max_load}
                          value={product.performance.max_load}
                        />
                        <MobileSpecRow
                          label={labels.speed}
                          value={product.performance.speed}
                        />
                        <MobileSpecRow
                          label={labels.motor_performance}
                          value={product.performance.motor_performance}
                        />
                        <MobileSpecRow
                          label={labels.motor_rated_output}
                          value={product.performance.motor_rated_output}
                        />
                        <MobileSpecRow
                          label={labels.permitted_step}
                          value={product.performance.permitted_step}
                        />
                        <MobileSpecRow
                          label={labels.permitted_gap_width}
                          value={product.performance.permitted_gap_width}
                        />
                        <MobileSpecRow
                          label={labels.max_inclination_angle}
                          value={product.performance.max_inclination_angle}
                        />
                        <MobileSpecRow
                          label={labels.noise}
                          value={product.performance.noise}
                          isLast
                        />
                      </Box>
                    </Box>
                  ),
                )}
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* {labels.electrical} Accordion */}
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
                {labels.electrical}
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
                        <MobileSpecRow
                          label={labels.input_voltage}
                          value={product.electrical.input_voltage}
                        />
                        <MobileSpecRow
                          label={labels.output_voltage}
                          value={product.electrical.output_voltage}
                        />
                        <MobileSpecRow
                          label={labels.input_voltage_battery}
                          value={product.electrical.input_voltage_battery}
                        />
                        <MobileSpecRow
                          label={labels.capacity}
                          value={product.electrical.capacity}
                        />
                        <MobileSpecRow
                          label={labels.permitted_voltage}
                          value={product.electrical.permitted_voltage}
                          isLast
                        />
                      </Box>
                    </Box>
                  ),
                )}
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* {labels.environment} Accordion */}
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
                {labels.environment}
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
                        <MobileSpecRow
                          label={labels.ip_rating}
                          value={product.environment.ip_rating}
                        />
                        <MobileSpecRow
                          label={labels.wifi_frequency}
                          value={product.environment.wifi_frequency}
                        />
                        <MobileSpecRow
                          label={labels.wifi_current}
                          value={product.environment.wifi_current}
                          isLast
                        />
                      </Box>
                    </Box>
                  ),
                )}
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* {labels.battery} Accordion */}
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
                {labels.battery}
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
                        <MobileSpecRow
                          label={labels.lifespan}
                          value={product.battery.lifespan}
                        />
                        <MobileSpecRow
                          label={labels.charging_time}
                          value={product.battery.charging_time}
                          isLast
                        />
                      </Box>
                    </Box>
                  ),
                )}
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* {labels.environmental_monitoring} Accordion */}
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
                {labels.environmental_monitoring}
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
                        <MobileSpecRow
                          label={labels.temperature_range}
                          value={
                            product.environmental_monitoring.temperature.range
                          }
                        />
                        <MobileSpecRow
                          label={labels.temperature_accuracy}
                          value={
                            product.environmental_monitoring.temperature
                              .accuracy
                          }
                        />
                        <MobileSpecRow
                          label={labels.humidity_range}
                          value={
                            product.environmental_monitoring.humidity.range
                          }
                        />
                        <MobileSpecRow
                          label={labels.humidity_accuracy}
                          value={
                            product.environmental_monitoring.humidity.accuracy
                          }
                        />
                        <MobileSpecRow
                          label={labels.dust_particle_size}
                          value={
                            product.environmental_monitoring.dust.particle_size
                          }
                        />
                        <MobileSpecRow
                          label={labels.dust_concentration_range}
                          value={
                            product.environmental_monitoring.dust
                              .concentration_range
                          }
                          valueFontSize="12px"
                        />
                        <MobileSpecRow
                          label={labels.dust_range}
                          value={product.environmental_monitoring.dust.accuracy}
                        />
                        <MobileSpecRow
                          label={labels.camera_sensor}
                          value={product.environmental_monitoring.camera.sensor}
                        />
                        <MobileSpecRow
                          label={labels.camera_static_resolution}
                          value={
                            product.environmental_monitoring.camera.resolution
                          }
                          isLast
                        />
                      </Box>
                    </Box>
                  ),
                )}
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* {labels.application} 섹션 */}
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
              {labels.application}
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
                ),
              )}
            </Box>
          </Box>
          <Box component="tbody">
            {/* {labels.product_standard} 섹션 */}
            <DesktopSpecRow
              label={labels.color}
              values={technology_spec.technology_spec_products.map(
                (p) => p.product_standard.color,
              )}
              sectionTitle={{ title: labels.product_standard, rowSpan: 4 }}
            />
            <DesktopSpecRow
              label={labels.size}
              values={technology_spec.technology_spec_products.map(
                (p) => p.product_standard.size,
              )}
            />
            <DesktopSpecRow
              label={labels.weight}
              values={technology_spec.technology_spec_products.map(
                (p) => p.product_standard.weight,
              )}
            />
            <DesktopSpecRow
              label={labels.box_size}
              values={technology_spec.technology_spec_products.map(
                (p) => p.product_standard.box_size,
              )}
            />

            {/* {labels.performance} 섹션 */}
            <DesktopSpecRow
              label={labels.max_load}
              values={technology_spec.technology_spec_products.map(
                (p) => p.performance.max_load,
              )}
              sectionTitle={{ title: labels.performance, rowSpan: 8 }}
            />
            <DesktopSpecRow
              label={labels.speed}
              values={technology_spec.technology_spec_products.map(
                (p) => p.performance.speed,
              )}
            />
            <DesktopSpecRow
              label={labels.motor_performance}
              values={technology_spec.technology_spec_products.map(
                (p) => p.performance.motor_performance,
              )}
            />
            <DesktopSpecRow
              label={labels.motor_rated_output}
              values={technology_spec.technology_spec_products.map(
                (p) => p.performance.motor_rated_output,
              )}
            />
            <DesktopSpecRow
              label={labels.permitted_step}
              values={technology_spec.technology_spec_products.map(
                (p) => p.performance.permitted_step,
              )}
            />
            <DesktopSpecRow
              label={labels.permitted_gap_width}
              values={technology_spec.technology_spec_products.map(
                (p) => p.performance.permitted_gap_width,
              )}
            />
            <DesktopSpecRow
              label={labels.max_inclination_angle}
              values={technology_spec.technology_spec_products.map(
                (p) => p.performance.max_inclination_angle,
              )}
            />
            <DesktopSpecRow
              label={labels.noise}
              values={technology_spec.technology_spec_products.map(
                (p) => p.performance.noise,
              )}
            />

            {/* {labels.electrical} 섹션 */}
            <DesktopSpecRow
              label={labels.input_voltage}
              values={technology_spec.technology_spec_products.map(
                (p) => p.electrical.input_voltage,
              )}
              sectionTitle={{ title: labels.electrical, rowSpan: 5 }}
            />
            <DesktopSpecRow
              label={labels.output_voltage}
              values={technology_spec.technology_spec_products.map(
                (p) => p.electrical.output_voltage,
              )}
            />
            <DesktopSpecRow
              label={labels.input_voltage_battery}
              values={technology_spec.technology_spec_products.map(
                (p) => p.electrical.input_voltage_battery,
              )}
            />
            <DesktopSpecRow
              label={labels.capacity}
              values={technology_spec.technology_spec_products.map(
                (p) => p.electrical.capacity,
              )}
            />
            <DesktopSpecRow
              label={labels.permitted_voltage}
              values={technology_spec.technology_spec_products.map(
                (p) => p.electrical.permitted_voltage,
              )}
            />

            {/* 환경 섹션 */}
            <DesktopSpecRow
              label={labels.ip_rating}
              values={technology_spec.technology_spec_products.map(
                (p) => p.environment.ip_rating,
              )}
              sectionTitle={{ title: labels.environment, rowSpan: 3 }}
            />
            <DesktopSpecRow
              label={labels.wifi_frequency}
              values={technology_spec.technology_spec_products.map(
                (p) => p.environment.wifi_frequency,
              )}
            />
            <DesktopSpecRow
              label={labels.wifi_current}
              values={technology_spec.technology_spec_products.map(
                (p) => p.environment.wifi_current,
              )}
            />

            {/* {labels.battery} 섹션 */}
            <DesktopSpecRow
              label={labels.lifespan}
              values={technology_spec.technology_spec_products.map(
                (p) => p.battery.lifespan,
              )}
              sectionTitle={{ title: labels.battery, rowSpan: 2 }}
            />
            <DesktopSpecRow
              label={labels.charging_time}
              values={technology_spec.technology_spec_products.map(
                (p) => p.battery.charging_time,
              )}
            />

            {/* {labels.environmental_monitoring} - 온도 */}
            <DesktopSpecRow
              label={labels.temperature_range}
              values={technology_spec.technology_spec_products.map(
                (p) => p.environmental_monitoring.temperature.range,
              )}
              sectionTitle={{
                title: labels.environmental_monitoring,
                rowSpan: 9,
              }}
            />
            <DesktopSpecRow
              label={labels.temperature_accuracy}
              values={technology_spec.technology_spec_products.map(
                (p) => p.environmental_monitoring.temperature.accuracy,
              )}
            />
            <DesktopSpecRow
              label={labels.humidity_range}
              values={technology_spec.technology_spec_products.map(
                (p) => p.environmental_monitoring.humidity.range,
              )}
            />
            <DesktopSpecRow
              label={labels.humidity_accuracy}
              values={technology_spec.technology_spec_products.map(
                (p) => p.environmental_monitoring.humidity.accuracy,
              )}
            />
            <DesktopSpecRow
              label={labels.dust_particle_size}
              values={technology_spec.technology_spec_products.map(
                (p) => p.environmental_monitoring.dust.particle_size,
              )}
            />
            <DesktopSpecRow
              label={labels.dust_concentration_range}
              values={technology_spec.technology_spec_products.map(
                (p) => p.environmental_monitoring.dust.concentration_range,
              )}
            />
            <DesktopSpecRow
              label={labels.dust_range}
              values={technology_spec.technology_spec_products.map(
                (p) => p.environmental_monitoring.dust.accuracy,
              )}
            />
            <DesktopSpecRow
              label={labels.camera_sensor}
              values={technology_spec.technology_spec_products.map(
                (p) => p.environmental_monitoring.camera.sensor,
              )}
            />
            <DesktopSpecRow
              label={labels.camera_static_resolution}
              values={technology_spec.technology_spec_products.map(
                (p) => p.environmental_monitoring.camera.resolution,
              )}
            />

            {/* {labels.application} 섹션 */}
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
                  {labels.application}
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
                    lineHeight: 1.4,
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
