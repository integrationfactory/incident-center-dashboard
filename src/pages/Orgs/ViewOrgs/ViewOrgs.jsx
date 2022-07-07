import React from 'react';
import Layout from '../../../components/Layout';
import { FaTrashAlt, FaEdit, FaArrowLeft} from 'react-icons/fa';
import { MainContentContainer, MainContentDisplay } from "../../../core-ui/Navigation.styles";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {
    ButtonsContainer,
    SingleButtonContainer,
    Button,
    Icon,
    OrganizationContainer,
    TitleContainer,
    TitleText,
    TableContainer,
    InfoContainer,
    Info,
    InfoText
  } from "./ViewOrgs.styles";



const ViewOrgs = () => {
const navigate = useNavigate();
  const nagivateHome = () => {
    // 👇️ navigate to /contacts
    navigate('/orgs');
  };

  return (
    <Layout title="SISAP-CERT">
      <MainContentContainer>
        <MainContentDisplay>
          <ButtonsContainer>
            <SingleButtonContainer justify="flex-start">
              <Button color="black" align="left">
                <Icon>
                  <FaArrowLeft/>
                </Icon>
              </Button>
            </SingleButtonContainer>
            <SingleButtonContainer justify="flex-end">
              <Button color="black" align="right">
                <Icon>
                  <FaEdit/>
                </Icon>
                
              </Button>
              <Button color="#C10000" align="left">
                <Icon>
                  <FaTrashAlt/>
                </Icon>
              </Button>
            </SingleButtonContainer>
          </ButtonsContainer>
          <OrganizationContainer className="row">
            <TableContainer>
              <TitleContainer>
                <TitleText> Departments </TitleText>
              </TitleContainer>
            </TableContainer>
            <TableContainer>
              <TitleContainer>
                <TitleText> Victims </TitleText>
              </TitleContainer>
            </TableContainer>
            <InfoContainer>
            <TitleContainer>
                <TitleText> Contact Info</TitleText>
              </TitleContainer>
              <Info>
                <InfoText> hello</InfoText>
              </Info>
            </InfoContainer>
          </OrganizationContainer>
          
        </MainContentDisplay>
      </MainContentContainer>
    </Layout>
  )
}

export default ViewOrgs