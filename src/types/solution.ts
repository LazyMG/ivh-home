interface ContentProps {
  title: string;
  subtitle: string;
  color: string;
}

interface TextBoxProps {
  title: string;
  contents: string;
  imgurl?: string;
  marginTop?: number;
}

interface TextImageBoxProps {
  title: string;
  contents?: string[];
  imgurl?: string[];
  width: string;
  height: string;
  listHeader: string;
}

// interface ColorBoxProps {
//   boxColor: string;
//   arrangement: string;
//   title: string[];
//   contents: string[][];
// }

interface ColorBoxProps2 {
  boxColor: string;
  arrangement: string;
  title: string[];
  contents: (string[] | string[][])[];
  depth?: boolean;
  imageUrl?: string[];
  width?: string;
  height?: string;
}

interface BoxSubSection {
  title?: string;
  items: string[];
}

interface BoxImage {
  src: string;
  width?: string;
  height?: string;
  alt?: string;
}

interface BoxContent {
  title: string;
  items?: string[]; // 단순 목록
  subSections?: BoxSubSection[]; // 중첩 목록 (A, B, C 섹션)
  subSectionColumns?: { xs?: number; sm?: number; md?: number; lg?: number }; // 중첩 목록 그리드 설정
  images?: BoxImage[]; // 이미지 배열
  imagePosition?: string; // 이미지 위치
  contentLayout?: string; // 콘텐츠 방향
  imageLayout?: string; // 여러 이미지의 배치 방향
  autoHeight?: boolean;
  pb?: boolean;
  hyphen?: string;
}

// ColorBox Props
interface ColorBoxProps {
  boxColor: string;
  layout: number[][]; // [[4,4,4]] 또는 [[6,6], [12]]
  boxes: BoxContent[];
  rowSpacing?: number; // 기본값: 8
  columnSpacing?: number; // 기본값: 4
}

interface ListProps {
  title: string;
  contents: {
    title: string;
    contents: string;
  }[];
}

export type {
  ContentProps,
  TextBoxProps,
  TextImageBoxProps,
  ColorBoxProps,
  ColorBoxProps2,
  BoxSubSection,
  BoxImage,
  BoxContent,
  ListProps,
};
