import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
 
const brandImages = [
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-TelemundoStud-18.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-06/Reversed-Universal-Pictures.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-06/Reversed-OlympicChannel.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-06/Reversed-CNBC_Intl.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-06/Reversed-UCP_NEW.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-UniTV.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-TeleXitos.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-Universal-BrandDev.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-Universal-Japan.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-06/Reversed-Universal-Kids.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-06/Reversed-Universal-Orlando.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-06/Reversed-Universal-Singapore.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-TelemundoStud-18.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-syfy2017.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-SportsNgn.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-06/Reversed-UniversalStudios_Hwd.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-Universo.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-UPHE.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-usa.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-oxygen17.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-NBCU-ots.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-NBCsports-Regional.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-NBCSports.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-NBCSN.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-NBCOly.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-NBCNews.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-NBCEntmt.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-hulu.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-msnbc17.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-hayu.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-GOLF.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-GolfNow.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-GlobalDistInt.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-Focus.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-fandango.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-06/Reversed-E_resized.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-Dreamworks.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-06/Reversed-COZI.PNG",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-cnbc.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-Bravo17.png",
    "https://www.nbcunicareers.com/_flysystem/s3-flysystem/2019-02/Reversed-bluprint.png"
]

export default class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={140}
        naturalSlideHeight={100}
        totalSlides={41}
        interval={1000}
        isPlaying={true}
        visibleSlides={5}
      >
        <Slider>
          <Slide index={0}><img src={brandImages[0]}/></Slide>
          <Slide index={1}><img src={brandImages[1]}/></Slide>
          <Slide index={2}><img src={brandImages[2]}/></Slide>
          <Slide index={3}><img src={brandImages[3]}/></Slide>
          <Slide index={4}><img src={brandImages[4]}/></Slide>
          <Slide index={5}><img src={brandImages[5]}/></Slide>
          <Slide index={6}><img src={brandImages[6]}/></Slide>
          <Slide index={7}><img src={brandImages[7]}/></Slide>
          <Slide index={8}><img src={brandImages[8]}/></Slide>
          <Slide index={9}><img src={brandImages[9]}/></Slide>
          <Slide index={10}><img src={brandImages[10]}/></Slide>
          <Slide index={11}><img src={brandImages[11]}/></Slide>
          <Slide index={12}><img src={brandImages[12]}/></Slide>
          <Slide index={13}><img src={brandImages[13]}/></Slide>
          <Slide index={14}><img src={brandImages[14]}/></Slide>
          <Slide index={15}><img src={brandImages[15]}/></Slide>
          <Slide index={16}><img src={brandImages[16]}/></Slide>
          <Slide index={17}><img src={brandImages[17]}/></Slide>
          <Slide index={18}><img src={brandImages[18]}/></Slide>
          <Slide index={19}><img src={brandImages[19]}/></Slide>
          <Slide index={20}><img src={brandImages[20]}/></Slide>
          <Slide index={21}><img src={brandImages[21]}/></Slide>
          <Slide index={22}><img src={brandImages[22]}/></Slide>
          <Slide index={23}><img src={brandImages[23]}/></Slide>
          <Slide index={24}><img src={brandImages[24]}/></Slide>
          <Slide index={25}><img src={brandImages[25]}/></Slide>
          <Slide index={26}><img src={brandImages[26]}/></Slide>
          <Slide index={27}><img src={brandImages[27]}/></Slide>
          <Slide index={28}><img src={brandImages[28]}/></Slide>
          <Slide index={29}><img src={brandImages[29]}/></Slide>
          <Slide index={30}><img src={brandImages[30]}/></Slide>
          <Slide index={31}><img src={brandImages[31]}/></Slide>
          <Slide index={32}><img src={brandImages[32]}/></Slide>
          <Slide index={33}><img src={brandImages[33]}/></Slide>
          <Slide index={34}><img src={brandImages[34]}/></Slide>
          <Slide index={35}><img src={brandImages[35]}/></Slide>
          <Slide index={36}><img src={brandImages[36]}/></Slide>
          <Slide index={37}><img src={brandImages[37]}/></Slide>
          <Slide index={38}><img src={brandImages[38]}/></Slide>
          <Slide index={39}><img src={brandImages[39]}/></Slide>
          <Slide index={40}><img src={brandImages[40]}/></Slide>
        </Slider>
        {/* <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext> */}
      </CarouselProvider>
      
    );
  }
}