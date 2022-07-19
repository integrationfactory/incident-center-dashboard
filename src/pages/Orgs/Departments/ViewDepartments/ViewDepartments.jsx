import React from 'react';
import Layout from '../../../../components/Layout';
import { FaTrashAlt, FaEdit, FaArrowLeft} from 'react-icons/fa';
import { MainContentContainer, MainContentDisplay } from "../../../../core-ui/Navigation.styles";
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import WithMaterialSearch from "../../../../components/tables/UsersTableDepartment";
import {
    ButtonsContainer,
    SingleButtonContainer,
    Button,
    Icon,
    OrganizationContainer,
    InfoContainer,
    InfoTitleContainer,
    TableContainer,
    TitleContainer,
    
  } from "./ViewDepartments.styles";
import Swal from 'sweetalert2';



const ViewDepartments = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { did } = location.state;
  
    const nagivateHome = () => {
        // 👇️ navigate to /contacts
        navigate('/departments');
    };

    const deleteDepartment = () => {
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
                navigate('/departments')
            }
        })
    };
    
    const editDepartment =() =>{
        navigate('/editdepartment')
    };

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
              <Button color="black" align="right" onClick={editDepartment}>
                <Icon>
                  <FaEdit/>
                </Icon>
                
              </Button>
              <Button color="#C10000" align="left" onClick={deleteDepartment}>
                <Icon>
                  <FaTrashAlt/>
                </Icon>
              </Button>
            </SingleButtonContainer>
          </ButtonsContainer>
          <OrganizationContainer>

            <TitleContainer>
                <InfoTitleContainer>
                    Department:     IT
                </InfoTitleContainer>
            </TitleContainer>

            <InfoContainer>
                <InfoTitleContainer>
                    Victims :       []
                </InfoTitleContainer>

                <InfoTitleContainer>
                    Status:         Active
                </InfoTitleContainer>
            </InfoContainer>

            <TableContainer>
                <WithMaterialSearch />
            </TableContainer>
            
            
          </OrganizationContainer>
          
        </MainContentDisplay>
      </MainContentContainer>
    </Layout>
  )
}

export default ViewDepartments