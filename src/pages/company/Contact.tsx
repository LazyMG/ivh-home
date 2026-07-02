import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";

import { useTranslation } from "react-i18next";
import {
  validateEmail,
  validatePhone,
  validateNotEmpty,
  validateNotEmptyAndLength,
  validateCheckbox,
} from "../../utils/validation";
import CustomSnackbar from "../../components/support/CustomSnackbar";
import ApplicationInputErrorText from "../../components/support/ApplicationInputErrorText";
import { customerService } from "../../service/customerService";
import SEO from "../../common/SEO";
import PrivacyPolicyIcon from "../../components/support/PrivacyPolicyIcon";
import ScrollButton from "../../common/ScrollButton";
import BreadScrum from "../../common/BreadScrum";
import resource from "../../data/company/contact.json";
import { FONTS } from "../../theme/theme";

// 폼 인풋 공통 스타일 (ApplicationForm과 동일: radius 0 + 고정 border + placeholder 색)
const INPUT_SX = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 0,
    "& fieldset": { borderColor: "#7C7C7C" },
    "&:hover fieldset": { borderColor: "#7C7C7C" },
    "&.Mui-focused fieldset": { borderColor: "#7C7C7C" },
  },
  "& .MuiOutlinedInput-input::placeholder": {
    color: "#7C7C7C",
    opacity: 1,
  },
};

interface ContactFormType {
  company: string;
  division: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  inquiry: string;
  isPrivacyAgreed: boolean;
}

const Contact = () => {
  const { t } = useTranslation("company/contact");
  const contactTexts = t("texts", { returnObjects: true }) as string[];
  const [submitStatus, setSubmitStatus] = useState<
    "loading" | "success" | "error" | null
  >(null);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const {
    control,
    register,
    getValues,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormType>({
    mode: "onChange",
    defaultValues: {
      company: "",
      division: "",
      name: "",
      phone: "",
      email: "",
      position: "",
      inquiry: "",
      isPrivacyAgreed: false,
    },
  });

  const onSubmit = async () => {
    setSubmitStatus("loading");
    setSnackbarMessage(t("form.snackbar.loading"));

    try {
      await customerService.postContact({
        company: getValues("company"),
        name: getValues("name"),
        phone: getValues("phone"),
        email: getValues("email"),
        position: getValues("position"),
        division: getValues("division"),
        inquiry: getValues("inquiry"),
      });

      setSubmitStatus("success");
      setSnackbarMessage(t("form.snackbar.success"));
      reset();
    } catch (error: unknown) {
      console.error(error);
      setSubmitStatus("error");

      const errorMessage =
        error instanceof Error ? error.message : t("form.snackbar.error");
      setSnackbarMessage(errorMessage);
    }
  };

  const handleCloseSnackbar = () => {
    setSubmitStatus(null);
  };

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
        canonical="https://ivh.co.kr/company/contact"
      />
      <Box
        component="main"
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          position: "relative",
          gap: 8,
          px: 4,
          my: 4,
          [theme.breakpoints.up("desktop")]: {
            px: 20,
            mb: 30,
          },
        })}
      >
        <ScrollButton />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <BreadScrum
            pageKey="contact"
            sx={(theme) => ({
              position: "absolute",
              top: "8px",
              right: "8%",
              // 모바일 시안에는 브레드스크럼 없음 → 태블릿부터 표시
              display: "none",
              [theme.breakpoints.up("tablet")]: {
                display: "flex",
              },
            })}
          />
          {/* 상단 영역: 제목 + 이미지 */}
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              [theme.breakpoints.up("tablet")]: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                mt: 4,
                gap: 4,
              },
            })}
          >
            <Box
              sx={{
                display: "flex",
                mb: 3,
              }}
            >
              <Box
                component="img"
                src={resource.imgUrl}
                alt={t("img_alt")}
                loading="lazy"
                sx={(theme) => ({
                  width: "100%",
                  height: "auto",
                  [theme.breakpoints.up("tablet")]: {
                    width: "auto",
                    maxWidth: "550px",
                  },
                  [theme.breakpoints.up("desktop")]: {
                    maxWidth: "650px",
                  },
                })}
              />
            </Box>
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                gap: "36px",
                // 모바일: 제목 컨테이너를 꽉 채워 다크 박스 mx(-4)가 화면 끝까지 닿게 함
                width: "100%",
                [theme.breakpoints.up("tablet")]: {
                  width: "auto",
                },
              })}
            >
              <Box
                sx={(theme) => ({
                  backgroundColor: "#03193F",
                  // 컨테이너 px(32px) 상쇄 → 화면 좌우 끝까지 (풀블리드)
                  mx: -4,
                  px: 4,
                  py: 3,
                  display: "flex",
                  justifyContent: "center",
                  [theme.breakpoints.up("tablet")]: {
                    backgroundColor: "transparent",
                    justifyContent: "flex-start",
                    mx: 0,
                    p: 0,
                  },
                  [theme.breakpoints.up("desktop")]: {
                    backgroundColor: "transparent",
                  },
                })}
              >
                <Typography
                  component="h1"
                  sx={(theme) => ({
                    wordBreak: "keep-all",
                    fontFamily: FONTS.freesentation.semiBold,
                    fontSize: "24px",
                    lineHeight: 1.5,
                    letterSpacing: "normal",
                    color: "#ffffff",
                    textAlign: "center",
                    width: "90%",
                    [theme.breakpoints.up("tablet")]: {
                      fontFamily: FONTS.freesentation.bold,
                      fontSize: "30px",
                      textAlign: "left",
                      color: "transparent",
                      background:
                        "linear-gradient(90deg, #003B8D 0%, #66BAFF 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    },
                    [theme.breakpoints.up("desktop")]: {
                      fontSize: "40px",
                      width: "95%",
                    },
                  })}
                >
                  {t("title")}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {contactTexts.map((text, index) => (
                  <Typography
                    key={index}
                    sx={(theme) => ({
                      fontFamily: FONTS.freesentation.regular,
                      fontSize: "16px",
                      color: "#03193F",
                      [theme.breakpoints.up("tablet")]: {
                        color: "#656565",
                      },
                      [theme.breakpoints.up("desktop")]: {
                        fontSize: "18px",
                      },
                    })}
                  >
                    {text}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>

          {/* 점선 구분선 */}
          <Box
            sx={(theme) => ({
              display: "none",
              [theme.breakpoints.up("desktop")]: {
                display: "block",
                width: "100%",
                borderTop: "1px dashed #C4C4C4",
              },
            })}
          />

          {/* 하단 영역: 문의 폼 */}
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={(theme) => ({
              flex: 1,
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 3,
              [theme.breakpoints.up("tablet")]: {
                gridTemplateColumns: "repeat(3,1fr)",
                columnGap: 3,
              },
            })}
          >
            {/* 회사명 */}
            <Box sx={{ position: "relative" }}>
              <TextField
                size="small"
                label={t("form.company.label")}
                placeholder={t("form.company.placeholder")}
                required
                fullWidth
                sx={INPUT_SX}
                {...register("company", {
                  //TODO: 백엔드 회사명 최대 길이 제한 확인 후 변경 필요
                  validate: (value) => validateNotEmptyAndLength(value, 50),
                })}
              />
              {errors.company && (
                <ApplicationInputErrorText
                  text={errors.company.message || ""}
                />
              )}
            </Box>

            {/* 부서 */}
            <Box sx={{ position: "relative" }}>
              <TextField
                size="small"
                label={t("form.division.label")}
                placeholder={t("form.division.placeholder")}
                required
                fullWidth
                sx={INPUT_SX}
                {...register("division", {
                  //TODO: 백엔드 부서 최대 길이 제한 확인 후 변경 필요
                  validate: (value) => validateNotEmptyAndLength(value, 50),
                })}
              />
              {errors.division && (
                <ApplicationInputErrorText
                  text={errors.division.message || ""}
                />
              )}
            </Box>

            {/* 성함 */}
            <Box sx={{ position: "relative" }}>
              <TextField
                size="small"
                label={t("form.name.label")}
                placeholder={t("form.name.placeholder")}
                required
                fullWidth
                sx={INPUT_SX}
                {...register("name", {
                  //TODO: 백엔드 성함 최대 길이 제한 확인 후 변경 필요
                  validate: (value) => validateNotEmptyAndLength(value, 50),
                })}
              />
              {errors.name && (
                <ApplicationInputErrorText text={errors.name.message || ""} />
              )}
            </Box>

            {/* 직급 */}
            <Box sx={{ position: "relative" }}>
              <TextField
                size="small"
                label={t("form.position.label")}
                placeholder={t("form.position.placeholder")}
                required
                fullWidth
                sx={INPUT_SX}
                {...register("position", {
                  validate: (value) => validateNotEmptyAndLength(value, 50),
                })}
              />
              {errors.position && (
                <ApplicationInputErrorText
                  text={errors.position.message || ""}
                />
              )}
            </Box>

            {/* 이메일 */}
            <Box sx={{ position: "relative" }}>
              <TextField
                size="small"
                label={t("form.email.label")}
                placeholder={t("form.email.placeholder")}
                required
                fullWidth
                sx={INPUT_SX}
                {...register("email", {
                  validate: (value) => validateEmail(value),
                })}
              />
              {errors.email && (
                <ApplicationInputErrorText text={errors.email.message || ""} />
              )}
            </Box>

            {/* 연락처 */}
            <Box sx={{ position: "relative" }}>
              <TextField
                size="small"
                label={t("form.phone.label")}
                placeholder={t("form.phone.placeholder")}
                required
                fullWidth
                sx={INPUT_SX}
                {...register("phone", {
                  validate: (value) => validatePhone(value),
                })}
              />
              {errors.phone && (
                <ApplicationInputErrorText text={errors.phone.message || ""} />
              )}
            </Box>

            {/* 문의내용 */}
            <Box
              sx={(theme) => ({
                position: "relative",
                [theme.breakpoints.up("tablet")]: { gridColumn: "span 3" },
              })}
            >
              <TextField
                label={t("form.inquiry.label")}
                placeholder={t("form.inquiry.placeholder")}
                required
                multiline
                rows={6}
                fullWidth
                sx={INPUT_SX}
                {...register("inquiry", {
                  validate: (value) =>
                    validateNotEmpty(value, t("form.inquiry_required")),
                })}
              />
              {errors.inquiry && (
                <ApplicationInputErrorText
                  text={errors.inquiry.message || ""}
                />
              )}
            </Box>

            {/* 개인정보처리방침 동의 */}
            <Box
              sx={(theme) => ({
                position: "relative",
                display: "flex",
                justifySelf: "end",
                alignItems: "center",
                [theme.breakpoints.up("tablet")]: { gridColumn: "span 3" },
              })}
            >
              <Controller
                name="isPrivacyAgreed"
                control={control}
                rules={{
                  required: t("form.agree_required"),
                  validate: (value) =>
                    validateCheckbox(value, t("form.agree_checkbox")),
                }}
                render={({ field }) => (
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <FormControlLabel
                      sx={{ marginRight: 0 }}
                      control={
                        <Checkbox
                          checked={field.value}
                          onChange={field.onChange}
                          sx={(theme) => ({
                            py: 0,
                            "&.Mui-checked": {
                              color: "#03193F",
                            },
                            [theme.breakpoints.up("desktop")]: {
                              py: "9px",
                            },
                          })}
                        />
                      }
                      label={
                        <Typography
                          sx={{
                            fontSize: "16px",
                            fontFamily: FONTS.freesentation.medium,
                            color: "#626262",
                            cursor: "pointer",
                          }}
                        >
                          {t("checkbox_text")}
                        </Typography>
                      }
                    />
                    {errors.isPrivacyAgreed && (
                      <Box>
                        <ApplicationInputErrorText
                          text={errors.isPrivacyAgreed.message || ""}
                        />
                      </Box>
                    )}
                  </Box>
                )}
              />
              <PrivacyPolicyIcon />
            </Box>

            {/* 신청하기 버튼 */}
            <Box
              sx={(theme) => ({
                position: "relative",
                [theme.breakpoints.up("mobilePortrait")]: {
                  justifySelf: "end",
                },
                [theme.breakpoints.up("tablet")]: {
                  gridColumn: "span 3",
                },
              })}
            >
              <Button
                type="submit"
                disabled={submitStatus === "loading"}
                sx={(theme) => ({
                  width: "fit-content",
                  px: 4,
                  fontSize: "18px",
                  fontFamily: FONTS.freesentation.semiBold,
                  color: "#fff",
                  backgroundColor: "#003B8D",
                  borderRadius: "4px",
                  "&:hover": {
                    backgroundColor: "#003B8D",
                  },
                  "&.Mui-disabled": {
                    backgroundColor: "#cccccc",
                    color: "#888888",
                  },
                  [theme.breakpoints.up("desktop")]: {
                    py: 1,
                    boxShadow: "3px 3px 5px 3px rgba(0,0,0,0.2)",
                    backgroundColor: "#03193F",
                    "&:hover": {
                      backgroundColor: "#03193F",
                    },
                  },
                })}
              >
                {t("form.submit")}
              </Button>
            </Box>
          </Box>
        </Box>

        {/* 지도 영역 */}
        <Box
          sx={(theme) => ({
            width: "100%",
            height: "300px",
            borderRadius: "8px",
            overflow: "hidden",
            border: "1px solid #e5e7eb",
            [theme.breakpoints.up("tablet")]: {
              height: "450px",
            },
          })}
        >
          <iframe
            srcDoc={`
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
              <style>
                body { margin: 0; padding: 0; }
                .root_daum_roughmap { height: 100vh; width:100% !important;}
                .root_daum_roughmap_landing {width:100%;}
                .root_daum_roughmap_landing .wrap_map{
                  height: 100% !important;
                }
              </style>
            </head>
            <body>
              <div id="daumRoughmapContainer1763975355746" class="root_daum_roughmap root_daum_roughmap_landing"></div>
              <script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>
              <script charset="UTF-8">
                new daum.roughmap.Lander({
                  "timestamp" : "1763975355746",
                  "key" : "d538jqcryz6",
                  "mapHeight" : "100%"
                }).render();
              </script>
            </body>
            </html>
          `}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            title="Daum Map"
          />
        </Box>

        {/* 스낵바 */}
        <CustomSnackbar
          submitStatus={submitStatus}
          snackbarMessage={snackbarMessage}
          handleCloseSnackbar={handleCloseSnackbar}
        />
      </Box>
    </>
  );
};

export default Contact;
