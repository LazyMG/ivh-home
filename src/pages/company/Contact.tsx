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
import { useNavigate } from "react-router-dom";

import contact from "../../data/company/contact.json";
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

interface ContactFormType {
  company: string;
  name: string;
  phone: string;
  email: string;
  inquiry: string;
  isPrivacyAgreed: boolean;
}

const Contact = () => {
  const navigate = useNavigate();
  const [submitStatus, setSubmitStatus] = useState<
    "loading" | "success" | "error" | null
  >(null);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const {
    control,
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ContactFormType>({
    mode: "onChange",
    defaultValues: {
      company: "",
      name: "",
      phone: "",
      email: "",
      inquiry: "",
      isPrivacyAgreed: false,
    },
  });

  const onSubmit = async () => {
    setSubmitStatus("loading");
    setSnackbarMessage("문의사항을 전송 중입니다...");

    try {
      await customerService.postContact({
        company: getValues("company"),
        name: getValues("name"),
        phone: getValues("phone"),
        email: getValues("email"),
        inquiry: getValues("inquiry"),
      });

      setSubmitStatus("success");
      setSnackbarMessage("문의사항이 성공적으로 전송되었습니다.");
      reset();
    } catch (error: unknown) {
      console.error(error);
      setSubmitStatus("error");

      const errorMessage =
        error instanceof Error
          ? error.message
          : "문의사항 전송에 실패했습니다. 다시 시도해주세요.";
      setSnackbarMessage(errorMessage);
    }
  };

  const handleCloseSnackbar = () => {
    setSubmitStatus(null);
  };

  return (
    <Box
      component="main"
      sx={(theme) => ({
        ...theme.customStyles.contactMainContainer,
      })}
    >
      {/* 상단 영역: 제목 + 폼 */}
      <Box
        sx={(theme) => ({
          ...theme.customStyles.contactTopContainer,
        })}
      >
        {/* 왼쪽 영역: 제목과 제품 둘러보기 링크 */}
        <Box
          sx={(theme) => ({
            ...theme.customStyles.contactTitleContainer,
          })}
        >
          <Typography variant="contactTitleFont" component="h1">
            {contact.contact_title}
          </Typography>
          <Box
            component="a"
            href={contact.products_link.url}
            onClick={(e) => {
              e.preventDefault();
              navigate(contact.products_link.url);
            }}
            sx={(theme) => ({
              ...theme.customStyles.contactProductsLink,
            })}
          >
            <Typography variant="contactProductsLinkFont">
              {contact.products_link.text}
            </Typography>
            <Typography variant="contactProductsLinkFont">
              {contact.products_link.arrow}
            </Typography>
          </Box>
        </Box>

        {/* 오른쪽 영역: 문의 폼 */}
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
              label="회사명"
              placeholder="담당자 회사명을 입력해주십시오"
              required
              fullWidth
              {...register("company", {
                //TODO: 백엔드 회사명 최대 길이 제한 확인 후 변경 필요
                validate: (value) => validateNotEmptyAndLength(value, 50),
              })}
            />
            {errors.company && (
              <ApplicationInputErrorText text={errors.company.message || ""} />
            )}
          </Box>

          {/* 성함 */}
          <Box sx={(theme) => ({ ...theme.customStyles.contactFormField })}>
            <TextField
              size="small"
              label="성함"
              placeholder="담당자 성함을 입력해주십시오"
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

          {/* 연락처 */}
          <Box sx={(theme) => ({ ...theme.customStyles.contactFormField })}>
            <TextField
              size="small"
              label="연락처"
              placeholder="담당자 연락처를 입력해주십시오 (-) 포함"
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

          {/* 이메일 */}
          <Box sx={(theme) => ({ ...theme.customStyles.contactFormField })}>
            <TextField
              size="small"
              label="이메일"
              placeholder="담당자 이메일을 입력해주십시오"
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

          {/* 문의내용 */}
          <Box
            sx={(theme) => ({
              ...theme.customStyles.contactFormFullWidthField,
            })}
          >
            <TextField
              label="문의내용"
              placeholder="문의내용을 입력해주십시오"
              required
              multiline
              rows={6}
              fullWidth
              {...register("inquiry", {
                validate: (value) =>
                  validateNotEmpty(value, "문의내용을 입력해주십시오."),
              })}
            />
            {errors.inquiry && (
              <ApplicationInputErrorText text={errors.inquiry.message || ""} />
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
                required: "개인정보처리방침에 동의해주세요.",
                validate: (value) =>
                  validateCheckbox(value, "개인정보처리방침에 동의해주십시오."),
              }}
              render={({ field }) => (
                <>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={field.value}
                        onChange={field.onChange}
                        sx={(theme) => ({
                          ...theme.customStyles.contactformControlLabel,
                          "&.Mui-checked": {
                            color: "#6366f1",
                          },
                        })}
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontFamily: "Freesentation-5-Medium",
                          color: "#111827", // gray-900
                          cursor: "pointer",
                        }}
                      >
                        {contact.products_link.checkbox_text}
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
                </>
              )}
            />
          </Box>

          {/* 문의하기 버튼 */}
          <Box
            sx={(theme) => ({
              ...theme.customStyles.contactFormFullWidthField,
            })}
          >
            <Button
              type="submit"
              disabled={!isValid}
              sx={(theme) => ({
                ...theme.customStyles.contactButton,
              })}
            >
              문의하기
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
  );
};

export default Contact;
