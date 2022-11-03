/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const defaultProps = {
  type: 'button',
  width: 'auto',
  height: 'auto',
  margin: '0',
  padding: '0.6rem 1.5rem',
  fontWeight: 400,
  borderRadius: '0.62rem',
  fontSize: '1.2rem',
  color: 'white',
  backgroundColor: '',
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
