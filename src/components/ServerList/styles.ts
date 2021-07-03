import styled from 'styled-components';


export const Container = styled.div`
/* 
SL - SERVE-LIST
SN - SERVE-NAME
CI - CHANEL-INFO
CL - CHANEL-LIST
CD - CHANEL-DATA
UL - USER-LIST
 */

grid-area: SL;
display: flex;
flex-direction: column;
align-items: center;

background-color: var(--tertiary);
padding: 11px 0;
max-height: 100vh ;
overflow-y:scroll;


::-webkit-scrollbar{
  display: none;
}

`;
export const Separator = styled.div`

  width:32px;
  border-bottom: 2px solid var(--quaternary);

  margin-bottom: 8px;

`;
