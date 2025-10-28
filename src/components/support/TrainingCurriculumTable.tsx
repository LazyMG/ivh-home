import { Box, Typography } from "@mui/material";

interface TraingCurriculumTableProps {
  curriculums: {
    title: string;
    columns: string[];
    rows: (
      | {
          time: string;
          learning: {
            content: string;
            rowSpan: number;
          };
          trainingContent: string;
        }
      | {
          time: string;
          learning: null;
          trainingContent: string;
        }
    )[];
  }[];
}

{
  /** 커리큘럼 섹션에 사용되는 테이블 컴포넌트 */
}
{
  /** JSON 데이터에서 파일에서 row-span 및 content를 가져옴 */
}
const TraingCurriculumTable = ({ curriculums }: TraingCurriculumTableProps) => {
  return curriculums.map((curriculum, index) => (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ mt: 4, mb: 8 }}
      key={index}
    >
      <Typography
        sx={{
          fontSize: "24px",
          color: "#3d67bc",
          fontWeight: "bold",
          mb: 1,
        }}
      >
        {curriculum.title}
      </Typography>
      <Box
        component="table"
        sx={{
          width: "100%",
          borderCollapse: "collapse",
          "& td, & th": {
            borderBottom: 1,
            borderColor: "divider",
            p: 2,
            textAlign: "left",
          },
          "& th": {
            fontWeight: "bold",
            color: "text.secondary",
            fontSize: "16px",
          },
          "& td": {
            fontSize: "14px",
          },
        }}
      >
        <thead>
          <tr>
            {curriculum.columns.map((col, i) => (
              <th
                key={i}
                style={{
                  width: i === 0 ? "15%" : i === 1 ? "30%" : "55%",
                }}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody
          style={{
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
          }}
        >
          {curriculum.rows.map((row, index) => (
            <tr key={index}>
              <td>{row.time}</td>
              {row.learning && (
                <td rowSpan={row.learning.rowSpan || 1}>
                  {row.learning.content}
                </td>
              )}
              <td style={{ whiteSpace: "pre-wrap" }}>{row.trainingContent}</td>
            </tr>
          ))}
        </tbody>
      </Box>
    </Box>
  ));
};

export default TraingCurriculumTable;
