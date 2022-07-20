import React, { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import Swal from 'sweetalert2';
import { MainContentContainer, MainContentDisplay } from "../../../core-ui/Navigation.styles";
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
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
import {editOrganization, viewOrganization} from "../../../services/API"
import { FaFireExtinguisher } from 'react-icons/fa';

const EditOrgs = (props) => {
const navigate = useNavigate();
const location = useLocation();
const axios = require("axios").default;

const [companyRelated, setCompanyRelated] = useState("");
const [relatedCompanies, setRelatedCompanies] = useState("");
const [email, setEmail] = useState("");
const [address, setAddress] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [trustartIntegration, setTrustartIntegration] = useState(false)
const [apiKey, setApiKey] = useState("");
const [apiSecret, setApiSecret] = useState("");
const [isActive, setIsActive] = useState(false)
const { oid } = location.state;

const updateOrg = () => {
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
        trustart_integration: true,
        api_key: apiKey,
        api_secret: apiSecret,
        is_active: true
    }
    editOrganization(oid,data)
    // navigate to /contacts
    // navigate('/orgs');
    Swal.fire({
        icon: 'success',
        title: 'Organization has been updated',
        showConfirmButton: false,
        timer: 1500
      })
    navigate('/orgs');
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

  useEffect(() => {
    const fetchData = async () => {
        axios
        .get("http://127.0.0.1:8000/structure/company_details/"+oid+"/")
        .then(function (response){
            console.log("list of organizations: ", response.data.data.address)
            setAddress(response.data.data.address)
            setApiKey(response.data.data.api_key)
            setApiSecret(response.data.data.api_secret)
            setEmail(response.data.data.email)
            setIsActive(response.data.data.is_active)
            setPhoneNumber(response.data.data.phone_number)
            setTrustartIntegration(response.data.data.trustart_integration)
            setRelatedCompanies(response.data.data.related_companies)
            setCompanyRelated(response.data.data.company_related)
        })   
    };

    fetchData();
    }, []);
    
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
                                <input/>
                            </FieldContainer>
                            <FieldContainer className='row'>
                                <FieldText>Address *</FieldText>
                                <input  
                                    type="text" 
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </FieldContainer>
                            <FieldContainer className='row'>
                                <FieldText>Phone Numbner *</FieldText>
                                <input  
                                    type="text" 
                                    id="phonenumber" 
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
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
                                    value={apiKey}
                                    onChange={(e) => setApiKey(e.target.value)}
                                    required
                                />
                            </FieldContainer>
                            <FieldContainer className='row'>
                                <FieldText>API Secret</FieldText>
                                <input  
                                    type="text" 
                                    id="apisecret" 
                                    value={apiSecret}
                                    onChange={(e) => setApiSecret(e.target.value)}
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
                            <Button color="#217819" onClick={updateOrg}>
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