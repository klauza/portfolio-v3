import styled from 'styled-components';

export const Wrapper = styled.div`
  // from main js file

  /* z-index: 5; */

  /* .separator {
    /* z-index: -1; */
  /* filter: brightness(0.5); */
  background: url(${(props) => props.background}) repeat;
  // from scss:
  @import url('https://fonts.googleapis.com/css?family=Russo+One&display=swap');
  font-family: 'Russo One', sans-serif;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  // background: $bot-portfolio-color;
  /* z-index: 2; */

  .top-h2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 70%;
    margin: 100px auto 0;

    h2 {
      text-align: center;
      padding: 0;
      margin: 0;
      color: #49494d;
      z-index: 3;
      font-family: 'Russo One', sans-serif;
      font-size: 2.5em;

      text-shadow: 1px 2px 3px #000;
      i.fa-star {
        color: #ffff00;
      }
      i.fa-trophy {
        color: #6e89da;
      }
      i.fa-camera-retro {
        color: #c44f4f;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;

      .top-h2 {
        width: 100%;
      }
      h2 {
        padding: 15px 0;
      }

      div {
        display: none;
      }
    }
  }

  p {
    padding: 0;
    margin: 0;
    margin: 5px auto;
    width: 250px;
    text-align: center;
    color: mintcream;
    z-index: 3;
    span {
      text-decoration: underline;
    }
  }
  p:nth-of-type(2)::after {
    content: '';
    display: block;
    // background: mintcream;
    height: 2px;
    width: 30px;
    margin: 10px auto;
  }
  .portfolio-grid {
    //overflow: hidden;
    width: 100%;
    // background: $bot-portfolio-color;
    margin: 0 auto;
    padding: 100px 50px 100px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 350px));
    grid-auto-rows: 500px;

    grid-column-gap: 15px;
    grid-row-gap: 50px;
    justify-content: center;

    &:nth-child(1) {
      background: $top-portfolio-color;
    }

    .card {
      background: black;
      transition: all 250ms ease;
      position: relative;
      width: 100%;
      height: 100%;
      // border: 1px solid black;
      transition: 350ms;
      overflow: hidden;
      box-shadow: 0px 27px 40px -20px rgba(0, 0, 0, 0.75);
      text-transform: uppercase;
      font-family: $ff-Russo;
      border: 0px solid black;
      border-radius: 5px;
      z-index: 2;

      transform: translateY(200px);
      opacity: 0;

      .card-background {
        height: 100%;
        img,
        &__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      // .top-touch{
      //   position: absolute;
      //   top: 0;
      //   right: 0;
      //   background: rgb(211, 143, 16);
      //   width: 100%;
      //   height: 250px;
      //   display: none;
      //   @supports (clip-path: polygon(70% 0, 85% 0, 100% 15%, 100% 30%)) {
      //     display: block;
      //     clip-path: polygon(70% 0, 85% 0, 100% 15%, 100% 30%);
      //   }
      // }

      .card-description {
        position: absolute;
        width: 100%;
        bottom: 25%;
        left: 0;

        &__title {
          text-align: center;
          color: white;
          font-size: 1.6em;
          background: black;
        }
        &__language {
          text-align: center;
          color: rgb(216, 216, 216);
          font-size: 0.85em;
          padding: 8px 10px;
          margin-bottom: 10px;
          background: rgba(0, 0, 0, 0.45);
        }
        &__icon--container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          justify-content: space-evenly;
          .icon-language {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: 1px white solid;

            overflow: hidden;
            text-align: center;
            background: #556bac;

            i {
              color: white;
              font-size: 34px;
              line-height: 70px;
            }
            img {
              width: 36px;
              position: relative;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
        &__link {
          text-align: center;
          margin-top: 10px;
          a {
            line-height: 40px;
            text-decoration: none;
            color: white;
            display: inline-block;
            width: 50%;
            height: 100%;
            letter-spacing: 2px;

            &:nth-child(1) {
              background-color: brown;
            }
            &:nth-child(2) {
              background-color: black;
            }
            &:hover {
              cursor: pointer;
              background: white;
              color: black;
            }
          }

          i {
            // github icon
            margin-left: 10px;
            font-size: 20px;
          }
          a:nth-child(1) i {
            font-size: 18px;
          }
        }
      } // card-description end

      &-description__hover--text {
        padding: 20px 7px 0;
        text-align: center;
        width: 100%;
        height: 130px;
        background: rgba(0, 0, 0, 0.45);
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateY(140px);
        transition: 450ms all ease;
        color: white;
        font-size: 12px;
      }
      // card hover
      &:hover .card-description__hover--text {
        transform: translateY(5px);
        transition: 450ms all ease;
      }
    } // card end

    // different styles on images

    .noble-leaders-card,
    .bhutanotel-card,
    .e-newsstand-card {
      .card-background {
        filter: brightness(1);
        img {
          object-fit: cover;
          object-position: 0px 0px;
        }
      }
    }
    .photography-card {
      .card-background {
        filter: brightness(0.75);
        img {
          object-fit: none;
          object-position: -60px -370px;
        }
      }
    }
    .guess-card {
      .card-background {
        filter: brightness(0.6);
        img {
          object-fit: cover;
          object-position: -50px 0px;
        }
      }
    }
    .actor-card {
      .card-background {
        filter: brightness(1.2);
        img {
          object-fit: none;
          object-position: -130px -260px;
        }
      }
    }
    .chest-card {
      .card-background {
        filter: brightness(1.1);
        img,
        &__image {
          object-fit: cover;
          object-position: -190px 0px;
        }
      }
    }
    .regex-card {
      .card-background {
        filter: brightness(0.7);
        img,
        &__image {
          object-fit: cover;
          object-position: -400px 0px;
        }
      }
    }
    .hero-card {
      .card-background {
        filter: brightness(0.6);
        img {
          object-fit: cover;
          object-position: -60px 0px;
        }
      }
    }
    .shelter-card {
      .card-background {
        filter: brightness(0.55);
        img {
          object-fit: cover;
          object-position: -150px 0px;
        }
      }
    }
    .hussars-card {
      .card-background {
        filter: brightness(0.75);
        img {
          object-fit: cover;
          object-position: -350px 0px;
        }
      }
    }
    .car-dealer-card {
      .card-background {
        filter: brightness(0.6);
        img {
          object-fit: cover;
          object-position: -250px 0px;
        }
      }
    }
    .church-card {
      display: none;
      .card-background {
        filter: brightness(0.7);
        img {
          object-fit: cover;
          object-position: 0px 0px;
        }
      }
    }
  }

  .separator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    margin: 0 auto;
    min-height: 150px;
    // background: $top-portfolio-color;
    text-align: center;
    // clip-path: polygon(
    //   100% 0,
    //   0 0,
    //   100% 100%,
    //   0 100%,
    //   50% 50%,
    //   50% 50%,
    //   50% 50%
    // );
  }

  @media (max-width: 65em) {
    .portfolio-grid {
      width: 100%;
      grid-template-columns: repeat(auto-fit, minmax(100px, 230px));
      grid-auto-rows: 380px;
      padding: 100px 25px 100px;
      .card {
        .card-background {
          img {
            object-position: center center;
          }
        }
        .card-description {
          &__link {
            a {
              font-size: 13px;
            }
          }
        }
        .card-description__hover--text {
          font-size: 10px;
          padding: 10px 7px 0;
          height: 100px;
        }
      }
    }
    // .separator{
    //   &-para{
    //     font-size: 1.25rem;
    //   }
    // }
  }

  @media (max-width: 35em) {
    .portfolio-grid {
      width: 100%;
      padding: 100px 0px 75px;
      grid-column-gap: 5px;
      grid-row-gap: 30px;
    }
    // .separator{
    //   clip-path: polygon(100% 0, 100% 70%, 70% 70%, 50% 90%, 30% 70%, 0 70%, 0 0);
    //   &-para{
    //     font-size: 1rem;
    //     position: absolute; top: 55%; left: 50%;
    //   }
    // }
  }
`;
