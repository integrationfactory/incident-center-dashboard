import React from 'react';
import Layout from '../../../components/Layout';
import { MainContentContainer, MainContentDisplay } from "../../../core-ui/Navigation.styles";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {
    ButtonsContainer,
    SingleButtonContainer,
    Button,
    ButtonText
  } from "../CreateOrgs/CreateOrgs";

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
          View Organizations 
        </MainContentDisplay>
      </MainContentContainer>
    </Layout>
  )
}

export default ViewOrgs