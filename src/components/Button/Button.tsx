import styled from '@emotion/styled/macro'

export const Button = styled.button`
  padding: 13px 48px 14px 48px;
  font-weight: bolder;
  border: none;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;

  text-align: center;

  color: #FFFFFF;

  background: linear-gradient(270deg, #45C7FA 0%, #2196F3 100%);
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.03);
  border-radius: 24px;

  &:hover {
    background: linear-gradient(45deg, #42aaff, teal);
  }
  &:disabled {
    background: grey;
  }
`
