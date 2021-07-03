import styled from 'styled-components';


/* 

grid-template-areas: 
'SL SN CI CI'
'SL CL CD UL'
'SL UI CD UL';


`;  

*/


export const Container = styled.div`

grid-area: UL;

display: flex;
flex-direction: column;

padding: 3px 6px 0 16px;
max-height: calc(100vh - 46px);
background-color: var(--secondary);
overflow-y: scroll;

::-webkit-scrollbar{
  width: 4px;
}

::-webkit-scrollbar-thumb{
  background-color: var(--tertiary);
  border-radius: 4px;
}

::-webkit-scrollbar-track{
  background-color: var(--secondary);
}






`;

export const Role = styled.span`
margin-top: 20px;

text-transform: uppercase;
font-size: 12px;
font-weight: 500;
color: var(--gray)



`;


export const User = styled.div`
 display: flex;

 margin-top: 5px;
 padding: 5px;
 align-items: center;

cursor: pointer;

border-radius: 4px;
background: transparent;
transition: background .2s;

&:hover{
  background: rgba(255,255,255,.1)
}

> strong {
  margin-left: 13px;
  font-weight: 500;
  color: var(--white);
  opacity: .7;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

>span {
  margin-left: 9px;

  background-color: var(--discord);
  color:var(--white);
  padding: 4px 5px;
  border-radius: 4px;


  font-size: 11px;
  font-weight:900;
  text-transform: uppercase;

}

`;


export const Avatar = styled.div`
flex-shrink: 0;

width:32px;
height: 32px;
background-color: var(--primary);
border-radius: 50%;

&.bot{
  background-color: var(--mention-detail);
}

`;







