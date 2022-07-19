import React, { useState, useEffect }  from 'react';
import Layout from "../../../components/Layout";
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
} from "../Orgs.styles";
import { MainContentContainer, MainContentDisplay } from "../../../core-ui/Navigation.styles";
import {useNavigate} from 'react-router-dom';


const Departments = () => {
  const axios = require("axios").default;
  const navigate = useNavigate();
  const [departmentsList, setdepartmentsList] = useState([]);

  const navigateNew = () => {
    // 👇️ navigate to /contacts
    navigate('/createdepartment');
  };

  const navigateEdit = (deptId) => {
    // 👇️ navigate to /contacts
    navigate('/editdepartment', {
      state: { did: deptId},
    });
  };

  const navigateView = (deptId) => {
    // 👇️ navigate to /contacts
    navigate('/viewdepartment', {
      state: {did: deptId},
    });
  };

  const deleteOrganizationa = (deptId) => {
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
          console.log(deptId)
          // deleteOrganization()
          navigate('/orgs')
          console.log("Delete Organization")
          console.log(deptId)
      }
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      axios
      .get("https://incident-center-backend.herokuapp.com/structure/departments/")
      .then(function (response){
        console.log(response.data.sort())
        setdepartmentsList(response.data)
        response.data.forEach((department) => {
          console.log(department)
        })
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
                <FaPlus/> Add New Department
              </ButtonText>
            </Button>
          </SingleButtonContainer>
        </ButtonsContainer>


        <MainContentDisplay>

          <FilterContainer >
            <FilterText>Department Search</FilterText>
            <input Filter className="col-sm-4"></input>
          </FilterContainer>

          <OrganizationsContainer>
            <OrganizationContainer>
            {departmentsList.map((department)=>{
              return (
                

                  <Organization color="#03A9F5">

                    <EditOrganizationButtonContainer className="row">

                      <ButtonOrganization  onClick={() => deleteOrganizationa(department.id)}>
                        <ButtonOrganizationText>
                          <FaTrashAlt/>  
                        </ButtonOrganizationText>
                      </ButtonOrganization >

                      <ButtonOrganization onClick={() => navigateEdit(department.id)}>
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
                    
                    <OrganizationText>{department.name}</OrganizationText>
                    
                    <ViewOrganizationContainer >
                      <ViewOrganizationButton color="#03A9F5" onClick={() => navigateView(department.id)}>
                          <ButtonText>View Department</ButtonText>
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

export default Departments