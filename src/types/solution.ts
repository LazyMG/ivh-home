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
  imgurl: string[];
  width: string;
  height: string;
}

interface ColorBoxProps {
  boxColor: string;
  arrangement: string;
  title: string[];
  contents: string[][];
}

interface ColorBoxProps2 {
  boxColor: string;
  arrangement: string;
  title: string[];
  contents: (string[] | string[][])[];
}

export type {
  ContentProps,
  TextBoxProps,
  TextImageBoxProps,
  ColorBoxProps,
  ColorBoxProps2,
};
