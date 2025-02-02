import styled from 'styled-components';

export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Turret+Road:400,700&display=swap');
  height: 60px;
  width: 100%;
  background: #556bac;
  position: absolute;
  top: 0;
  box-shadow: 0px 7px 12px -6px rgba(0, 0, 0, 0.65);
  z-index: 999;
  .nav-container {
    width: 80%;
    display: grid;
    grid-template-columns: 60px 1fr 60px;
    margin: 0 auto;

    .my-nav-logo {
      height: 60px;
      img {
        width: 50%;
        height: 50%;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &:hover {
        background: rgba(255, 255, 255, 0.233);
      }
    }

    .nav-links-container {
      height: 60px;
      grid-column: 2 / span 1;
      text-align: center;

      .nav-links {
        width: auto;
        padding: 0 12px;
        color: white;
        font-family: 'Turret Road', cursive;
        // font-weight: 700;
        font-size: 1.05rem;
        display: inline-block;
        line-height: 60px;
        height: 60px;
        text-decoration: none;
        letter-spacing: 3px;
        &:hover {
          color: rgb(139, 157, 195);
        }
      }
      .active {
        color: rgb(139, 157, 195);
      }
    }

    .nav-icons {
      height: 60px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      a {
        width: 100%;
        text-align: center;
        text-decoration: none;
        color: black;
        &:hover {
          background: black;
          color: white;
        }
      }
      i {
        font-size: 24px;
        line-height: 60px;
      }
    }
  }
  @media (max-width: 768px) {
    .nav-container {
      width: 100%;
      grid-template-columns: 1fr 60px;
      .my-nav-logo {
        display: none;
      }

      .nav-links-container {
        grid-column: span 1;
        /* .nav-links {
          padding: 0;
        } */
      }
    }
  }

  @media (max-width: 570px) {
    .nav-container {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      margin: 0 auto;

      .my-nav-logo {
        display: none;
      }

      .nav-links-container {
        grid-column: span 1;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        justify-items: center;

        .nav-links {
          width: auto;
          color: white;
          display: inline-block;
          line-height: 60px;
          text-decoration: none;
          font-size: 0.8em;
          padding: 0;
        }
        .active {
          color: rgb(139, 157, 195);
        }
      }
      .nav-icons {
        display: none;
      }
    }
  }
`;
