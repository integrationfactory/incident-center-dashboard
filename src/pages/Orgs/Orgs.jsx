import React, { useState, useEffect }  from 'react';
import Layout from "../../components/Layout";
import { FaPlus, FaTrashAlt, FaEdit, FaUsers, FaBuilding, FaExclamationTriangle } from 'react-icons/fa';
import Swal from 'sweetalert2';
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
  FilterText,
  EditOrganizationButtonContainer,
  LogoContainer,
  SingleInfoContainer,
  Info,
  Logo,
  InfoText
} from "./Orgs.styles";
import { MainContentContainer, MainContentDisplay } from "../../core-ui/Navigation.styles";
import {getOrganizations, deleteOrganization} from "../../services/API"
import {useNavigate} from 'react-router-dom';


const Orgs = () => {
  const axios = require("axios").default;
  const navigate = useNavigate();
  const [orgsList, setOrgsList] = useState([]);
  const [orgListD, setOrgsListD] = useState([]);

  const navigateNew = () => {
    // 👇️ navigate to /contacts
    navigate('/createorgs');
  };

  const navigateEdit = (orgId) => {
    // 👇️ navigate to /contacts
    navigate("/editorgs", {
      state: { oid: orgId},
    });
  };

  const navigateView = (orgID) => {
    // 👇️ navigate to /contacts
    navigate('/vieworgs', { state: { oid: orgID}});
  };

  const deleteOrganizationa = (orgId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
          console.log(orgId)
          // deleteOrganization()
          navigate('/orgs')
      }
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      axios
      .get("http://127.0.0.1:8000/structure/company_details/")
      .then(function (response){
        setOrgsList(response.data)
      })
    };

    fetchData();
  },[]);


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
            {orgsList.map((org)=>{
              return (
                  <Organization color="#03A9F5">

                    <EditOrganizationButtonContainer className="row">

                      <ButtonOrganization  onClick={() => deleteOrganizationa(org.id)}>
                        <ButtonOrganizationText>
                          <FaTrashAlt/>  
                        </ButtonOrganizationText>
                      </ButtonOrganization >

                      <ButtonOrganization onClick={() => navigateEdit(org.id)}>
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
                    
                    <OrganizationText>{org.id}</OrganizationText>
                    
                    <ViewOrganizationContainer >
                      <ViewOrganizationButton color="#03A9F5" onClick={() => navigateView(org.id)}>
                          <ButtonText>View Organization</ButtonText>
                      </ViewOrganizationButton>
                    </ViewOrganizationContainer>

                  </Organization>

                
                )
              })
            }
            
            </OrganizationContainer>
          </OrganizationsContainer>

        </MainContentDisplay>

      </MainContentContainer>
    </Layout>
  )
}

export default Orgs