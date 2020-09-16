import styled,{css} from 'styled-components'
import {StatusProps} from '.'

export const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 56px;
  z-index:98;
`;

type StatusStyleProps = {
} & Pick<StatusProps, 'color'>

export const StatusValue = styled.span<StatusStyleProps>`
${({theme,color})=>css`
  font-size: ${theme.font.sizes.xxlarge};
  font-weight: ${theme.font.bold};
  color: ${theme.colors[color!]};

`}
`;

export const StatusName = styled.span<StatusStyleProps>`
  ${({theme,color})=>css`
   font-size: ${theme.font.sizes.xxsmall};
   color: ${theme.colors[color!]};
  `}
`;
