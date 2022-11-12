/** @jsxImportSource @emotion/react */
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { css } from '@emotion/react';

const defaultProps = {
  width: '100%',
  minRow: 1,
  margin: '0',
  padding: '0.8rem',
  fontSize: '1.2rem',
  background: '#ECF2FE',
  maxLength: 900000,
  autoFocus: false,
  borderRadius: '1rem',
};

const Textarea = (props) => {
  const {
    text,
    width,
    minRow,
    margin,
    padding,
    fontSize,
    background,
    maxLength,
    value,
    onChange,
    autoFocus,
    borderRadius,
  } = props;

  return (
    <TextareaAutosize
      autoFocus={autoFocus}
      value={value}
      onChange={onChange}
      aria-label="empty textarea"
      placeholder={text}
      minRows={minRow}
      maxLength={maxLength}
      css={css`
        width: ${width} !important;
        border-radius: ${borderRadius} !important;
        border: none !important;
        padding: ${padding};
        font-size: ${fontSize};
        font-family: 'Pr-Bold';
        color: black;
        background-color: ${background} !important;
        margin: ${margin};
        resize: none;
        line-height: calc(${fontSize} + 0.6rem);
      `}
    />
  );
};
Textarea.defaultProps = defaultProps;

export default Textarea;
