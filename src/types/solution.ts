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

export type { ContentProps, TextBoxProps, TextImageBoxProps };
