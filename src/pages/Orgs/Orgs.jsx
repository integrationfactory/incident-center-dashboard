import React from 'react';
import Layout from "../../components/Layout";
import {FaPlus, FaTrashAlt, FaEdit, FaUsers, FaBuilding, FaExclamationTriangle} from 'react-icons/fa';

import {
  ButtonsContainer,
  SingleButtonContainer,
  Button,
  ButtonText,
  OrganizationsContainer,
  OrganizationContainer,
  Organization,
  OrganizationText,
  ViewOrganizationContainer,
  ViewOrganizationButton,
  ButtonOrganization,
  ButtonOrganizationText,
  FilterContainer,
  Filter,
  FilterText,
  EditOrganizationButtonContainer,
  LogoContainer,
  SingleInfoContainer,
  Info,
  Logo,
  InfoText
} from "./Orgs.styles";
import { MainContentContainer, MainContentDisplay } from "../../core-ui/Navigation.styles";
import {Routes, Route, useNavigate} from 'react-router-dom';


const Orgs = () => {
  const navigate = useNavigate();
  const navigateNew = () => {
    // 👇️ navigate to /contacts
    navigate('/createorgs');
  };
  const navigateEdit = () => {
    // 👇️ navigate to /contacts
    navigate('/editorgs');
  };
  const navigateView = () => {
    // 👇️ navigate to /contacts
    navigate('/vieworgs');
  };
  const deleteOrganization = () => {
    console.log("Delete Organization")
  }

  const editOrganization = () => {
    console.log("Edit Organization")
  }
  
  const newOrganizatrion = () => {
    console.log("New Organization")
  }

  const viewOrganization = () => {
    console.log("View Organization")
  }

  const searchOrganization = () => {
    console.log("Search Organization")
  }

  return (
    <Layout title="SISAP-CERT">
      <MainContentContainer>

        <ButtonsContainer >
          <SingleButtonContainer className="col-sm-4">
            <Button color="#C10000" onClick={navigateNew}>
              <ButtonText> 
                <FaPlus/> Add New Organization
              </ButtonText>
            </Button>
          </SingleButtonContainer>
        </ButtonsContainer>


        <MainContentDisplay>

          <FilterContainer >
            <FilterText>Organization Search</FilterText>
            <input Filter className="col-sm-4"></input>
          </FilterContainer>

          <OrganizationsContainer>

            <OrganizationContainer>

              <Organization color="#03A9F5">

                <EditOrganizationButtonContainer className="row">
                  <ButtonOrganization  onClick={deleteOrganization}>
                    <ButtonOrganizationText>
                      <FaTrashAlt/>  
                    </ButtonOrganizationText>
                  </ButtonOrganization >
                  <ButtonOrganization onClick={navigateEdit}>
                    <ButtonOrganizationText>
                      <FaEdit/>  
                    </ButtonOrganizationText>
                  </ButtonOrganization>
                </EditOrganizationButtonContainer >
                <LogoContainer>
                  <Logo>
                    <FaBuilding/>
                  </Logo>
                </LogoContainer>
                <SingleInfoContainer className="row">
                  <Info>
                    <InfoText>
                      13 <FaExclamationTriangle/>
                    </InfoText>
                  </Info>
                  <Info>
                    <InfoText>
                      13 <FaUsers/>
                    </InfoText>
                  </Info>
                </SingleInfoContainer>
                
                <OrganizationText>Organization</OrganizationText>
                <ViewOrganizationContainer >
                  <ViewOrganizationButton color="#03A9F5" onClick={navigateView}>
                      <ButtonText>View Organization</ButtonText>
                  </ViewOrganizationButton>

                </ViewOrganizationContainer>
                

              </Organization>
              

            </OrganizationContainer>

          </OrganizationsContainer>

        </MainContentDisplay>

      </MainContentContainer>
    </Layout>
  )
}

export default Orgs