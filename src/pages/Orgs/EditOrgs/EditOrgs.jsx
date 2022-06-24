import React from 'react';
import Layout from '../../../components/Layout';
import { MainContentContainer, MainContentDisplay } from "../../../core-ui/Navigation.styles";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {
  TitleContainer,
  TitleText,
  MainContainer,
  InfoContainer,
  OrganizationInfoContainer,
  TruestarContainer,
  ButtonContainer,
  BlockContainer,
  FieldContainer,
  FieldText,
  SingleButtonContainer,
  Button,
  ButtonText
} from "../CreateOrgs/CreateOrgs.styles";

const EditOrgs = () => {
const navigate = useNavigate();
const nagivateOrgs = () => {
    // 👇️ navigate to /contacts
    navigate('/orgs');
};

  return (
    <Layout title="SISAP-CERT">
      <MainContentContainer>
      <TitleContainer>
            <TitleText>Edit Organization</TitleText>
        </TitleContainer>

        <MainContentDisplay>
            <MainContainer>
                <InfoContainer className="row">
                    <OrganizationInfoContainer >
                        <BlockContainer className='row'>
                            <FieldContainer className='row'>
                                <FieldText>Organization Name *</FieldText>
                                <input TextField ></input>
                            </FieldContainer>
                            <FieldContainer className='row'>
                                <FieldText>Address *</FieldText>
                                <input TextField ></input>
                            </FieldContainer>
                        </BlockContainer>
                        <BlockContainer className='row'>
                            <FieldContainer className='row'>
                                <FieldText>Email *</FieldText>
                                <input TextField ></input>
                            </FieldContainer>
                            <FieldContainer className='row'>
                                <FieldText>Phone Numbner *</FieldText>
                                <input TextField ></input>
                            </FieldContainer>
                        </BlockContainer>
                    </OrganizationInfoContainer>
                    <TruestarContainer>
                        <FieldText>True Star Integration</FieldText>
                    </TruestarContainer>
                    <OrganizationInfoContainer>
                        <BlockContainer className='row'>
                            <FieldContainer className='row'>
                                <FieldText>API Key</FieldText>
                                <input TextField ></input>
                            </FieldContainer>
                            <FieldContainer className='row'>
                                <FieldText>API Secret</FieldText>
                                <input TextField ></input>
                            </FieldContainer>
                        </BlockContainer>
                        <BlockContainer className='row'>
                            <FieldContainer className='row'>
                                <FieldText>Status</FieldText>
                            </FieldContainer>
                        </BlockContainer>
                    </OrganizationInfoContainer>
                    <ButtonContainer>
                        <SingleButtonContainer>
                            <Button color="#C10000" onClick={nagivateOrgs}>
                                <ButtonText>  Cancel  </ButtonText>
                            </Button>
                        </SingleButtonContainer>
                        <SingleButtonContainer>
                            <Button color="#217819" onClick={nagivateOrgs}>
                                <ButtonText>  Edit Organization  </ButtonText>
                            </Button>
                        </SingleButtonContainer>
                    </ButtonContainer>
                </InfoContainer>
            </MainContainer>
        </MainContentDisplay>

      </MainContentContainer>
    </Layout>
  )
}

export default EditOrgs