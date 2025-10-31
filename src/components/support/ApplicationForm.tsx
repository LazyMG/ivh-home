import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Controller, useFieldArray, useForm } from "react-hook-form";

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
import PrivacyPolicyIcon from "./PrivacyPolicyIcon";
import ApplicationSelect from "./ApplicationSelect";

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
  const [submitStatus, setSubmitStatus] = useState<
    "loading" | "success" | "error" | null
  >(null);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
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
      { name: "", email: "", company: "", position: "", phone: "" },
      { shouldFocus: false }
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
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.checked) {
      if (errors.applicant) {
        setIsFillCustomerChecked(false);
        setShowFillCustomerError("신청자 양식을 맞춰주세요.");
        return;
      }
      const applicantValue = getValues().applicant;

      // 모든 필드가 채워져 있는지 검증
      const emptyFields: Array<keyof ApplicantForm> = [];

      if (!applicantValue?.applicantName?.trim()) {
        emptyFields.push("applicantName");
        setError("applicant.applicantName", {
          type: "manual",
          message: "신청자 정보를 먼저 입력해주세요.",
        });
      }
      if (!applicantValue?.applicantEmail?.trim()) {
        emptyFields.push("applicantEmail");
        setError("applicant.applicantEmail", {
          type: "manual",
          message: "신청자 정보를 먼저 입력해주세요.",
        });
      }
      if (!applicantValue?.applicantCompany?.trim()) {
        emptyFields.push("applicantCompany");
        setError("applicant.applicantCompany", {
          type: "manual",
          message: "신청자 정보를 먼저 입력해주세요.",
        });
      }
      if (!applicantValue?.applicantPosition?.trim()) {
        emptyFields.push("applicantPosition");
        setError("applicant.applicantPosition", {
          type: "manual",
          message: "신청자 정보를 먼저 입력해주세요.",
        });
      }
      if (!applicantValue?.applicantPhone?.trim()) {
        emptyFields.push("applicantPhone");
        setError("applicant.applicantPhone", {
          type: "manual",
          message: "신청자 정보를 먼저 입력해주세요.",
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
        (reservation) => reservation.id === data.reservationId
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
    // console.log(reservationRequestForm);

    setSubmitStatus("loading");
    setSnackbarMessage("예약 신청 중입니다...");

    // return;

    try {
      await reservationService.postReservationRequest(reservationRequestForm);
      setSubmitStatus("success");
      setSnackbarMessage("예약 신청이 성공적으로 등록되었습니다.");
      reset();
      setIsFillCustomerChecked(false);
    } catch (error: unknown) {
      console.log(error);
      setSubmitStatus("error");

      const errorMessage =
        error instanceof Error
          ? error.message
          : "교육 신청에 실패했습니다. 다시 시도해주세요.";
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
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        maxWidth: "1500px",
        mx: "auto",
        my: 4,
      }}
    >
      <Typography
        component="h4"
        sx={{ fontSize: "32px", fontFamily: "Freesentation-6-SemiBold" }}
      >
        수강신청
      </Typography>
      <ApplicationSelect
        control={control}
        errors={errors}
        reservationList={reservationList}
      />
      <Stack gap={2}>
        <Typography
          sx={{ fontSize: "24px", fontFamily: "Freesentation-6-SemiBold" }}
        >
          신청자
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={(theme) => ({
              flex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(1,1fr)",
              gap: 4,
              [theme.breakpoints.up("mobileLandscape")]: {
                gridTemplateColumns: "repeat(5,1fr)",
                gap: 2,
              },
            })}
          >
            {/* <Box sx={{ position: "relative" }}>
              <TextField
                size="small"
                placeholder="iVH"
                label="회사명"
                required
                sx={{ width: "100%" }}
                {...register("applicant.applicantCompany", {
                  required: "신청자 회사명을 입력해주십시오.",
                  ...trimValidation("신청자 회사명을 입력해주십시오."),
                })}
              />
              {errors.applicant && errors.applicant.applicantCompany && (
                <ApplicationInputErrorText
                  text={errors.applicant.applicantCompany.message || ""}
                />
              )}
            </Box> */}
            <ApplicationInput
              label="회사명"
              placeholder="iVH"
              disabled={isFillCustomerChecked}
              onFocus={handleApplicantFieldFocus}
              register={{
                ...register("applicant.applicantCompany", {
                  ...trimValidation("신청자 회사명을 입력해주십시오."),
                  required: "신청자 회사명을 입력해주십시오.",
                  maxLength: {
                    value: 50,
                    message: "글자 수가 너무 많습니다.",
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
              placeholder="IT"
              label="부서"
              disabled={isFillCustomerChecked}
              onFocus={handleApplicantFieldFocus}
              register={{
                ...register("applicant.applicantPosition", {
                  ...trimValidation("신청자 부서를 입력해주십시오."),
                  required: "신청자 부서를 입력해주십시오.",
                  maxLength: {
                    value: 50,
                    message: "글자 수가 너무 많습니다.",
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
              placeholder="홍길동"
              label="성함"
              disabled={isFillCustomerChecked}
              onFocus={handleApplicantFieldFocus}
              register={{
                ...register("applicant.applicantName", {
                  ...trimValidation("신청자 성함을 입력해주십시오."),
                  required: "신청자 성함을 입력해주십시오.",
                  maxLength: {
                    value: 50,
                    message: "글자 수가 너무 많습니다.",
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
              placeholder="example@ivh.co.kr"
              label="이메일"
              disabled={isFillCustomerChecked}
              onFocus={handleApplicantFieldFocus}
              register={{
                ...register("applicant.applicantEmail", {
                  ...trimValidation("신청자 이메일을 입력해주십시오."),
                  required: "신청자 이메일을 입력해주십시오.",
                  pattern: {
                    value: EAMIL_REGEX,
                    message: "이메일 형식을 맞춰주십시오.",
                  },
                  maxLength: {
                    value: 50,
                    message: "글자 수가 너무 많습니다.",
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
              placeholder="(-) 포함 입력"
              label="연락처"
              disabled={isFillCustomerChecked}
              onFocus={handleApplicantFieldFocus}
              register={{
                ...register("applicant.applicantPhone", {
                  ...trimValidation("신청자 연락처를 입력해주십시오."),
                  required: "신청자 연락처를 입력해주십시오.",
                  pattern: {
                    value: PHONE_REGEX,
                    message: "전화번호 형식을 맞춰주십시오.",
                  },
                  maxLength: {
                    value: 50,
                    message: "글자 수가 너무 많습니다.",
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
      <Divider sx={{ mt: 1 }} />
      <Box>
        <Box display="flex" alignContent="center">
          <Typography
            sx={{
              fontSize: "24px",
              fontFamily: "Freesentation-6-SemiBold",
              mr: 2,
            }}
          >
            수강자
          </Typography>
          <Box sx={{ position: "relative" }}>
            <FormControlLabel
              label="신청자 정보와 같음"
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
          gap={4}
          sx={{
            minHeight: "300px",
            maxHeight: "500px",
            overflowY: "auto",
            mt: 2,
          }}
        >
          {customerFields.map((_, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", pt: 1 }}
            >
              <Box
                sx={(theme) => ({
                  flex: 1,
                  display: "grid",
                  gridTemplateColumns: "repeat(1,1fr)",
                  gap: 4,
                  [theme.breakpoints.up("mobileLandscape")]: {
                    gridTemplateColumns: "repeat(5,1fr)",
                    gap: 2,
                  },
                })}
              >
                <ApplicationInput
                  placeholder="iVH"
                  label="회사명"
                  disabled={index === 0 && isFillCustomerChecked}
                  shrink={customerValues?.[index]?.company}
                  register={{
                    ...register(`customer.${index}.company`, {
                      required: "수강자 회사명을 입력해주십시오.",
                      ...trimValidation("수강자 회사명을 입력해주십시오."),
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
                  placeholder="IT"
                  label="부서"
                  disabled={index === 0 && isFillCustomerChecked}
                  shrink={customerValues?.[index]?.position}
                  register={{
                    ...register(`customer.${index}.position`, {
                      required: "수강자 부서를 입력해주십시오.",
                      ...trimValidation("수강자 부서를 입력해주십시오."),
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
                  placeholder="홍길동"
                  label="성함"
                  disabled={index === 0 && isFillCustomerChecked}
                  shrink={customerValues?.[index]?.name}
                  register={{
                    ...register(`customer.${index}.name`, {
                      required: "수강자 성함을 입력해주십시오.",
                      ...trimValidation("수강자 성함을 입력해주십시오."),
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
                  placeholder="example@ivh.co.kr"
                  label="이메일"
                  disabled={index === 0 && isFillCustomerChecked}
                  shrink={customerValues?.[index]?.email}
                  register={{
                    ...register(`customer.${index}.email`, {
                      required: "수강자 이메일을 입력해주십시오.",
                      ...trimValidation("수강자 이메일을 입력해주십시오."),
                      pattern: {
                        value: EAMIL_REGEX,
                        message: "이메일 형식을 맞춰주십시오.",
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
                  placeholder="(-) 포함 입력"
                  label="연락처"
                  disabled={index === 0 && isFillCustomerChecked}
                  shrink={customerValues?.[index]?.phone}
                  register={{
                    ...register(`customer.${index}.phone`, {
                      required: "수강자 연락처를 입력해주십시오.",
                      ...trimValidation("수강자 연락처를 입력해주십시오."),
                      pattern: {
                        value: PHONE_REGEX,
                        message: "전화번호 형식을 맞춰주십시오.",
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
              <Box display="flex" gap={1} sx={{ mx: 1 }}>
                <ApplicationButton>
                  <RemoveIcon onClick={() => removeCustomerList(index)} />
                </ApplicationButton>
                <ApplicationButton>
                  <AddIcon onClick={addCustomerList} />
                </ApplicationButton>
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
          placeholder="요청 사항을 입력해주십시오."
          {...register("memo")}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
          position: "relative",
        }}
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
                rules={{ required: "동의가 필요합니다." }}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value || false}
                    onChange={field.onChange}
                  />
                )}
              />
            }
            sx={{
              fontFamily: "Freesentation-6-SemiBold",
              mr: 1,
            }}
            label={"개인정보처리방침에 동의합니다."}
          />
          <PrivacyPolicyIcon />
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
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "black",
            width: "fit-content",
            fontFamily: "Freesentation-6-SemiBold",
            fontSize: "16px",
          }}
          disabled={!isValid || submitStatus === "loading"}
        >
          신청하기
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
