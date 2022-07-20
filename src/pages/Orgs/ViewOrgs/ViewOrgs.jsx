import React, { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import { FaTrashAlt, FaEdit, FaArrowLeft} from 'react-icons/fa';
import { MainContentContainer, MainContentDisplay } from "../../../core-ui/Navigation.styles";
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import Swal from 'sweetalert2';
import {
    ButtonsContainer,
    SingleButtonContainer,
    Button,
    Icon,
    OrganizationContainer,
    TitleContainer,
    TitleText,
    TableContainer,
    DataContainers,
    DepartmentContainer,
    DepartmentText,
    InfoContainer,
    Info,
    InfoText,
    DataContainer
  } from "./ViewOrgs.styles";



const ViewOrgs = (props) => {
  const axios = require("axios").default;
  const navigate = useNavigate();
  const location = useLocation();

  const [departments, setDepartments] = useState([]);
  const [victims, setVictims] = useState([]);
  const [organization, setOrganization] = useState({});
  const { oid } = location.state;

  const nagivateHome = () => {
    // 👇️ navigate to /contacts
    navigate('/orgs');
  };

  const navigateEdit = (orgId) => {
    // 👇️ navigate to /contacts
    navigate("/editorgs", {
      state: { oid: orgId},
    });
  };

  const deleteOrganization = (orgId) => {
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
          // deleteOrganization()
          navigate('/orgs')
      }
    })
  }


  useEffect(() => {
    const fetchData = async () => {
      axios
      .get("http://127.0.0.1:8000/structure/departments/")
      .then(function (response){
        console.log(response)
        setDepartments(response)
      })
      axios
      .get("http://127.0.0.1:8000/structure/company_details/"+oid+"/")
      .then(function(response){
        setOrganization(response.data)
      })
    };

    fetchData();
  },[]);
  

  return (
    <Layout title="SISAP-CERT">
      <MainContentContainer>
        <MainContentDisplay>
          <ButtonsContainer>
            <SingleButtonContainer justify="flex-start">
              <Button color="black" align="left" onClick={nagivateHome}>
                <Icon>
                  <FaArrowLeft/>
                </Icon>
              </Button>
            </SingleButtonContainer>
            <SingleButtonContainer justify="flex-end">
              <Button color="black" align="right" onClick={navigateEdit}>
                <Icon>
                  <FaEdit/>
                </Icon>
                
              </Button>
              <Button color="#C10000" align="left" onClick={deleteOrganization}>
                <Icon>
                  <FaTrashAlt/>
                </Icon>
              </Button>
            </SingleButtonContainer>
          </ButtonsContainer>
          <OrganizationContainer className="row">

            <TableContainer className="row">
              <TitleContainer>
                <TitleText> Departments </TitleText>
              </TitleContainer>
              
              <DepartmentContainer>
                {departments.map((department)=>{
                return (<DepartmentText> {department.name} </DepartmentText>)
                  })
                }
              </DepartmentContainer>
            </TableContainer>


            <TableContainer>
              <TitleContainer>
                <TitleText> Victims </TitleText>
              </TitleContainer>
            </TableContainer>
            <InfoContainer className="row">
              <TitleContainer>
                <TitleText> Contact Info</TitleText>
              </TitleContainer>

              <DataContainers className="row">
                <DataContainer>
                  <Info>
                    <InfoText> Address: {organization.address}</InfoText>
                  </Info>
                  <Info>
                    <InfoText> Phone Number: {organization.phone_number}</InfoText>
                  </Info>
                </DataContainer>
                <DataContainer>
                  <Info>
                    <InfoText> Email: {organization.email}</InfoText>
                  </Info>
                  <Info>
                    <InfoText> Active: </InfoText>
                  </Info>
                </DataContainer>
              </DataContainers>
              
              
            </InfoContainer>
          </OrganizationContainer>
          
        </MainContentDisplay>
      </MainContentContainer>
    </Layout>
  )
}

export default ViewOrgs