import styled from 'styled-components';

import { Mic, Headset, Settings } from 'styled-icons/material';



/* SL - SERVE-LIST
SL - SERVE-NAME
CI - CHANEL-INFO
CL - CHANEL-LIST
CD - CHANEL-DATA
UL - USER-LIST

grid-template-areas: 
  'SL SN CI CI'
  'SL CL CD UL'
  'SL UI CD UL';

 
`; */


export const Container = styled.div`
    grid-area:UI;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px ;

    background-color: var(--quaternary);
    box-shadow: rgba(0,0,0,.2) 0 1px 0 0;
    


`;


export const Profile = styled.div`
 display: flex;
 align-items: center;

`;


export const Avatar = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 50%;
  background-color: var(--gray);
`;


export const UserData = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > strong {
  font-size: 13px;
  display: block;

    color: var(--white);

  }

  >span{
    font-size: 11px;
   

    color: var(--gray);
  }

`;


export const Icons = styled.div`
display: flex;

align-items: center;

> svg:nth-child(2){
    margin: 0 7px;
} 
`;


export const MicIcon = styled(Mic)`
    width: 20px;
    height: 20px;
    color: var(--symbol);
    cursor: pointer;
    transition: color .2s;

    &:hover {
      color: var(--white);
    }


`;


export const HeadphoneIcon = styled(Headset)`
 width: 20px;
    height: 20px;
    color: var(--symbol);
    cursor: pointer;
 
    transition: color .2s;

    &:hover {
      color: var(--white);
    }
`;


export const SettingsIcon = styled(Settings)`
 width: 20px;
    height: 20px;
    color: var(--symbol);
    cursor: pointer;
 
    transition: color .2s;

    &:hover {
      color: var(--white);
    }
`;

