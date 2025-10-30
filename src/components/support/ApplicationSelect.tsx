import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller, type Control, type FieldErrors } from "react-hook-form";
import type { ApplicationFormType } from "./ApplicationForm";
import type { ReservationResponse } from "../../types/reservation";
import ApplicationInputErrorText from "./ApplicationInputErrorText";

interface ApplicationSelectProps {
  control: Control<ApplicationFormType, any, ApplicationFormType>;
  reservationList: ReservationResponse[] | null;
  errors: FieldErrors<ApplicationFormType>;
}

const filterPrevReservations = (list: ReservationResponse[]) => {
  const today = new Date();
  // 오늘 일정도 포함
  today.setHours(0, 0, 0, 0);

  const futureReservations = list.filter((reservation) => {
    return new Date(reservation.startDate) >= today;
  });

  // 월별 색상 (최대 3종류)
  const monthColors = ["#E3F2FD", "#FFF9C4", "#F1F8E9"];
  const monthColorMap: { [key: number]: string } = {};
  let colorIndex = 0;

  // 각 예약에 색상 추가
  return futureReservations.map((reservation) => {
    const month = new Date(reservation.startDate).getMonth();

    // 처음 보는 월이면 새 색상 할당
    if (monthColorMap[month] === undefined) {
      monthColorMap[month] = monthColors[colorIndex];
      colorIndex++;
    }

    return { ...reservation, bgColor: monthColorMap[month] };
  });
};

const ApplicationSelect = ({
  reservationList,
  control,
  errors,
}: ApplicationSelectProps) => {
  const isReservationListAvailable =
    reservationList && reservationList.length > 0;
  return (
    <FormControl fullWidth sx={{ position: "relative" }}>
      <InputLabel id="reservation-select-label">
        {isReservationListAvailable ? "수강할 교육*" : "교육 일정이 없습니다."}
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
            required
            value={field.value ?? ""}
            disabled={!isReservationListAvailable}
          >
            {isReservationListAvailable &&
              filterPrevReservations(reservationList).map((reservation) => (
                <MenuItem
                  key={reservation.id}
                  value={reservation.id}
                  sx={{
                    backgroundColor: reservation.bgColor,
                    ":active": { backgroundColor: reservation.bgColor },
                    ":focus": { backgroundColor: reservation.bgColor },
                    ":hover": {
                      backgroundColor: reservation.bgColor,
                      filter: "brightness(0.92)",
                    },
                  }}
                >
                  {`${reservation.startDate.split("T")[0]} ${
                    reservation.reservationName
                  }`}
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
  );
};

export default ApplicationSelect;
