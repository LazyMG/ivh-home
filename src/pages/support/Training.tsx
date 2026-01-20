import type { ReservationResponse } from "../../types/reservation";

import { Box, Typography } from "@mui/material";

import TrainingMainTitle from "../../components/support/TrainingMainTitle";
import GradientSectionLabel from "../../components/support/GradientSectionLabel";
import Calendar from "../../components/support/Calendar";
import ApplicationForm from "../../components/support/ApplicationForm";

import training from "../../data/support/training.json";
import { useSEO } from "../../hooks/useSEO";
import SEO from "../../common/SEO";
import { useEffect, useState } from "react";
import { reservationService } from "../../service/reservationService";
import CustomSnackbar from "../../components/support/CustomSnackbar";
import TraingCurriculumTable from "../../components/support/TrainingCurriculumTable";

import curriculums from "../../data/support/curriculum.json";
import ScrollButton from "../../common/ScrollButton";
import MobileScheduleContainer from "../../components/support/MobileScheduleContainer";

const DUMMY_DATA = [
  {
    id: 9,
    reservationName: "OpenDRIVE 표준 이해 및 모델링",
    startDate: "2026-01-07T01:00:48.000Z",
    endDate: "2026-01-07T08:00:48.000Z",
    reservationStatus: "CLOSED",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "교육 SW: VTD \n목표: openDRIVE 표준을 활용한 도로 생성 기법 이해 \n\n교육과정 \n10:00 ~ 11:00 ASAM openDRIVE 이론 \n11:00 ~ 12:00 VTD & ROD 소개 및 구동 실습 \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 도로 및 풍경 생성 - 직선, 곡선 도로 \n14:00 ~ 15:00 도로 및 풍경 생성 - 다차선 도로 \n15:00 ~ 16:00 교차로 및 신호등 생성 \n16:00 ~ 17:00 OSM 기반 OpenDRIVE 생성 \n\n기대효과: \nopenDRIVE 표준 이해 및 표준기반 도로 생성기법 이해 \nopenSource를 활용한 도로생성기법 이해\n",
    maxPeople: 7,
    minPeople: 3,
    reservatedPeople: 7,
    createdAt: "2025-12-16T00:19:03.658Z",
    updatedAt: "2025-12-26T00:29:09.000Z",
    deletedAt: null,
  },
  {
    id: 10,
    reservationName: "Modelica 기본 교육",
    startDate: "2026-01-08T01:00:00.000Z",
    endDate: "2026-01-08T08:00:00.000Z",
    reservationStatus: "CLOSED",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "교육 SW: Dymola, Modelica Standard Library \n목표: Modelica 기본 문법을 이해하고 모델링 가능 \n\n교육과정\n10:00 ~ 11:00 Modelica 란? \n11:00 ~ 12:00 문법 소개 및 실습 (1) \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 문법 소개 및 실습 (2) \n14:00 ~ 15:20 객체 지향 모델링 방법 (1) \n15:20 ~ 17:00 객체 지향 모델링 방법 (2) \n\n기대효과:\nModelica 활용 부품에서부터 시스템 모델링 가능 \nDymola 기본 기능 습득",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 6,
    createdAt: "2025-12-16T00:20:11.290Z",
    updatedAt: "2025-12-29T06:05:05.000Z",
    deletedAt: null,
  },
  {
    id: 12,
    reservationName: "Vehicle Dynamics 설계 및 성능해석 교육",
    startDate: "2026-01-09T01:00:47.000Z",
    endDate: "2026-01-09T08:00:47.000Z",
    reservationStatus: "CLOSED",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "선 수강조건: Modelica \n교육 SW: Dymola, VDL \n목표: VDL 활용 차량 모델링 및 성능분석 \n\n교육과정 \n10:00 ~ 12:00 차량 동역학 이론 및 Vehicle Dynamic Library 소개 \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 Suspension 모델링 및 분석 \n14:00 ~ 15:20 타이어 모델링 및 분석 \n15:20 ~ 17:00 전차량 모델링 및 승차감, 핸들링 성능 분석 \n\n기대효과: 활용 목적에 따른 차량 모델링",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 6,
    createdAt: "2025-12-16T06:54:44.870Z",
    updatedAt: "2026-01-05T04:28:25.000Z",
    deletedAt: null,
  },
  {
    id: 13,
    reservationName: "OpenSCENARIO XML 표준 이해 및 모델링",
    startDate: "2026-01-14T01:00:53.000Z",
    endDate: "2026-01-14T08:00:53.000Z",
    reservationStatus: "CLOSED",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "선 수강조건: openSCENARIO 표준 이해 및 모델링 \n교육 SW: VTD \n목표: openSCENARIO 표준을 활용한 시나리오 생성 기법 이해 \n\n교육과정 \n10:00 ~ 11:00 OpenSCENARIO 소개, GUI 기능 \n11:00 ~ 12:00 openDRIVE 적용, 차량 종류 및 위치 선정, Path 생성 \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 Pathshape 생성, Trigger 설정(이벤트 조건), 이벤트 생성 \n14:00 ~ 15:00 신호등 생성, Pulk Traffic 생성 \n15:00 ~ 16:00 SCP 기능 소개 및 실습 \n16:00 ~ 17:00 RDB 기능 소개 및 실습 \n\n기대효과:\nopenSCENARIO 표준 이해 및 표준기반 시나리오 생성기법 이해 \nVTD SCP 기능을 활용한 실시간 시나리오 제어 기법 이해",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 6,
    createdAt: "2025-12-16T06:55:38.315Z",
    updatedAt: "2025-12-26T00:29:32.000Z",
    deletedAt: null,
  },
  {
    id: 14,
    reservationName: "EV용 Thermal Management System 모델링",
    startDate: "2026-01-15T01:00:41.000Z",
    endDate: "2026-01-15T08:00:41.000Z",
    reservationStatus: "CLOSED",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "선 수강조건: Modelica \n교육 SW: Dymola, TLK Library \n목표: EV 열관리 시스템 모델링 \n\n교육과정 \n10:00 ~ 12:00 Library 소개 \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 Practice #01: 냉각 사이클 모델링 \n14:00 ~ 15:20 Practice #02: 냉동 사이클 모델링 \n15:20 ~ 17:00 Practice #03: EV 열관리 사이클 모델링\n\n기대효과: EV 열관리 성능 향상",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 0,
    createdAt: "2025-12-16T06:56:26.340Z",
    updatedAt: "2026-01-19T00:12:52.000Z",
    deletedAt: null,
  },
  {
    id: 15,
    reservationName: "Battery 설계 및 성능 해석 교육",
    startDate: "2026-01-16T01:00:00.000Z",
    endDate: "2026-01-16T08:00:00.000Z",
    reservationStatus: "CLOSED",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "교육 SW: Dymola, Battery Library \n목표: Battery Cell에서부터 패키지 성능까지 예측가능한 모델링 \n\n교육과정 \n10:00 ~ 12:00 Battery Library 소개 \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 Cell Modeling 및 실습 \n14:00 ~ 15:20 Pack Modeling 및 실습 \n15:20 ~ 17:00 시험 조건 및 BMS \n\n기대효과:\n배터리 주요 성능 인자 예측 가능 (SOC, SOH, SOD) \nBMS SILS에 활용가능",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 2,
    createdAt: "2025-12-16T06:57:05.027Z",
    updatedAt: "2026-01-19T00:12:57.000Z",
    deletedAt: null,
  },
  {
    id: 16,
    reservationName: "AI – Modelica 통합 모델링",
    startDate: "2026-01-21T01:00:00.000Z",
    endDate: "2026-01-21T08:00:00.000Z",
    reservationStatus: "OPEN",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "선 수강조건: TensorFlow \n교육 SW: Dymola, SMArtIInt \n목표: TensorFlow 추론 모델을 Dymola Behavior 모델에 적용\n\n교육과정 \n10:00 ~ 12:00 Library 소개 \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 Practice #01: Damper modeling \n14:00 ~ 15:20 Practice #02: PI 제어기 \n15:20 ~ 17:00 Practice #03: 열교환기 모델\n\n기대효과: Data 기반 요소 모델링을 통한 시스템 모델 정확도 향상 기대",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 0,
    createdAt: "2025-12-16T06:57:37.688Z",
    updatedAt: "2025-12-17T06:53:10.000Z",
    deletedAt: null,
  },
  {
    id: 11,
    reservationName: "Modelica 기본 교육",
    startDate: "2026-02-04T01:00:21.000Z",
    endDate: "2026-02-04T08:00:21.000Z",
    reservationStatus: "OPEN",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "교육 SW: Dymola, Modelica Standard Library \n목표: Modelica 기본 문법을 이해하고 모델링 가능 \n\n교육과정 \n10:00 ~ 11:00 Modelica 란? \n11:00 ~ 12:00 문법 소개 및 실습 (1) \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 문법 소개 및 실습 (2) \n14:00 ~ 15:20 객체 지향 모델링 방법 (1) \n15:20 ~ 17:00 객체 지향 모델링 방법 (2) \n\n기대효과:\nModelica 활용 부품에서부터 시스템 모델링 가능 \nDymola 기본 기능 습득",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 0,
    createdAt: "2025-12-16T00:23:12.596Z",
    updatedAt: "2025-12-17T06:56:28.000Z",
    deletedAt: null,
  },
  {
    id: 17,
    reservationName: "Traffic Flow 이해 및 모델링",
    startDate: "2026-02-10T01:00:00.000Z",
    endDate: "2026-02-10T08:00:00.000Z",
    reservationStatus: "OPEN",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "교육 SW: VISSIM \n목표: VISSIM을 활용한 Traffic Flow 생성 기법 이해 \n\n교육과정 \n10:00 ~ 11:00 iVH & VISSIM Overview \n11:00 ~ 12:00 Create Link, Junction, Spline / practice, Speed area 기능 설명 및 실습 \n12:00 ~ 13:00 중식 \n13:00 ~ 14:20 Conflict area 개념설명, Vehicle Type, Classes, Composition, Input, Route 기능 설명 및 실습 \n14:20 ~ 15:00 AV(Autonomous Vehicle) model / Link Driving Behavior 기능 설명 및 실습 \n15:00 ~ 16:00 Signal Heads/Controllers 기능 설명 및 실습 \n16:00 ~ 17:00 Evaluation 기능 설명 및 실습 \n\n기대효과: VISSIM을 활용한 Traffic Flow 생성 및 제어 기법 이해",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 0,
    createdAt: "2025-12-16T06:58:19.645Z",
    updatedAt: "2025-12-17T06:46:29.000Z",
    deletedAt: null,
  },
  {
    id: 18,
    reservationName: "FMI Basic",
    startDate: "2026-02-11T01:00:21.000Z",
    endDate: "2026-02-11T08:00:21.000Z",
    reservationStatus: "OPEN",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "교육 SW: Dymola \n목표: FMI 개념 및 활용 방안 이해\n\n교육과정 \n10:00 ~ 12:00 Understand the motivation and history of the FMI \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 Know how to export, import, and interact with, an FMU\n14:00 ~ 15:20 Practice 01: PID 제어기 FMU 생성 및 활용 \n15:20 ~ 17:00 Practice 02: 시스템 모델을 위한 FMI 활용 방법\n\n기대효과: 시스템 모델에 FMI 기법 적용 ",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 4,
    createdAt: "2025-12-16T07:09:04.335Z",
    updatedAt: "2026-01-12T07:44:56.000Z",
    deletedAt: null,
  },
  {
    id: 19,
    reservationName: "Design Optimization",
    startDate: "2026-02-12T01:00:00.000Z",
    endDate: "2026-02-12T08:00:00.000Z",
    reservationStatus: "OPEN",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "선 수강조건: Modelica, Python \n교육 SW: Dymola, Design Library \n목표: 모델 기반 최적 설계 및 Modeling Validation\n\n교육과정 \n10:00 ~ 12:00 Design Optimization 이론 \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 Design library 소개 \n14:00 ~ 15:20 Practice #01 EV 최적설계 \n15:20 ~ 17:00 Practice #02 PID 제어기 최적 설계 \n\n기대효과:\nDymola Model을 통해서 설계 지원 가능 \nOptimization 기능 활용 Model Identification 지원 가능",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 3,
    createdAt: "2025-12-16T07:09:39.861Z",
    updatedAt: "2026-01-12T07:45:01.000Z",
    deletedAt: null,
  },
  {
    id: 20,
    reservationName: "EV용 Thermal Management System 모델링",
    startDate: "2026-02-24T01:00:00.000Z",
    endDate: "2026-02-24T08:00:00.000Z",
    reservationStatus: "OPEN",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "선 수강조건: Modelica \n교육 SW: Dymola, TLK Library \n목표: EV 열관리 시스템 모델링 \n\n교육과정 \n10:00 ~ 12:00 Library 소개 \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 Practice #01: 냉각 사이클 모델링 \n14:00 ~ 15:20 Practice #02: 냉동 사이클 모델링 \n15:20 ~ 17:00 Practice #03: EV 열관리 사이클 모델링\n\n기대효과: EV 열관리 성능 향상",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 0,
    createdAt: "2025-12-16T07:10:16.518Z",
    updatedAt: "2025-12-17T06:47:42.000Z",
    deletedAt: null,
  },
  {
    id: 21,
    reservationName: "Battery 설계 및 성능 해석 교육",
    startDate: "2026-02-25T01:00:00.000Z",
    endDate: "2026-02-25T08:00:00.000Z",
    reservationStatus: "OPEN",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "교육 SW: Dymola, Battery Library \n목표: Battery Cell에서부터 패키지 성능까지 예측가능한 모델링 \n\n교육과정 \n10:00 ~ 12:00 Battery Library 소개 \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 Cell Modeling 및 실습 \n14:00 ~ 15:20 Pack Modeling 및 실습 \n15:20 ~ 17:00 시험 조건 및 BMS \n\n기대효과:\n배터리 주요 성능 인자 예측 가능 (SOC, SOH, SOD) \nBMS SILS에 활용가능",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 0,
    createdAt: "2025-12-16T07:10:49.895Z",
    updatedAt: "2025-12-17T06:50:21.000Z",
    deletedAt: null,
  },
  {
    id: 31,
    reservationName: "AI – Modelica 통합 모델링",
    startDate: "2026-02-27T01:00:00.000Z",
    endDate: "2026-02-27T08:00:00.000Z",
    reservationStatus: "OPEN",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "선 수강조건: TensorFlow \n교육 SW: Dymola, SMArtIInt \n목표: TensorFlow 추론 모델을 Dymola Behavior 모델에 적용\n\n교육과정 \n10:00 ~ 12:00 Library 소개 \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 Practice #01: Damper modeling \n14:00 ~ 15:20 Practice #02: PI 제어기 \n15:20 ~ 17:00 Practice #03: 열교환기 모델\n\n기대효과: Data 기반 요소 모델링을 통한 시스템 모델 정확도 향상 기대",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 0,
    createdAt: "2025-12-17T06:53:42.099Z",
    updatedAt: "2025-12-17T06:54:00.000Z",
    deletedAt: null,
  },
  {
    id: 22,
    reservationName: "OpenDRIVE 표준 이해 및 모델링",
    startDate: "2026-03-04T01:00:59.000Z",
    endDate: "2026-03-04T08:00:59.000Z",
    reservationStatus: "OPEN",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "교육 SW: VTD \n목표: openDRIVE 표준을 활용한 도로 생성 기법 이해 \n\n교육과정 \n10:00 ~ 11:00 ASAM openDRIVE 이론 \n11:00 ~ 12:00 VTD & ROD 소개 및 구동 실습 \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 도로 및 풍경 생성 - 직선, 곡선 도로 \n14:00 ~ 15:00 도로 및 풍경 생성 - 다차선 도로 \n15:00 ~ 16:00 교차로 및 신호등 생성 \n16:00 ~ 17:00 OSM 기반 OpenDRIVE 생성 \n\n기대효과: \nopenDRIVE 표준 이해 및 표준기반 도로 생성기법 이해 \nopenSource를 활용한 도로생성기법 이해",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 0,
    createdAt: "2025-12-16T07:11:43.764Z",
    updatedAt: "2025-12-17T06:40:56.000Z",
    deletedAt: null,
  },
  {
    id: 23,
    reservationName: "Modelica 기본 교육",
    startDate: "2026-03-05T01:00:00.000Z",
    endDate: "2026-03-05T08:00:00.000Z",
    reservationStatus: "OPEN",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "교육 SW: Dymola, Modelica Standard Library \n목표: Modelica 기본 문법을 이해하고 모델링 가능 \n\n교육과정 \n10:00 ~ 11:00 Modelica 란? \n11:00 ~ 12:00 문법 소개 및 실습 (1) \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 문법 소개 및 실습 (2) \n14:00 ~ 15:20 객체 지향 모델링 방법 (1) \n15:20 ~ 17:00 객체 지향 모델링 방법 (2) \n\n기대효과:\nModelica 활용 부품에서부터 시스템 모델링 가능 \nDymola 기본 기능 습득",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 5,
    createdAt: "2025-12-16T07:12:11.548Z",
    updatedAt: "2026-01-12T07:45:08.000Z",
    deletedAt: null,
  },
  {
    id: 24,
    reservationName: "Vehicle Dynamics 설계 및 성능해석 교육",
    startDate: "2026-03-06T01:00:00.000Z",
    endDate: "2026-03-06T08:00:00.000Z",
    reservationStatus: "OPEN",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "선 수강조건: Modelica \n교육 SW: Dymola, VDL \n목표: VDL 활용 차량 모델링 및 성능분석 \n\n교육과정 \n10:00 ~ 12:00 차량 동역학 이론 및 Vehicle Dynamic Library 소개 \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 Suspension 모델링 및 분석 \n14:00 ~ 15:20 타이어 모델링 및 분석 \n15:20 ~ 17:00 전차량 모델링 및 승차감, 핸들링 성능 분석 \n\n기대효과: 활용 목적에 따른 차량 모델링",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 5,
    createdAt: "2025-12-16T07:12:38.455Z",
    updatedAt: "2026-01-12T07:45:05.000Z",
    deletedAt: null,
  },
  {
    id: 25,
    reservationName: "OpenSCENARIO XML 표준 이해 및 모델링",
    startDate: "2026-03-11T01:00:40.000Z",
    endDate: "2026-03-11T08:00:40.000Z",
    reservationStatus: "OPEN",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "선 수강조건: openSCENARIO 표준 이해 및 모델링 \n교육 SW: VTD \n목표: openSCENARIO 표준을 활용한 시나리오 생성 기법 이해 \n\n교육과정 \n10:00 ~ 11:00 OpenSCENARIO 소개, GUI 기능 \n11:00 ~ 12:00 openDRIVE 적용, 차량 종류 및 위치 선정, Path 생성 \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 Pathshape 생성, Trigger 설정(이벤트 조건), 이벤트 생성 \n14:00 ~ 15:00 신호등 생성, Pulk Traffic 생성 \n15:00 ~ 16:00 SCP 기능 소개 및 실습 \n16:00 ~ 17:00 RDB 기능 소개 및 실습 \n\n기대효과:\nopenSCENARIO 표준 이해 및 표준기반 시나리오 생성기법 이해 \nVTD SCP 기능을 활용한 실시간 시나리오 제어 기법 이해",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 0,
    createdAt: "2025-12-16T07:13:22.252Z",
    updatedAt: "2025-12-17T06:45:15.000Z",
    deletedAt: null,
  },
  {
    id: 26,
    reservationName: "EV용 Thermal Management System 모델링",
    startDate: "2026-03-12T01:00:00.000Z",
    endDate: "2026-03-12T08:00:00.000Z",
    reservationStatus: "OPEN",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "선 수강조건: Modelica \n교육 SW: Dymola, TLK Library \n목표: EV 열관리 시스템 모델링 \n\n교육과정 \n10:00 ~ 12:00 Library 소개 \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 Practice #01: 냉각 사이클 모델링 \n14:00 ~ 15:20 Practice #02: 냉동 사이클 모델링 \n15:20 ~ 17:00 Practice #03: EV 열관리 사이클 모델링\n\n기대효과: EV 열관리 성능 향상",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 0,
    createdAt: "2025-12-16T07:13:49.916Z",
    updatedAt: "2025-12-17T06:47:21.000Z",
    deletedAt: null,
  },
  {
    id: 27,
    reservationName: "Battery 설계 및 성능 해석 교육",
    startDate: "2026-03-13T01:00:00.000Z",
    endDate: "2026-03-13T08:00:00.000Z",
    reservationStatus: "OPEN",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "교육 SW: Dymola, Battery Library \n목표: Battery Cell에서부터 패키지 성능까지 예측가능한 모델링 \n\n교육과정 \n10:00 ~ 12:00 Battery Library 소개 \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 Cell Modeling 및 실습 \n14:00 ~ 15:20 Pack Modeling 및 실습 \n15:20 ~ 17:00 시험 조건 및 BMS \n\n기대효과:\n배터리 주요 성능 인자 예측 가능 (SOC, SOH, SOD) \nBMS SILS에 활용가능",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 0,
    createdAt: "2025-12-16T07:14:14.942Z",
    updatedAt: "2025-12-17T06:50:42.000Z",
    deletedAt: null,
  },
  {
    id: 28,
    reservationName: "eFMI Basic",
    startDate: "2026-03-25T01:00:00.000Z",
    endDate: "2026-03-25T08:00:00.000Z",
    reservationStatus: "OPEN",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "선 수강조건: Modelica \n교육 SW: Dymola \n목표: eFMI 활용 모델 기반 제어기 개발\n\n교육과정 \n10:00 ~ 12:00 eFMI® motivation and overview \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 Practice #01: DC motor speed controller 모델링 \n14:00 ~ 15:20 Practice #02: Sky hook 기반 ECS 모델링 \n15:20 ~ 17:00 Practice #03: ROM 열전달 모델 기반 제어기 모델링\n\n기대효과: Data 기반 요소 모델링을 통한 시스템 모델 정확도 향상 기대",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 0,
    createdAt: "2025-12-16T07:14:54.140Z",
    updatedAt: "2025-12-17T06:51:28.000Z",
    deletedAt: null,
  },
  {
    id: 29,
    reservationName: "NR-HES 모델링",
    startDate: "2026-03-26T01:00:00.000Z",
    endDate: "2026-03-26T08:00:00.000Z",
    reservationStatus: "OPEN",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "선 수강조건: Modelica \n교육 SW: Dymola, TPL \n목표: Energy Level\n\n교육과정 \n10:00 ~ 12:00 Library 소개 \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 Renewable Energy 모델링 \n14:00 ~ 15:20 Reactor 및 Turbin 모델링 \n15:20 ~ 17:00 NR-HES 모델링 및 분석\n\n기대효과: Energy Level 시스템 분석 및 활용",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 0,
    createdAt: "2025-12-16T07:15:17.414Z",
    updatedAt: "2025-12-17T06:52:20.000Z",
    deletedAt: null,
  },
  {
    id: 30,
    reservationName: "AI – Modelica 통합 모델링",
    startDate: "2026-03-27T01:00:00.000Z",
    endDate: "2026-03-27T08:00:00.000Z",
    reservationStatus: "OPEN",
    reservationType: "EDUCATION",
    cost: 0,
    reservationDescription:
      "선 수강조건: TensorFlow \n교육 SW: Dymola, SMArtIInt \n목표: TensorFlow 추론 모델을 Dymola Behavior 모델에 적용\n\n교육과정 \n10:00 ~ 12:00 Library 소개 \n12:00 ~ 13:00 중식 \n13:00 ~ 14:00 Practice #01: Damper modeling \n14:00 ~ 15:20 Practice #02: PI 제어기 \n15:20 ~ 17:00 Practice #03: 열교환기 모델\n\n기대효과: Data 기반 요소 모델링을 통한 시스템 모델 정확도 향상 기대",
    maxPeople: 6,
    minPeople: 3,
    reservatedPeople: 0,
    createdAt: "2025-12-16T07:15:49.348Z",
    updatedAt: "2026-01-16T06:20:21.000Z",
    deletedAt: null,
  },
];

const Training = () => {
  const seoData = useSEO("support/training", training);
  const { training_title, training_outline } = training;

  const [apiReservationList, setApiReservationList] = useState<
    ReservationResponse[] | null
  >(null);
  const [submitStatus, setSubmitStatus] = useState<"error" | null>(null);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const { training_curriculums } = curriculums;

  const handleCloseSnackbar = () => {
    setSubmitStatus(null);
  };

  {
    /** reservation 호출 기능 추가 필요 */
  }
  const fetchReservationList = async () => {
    try {
      const result = await reservationService.getReservations();
      setApiReservationList(result);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
      // setSnackbarMessage(`${error}`);
      setApiReservationList(DUMMY_DATA as ReservationResponse[]);
      setSnackbarMessage("교육 일정을 불러오지 못했습니다.");
    }
  };

  useEffect(() => {
    // 렌더시에 호출하도록
    fetchReservationList();
  }, []);

  const THRESHOLD = 100;

  return (
    <>
      <SEO {...seoData} />
      <ScrollButton threshold={THRESHOLD} />

      {/** 개요, Curriculum, Schedule, Application 섹션 전체 컨테이너 */}
      <Box
        sx={(theme) => ({
          px: 4,
          [theme.breakpoints.up("tablet")]: {
            px: 10,
          },
          [theme.breakpoints.up("desktop")]: {
            px: 20,
            mb: 24,
          },
        })}
      >
        <Box
          sx={(theme) => ({
            mt: 10,
            mb: 8,
            display: "none",
            [theme.breakpoints.up("desktop")]: {
              display: "block",
            },
          })}
        >
          <TrainingMainTitle titleList={training_title} />
        </Box>
        {/** 개요 영역 */}
        <Box
          display="grid"
          sx={(theme) => ({
            gridTemplateColumns: "repeat(1,1fr)",
            gap: 4,
            alignItems: "center",
            my: 12,
            [theme.breakpoints.up("desktop")]: {
              px: 5,
              gridTemplateColumns: "repeat(2,1fr)",
              mt: 8,
              mb: 16,
              gap: 8,
            },
          })}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={training_outline.image} style={{ maxWidth: "100%" }} />
          </Box>
          <Box
            sx={(theme) => ({
              display: "flex",
              justifyContent: "center",
              [theme.breakpoints.up("desktop")]: {
                display: "none",
              },
            })}
          >
            <TrainingMainTitle titleList={training_title} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {training_outline.contents.map((content, index) => (
              <Typography
                key={index}
                sx={{
                  wordBreak: "keep-all",
                  fontFamily: "Freesentation-5-Medium",
                  fontSize: "20px",
                  whiteSpace: "pre-line",
                }}
              >
                {content}
              </Typography>
            ))}
          </Box>
        </Box>

        {/** Curriculum 섹션 */}
        <Box
          sx={(theme) => ({
            width: "100%",
            margin: "50px auto",
            display: "none",
            flexDirection: "column",
            mb: 16,
            [theme.breakpoints.up("tablet")]: {
              display: "flex",
            },
          })}
        >
          <GradientSectionLabel labelText="Curriculum" />
          <TraingCurriculumTable
            reservationList={apiReservationList}
            curriculums={training_curriculums}
          />
        </Box>

        {/** Schedule 섹션 */}
        <Box
          sx={{
            width: "100%",
            margin: "50px auto",
            display: "flex",
            flexDirection: "column",
            mb: 16,
          }}
        >
          <GradientSectionLabel labelText="Schedule" />
          <Calendar reservationList={apiReservationList} />
          <MobileScheduleContainer reservationList={apiReservationList} />
        </Box>

        {/** Application 섹션 */}
        <Box
          sx={{
            width: "100%",
            margin: "50px auto",
            flexDirection: "column",
            gap: 4,
            display: "flex",
          }}
        >
          <GradientSectionLabel labelText="Application" />
          <ApplicationForm reservationList={apiReservationList} />
        </Box>

        {/** 데이터 불러올 때 발생한 에러 보여주는 스낵바 */}
        {/** 에러 문구 출력 */}
        <CustomSnackbar
          submitStatus={submitStatus}
          snackbarMessage={snackbarMessage}
          handleCloseSnackbar={handleCloseSnackbar}
        />
      </Box>
    </>
  );
};

export default Training;
