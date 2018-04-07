import React from 'react';
import { BioStyle, HomeStyle } from './Styles';

// const kinnanSnowImgSrc = 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/26994021_10157030665366729_2062782440780858684_n.jpg?_nc_cat=0&oh=2a7cdf083e37b5c2d070ed514e95e0ae&oe=5B72708C';
// const kinnanProfileImg = 'https://lh3.googleusercontent.com/-lqtrLWK9aY-I5sAr6t6LW6B2k6M8XKKxmmjRxzVvYJ1kgaXGERB4ROEB6uRivnWr2MRYsnV90xJOLu3Ia2Jw8Nd0_PwbZ31cJIGjV-y6HW1_D27rQu_NwlxxHq2srN2arqHb6l0rf15-KNHhlCEyc5VbaCBNhMiMYcU96pnpI59tC2RPS-SjO9Or3YvhagkvoOwaIOF9L6HXCb6B7pkH_I3N43DJfuJ5Qt2OsO2WnXJuy9j2EQCpLraodJnvJ8lmPU3vTQXFlGJy22q8PxyR9kN-evOnFFPOTKywoZujADFBJx1awS2Pv91bcy4K_8dWiwJiZ1wazauFH1Gh_2EWOCep8vmUZwTMUNzWuutsWDBUUNsTvqORmFIQ8yEDnsrdGJDrCGmwZFVipI2JxKldufuNANhuPk_baT2crEqFId4w9qNZ29_N0cJWnRBP7R7X3ljnIvhM_xKHPoiGpa3vH3f28v7POHesVdeH_KbB5A1L7S7c2zIWeW-pxbKI-cxhiV62bW58aThN5tYshjrWvlObzLFeWXA08dNYw-7veXHPLPrJ4EFoQr9DUnQfocRZdy2c8W4Z0KrVXVHAnwLkoBv0epwqkOgIkyoTJA=w528-h548-no';
// const bitmojiHi = 'https://lh3.googleusercontent.com/5fzYjW91J6Ivt8YdfFc-ZyGtDh-ODau59IoOGcZ1fDRySFeLXCRaSuYe0arp3i4z8nttHGJ4Zqo3z2raS4mZdg0342OuBKS0irvtqalSwp_1k9xEsDCtMN7F1PBTkilmFkXZX1J4Ssv2CkiI75Vj4LrPK3AbuCJX5xkbCB04gDWLTdjFR1nmV5mp6jNXE5i9aKU62J4smEq_r6zgW1c1KbyTikwMAztLbw8WVxZ7cA0SFqwjDfgP0NKqw48RMh4ShrJiceV2cPzMO_-OLTyygKoUEXuvivTpEuh2aH4_ZATGt5LphfG_qqLjZ1Ou8gdes_yR-mDbgb51XUrzIuGKksAI3FBKCChpt92DdYZ4M6-gvAelOw3riyHbQckmq_TBBoSdzogrWEhhMEvhw1sZWj1FfYQ7SuYHQXuCcAH7UlQrVK85rJ699qVI-yAdRsoDEpIlONiGkaGobhour0YBl-V8xexu6n8eiJtXEVPDh8JoTREy2i8zOj3QqaUv8-wDuXG96uTL9OagTAAJSaiz7HhpksQQJFJHwb_KowBKpMXGI6MZoUfm2IZSjGkR02G92C0bkhG4Qwqw8Klr8sd3dOleQLkhvdT_jnB3PIo=s398-no';
const kinnanFilteredImg = 'https://lh3.googleusercontent.com/py65pQqDlPjStj-gdkX0OYtjekheIQFV_wJF7_qMeSEz-335y7EwZt-qqa6yrHqAob_HQSjCE8GBIWVMmVVoX8SM1czfcBALUOqr85UJfGcp9DYuHFAdP4Ek30JT4DvxAtyy80KRWaovtM5chgbQCmoaSaLWyCHUulV2YOPqyGpUNm5Z3mtrFRPQEJXUOCFj5DoIvZsd5_p1tCbhKHeZWd9MOpGYTxMQiJJl1xw8JouMoM7lQ6n1ZXTwatyTF8TmiNVW1qXp0skYkoS_O1xZkkGhqTX2a_SJLHiP51n8H20oqhPfyaFNruI5LTVfUyYJIZlDsOSr58n1uisXtS1ROKyH3or91hdUPdKgNGiJJvomj6Ge_F7dNyIHj-JKffK91ie24dct8l08_HxQfjt3zpZ03xkvfqyums5cNDZ-C11Nz-k6NRg4oRMOYsSBnNkUWF-P4abfzR2jH2wrR0qIq70UNUs-xeD8b3bigPoP0TmnjetqvdEb1P-0WvE8adR81eRiedXkqgTJaGMkpcUCMFqKz7TgXaJql-6cUGFdsXyU8eXpG6YN230sXu93bzLsHk0Dj4EXlK1OBJFJBr0Q80tO1hXz02ocYQwvoh8=w453-h481-no'

class Home extends React.Component {
  render() {
    return (
      <HomeStyle>
        <div>
          {/* <img className='profile' src={kinnanSnowImgSrc} /> */}
          {/* <img className='profile' src={kinnanProfileImg} /> */}
          <div className='row'>
            <img src={kinnanFilteredImg} alt='profile of Kinnan Kwok'/>
            <div>
              <h1> Kinnan Kwok </h1>
              <h2> Software Developer </h2>
            </div>
          </div>
          {/* <img className='profile' src={bitmojiHi} /> */}
          <BioStyle>
            <p>
              I am a computer science student at SFU and a software developer at TELUS digital.
            </p>
            <p>
              Some of my projects include  e-commerce applications such as
              checkout and fullfilment at TELUS.com.
            </p>
            <p>
              I also enjoy talking about mathematics and finding proofs in logic puzzles
            </p>
            <p>
              Outside of work, I enjoy hiking, climbing, and snowboarding.
              Here's some of the music I listen to.
              <a href="songs" >Songs</a>
            </p>
          </BioStyle>
        </div>
      </HomeStyle>
    );
  }
}

export default Home;
