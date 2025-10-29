import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
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

interface ApplicantForm {
  applicantName: string;
  applicantEmail: string;
  applicantCompany: string;
  applicantPosition: string;
  applicantPhone: string;
}

interface ApplicationFormType {
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

  const isReservationListAvailable =
    reservationList && reservationList.length > 0;

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationFormType>({
    defaultValues: {
      customer: [{ name: "", email: "", company: "", position: "", phone: "" }],
    },
  });
  const {
    fields: customerFields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "customer",
  });

  const addCustomerList = () => {
    append(
      { name: "", email: "", company: "", position: "", phone: "" },
      { shouldFocus: false }
    );
  };

  const removeCustomerList = (index: number) => {
    remove(index);
  };

  const onSubmit = async (data: ApplicationFormType) => {
    const reservationRequestForm = {
      ...data.applicant,
      memo: data?.memo || "",
      customerList: data.customer,
      reservationId: data.reservationId,
      requestedPeople: data.customer.length,
    };
    console.log(reservationRequestForm);

    setSubmitStatus("loading");
    setSnackbarMessage("교육 신청 중입니다...");

    // return;

    try {
      await reservationService.postReservationRequest(reservationRequestForm);
      setSubmitStatus("success");
      setSnackbarMessage("교육 신청이 완료되었습니다.");
      reset();
    } catch (error) {
      console.log(error);
      setSubmitStatus("error");
      // setSnackbarMessage(`${error}`);
      setSnackbarMessage("교육 신청에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleCloseSnackbar = () => {
    setSubmitStatus(null);
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component={"form"}
      sx={{ display: "flex", flexDirection: "column", gap: 2, my: 4 }}
    >
      <Typography
        component="h4"
        sx={{ fontSize: "32px", fontFamily: "Freesentation-6-SemiBold" }}
      >
        수강신청
      </Typography>
      <FormControl fullWidth sx={{ position: "relative" }}>
        <InputLabel id="reservation-select-label">
          {isReservationListAvailable
            ? "수강할 교육*"
            : "교육 일정이 없습니다."}
        </InputLabel>
        <Controller
          name="reservationId"
          control={control}
          rules={{
            required: "교육을 선택해주세요",
            validate: (value) =>
              typeof value === "number" || "교육을 선택해주세요",
          }}
          render={({ field }) => (
            <Select
              labelId="reservation-select-label"
              label={
                isReservationListAvailable
                  ? "수강할 교육"
                  : "교육 일정이 없습니다."
              }
              {...field}
              value={field.value ?? ""}
              disabled={!isReservationListAvailable}
            >
              {isReservationListAvailable &&
                reservationList.map((reservation) => (
                  <MenuItem key={reservation.id} value={reservation.id}>
                    {`${reservation.startDate} ${reservation.reservationName}`}
                  </MenuItem>
                ))}
            </Select>
          )}
        />
        {errors.reservationId && (
          <ApplicationInputErrorText
            text={errors.reservationId.message || ""}
            sx={{ mx: 0, bottom: -12 }}
          />
        )}
      </FormControl>
      <Stack gap={2}>
        <Typography
          sx={{ fontSize: "24px", fontFamily: "Freesentation-6-SemiBold" }}
        >
          신청자
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(5,1fr)",
              gap: 2,
            }}
          >
            <Box sx={{ position: "relative" }}>
              <TextField
                size="small"
                placeholder="회사명*"
                required
                sx={{ width: "100%" }}
                {...register("applicant.applicantCompany", {
                  required: "신청자 회사명을 입력해주십시오.",
                })}
              />
              {errors.applicant && errors.applicant.applicantCompany && (
                <ApplicationInputErrorText
                  text={errors.applicant.applicantCompany.message || ""}
                />
              )}
            </Box>
            <Box sx={{ position: "relative" }}>
              <TextField
                size="small"
                placeholder="부서*"
                required
                sx={{ width: "100%" }}
                {...register("applicant.applicantPosition", {
                  required: "신청자 부서를 입력해주십시오.",
                })}
              />
              {errors.applicant && errors.applicant.applicantPosition && (
                <ApplicationInputErrorText
                  text={errors.applicant.applicantPosition.message || ""}
                />
              )}
            </Box>
            <Box sx={{ position: "relative" }}>
              <TextField
                size="small"
                placeholder="성함*"
                required
                sx={{ width: "100%" }}
                {...register("applicant.applicantName", {
                  required: "신청자 성함을 입력해주십시오.",
                })}
              />
              {errors.applicant && errors.applicant.applicantName && (
                <ApplicationInputErrorText
                  text={errors.applicant.applicantName.message || ""}
                />
              )}
            </Box>
            <Box sx={{ position: "relative" }}>
              <TextField
                size="small"
                placeholder="이메일*"
                required
                sx={{ width: "100%" }}
                {...register("applicant.applicantEmail", {
                  required: "신청자 이메일을 입력해주십시오.",
                  pattern: {
                    value:
                      /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$/i,
                    message: "이메일 형식을 맞춰주십시오.",
                  },
                })}
              />
              {errors.applicant && errors.applicant.applicantEmail && (
                <ApplicationInputErrorText
                  text={errors.applicant.applicantEmail.message || ""}
                />
              )}
            </Box>

            <Box sx={{ position: "relative" }}>
              <TextField
                size="small"
                placeholder="연락처*"
                required
                sx={{ width: "100%" }}
                {...register("applicant.applicantPhone", {
                  required: "신청자 연락처를 입력해주십시오.",
                  pattern: {
                    value: /^\d{3}-\d{4}-\d{4}$/,
                    message: "전화번호 형식을 맞춰주십시오.",
                  },
                })}
              />
              {errors.applicant && errors.applicant.applicantPhone && (
                <ApplicationInputErrorText
                  text={errors.applicant.applicantPhone.message || ""}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Stack>
      <Divider sx={{ mt: 1 }} />
      <Box>
        <Typography
          sx={{ fontSize: "24px", fontFamily: "Freesentation-6-SemiBold" }}
        >
          참여자
        </Typography>
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
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <Box
                sx={{
                  flex: 1,
                  display: "grid",
                  gridTemplateColumns: "repeat(5,1fr)",
                  gap: 2,
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <TextField
                    size="small"
                    placeholder="회사명*"
                    required
                    sx={{ width: "100%" }}
                    {...register(`customer.${index}.company`, {
                      required: "참여자 회사명을 입력해주십시오.",
                    })}
                  />
                  {errors.customer &&
                    errors.customer[index] &&
                    errors.customer[index].company && (
                      <ApplicationInputErrorText
                        text={errors.customer[index].company.message || ""}
                      />
                    )}
                </Box>
                <Box sx={{ position: "relative" }}>
                  <TextField
                    size="small"
                    placeholder="부서*"
                    required
                    sx={{ width: "100%" }}
                    {...register(`customer.${index}.position`, {
                      required: "참여자 부서를 입력해주십시오.",
                    })}
                  />
                  {errors.customer &&
                    errors.customer[index] &&
                    errors.customer[index].position && (
                      <ApplicationInputErrorText
                        text={errors.customer[index].position.message || ""}
                      />
                    )}
                </Box>
                <Box sx={{ position: "relative" }}>
                  <TextField
                    size="small"
                    placeholder="성함*"
                    required
                    sx={{ width: "100%" }}
                    {...register(`customer.${index}.name`, {
                      required: "참여자 성함을 입력해주십시오.",
                    })}
                  />
                  {errors.customer &&
                    errors.customer[index] &&
                    errors.customer[index].name && (
                      <ApplicationInputErrorText
                        text={errors.customer[index].name.message || ""}
                      />
                    )}
                </Box>
                <Box sx={{ position: "relative" }}>
                  <TextField
                    size="small"
                    placeholder="이메일*"
                    required
                    sx={{ width: "100%" }}
                    {...register(`customer.${index}.email`, {
                      required: "참여자 이메일을 입력해주십시오.",
                      pattern: {
                        value:
                          /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$/i,
                        message: "이메일 형식을 맞춰주십시오.",
                      },
                    })}
                  />
                  {errors.customer &&
                    errors.customer[index] &&
                    errors.customer[index].email && (
                      <ApplicationInputErrorText
                        text={errors.customer[index].email.message || ""}
                      />
                    )}
                </Box>

                <Box sx={{ position: "relative" }}>
                  <TextField
                    size="small"
                    placeholder="연락처*"
                    required
                    sx={{ width: "100%" }}
                    {...register(`customer.${index}.phone`, {
                      required: "참여자 연락처를 입력해주십시오.",
                      pattern: {
                        value: /^\d{3}-\d{4}-\d{4}$/,
                        message: "전화번호 형식을 맞춰주십시오.",
                      },
                    })}
                  />
                  {errors.customer &&
                    errors.customer[index] &&
                    errors.customer[index].phone && (
                      <ApplicationInputErrorText
                        text={errors.customer[index].phone.message || ""}
                      />
                    )}
                </Box>
              </Box>
              {index + 1 === customerFields.length ? (
                <ApplicationButton>
                  <AddIcon onClick={addCustomerList} />
                </ApplicationButton>
              ) : (
                <ApplicationButton>
                  <RemoveIcon onClick={() => removeCustomerList(index)} />
                </ApplicationButton>
              )}
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
          placeholder="문의 내용을 입력해주십시오."
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
        <FormControlLabel
          control={
            <Controller
              name="isChecked"
              control={control}
              rules={{ required: "동의가 필요합니다." }}
              render={({ field }) => <Checkbox {...field} />}
            />
          }
          sx={{ fontFamily: "Freesentation-6-SemiBold" }}
          label={"개인정보처리방침에 동의합니다."}
        />
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
        >
          신청하기
        </Button>
      </Box>
      {/** 신청 요청을 보낼 때 발생한 에러 보여주는 스낵바 */}
      {/** 에러 문구 출력 필요 */}
      {submitStatus === "loading" && (
        <Snackbar open>
          <Alert
            severity="info"
            variant="filled"
            sx={{
              width: "20%",
              minWidth: "300px",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
            icon={<CircularProgress size={24} sx={{ color: "white" }} />}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      )}

      {submitStatus === "success" && (
        <Snackbar open autoHideDuration={5000} onClose={handleCloseSnackbar}>
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            variant="filled"
            sx={{ width: "20%", minWidth: "300px" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      )}

      {submitStatus === "error" && (
        <Snackbar open autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert
            onClose={handleCloseSnackbar}
            severity="error"
            variant="filled"
            sx={{ width: "20%", minWidth: "360px" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};

export default ApplicationForm;
