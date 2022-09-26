import { Div } from "components/DivBase";
import React, { useState, useEffect } from "react";
import HomeContainer, {
  HomeInfor,
  ProductMain,
  Element,
  TitleInfor,
  Description,
  TitleSub,
  PriceBig,
  BtnBuy,
  ImageMain,
  ContainerFooterHome,
} from "./styled";
import Img from "common/images";
import Media from "react-media";
import TypeElement from "./Components/TypeElement";
import OtherItem from "./Components/OtherItem";
import messages, { Title, Des } from "common/constants";
import firebase from "services/firebase";
const Home = () => {
  const [dataMain, setDataMain] = useState(null);
  const [dataOther, setDataOther] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  useEffect(() => {
    const get = async () => {
      const data = await firebase.FireStore.Product.getAllData();
      if (data?.length >0) {
        for (const key in data) {
          if (key.type === "1") {
            setDataMain(key);
            setIsLoad(false);
          }
        }
      }
      setIsLoad(false);
    };
    const getOther = async () => {
      const data = await firebase.FireStore.OtherHome.getAllData();
      if (data?.length >0) {

        setDataOther([...dataOther, data]);
      }
    };
    Promise.all([get(), getOther()]);
  }, []);
  const renderDesktop = () => {
    return (
      <HomeContainer>
        <HomeInfor>
          <TitleInfor>{Title.solugun}</TitleInfor>
          <Description>{Des.solugun}</Description>
          <PriceBig>
            {dataMain?.price && dataMain?.price} VNĐ
            {"120.000 VNĐ"}
          </PriceBig>
          <BtnBuy fontBold fontSize={20}>
            {messages.Button.buy}
          </BtnBuy>
        </HomeInfor>
        {!isLoad && (
          <ProductMain>
            <ImageMain
              src={dataMain?.img ? dataMain?.img : Img.home.logo}
              fullSize
            />
          </ProductMain>
        )}
        {!isLoad && (
          <Element>
            <TypeElement
              icon={Img.home.iconElement}
              title={Title.element}
              description={dataMain?.element ?? Des.element}
            />
            <TypeElement
              icon={Img.home.iconOrigin}
              title={Title.origin}
              description={dataMain?.origin ?? Des.origin}
            />
            <TypeElement
              icon=""
              title={Title.flavoring}
              description={dataMain?.flavoring ?? Des.flavoring}
            />
          </Element>
        )}

        <ContainerFooterHome>
          {dataOther?.length > 0 && <OtherItem listData={dataOther} />}
        </ContainerFooterHome>
      </HomeContainer>
    );
  };
  const renderMobile = () => {
    return (
      <HomeContainer>
        <HomeInfor>
          <TitleInfor>{Title.solugun}</TitleInfor>
          <Description>{Des.solugun}</Description>
          <PriceBig>
            {dataMain?.price && dataMain?.price} VNĐ
            {"120.000 VNĐ"}
          </PriceBig>
          <BtnBuy fontBold fontSize={20}>
            {messages.Button.buy}
          </BtnBuy>
        </HomeInfor>
        {!isLoad && (
          <ProductMain>
            <ImageMain
              src={dataMain?.img ? dataMain?.img : Img.home.logo}
              fullSize
            />
          </ProductMain>
        )}
        {!isLoad && (
          <Element>
            <TypeElement
              icon={Img.home.iconElement}
              title={Title.element}
              description={dataMain?.element ?? Des.element}
            />
            <TypeElement
              icon={Img.home.iconOrigin}
              title={Title.origin}
              description={dataMain?.origin ?? Des.origin}
            />
            <TypeElement
              icon={Img.home.iconSmell}
              title={Title.flavoring}
              description={dataMain?.flavoring ?? Des.flavoring}
            />
          </Element>
        )}

        <ContainerFooterHome>
          {dataOther?.length > 0 && <OtherItem listData={dataOther} />}
        </ContainerFooterHome>
      </HomeContainer>
    );
  };

  return (
    <Div>
      <Media query="(min-width:768px)">
        {(match) => {
          if (match) {
            return renderDesktop();
          }
          return renderMobile()
        }}
      </Media>
    </Div>
  );
};
export default Home;
