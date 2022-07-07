import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import { MainContentContainer, MainContentDisplay } from "../../../core-ui/Navigation.styles";
import { useNavigate} from 'react-router-dom';
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
  } from "./CreateOrgs.styles";
import {createNewOrganization} from "../../../services/API"
import Swal from 'sweetalert2';

const CreateOrgs = () => {
    const navigate = useNavigate();

    const [companyRelated, setCompanyRelated] = useState("");
    const [relatedCompanies, setRelatedCompanies] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [trustartIntegration, setTrustartIntegration] = useState("");
    const [apiKey, setApiKey] = useState("");
    const [apiSecret, setApiSecret] = useState("");
    const [isActive, setIsActive] = useState("");

    const createOrg = () => {
    const data={
        company_related: "1",
        related_companies: [
            [
                "1"
            ]
        ],
        email: email,
        address: address,
        phone_number: phoneNumber,
        trustart_integration: false,
        api_key: apiKey,
        api_secret: apiSecret,
        is_active: true
    }
    createNewOrganization(data)
    // navigate to /contacts
    navigate('/orgs');
    Swal.fire({
        icon: 'success',
        title: 'Organization has been Created',
        showConfirmButton: false,
        timer: 1500
      })
    console.log(data)
    };

    const cancel = () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, cancel it!'
        }).then((result) => {
        if (result.isConfirmed) {
            navigate('/orgs')
        }
        })
    }


  return (
    <Layout title="SISAP-CERT">
      <MainContentContainer>

        <TitleContainer>
            <TitleText>New Organization</TitleText>
        </TitleContainer>

        <MainContentDisplay>
            <MainContainer>
                <InfoContainer className="row">
                    <OrganizationInfoContainer >
                        <BlockContainer className='row'>
                            <FieldContainer className='row'>
                                <FieldText>Organization Name *</FieldText>
                                <input />
                            </FieldContainer>
                            <FieldContainer className='row'>
                                <FieldText>Address *</FieldText>
                                <input  
                                    type="text" 
                                    id="address" 
                                    onChange={(e) => setAddress(e.target.value)} 
                                    value={address} 
                                    required
                                />
                            </FieldContainer>
                        </BlockContainer>
                        <BlockContainer className='row'>
                            <FieldContainer className='row'>
                                <FieldText>Email *</FieldText>
                                <input  
                                    type="text" 
                                    id="email" 
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email} 
                                    required
                                />
                            </FieldContainer>
                            <FieldContainer className='row'>
                                <FieldText>Phone Numbner *</FieldText>
                                <input  
                                    type="text" 
                                    id="phonenumber" 
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    value={phoneNumber} 
                                    required
                                />
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
                                <input  
                                    type="text" 
                                    id="apikey" 
                                    onChange={(e) => setApiKey(e.target.value)}
                                    value={apiKey} 
                                    required
                                />
                            </FieldContainer>
                            <FieldContainer className='row'>
                                <FieldText>API Secret</FieldText>
                                <input  
                                    type="text" 
                                    id="apisecret" 
                                    onChange={(e) => setApiSecret(e.target.value)}
                                    value={apiSecret} 
                                    required
                                />
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
                            <Button color="#C10000" onClick={cancel}>
                                <ButtonText>  Cancel  </ButtonText>
                            </Button>
                        </SingleButtonContainer>
                        <SingleButtonContainer>
                            <Button color="#217819" onClick={createOrg}>
                                <ButtonText>  Add Organization  </ButtonText>
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

export default CreateOrgs