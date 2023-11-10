import styled from 'styled-components';

export const Section = styled.section`
  padding: 15px;
  margin-bottom: 50px;
  background-color: rgb(235, 242, 247);
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgb(131, 176, 216);
`;
export const Status = styled.span`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  font-size: 50%;
  position: relative;
  box-shadow: inset -1px -1px 10px #000, 1px 1px 2px black,
    inset 0px 0px 10px black;
  display: inline-block;
`;
// export const Online = styled.class`
//   background-color: green;
// `;
// export const Offline = styled.class`
//   background-color: brown;
// `;

export const Name = styled.p`
  margin: 0px;
  display: inline;
`;
export const Li = styled.li`
  margin: 20px;
  gap: 20px;
  display: flex;
  align-items: center;
  padding: 5px;
  border: solid;
`;


  