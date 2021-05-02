import styled from 'styled-components';

// Carousel de imagens
const Carousel = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  margin-top: 25px;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

export default function Carousel({imgArray, ...props}){
  var swiper1 = new Swiper('.swiper1', {
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },
    loop:true
  });


    return (
      <>
        <div className="swiper-container swiper1">
          <div className="swiper-wrapper">
          {imgArray.map((img) => (
            <div className="swiper-slide"> <img src= {img}></img></div>
            ))}

          </div>
          <div className="swiper-pagination swiper-pagination1"></div>
        </div>
      </>
    );
}