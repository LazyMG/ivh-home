import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import type {
  ReservationResponse,
  ReservationCustomer as CustomerForm,
} from "../../types/reservation";

import ApplicationButton from "./ApplicationButton";
import ApplicationInputErrorText from "./ApplicationInputErrorText";
import { reservationService } from "../../service/reservationService";
import { useState } from "react";
import { EAMIL_REGEX, PHONE_REGEX } from "../../utils/constants";
import ApplicationInput from "./ApplicationInput";
import CustomSnackbar from "./CustomSnackbar";
// import PrivacyPolicyIcon from "./PrivacyPolicyIcon";
import ApplicationSelect from "./ApplicationSelect";
import { FONTS } from "../../theme/theme";

// 공백 문자 유효성 검사를 위한 공통 규칙
const trimValidation = (message: string) => ({
  validate: (value: string) => value.trim() !== "" || message,
});

interface ApplicantForm {
  applicantName: string;
  applicantEmail: string;
  applicantCompany: string;
  applicantPosition: string;
  applicantPhone: string;
  applicantDivision: string;
}

export interface ApplicationFormType {
  applicant: ApplicantForm;
  customer: CustomerForm[];
  memo?: string;
  reservationId: number;
  isChecked?: boolean;
}

{
  /** react-hook-form을 사용한 교육 신청 폼 컴포넌트 */
}
const ApplicationForm = ({
  reservationList,
}: {
  reservationList: ReservationResponse[] | null;
}) => {
  const { t } = useTranslation("support/training");
  const [submitStatus, setSubmitStatus] = useState<
    "loading" | "success" | "error" | null
  >(null);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    watch,
    setError,
  } = useForm<ApplicationFormType>({
    mode: "onChange",
    defaultValues: {
      customer: [{ name: "", email: "", company: "", position: "", phone: "" }],
      isChecked: false,
    },
  });
  const {
    fields: customerFields,
    append,
    remove,
    prepend,
  } = useFieldArray({
    control,
    name: "customer",
  });

  // 수강자 필드 값 감지
  const customerValues = watch("customer");

  const [isFillCustomerChecked, setIsFillCustomerChecked] = useState(false);
  const [showFillCustomerError, setShowFillCustomerError] = useState<
    string | null
  >(null);

  // 신청자 필드 포커스 시 체크박스 에러 메시지만 초기화
  const handleApplicantFieldFocus = () => {
    if (showFillCustomerError) {
      setShowFillCustomerError(null);
    }
  };

  const addCustomerList = () => {
    append(
      {
        name: "",
        email: "",
        company: "",
        position: "",
        phone: "",
        division: "",
      },
      { shouldFocus: false },
    );
  };

  const removeCustomerList = (index: number) => {
    // 배열 길이가 1일 때는 삭제 불가
    if (customerFields.length === 1) {
      return;
    }

    // 0번 인덱스를 삭제하면서 체크박스가 체크된 경우 체크 해제
    if (index === 0 && isFillCustomerChecked) {
      setIsFillCustomerChecked(false);
    }

    remove(index);
  };

  const onIsFillCustomerCheckedChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.checked) {
      if (errors.applicant) {
        setIsFillCustomerChecked(false);
        setShowFillCustomerError(t("form.validation.applicant_form_invalid"));
        return;
      }
      const applicantValue = getValues().applicant;

      // 모든 필드가 채워져 있는지 검증
      const emptyFields: Array<keyof ApplicantForm> = [];

      if (!applicantValue?.applicantName?.trim()) {
        emptyFields.push("applicantName");
        setError("applicant.applicantName", {
          type: "manual",
          message: t("form.validation.applicant_required_first"),
        });
      }
      if (!applicantValue?.applicantEmail?.trim()) {
        emptyFields.push("applicantEmail");
        setError("applicant.applicantEmail", {
          type: "manual",
          message: t("form.validation.applicant_required_first"),
        });
      }
      if (!applicantValue?.applicantCompany?.trim()) {
        emptyFields.push("applicantCompany");
        setError("applicant.applicantCompany", {
          type: "manual",
          message: t("form.validation.applicant_required_first"),
        });
      }
      if (!applicantValue?.applicantPosition?.trim()) {
        emptyFields.push("applicantPosition");
        setError("applicant.applicantPosition", {
          type: "manual",
          message: t("form.validation.applicant_required_first"),
        });
      }
      if (!applicantValue?.applicantPhone?.trim()) {
        emptyFields.push("applicantPhone");
        setError("applicant.applicantPhone", {
          type: "manual",
          message: t("form.validation.applicant_required_first"),
        });
      }
      if (!applicantValue?.applicantDivision?.trim()) {
        emptyFields.push("applicantDivision");
        setError("applicant.applicantDivision", {
          type: "manual",
          message: t("form.validation.applicant_required_first"),
        });
      }
      // 모든 필드가 채워져 있을 때만 체크박스 활성화
      if (emptyFields.length === 0) {
        setIsFillCustomerChecked(true);

        // 신청자 정보를 수강자 배열의 맨 앞에 추가
        prepend({
          email: applicantValue.applicantEmail,
          name: applicantValue.applicantName,
          position: applicantValue.applicantPosition,
          company: applicantValue.applicantCompany,
          phone: applicantValue.applicantPhone,
          division: applicantValue.applicantDivision,
        });
      } else {
        // 빈 필드가 있으면 체크 해제
        setIsFillCustomerChecked(false);
      }
    } else {
      setIsFillCustomerChecked(false);

      // 배열 길이가 1일 때: 새 빈 인풋 추가 후 기존 인풋(0번) 삭제
      if (customerFields.length === 1) {
        addCustomerList();
        remove(0);
      } else {
        // 배열 길이가 1보다 클 때: 0번 인덱스만 삭제
        remove(0);
      }
    }
  };

  const onSubmit = async (data: ApplicationFormType) => {
    // 교육 일정에 없는 아이디가 들어있는 경우의 방어 코드
    if (
      reservationList &&
      !reservationList.some(
        (reservation) => reservation.id === data.reservationId,
      )
    )
      return;

    const reservationRequestForm = {
      ...data.applicant,
      memo: data?.memo || "",
      customerList: data.customer,
      reservationId: data.reservationId,
      requestedPeople: data.customer.length,
    };

    setSubmitStatus("loading");
    setSnackbarMessage(t("form.snackbar.loading"));

    // return;

    try {
      await reservationService.postReservationRequest(reservationRequestForm);
      setSubmitStatus("success");
      setSnackbarMessage(t("form.snackbar.success"));
      reset();
      setIsFillCustomerChecked(false);
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
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component={"form"}
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.up("desktop")]: {
          px: 15,
          mt: 2,
          gap: 2,
        },
      })}
    >
      <Typography
        component="h4"
        sx={(theme) => ({
          fontSize: "20px",
          fontFamily: FONTS.freesentation.bold,
          color: "#003B8D",
          mb: 1,
          [theme.breakpoints.up("desktop")]: {
            mb: 0,
          },
        })}
      >
        {t("form.apply_title")}
      </Typography>
      <ApplicationSelect
        control={control}
        errors={errors}
        reservationList={reservationList}
      />
      <Box
        sx={(theme) => ({
          my: 1,
          borderTop: "none",
          width: "100%",
          [theme.breakpoints.up("desktop")]: {
            borderTop: "1px dashed #C9C9C9",
            my: 3,
          },
        })}
      />
      <Stack
        sx={(theme) => ({
          gap: 1,
          mt: 2,
          [theme.breakpoints.up("desktop")]: {
            gap: 2,
            mt: 0,
          },
        })}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: FONTS.freesentation.bold,
            color: "#003B8D",
          }}
        >
          {t("form.applicant_title")}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={(theme) => ({
              flex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(1,1fr)",
              gap: 2,
              [theme.breakpoints.up("mobileLandscape")]: {
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 4,
                rowGap: 3,
              },
            })}
          >
            <ApplicationInput
              label={t("form.fields.company.label")}
              placeholder={t("form.fields.company.placeholder")}
              disabled={isFillCustomerChecked}
              onFocus={handleApplicantFieldFocus}
              register={{
                ...register("applicant.applicantCompany", {
                  ...trimValidation(t("form.validation.applicant.company")),
                  required: t("form.validation.applicant.company"),
                  maxLength: {
                    value: 50,
                    message: t("form.validation.max_length"),
                  },
                }),
              }}
            >
              {errors.applicant && errors.applicant.applicantCompany && (
                <ApplicationInputErrorText
                  text={errors.applicant.applicantCompany.message || ""}
                />
              )}
            </ApplicationInput>
            <ApplicationInput
              placeholder={t("form.fields.division.placeholder")}
              label={t("form.fields.division.label")}
              disabled={isFillCustomerChecked}
              onFocus={handleApplicantFieldFocus}
              register={{
                ...register("applicant.applicantDivision", {
                  ...trimValidation(t("form.validation.applicant.division")),
                  required: t("form.validation.applicant.division"),
                  maxLength: {
                    value: 50,
                    message: t("form.validation.max_length"),
                  },
                }),
              }}
            >
              {errors.applicant && errors.applicant.applicantDivision && (
                <ApplicationInputErrorText
                  text={errors.applicant.applicantDivision.message || ""}
                />
              )}
            </ApplicationInput>
            <ApplicationInput
              placeholder={t("form.fields.position.placeholder")}
              label={t("form.fields.position.label")}
              disabled={isFillCustomerChecked}
              onFocus={handleApplicantFieldFocus}
              register={{
                ...register("applicant.applicantPosition", {
                  ...trimValidation(t("form.validation.applicant.position")),
                  required: t("form.validation.applicant.position"),
                  maxLength: {
                    value: 50,
                    message: t("form.validation.max_length"),
                  },
                }),
              }}
            >
              {errors.applicant && errors.applicant.applicantPosition && (
                <ApplicationInputErrorText
                  text={errors.applicant.applicantPosition.message || ""}
                />
              )}
            </ApplicationInput>
            <ApplicationInput
              placeholder={t("form.fields.name.placeholder")}
              label={t("form.fields.name.label")}
              disabled={isFillCustomerChecked}
              onFocus={handleApplicantFieldFocus}
              register={{
                ...register("applicant.applicantName", {
                  ...trimValidation(t("form.validation.applicant.name")),
                  required: t("form.validation.applicant.name"),
                  maxLength: {
                    value: 50,
                    message: t("form.validation.max_length"),
                  },
                }),
              }}
            >
              {errors.applicant && errors.applicant.applicantName && (
                <ApplicationInputErrorText
                  text={errors.applicant.applicantName.message || ""}
                />
              )}
            </ApplicationInput>
            <ApplicationInput
              placeholder={t("form.fields.email.placeholder")}
              label={t("form.fields.email.label")}
              disabled={isFillCustomerChecked}
              onFocus={handleApplicantFieldFocus}
              register={{
                ...register("applicant.applicantEmail", {
                  ...trimValidation(t("form.validation.applicant.email")),
                  required: t("form.validation.applicant.email"),
                  pattern: {
                    value: EAMIL_REGEX,
                    message: t("form.validation.email_format"),
                  },
                  maxLength: {
                    value: 50,
                    message: t("form.validation.max_length"),
                  },
                }),
              }}
            >
              {errors.applicant && errors.applicant.applicantEmail && (
                <ApplicationInputErrorText
                  text={errors.applicant.applicantEmail.message || ""}
                />
              )}
            </ApplicationInput>
            <ApplicationInput
              placeholder={t("form.fields.phone.placeholder")}
              label={t("form.fields.phone.label")}
              disabled={isFillCustomerChecked}
              onFocus={handleApplicantFieldFocus}
              register={{
                ...register("applicant.applicantPhone", {
                  ...trimValidation(t("form.validation.applicant.phone")),
                  required: t("form.validation.applicant.phone"),
                  pattern: {
                    value: PHONE_REGEX,
                    message: t("form.validation.phone_format"),
                  },
                  maxLength: {
                    value: 50,
                    message: t("form.validation.max_length"),
                  },
                }),
              }}
            >
              {errors.applicant && errors.applicant.applicantPhone && (
                <ApplicationInputErrorText
                  text={errors.applicant.applicantPhone.message || ""}
                />
              )}
            </ApplicationInput>
          </Box>
        </Box>
      </Stack>
      <Box
        sx={(theme) => ({
          my: 1,
          borderTop: "none",
          width: "100%",
          [theme.breakpoints.up("desktop")]: {
            borderTop: "1px dashed #C9C9C9",
            my: 3,
          },
        })}
      />
      <Box
        sx={(theme) => ({
          position: "relative",
          mt: 2,
          [theme.breakpoints.up("desktop")]: { mt: 0 },
        })}
      >
        <Box display="flex" alignContent="center">
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: FONTS.freesentation.semiBold,
              color: "#003B8D",
              mr: 2,
              alignSelf: "center",
            }}
          >
            {t("form.customer_title")}
          </Typography>

          <Box sx={{ position: "relative" }}>
            <FormControlLabel
              label={
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: FONTS.freesentation.medium,
                    color: "#626262",
                  }}
                >
                  {t("form.same_as_applicant")}
                </Typography>
              }
              control={
                <Checkbox
                  checked={isFillCustomerChecked}
                  onChange={onIsFillCustomerCheckedChange}
                />
              }
            />
            {showFillCustomerError && (
              <Typography
                sx={{
                  color: "red",
                  fontSize: "12px",
                  alignSelf: "center",
                  position: "absolute",
                  bottom: -12,
                }}
              >
                {showFillCustomerError}
              </Typography>
            )}
          </Box>
        </Box>
        <Stack
          sx={(theme) => ({
            overflowY: "auto",
            gap: 3,
            mb: 3,
            [theme.breakpoints.up("desktop")]: {
              gap: 4,
              mb: 0,
            },
          })}
        >
          {customerFields.map((_, index) => (
            <Box
              key={index}
              sx={(theme) => ({
                display: "flex",
                alignItems: "auto",
                pt: 1,
                flexDirection: "column",
                [theme.breakpoints.up("tablet")]: {
                  flexDirection: "row",
                  alignItems: "center",
                },
              })}
            >
              <Box
                sx={(theme) => ({
                  flex: 1,
                  display: "grid",
                  gridTemplateColumns: "repeat(1,1fr)",
                  gap: 2,
                  [theme.breakpoints.up("mobileLandscape")]: {
                    gridTemplateColumns: "repeat(3,1fr)",
                    gap: 4,
                    rowGap: 3,
                  },
                })}
              >
                <ApplicationInput
                  placeholder={t("form.fields.company.placeholder")}
                  label={t("form.fields.company.label")}
                  disabled={index === 0 && isFillCustomerChecked}
                  shrink={customerValues?.[index]?.company}
                  register={{
                    ...register(`customer.${index}.company`, {
                      required: t("form.validation.customer.company"),
                      ...trimValidation(t("form.validation.customer.company")),
                    }),
                  }}
                >
                  {errors.customer &&
                    errors.customer[index] &&
                    errors.customer[index].company && (
                      <ApplicationInputErrorText
                        text={errors.customer[index].company.message || ""}
                      />
                    )}
                </ApplicationInput>
                <ApplicationInput
                  placeholder={t("form.fields.division.placeholder")}
                  label={t("form.fields.division.label")}
                  disabled={index === 0 && isFillCustomerChecked}
                  shrink={customerValues?.[index]?.division}
                  register={{
                    ...register(`customer.${index}.division`, {
                      required: t("form.validation.customer.division"),
                      ...trimValidation(t("form.validation.customer.division")),
                    }),
                  }}
                >
                  {errors.customer &&
                    errors.customer[index] &&
                    errors.customer[index].division && (
                      <ApplicationInputErrorText
                        text={errors.customer[index].division.message || ""}
                      />
                    )}
                </ApplicationInput>
                <ApplicationInput
                  placeholder={t("form.fields.position.placeholder")}
                  label={t("form.fields.position.label")}
                  disabled={index === 0 && isFillCustomerChecked}
                  shrink={customerValues?.[index]?.position}
                  register={{
                    ...register(`customer.${index}.position`, {
                      required: t("form.validation.customer.position"),
                      ...trimValidation(t("form.validation.customer.position")),
                    }),
                  }}
                >
                  {errors.customer &&
                    errors.customer[index] &&
                    errors.customer[index].position && (
                      <ApplicationInputErrorText
                        text={errors.customer[index].position.message || ""}
                      />
                    )}
                </ApplicationInput>
                <ApplicationInput
                  placeholder={t("form.fields.name.placeholder")}
                  label={t("form.fields.name.label")}
                  disabled={index === 0 && isFillCustomerChecked}
                  shrink={customerValues?.[index]?.name}
                  register={{
                    ...register(`customer.${index}.name`, {
                      required: t("form.validation.customer.name"),
                      ...trimValidation(t("form.validation.customer.name")),
                    }),
                  }}
                >
                  {errors.customer &&
                    errors.customer[index] &&
                    errors.customer[index].name && (
                      <ApplicationInputErrorText
                        text={errors.customer[index].name.message || ""}
                      />
                    )}
                </ApplicationInput>
                <ApplicationInput
                  placeholder={t("form.fields.email.placeholder")}
                  label={t("form.fields.email.label")}
                  disabled={index === 0 && isFillCustomerChecked}
                  shrink={customerValues?.[index]?.email}
                  register={{
                    ...register(`customer.${index}.email`, {
                      required: t("form.validation.customer.email"),
                      ...trimValidation(t("form.validation.customer.email")),
                      pattern: {
                        value: EAMIL_REGEX,
                        message: t("form.validation.email_format"),
                      },
                    }),
                  }}
                >
                  {errors.customer &&
                    errors.customer[index] &&
                    errors.customer[index].email && (
                      <ApplicationInputErrorText
                        text={errors.customer[index].email.message || ""}
                      />
                    )}
                </ApplicationInput>
                <ApplicationInput
                  placeholder={t("form.fields.phone.placeholder")}
                  label={t("form.fields.phone.label")}
                  disabled={index === 0 && isFillCustomerChecked}
                  shrink={customerValues?.[index]?.phone}
                  register={{
                    ...register(`customer.${index}.phone`, {
                      required: t("form.validation.customer.phone"),
                      ...trimValidation(t("form.validation.customer.phone")),
                      pattern: {
                        value: PHONE_REGEX,
                        message: t("form.validation.phone_format"),
                      },
                    }),
                  }}
                >
                  {errors.customer &&
                    errors.customer[index] &&
                    errors.customer[index].phone && (
                      <ApplicationInputErrorText
                        text={errors.customer[index].phone.message || ""}
                      />
                    )}
                </ApplicationInput>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          maxRows={5}
          minRows={5}
          multiline
          placeholder={t("form.memo_placeholder")}
          sx={{
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
          }}
          {...register("memo")}
        />
        <Box
          gap={1}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            mt: 1,
          }}
        >
          <ApplicationButton>
            <RemoveIcon
              onClick={() => removeCustomerList(customerFields.length - 1)}
            />
          </ApplicationButton>
          <ApplicationButton>
            <AddIcon onClick={addCustomerList} />
          </ApplicationButton>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          width: "100%",
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
          position: "relative",
          mt: 4,
          mb: 2,
          [theme.breakpoints.up("desktop")]: {
            mt: 0,
            mb: 0,
          },
        })}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            control={
              <Controller
                name="isChecked"
                control={control}
                rules={{ required: t("form.validation.agree_required") }}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value || false}
                    onChange={field.onChange}
                    sx={(theme) => ({
                      py: 0,
                      [theme.breakpoints.up("desktop")]: {
                        py: "9px",
                      },
                    })}
                  />
                )}
              />
            }
            sx={(theme) => ({
              fontFamily: FONTS.freesentation.semiBold,
              mr: 1,
              my: 0,
              [theme.breakpoints.up("desktop")]: {
                my: "auto",
              },
              color: "#626262",
              fontSize: "16px",
            })}
            label={t("form.agree_checkbox")}
          />
          {/* <PrivacyPolicyIcon /> */}
        </Box>

        {errors.isChecked && (
          <ApplicationInputErrorText
            sx={{
              right: 0,
              display: "flex",
              bottom: -4,
              justifyContent: "flex-end",
            }}
            text={errors.isChecked.message || ""}
          />
        )}
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "flex-end",
          mb: 12,
          [theme.breakpoints.up("desktop")]: { mb: 0 },
        })}
      >
        <Button
          variant="contained"
          type="submit"
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
              px: 4,
              py: 1,
              boxShadow: "3px 3px 5px 3px rgba(0,0,0,0.2)",
              backgroundColor: "#03193F",
              "&:hover": {
                backgroundColor: "#03193F",
              },
            },
          })}
          disabled={submitStatus === "loading"}
        >
          {t("form.submit")}
        </Button>
      </Box>
      {/** 신청 요청을 보낼 때 발생한 에러 보여주는 스낵바 */}
      {/** 에러 문구 출력 필요 */}
      <CustomSnackbar
        submitStatus={submitStatus}
        snackbarMessage={snackbarMessage}
        handleCloseSnackbar={handleCloseSnackbar}
      />
    </Box>
  );
};

export default ApplicationForm;
