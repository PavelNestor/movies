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
  overflow-y: scroll;
`;

export const SelectWrapper = styled.div`
  border: 1px solid #77abfc;
  border-radius: 3px;
  display: flex;
  overflow: hidden;
`;

export const Select = styled.select`
  color: #77abfc;
  border: none;
  box-shadow: none;
  background: white;
  background-image: none;
  font-size: .7rem;
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
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 1rem 0;
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
  max-height: 100vh;
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
`;

export const MoviePoster = styled.img`
  max-height: 400px;
`;

export const MovieWrapper = styled.div`
  position: relative;
  transform: translateY(${props => props.scroll}px);
  transition: .3s;
  transition-delay: .2s;
`;

export const Movie = styled.div.attrs(props => ({
  src: props.src || "/favicon.ico",
  scroll: props.scroll || 0,
}))`
  align-items: center;
  border: 1px solid #92bcfd;
  border-radius: 6px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  flex-basis: 50%;
  opacity: .8;
  padding: 3rem;
  position: relative;
  
  &::after {
    content: "";
    background: url(${props => props.src}) no-repeat center / cover;
    opacity: 0.3;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
}
`;

export const Radio = styled.label`
  margin: 0.5rem 0px;
  display: block;
  cursor: pointer;
  flex-basis: 14rem;

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
