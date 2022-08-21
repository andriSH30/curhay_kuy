import { ReactComponent as HeroImage } from "../../assets/undraw_conversation_re_c26v.svg";

import CustomButton from "../../components/button/CustomButton.component";

import "./Home.style.scss";

const Home = () => {
  return (
    <>
      <section className="hero-container">
        <div className="left">
          <div>
            <div className="title">
              <span>Curhat</span> Santuy
              <br></br>yaa di <span>curhat kuy!</span>
            </div>
            <div className="text-description">
              Platform curhat online milenial yang zaman now.
            </div>
            <CustomButton
              ButtonText="Join Kuyy"
              ButtonType="primaryInverse"
              ButtonSize="large"
            />
          </div>
        </div>
        <div className="right">
          <HeroImage className="hero-image" />
        </div>
      </section>
    </>
  );
};

export default Home;
