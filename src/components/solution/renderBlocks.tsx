import { Fragment, type ReactNode } from "react";
import { Box } from "@mui/material";
import {
  Bold,
  BulletList,
  Callout,
  LabeledBulletList,
  P,
  Section,
  SubBlock,
  VideoEmbed,
} from "./NewSolutionSection";

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "labeledBullets"; label: string; items: string[] }
  | {
      type: "callout";
      text: string;
      barGradient?: string;
      textGradient?: string;
    }
  | { type: "subBlock"; content: ContentBlock[] }
  | { type: "heading"; text: string };

export type TopBlock =
  | {
      type: "section";
      title: string;
      subtitle?: string;
      content: ContentBlock[];
    }
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; aspectRatio?: string };

export type PageData = {
  pageTitle: string;
  color?: string;
  image?: string;
  blocks: TopBlock[];
  closing?: { heading: string; line1: string; line2: string };
};

export const renderMd = (text: string): ReactNode =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <Bold key={i}>{part.slice(2, -2)}</Bold>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );

export const renderContentBlock = (
  block: ContentBlock,
  i: number,
): ReactNode => {
  switch (block.type) {
    case "p":
      return <P key={i}>{renderMd(block.text)}</P>;
    case "bullets":
      return <BulletList key={i} items={block.items.map((it) => renderMd(it))} />;
    case "labeledBullets":
      return (
        <LabeledBulletList
          key={i}
          label={renderMd(block.label)}
          items={block.items.map((it) => renderMd(it))}
        />
      );
    case "callout":
      return (
        <Callout
          key={i}
          barGradient={block.barGradient}
          textGradient={block.textGradient}
        >
          {block.text}
        </Callout>
      );
    case "subBlock":
      return (
        <SubBlock key={i}>
          {block.content.map((b, j) => renderContentBlock(b, j))}
        </SubBlock>
      );
    case "heading":
      return (
        <Box key={i} my={3}>
          <P>
            <Bold>{renderMd(block.text)}</Bold>
          </P>
        </Box>
      );
  }
};

export const renderTopBlock = (block: TopBlock, i: number): ReactNode => {
  switch (block.type) {
    case "section":
      return (
        <Section key={i} title={block.title} subtitle={block.subtitle}>
          {block.content.map((b, j) => renderContentBlock(b, j))}
        </Section>
      );
    case "image":
      return (
        <Box
          key={i}
          component="img"
          src={block.src}
          alt={block.alt}
          sx={{ width: "100%" }}
        />
      );
    case "video":
      return (
        <VideoEmbed key={i} src={block.src} aspectRatio={block.aspectRatio} />
      );
  }
};
