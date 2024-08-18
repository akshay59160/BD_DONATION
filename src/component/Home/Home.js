import { Link } from "react-router-dom";

import "./Home.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Image,
} from "@chakra-ui/react";

import bag1 from "../Blood/assetss/Component10.svg";
import bag2 from "../Blood/assetss/Component11.svg";
import bag3 from "../Blood/assetss/Component12.svg";
import baginfo from "../Blood/assetss/Groupinfo.svg";
import bagreg from "../Blood/assetss/reg.svg";
import bagdon from "../Blood/assetss/donation.svg";

const Home = () => {
  return (
    <>
      <div className="first">
        <div className="banner">
          <h3 className="slogan">Give Life To Someone</h3>
          <div className="title_div">
            <h1 className="title">
              Your Blood, Their Lifeline <br />
              Donate and Impact Lives
            </h1>
          </div>
          <Link to={"/donate"}>
            <Button colorScheme="red">Donate Now</Button>
          </Link>
        </div>
      </div>
      <div className="info">
        <div className="info_con">
          <div className="info_p">
            <p>
              It is estimated that over
              <span style={{ color: `red` }}>12,000</span> persons die every day
              in India due to <br />
              <span style={{ color: `red` }}>non-availability</span>
              of blood. Unfortunately, in our country, many people who need{" "}
              <br />
              transfusions do not have{" "}
              <span style={{ color: `red` }}>timely access</span> to safe blood.
            </p>
          </div>

          <img src={baginfo} className="imageinfo" alt="" />
        </div>
      </div>
      <div className="cards_sec">
        <div className="card">
          <Card align="center">
            <CardHeader>
              <Heading size="md"> Customer dashboard</Heading>
            </CardHeader>

            <CardBody align="center">
              <Image
                className="bag1"
                objectFit="cover"
                src={bag1}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
            </CardBody>
            <CardFooter>
              <Link to={"/Blood"}>
                <Button colorScheme="red">Get Blood</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="card">
          <Card align="center">
            <CardHeader>
              <Heading size="md"> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Image
                className="bag1"
                src={bag2}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
            </CardBody>
            <CardFooter>
              <Link to={"/Registration"}>
                <Button colorScheme="red">Donate</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="card card3">
          <Card align="center">
            <CardHeader>
              <Heading size="md"> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Image
                className="bag1"
                src={bag3}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
            </CardBody>
            <CardFooter>
              <Link to={"/CampResult"}>
                <Button colorScheme="red">Nearest Banks</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="register1">
        <img src={bagreg} className="regimg" alt="" />
        <div className="reginfo">
          <h1 className="get">Register Yourself For Emergencies</h1>
          <p className="getp">
            You can fill up that in what location and between which dates you
            are available <br />
            and willing to donate blood and get direct call from the person’s
            end <br />
            which urgently needs blood in your specified area.
          </p>
          <Link to={"/BloodResult"}>
            <Button
              colorScheme="red"
              background="#ff0000"
              size="sm"
              className="butttt"
            >
              Register For Emergencies
            </Button>
          </Link>
        </div>
      </div>
      <div className="register2">
        <div className="reginfo2">
          <h1 className="get"> Blood Donation Camps Near You</h1>
          <p className="getp ">
            You can fill up that in what location and between which dates you
            are available <br />
            and willing to donate blood and get direct call from the person’s
            end <br />
            which urgently needs blood in your specified area.
          </p>
          <Link to={"/CampRegistrations"}>
            <Button colorScheme="red" size="sm" className="butttt">
              Blood Camps
            </Button>
          </Link>
        </div>
        <img src={bagdon} className="regimg2" alt="" />
      </div>
      <div className="register3"></div>
      {/* footer*/}
    </>
  );
};

export default Home;
