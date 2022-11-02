/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const defaultProps = {
  width: 'auto',
  height: 'auto',
  margin: '0',
  padding: '0',
  fontSize: '1rem',
  color: 'white',
  fontWeight: '400',
};

const FlexTextBox = (props) => {
  const { children, width, height, padding, margin, fontSize, color, fontWeight } = props;

  return (
    <div
      css={css`
        width: ${width};
        height: ${height};
        margin: ${margin};
        padding: ${padding};
        font-size: ${fontSize};
        font-weight: ${fontWeight};
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
