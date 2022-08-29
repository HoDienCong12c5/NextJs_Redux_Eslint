import React from 'react'
import { Input } from 'antd'
import styled from 'styled-components'
const InputBase = styled(Input)`
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.7) !important;
  padding: ${(props) => (props.suffix ? '7px 10px;' : '10px 10px')};
  color: white !important;
  &focus-visible,
  &:hover ,
  &:focus{
    border: 1px solid rgba(255, 255, 255, 1) !important;
  }
  .ant-input-affix-wrapper {
    background-color: transparent !important;
    border: 0px;
    
  }
`
const InputTextArea = styled(InputBase.TextArea)`
  border-radius: 8px;
  &:focus,
  &:hover {
    border: 1px solid white !important;
  }
`
const InputPassword = styled(InputBase.Password)`
border-radius: 8px;
border: 1px solid rgba(255, 255, 255, 0.7) !important;
&:focus,
&:hover {
  border: 1px solid white !important;
}
`
export const Inputs = ({
  placeholder,
  onChange,
  iconRight = null,
  onKeyUp = null,
  type = 'text',
  maxLength = null,
  value = '',
  className = '',
  style = {},
  maxHeight = null,
  autoSize = {},
  textArea = false,
  multiple = false,
  disabled = false,
  onKeyPress = null,
  onChangText = null,
  autoComplete = 'off',
  password,
  iconRender,
  iconLeft = null
}) => {
  return textArea ? (
    <InputTextArea
      placeholder={placeholder}
      onChange={onChange}
      onKeyUp={onKeyUp}
      type={type}
      maxLength={maxLength ?? ''}
      value={value}
      suffix={iconRight}
      className={className}
      style={style}
      maxHeight={maxHeight}
      autoSize={autoSize}
      disabled={disabled}
      onKeyPress={onKeyPress}
      onChangText={onChangText}
      prefix={iconLeft}
    />
  ) : password ? (
    <InputPassword
      autoComplete={autoComplete}
      placeholder={placeholder}
      onKeyPress={onKeyPress}
      onChange={onChange}
      onChangText
      onKeyUp={onKeyUp}
      type={type}
      maxLength={maxLength ?? ''}
      value={value}
      suffix={iconRight}
      className={className}
      style={style}
      maxHeight={maxHeight}
      autoSize={autoSize}
      multiple={multiple}
      iconRender={iconRender}
      disabled={disabled}
      prefix={iconLeft}

    />
  ) : (
    <InputBase
      autoComplete={autoComplete}
      placeholder={placeholder}
      onKeyPress={onKeyPress}
      onChange={onChange}
      onChangText
      onKeyUp={onKeyUp}
      type={type}
      maxLength={maxLength ?? ''}
      value={value}
      suffix={iconRight}
      prefix={iconLeft}
      className={className}
      style={style}
      maxHeight={maxHeight}
      autoSize={autoSize}
      multiple={multiple}
      disabled={disabled}
    />
  )
}
export default Inputs