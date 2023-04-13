import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { makeClassName } from "./textUtil";
type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export type TitleProps = TextProps & {
  numberOfLines?: number
}

//제목 영역
export const Title: FC<TitleProps> = ({className: _className, numberOfLines, ...props}) =>{
  const className =makeClassName(
    'font-bold text-5xl text-center whitespace-pre-line',
    _className,
    numberOfLines
  )
  
  return <p {...props} className={className} />
}

// 서브 타이틀 생성
export type SubtitleProps = TitleProps & {};
export const Subtitle: FC<SubtitleProps> = ({className: _className, numberOfLines, ...props}) => {
  const className = makeClassName(
    'font-semibold text-3xl text-center whitespace-pre-line',
    _className,
    numberOfLines
  );
  return <p {...props} className={className} />
}

// 요약
export type SummaryProps = SubtitleProps & {}
export const Summary: FC<SummaryProps> = ({className: _className, numberOfLines, ...props}) => {
  const className = makeClassName(
    'text-sm whitespace-pre-line',
    _className,
    numberOfLines
  );
  return <p {...props} className={className} />
}

// 본문
export type ParagraphProps = SummaryProps & {}
export const Paragraph: FC<ParagraphProps> = ({className: _className, numberOfLines, ...props}) => {
  const className = makeClassName(
    'font-nomal text-base whitespace-pre-line',
    _className,
    numberOfLines
  );
  return <p {...props} className={className} />
}