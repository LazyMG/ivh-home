import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  validateEmail,
  validateNotEmptyAndLength,
  validatePhone,
} from "../../utils/validation";
import { useState } from "react";
import ApplicationInputErrorText from "../support/ApplicationInputErrorText";
import {
  customerService,
  type CustomerRequestForm,
} from "../../service/customerService";
import CustomSnackbar from "../support/CustomSnackbar";

interface ProductRequestForm {
  name: string;
  company: string;
  email: string;
  phone: string;
}

const ProductForm = ({ productName }: { productName: string }) => {
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
    reset,
  } = useForm<ProductRequestForm>({
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
    },
  });
  const [submitStatus, setSubmitStatus] = useState<
    "loading" | "success" | "error" | null
  >(null);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const onSubmit = async (data: ProductRequestForm) => {
    const customerData: CustomerRequestForm = {
      ...data,
      productName: `${productName}_Product`,
    };

    setSubmitStatus("loading");
    setSnackbarMessage("정보 전송 중입니다...");
    try {
      await customerService.postCustomerInfo(customerData);
      setSubmitStatus("success");
      setSnackbarMessage("전송이 성공적으로 완료되었습니다.");
      reset();
    } catch (error: unknown) {
      // console.error(error);
      setSubmitStatus("error");

      const errorMessage =
        error instanceof Error
          ? error.message
          : "전송에 실패했습니다. 다시 시도해주세요.";
      setSnackbarMessage(errorMessage);
    }
  };

  const handleCloseSnackbar = () => {
    setSubmitStatus(null);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: 3,
        }}
      >
        <Box sx={{ position: "relative", width: "100%" }}>
          <TextField
            {...register("name", {
              validate: (value) => validateNotEmptyAndLength(value, 50),
            })}
            size="small"
            placeholder="성함"
            variant="outlined"
            label="성함"
            required
            sx={{ width: "100%" }}
          />
          {errors.name && (
            <ApplicationInputErrorText text={errors.name.message || ""} />
          )}
        </Box>
        <Box sx={{ position: "relative", width: "100%" }}>
          <TextField
            {...register("company", {
              validate: (value) => validateNotEmptyAndLength(value, 50),
            })}
            size="small"
            placeholder="소속"
            label="소속"
            required
            sx={{ width: "100%" }}
          />
          {errors.company && (
            <ApplicationInputErrorText text={errors.company.message || ""} />
          )}
        </Box>
        <Box sx={{ position: "relative", width: "100%" }}>
          <TextField
            {...register("email", {
              validate: (value) => validateEmail(value),
            })}
            type="email"
            size="small"
            placeholder="이메일"
            label="이메일"
            required
            sx={{ width: "100%" }}
          />
          {errors.email && (
            <ApplicationInputErrorText text={errors.email.message || ""} />
          )}
        </Box>
        <Box sx={{ position: "relative", width: "100%" }}>
          <TextField
            {...register("phone", {
              validate: (value) => validatePhone(value),
            })}
            size="small"
            placeholder="연락처"
            label="연락처"
            required
            sx={{ width: "100%" }}
          />
          {errors.phone && (
            <ApplicationInputErrorText text={errors.phone.message || ""} />
          )}
        </Box>
        <Button
          type="submit"
          disabled={!isValid || submitStatus === "loading"}
          sx={{
            py: 1,
            px: 4,
            backgroundColor: "#1755C2",
            minWidth: "fit-content",
            borderRadius: 0,
            "&.Mui-disabled": {
              opacity: 0.5,
              backgroundColor: "#707070",
              "& .MuiTypography-root": {
                color: "#9e9e9e",
              },
            },
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "16px",
              fontFamily: "Freesentation-6-SemiBold",
              textAlign: "center",
            }}
          >
            요청하기
          </Typography>
        </Button>
      </Box>
      <CustomSnackbar
        submitStatus={submitStatus}
        snackbarMessage={snackbarMessage}
        handleCloseSnackbar={handleCloseSnackbar}
      />
    </>
  );
};

export default ProductForm;
