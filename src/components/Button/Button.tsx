import styled from '@emotion/styled/macro'

export const Button = styled.button`
  cursor: pointer;
  padding: 13px 48px 14px 48px;
  font-weight: bolder;
  border: none;

  font-style: normal;
  font-size: 18px;
  line-height: 21px;

  text-align: center;

  color: #ffffff;

  background: linear-gradient(270deg, #45c7fa 0%, #2196f3 100%);
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.03);
  border-radius: 24px;

  &:hover {
    filter: brightness(1.1);
  }
  &:disabled {
    background: #dedede;
  }
`
