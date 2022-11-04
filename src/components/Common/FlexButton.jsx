/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import COLOR from 'constants/color';

const defaultProps = {
  type: 'button',
  width: 'auto',
  height: 'auto',
  margin: '0',
  padding: '0.6rem 1.5rem',
  fontWeight: 800,
  borderRadius: '0.62rem',
  fontSize: '1.2rem',
  color: COLOR.font.main,
  textDecoration: 'none',
  backgroundColor: 'transparent',
  disabled: false,
  onClick: Function,
};

const FlexButton = (props) => {
  const {
    children,
    width,
    height,
    type,
    disabled,
    margin,
    padding,
    borderRadius,
    fontSize,
    fontWeight,
    color,
    textDecoration,
    backgroundColor,
    onClick,
  } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      css={css`
        width: ${width};
        height: ${height};
        padding: ${padding};
        margin: ${margin};
        border: 0;
        outline: 0;
        border-radius: ${borderRadius};
        font-size: ${fontSize};
        font-weight: ${fontWeight};
        background: ${backgroundColor};
        color: ${color};
        text-decoration: ${textDecoration};
        cursor: pointer;
        transition: all ease 0.25s;
      `}
    >
      {children}
    </button>
  );
};
FlexButton.defaultProps = defaultProps;

export default FlexButton;
