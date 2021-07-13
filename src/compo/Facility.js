import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Facility = () => {
  const facilities = [
    {
      url: "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Devices.jpg",
      title: "Watch anywhere",
      description:
        "Enjoy from the web or with the Prime Video app on your phone, tablet, or select Smart TVs — on up to 3 devices at once.",
    },
    {
      url: "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Download_IN.jpg",
      title: "Download and go",
      description:
        "Watch offline on the Prime Video app when you download titles to your iPhone, iPad, Tablet, or Android device.",
    },
    {
      url: "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/300x300_Tile_1.png",
      title: "Data saver",
      description:
        "Control data usage while downloading and watching videos on select phones or tablets.",
    },
  ];
  return (
    <div className="facility">
      {facilities.map((elm, i) => {
        return (
          <>
            <div className="facilityItems">
              <Zoom left>
                <img src={elm.url} alt="" />
              </Zoom>
              <Fade top>
                <h1>{elm.title}</h1>
                <p>{elm.description}</p>
              </Fade>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Facility;
