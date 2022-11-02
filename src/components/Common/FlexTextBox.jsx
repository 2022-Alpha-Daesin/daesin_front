/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const defaultProps = {
  width: 'auto',
  height: 'auto',
  margin: '0',
  padding: '0',
  fontSize: '1rem',
  lineHeight: '120%',
  color: 'white',
  fontWeight: '400',
};

const FlexTextBox = (props) => {
  const { children, width, height, padding, margin, fontSize, color, fontWeight, lineHeight } =
    props;

  return (
    <div
      css={css`
        width: ${width};
        height: ${height};
        margin: ${margin};
        padding: ${padding};
        font-size: ${fontSize};
        font-weight: ${fontWeight};
        line-height: ${lineHeight};
        text-align: left;
        color: ${color};
      `}
    >
      {children}
    </div>
  );
};
FlexTextBox.defaultProps = defaultProps;

export default FlexTextBox;
