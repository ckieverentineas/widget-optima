import styled from '@emotion/styled/macro'

export const Button = styled.button`
  border-radius: 10px;
  color: white;
  padding: 10px;
  width: auto;
  font-weight: bolder;
  background: linear-gradient(45deg, teal, #42aaff);

  &:hover {
    background: linear-gradient(45deg, #42aaff, teal);
  }
  &:disabled {
    background: grey;
  }
`
