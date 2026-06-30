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
        error instanceof Error
          ? error.message
          : t("form.snackbar.error");
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
        sx={[
          (theme) => ({ ...theme.customStyles.contactMainContainer }),
          { position: "relative" },
        ]}
      >
        <ScrollButton />

        <Box
          sx={(theme) => ({
            ...theme.customStyles.contactTopContainer,
          })}
        >
          <BreadScrum
            pageKey="contact"
            sx={{ position: "absolute", top: "8px", right: "8%" }}
          />
          {/* 상단 영역: 제목 + 이미지 */}
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column-reverse",
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
                  width: "80%",
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
                ...theme.customStyles.contactTitleContainer,
              })}
            >
              <Typography
                variant="contactTitleFont"
                component="h1"
                sx={{
                  wordBreak: "keep-all",
                  width: "90%",
                  background:
                    "linear-gradient(90deg, #003B8D 0%, #66BAFF 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                {t("title")}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {contactTexts.map((text, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontFamily: FONTS.freesentation.regular,
                      fontSize: "18px",
                      color: "#656565",
                    }}
                  >
                    {text}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>

          {/* 점선 구분선 */}
          <Box
            sx={{
              width: "100%",
              borderTop: "1px dashed #C4C4C4",
            }}
          />

          {/* 하단 영역: 문의 폼 */}
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={(theme) => ({
              ...theme.customStyles.contactFormContainer,
            })}
          >
            {/* 회사명 */}
            <Box sx={(theme) => ({ ...theme.customStyles.contactFormField })}>
              <TextField
                size="small"
                label={t("form.company.label")}
                placeholder={t("form.company.placeholder")}
                required
                fullWidth
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
            <Box sx={(theme) => ({ ...theme.customStyles.contactFormField })}>
              <TextField
                size="small"
                label={t("form.division.label")}
                placeholder={t("form.division.placeholder")}
                required
                fullWidth
                {...register("division", {
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

            {/* 성함 */}
            <Box sx={(theme) => ({ ...theme.customStyles.contactFormField })}>
              <TextField
                size="small"
                label={t("form.name.label")}
                placeholder={t("form.name.placeholder")}
                required
                fullWidth
                {...register("name", {
                  //TODO: 백엔드 회사명 최대 길이 제한 확인 후 변경 필요
                  validate: (value) => validateNotEmptyAndLength(value, 50),
                })}
              />
              {errors.name && (
                <ApplicationInputErrorText text={errors.name.message || ""} />
              )}
            </Box>

            {/* 직급 */}
            <Box sx={(theme) => ({ ...theme.customStyles.contactFormField })}>
              <TextField
                size="small"
                label={t("form.position.label")}
                placeholder={t("form.position.placeholder")}
                required
                fullWidth
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
            <Box sx={(theme) => ({ ...theme.customStyles.contactFormField })}>
              <TextField
                size="small"
                label={t("form.email.label")}
                placeholder={t("form.email.placeholder")}
                required
                fullWidth
                {...register("email", {
                  validate: (value) => validateEmail(value),
                })}
              />
              {errors.email && (
                <ApplicationInputErrorText text={errors.email.message || ""} />
              )}
            </Box>

            {/* 연락처 */}
            <Box sx={(theme) => ({ ...theme.customStyles.contactFormField })}>
              <TextField
                size="small"
                label={t("form.phone.label")}
                placeholder={t("form.phone.placeholder")}
                required
                fullWidth
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
                ...theme.customStyles.contactFormFullWidthField,
              })}
            >
              <TextField
                label={t("form.inquiry.label")}
                placeholder={t("form.inquiry.placeholder")}
                required
                multiline
                rows={6}
                fullWidth
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
                ...theme.customStyles.contactCheckboxContainer,
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
                            ...theme.customStyles.contactformControlLabel,
                            "&.Mui-checked": {
                              color: "#03193F",
                            },
                          })}
                        />
                      }
                      label={
                        <Typography
                          sx={{
                            fontSize: "16px",
                            fontFamily: FONTS.freesentation.medium,
                            color: "#8D8D8D", // gray-900
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
                ...theme.customStyles.contactFormFullWidthField,
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
                sx={(theme) => ({
                  ...theme.customStyles.contactButton,
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
            ...theme.customStyles.contactMapContainer,
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
