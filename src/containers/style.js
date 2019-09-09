import styled from "styled-components";

export const Input = styled.input`
  border: solid 1px #77abfc;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 16px;
  font-weight: 300;
  margin: 0 1rem;
  padding: 7px 33px;
  text-align: center;

  &:active,
  &:focus {
    text-align: left;
  }
`;

export const Button = styled.button`
  background: white;
  border: 1px solid #77abfc;
  border-radius: 3px;
  color: #77abfc;
  font-size: .7rem;
  letter-spacing: 0.3em;
  margin: 0 1rem;
  padding: 0.4rem 1rem;
  text-transform: uppercase;
  text-decoration: none;

  &:hover,
  &:focus {
    background: #77abfc;
    border: 1px solid #77abfc;
    box-shadow: inset 0 0 0 2em #77abfc;
    color: #2a2658;
    transition: .5s;
  }
`;

export const ListItem = styled.div`
  cursor: pointer;
  background: red;
  font-size: 1rem;
  color: white;
  padding: 3rem;
`;

export const MoviesList = styled.ul`
`;

export const SelectWrapper = styled.div`
  border: 1px solid #77abfc;
  border-radius: 3px;
  display: flex;
  overflow: hidden;
`;

export const Select = styled.select`
  background: white;
  background-image: none;
  border: none;
  box-shadow: none;
  color: #77abfc;
  font-size: .7rem;
  height: 100%;
  padding: 5px 8px;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 1280px;
  margin: 0 auto;
  max-width: 1440px;
  padding: 10rem 0 5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem 27rem 1rem 0 ;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 50%;
  padding: 0 1rem;
`;

export const Card = styled.div`
  background:  linear-gradient(to right, rgba(193,220,245,1) 0%, rgba(15,109,209,1) 100%);
  opacity: 0.8;
  border-radius: .5rem;
  box-shadow: 0 3px 7px -1px rgba(#000, .1);
  display: flex;
  flex-direction: row;
  line-height: 1.4em;
  height: 14rem;
  margin: 1rem auto;
  margin-bottom: 1.6%;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 10rem;
  height: auto;
  object-fit: cover;
  object-position: center;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow: hidden;
`;

export const CardHeader = styled.h3`
  font-weight: bold;
  margin: 1rem 0;
  font-size: 1.5rem;
`;

export const CardText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  height: 100%;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardFooter = styled.h6`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
`;

export const SearchWrapper = styled.div`
  background: white;
  left: 0;
  padding: 0 1rem;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
`;

export const MoviePoster = styled.img`
  max-height: 40%;
  width: 100%;
  object-fit: cover;

  @media (min-width: 1440px) {
    max-height: 60%;
  }
`;

export const MovieWrapper = styled.div.attrs(props => ({
  src: props.src || "/favicon.ico",
}))`
  position: fixed;
  transition: translate cubic-bezier(0.07, 0.67, 0.91, 0.56) 3s .5s;
  background: linear-gradient(to bottom, rgba(212,228,239,0.76) 0%, rgba(152,191,247,0.75) 65%, rgba(119,171,252,0.75) 100%), url(${props => props.src}) no-repeat center / cover;
  width: 35%;
  overflow: auto;
  right: -40rem;
  top: 0;
  z-index: 11;
`;

export const Movie = styled.div`
  align-items: center;
  border: 1px solid #92bcfd;
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  height: 100vh;
  opacity: .8;
  padding: 1rem;
  position: relative;
`;

export const MovieText = styled.div`
  background: white;
  border-radius: 2rem;
  padding: 2rem 1rem 1rem;
  margin: -2rem 0 2rem;
  width: 100%;
  z-index: -1;
`;

export const MovieTextInfo = styled.h4`
  background: white;
  font-weight: bold;
  padding: 1rem;
  margin: 0;
  width: 100%;
`;

export const MovieHeader = styled.div`
  background: white;
  border-radius: 2rem;
  font-size: 2rem;
  font-weight: bold;
  display: block;
  text-align: center;
  padding: 2rem 1rem 3rem;
  margin-bottom: -2rem;
  width: 100%;
`;

export const Radio = styled.label`
  margin: .5rem 0 .5rem 1rem;
  display: block;
  cursor: pointer;

  input {
    display: none;
      & + span {
        display: block;
        height: .8rem;
        line-height: .8rem;
        padding-left: .8rem;
        position: relative;
        &:not(:empty) {
            padding-left: 30px;
        }
        &:before,
        &:after {
            content: '';
            width: 1rem;
            height: 1rem;
            display: block;
            border-radius: 50%;
            left: 0;
            top: 0;
            position: absolute;
          }
          &:before {
              background: #77abfc;
              transition: background .2s ease, transform .4s cubic-bezier(.175, .885, .32, 2);
          }
          &:after {
              background: #fff;
              transform: scale(.78);
              transition: transform .6s cubic-bezier(.175, .885, .32, 1.4);
          }
      }
      &:checked + span {
          &:before {
              transform: scale(1.04);
              background: #5D9BFB;
          }
          &:after {
              transform: scale(.4);
              transition: transform .3s ease;
          }
      }
  }
  &:hover {
      input {
          & + span {
              &:before {
                  transform: scale(.92);
              }
              &:after {
                  transform: scale(.74);
              }
          }
          &:checked + span {
              &:after {
                  transform: scale(.4);
              }
          }
      }
  }
`;
