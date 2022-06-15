import React from "react";
import Layout from "../../components/Layout";
import { FaAngleDown } from "react-icons/fa";
import {
  ButtonsContainer,
  SingleButtonContainer,
  Button,
  ButtonText,
  ButtonPopup,
  SinglePopupContainer,
  PopupsContainer,
  ButtonExportPopup
} from "./Incidents.styles";
import {
  MainContentContainer,
  MainContentDisplay,
} from "../../core-ui/Navigation.styles";
import WithMaterialSearch from "../../components/tables/MDBTable";

const Incidents = () => {
  const [activeOrgs, setActiveOrgs] = React.useState(false);
  const [activeExport, setActiveExport] = React.useState(false);

  const openOrgsPopup = () => {
    setActiveOrgs(!activeOrgs);
    setActiveExport(false);
  };
  const openExportPopup = () => {
    setActiveOrgs(false);
    setActiveExport(!activeExport);
  };
  console.log(activeExport)
  return (
    <>
      <Layout title="SISAP-CERT">
        <MainContentContainer>
          <ButtonsContainer className="row">
            <SingleButtonContainer className="col-sm-4">
              <Button color="#002C3E" onClick={openOrgsPopup}>
                <ButtonText>
                  Organization <FaAngleDown />
                </ButtonText>
              </Button>
            </SingleButtonContainer>
            <SingleButtonContainer className="col-sm-4">
              <Button color="#002C3E" onClick={openExportPopup}>
                <ButtonText>
                  Export <FaAngleDown />
                </ButtonText>
              </Button>
            </SingleButtonContainer>
            <SingleButtonContainer className="col-sm-4">
              <Button color="#C10000" >
                <ButtonText>+ Add New Report</ButtonText>
              </Button>
            </SingleButtonContainer>
          </ButtonsContainer>

          {activeOrgs && (
            <PopupsContainer className="row">
              <SinglePopupContainer className="col-sm-4">
                <ButtonPopup color="white">
                  <ButtonText>
                    <div>
                      <p>Verizon</p>
                    </div>
                    <div>
                      <p>TruStar</p>
                    </div>
                    <div>
                      <p>SISAP-CERT</p>
                    </div>
                  </ButtonText>
                </ButtonPopup>
              </SinglePopupContainer>
              <div className="col-sm-8"></div>
            </PopupsContainer>
          )}

         { activeExport &&
          <PopupsContainer className="row">
            <div className="col-sm-4"></div>
            <SinglePopupContainer className="col-sm-4">
              <ButtonExportPopup color="white">
                <ButtonText>
                  <div>
                    <p>Verizon JSON</p>
                  </div>
                  <div>
                    <p>CSV</p>
                  </div>
                </ButtonText>
              </ButtonExportPopup>
            </SinglePopupContainer>
            <div className="col-sm-4"></div>
          </PopupsContainer>}

          <MainContentDisplay>
            <WithMaterialSearch />
          </MainContentDisplay>
        </MainContentContainer>
      </Layout>
    </>
  );
};

export default Incidents;
