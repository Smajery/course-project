import styled from 'styled-components';

export const StyledSeniorProfile = styled.div`
  width: 100%;
  display: flex;

  .senior-menu-leftbar {
    width: calc(50% - 300px);
    height: 100%;
    display: flex;
    justify-content: flex-end;
    background-color: #333333;
    border-right: 2px solid ${props => props.theme.header.borderColor};

    .leftbar-container {
      padding: 10px 0;
      width: 320px;
      display: flex;
      flex-direction: column;
      gap: 20px 0;
      color: #FFFFFF;

      .menu-list {
        display: flex;
        flex-direction: column;

        .menu-title {
          height: 40px;
          display: flex;
          align-items: center;
          
          & > p {
            font-weight: bold;
          }
        }

        .menu-title-text-box {
          display: flex;
          align-items: center;

          p {
            padding: 5px 10px 5px 20px;
            cursor: pointer;

            &:hover, &.active {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

  .senior-menu-rightbar {
    width: calc(50% + 300px);
    display: flex;
    justify-content: flex-start;

    .rightbar-container {
      padding: 10px 0;
      width: 920px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;