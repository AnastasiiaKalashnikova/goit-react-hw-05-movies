import styled from 'styled-components';

export const Nav = styled.ul`
  width: 100%;
  height: 160px;
  display: flex;
  border-bottom: solid 4px;
  margin-bottom: 80px;

  li {
    list-style: none;

    margin-right: 40px;
    font-size: 60px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .active {
    color: red;
  }
`;

export const Wrapp = styled.div`
  padding: 40px 80px;
`;
