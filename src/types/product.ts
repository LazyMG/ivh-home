interface ImageBannerProps {
  imgUrl: string;
  title: string;
  subtitle: string;
}

interface OutlineProps {
  outline: string[];
  imgObj?: {
    imgs: {
      imgUrl: string;
      imgText: string;
    }[];
  };
}

interface ProductTextImageBoxProps {
  title?: string;
  contents?: string[];
  width?: string;
  height?: string;

  imgObj?: {
    imgs: {
      imgUrl: string;
      imgText?: string;
      imgWidth?: string;
    }[];
    imgLayout?: string;
    imgPosition?: string;
  };
}

export type { ImageBannerProps, OutlineProps, ProductTextImageBoxProps };
