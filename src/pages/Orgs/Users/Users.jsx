import React from 'react';
import Layout from '../../../components/Layout';
import Swal from 'sweetalert2';
import { FaAngleDown } from "react-icons/fa";
import { MainContentContainer, MainContentDisplay } from '../../../core-ui/Navigation.styles';
import { useNavigate } from 'react-router-dom';
import { 
    ButtonContainer,
    SingleButtonContainer,
    Button,
    ButtonText,
    PopupsContainer,
    SinglePopupContainer,
    ButtonPopup,
    ButtonExportPopup
} from './Users.styles';
import WithMaterialSearch from '../../../components/tables/UsersTable';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Users = (props) =>{
    const navigate = useNavigate();
    
    const [users ,setUsers] = useState([])
    const [organizationsList, setOrganizationsList] = useState([])
    const [departmentsList, setDepartmentsList] = useState([])
    const [activeOrgs, setActiveOrgs] = React.useState(false);
    const [activeExport, setActiveExport] = React.useState(false);


    const openOrgsPopup = () => {
        setActiveOrgs(!activeOrgs);
        setActiveExport(false);
    };

    const openExportPopup = () => {
        setActiveOrgs(false);
        setActiveExport(!activeExport);
    };

    const navigateEdit = (id) => {
       // 👇️ navigate to /editusers
       navigate("/edituser",{
        state: {uid: id}
       });
    };

    const navigateNew = () => {
        // 👇️ navigate to /editusers
       navigate("/createuser");
    }

    const delUser = (id) => {
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
                // deleteUser(id)
                navigate('/users')
            }
          })
    }

    useEffect(() => {
        const fetchData = async () => {
            axios
            .get("http://127.0.0.1:8000/structure/company_details/")
            .then(function (response){
                setOrganizationsList(response.data)
            })
            axios
            .get("http://127.0.0.1:8000/structure/departments/")
            .then(function (response){
                setDepartmentsList(response.data)
            })
            axios
            .get("http://127.0.0.1:8000/structure/company_details/users_list/1/")
            .then(function (response){
                setUsers(response.data)
            })
        };

        fetchData();
    },[]);

    return (
        <Layout title="SISAP-CERT">
            <MainContentContainer>

                <ButtonContainer className="row">
                    <SingleButtonContainer className="col-sm-4">
                    <Button color="#002C3E" onClick={openOrgsPopup}>
                        <ButtonText>
                        Organization <FaAngleDown />
                        </ButtonText>
                    </Button>
                    </SingleButtonContainer>
                    <SingleButtonContainer className="col-sm-4">
                    <Button color="#002C3E" onClick={openExportPopup}>
                        <ButtonText>
                        Departments <FaAngleDown />
                        </ButtonText>
                    </Button>
                    </SingleButtonContainer>
                    <SingleButtonContainer className="col-sm-4">
                    <Button color="#C10000" onClick={navigateNew}>
                        <ButtonText>Add New User</ButtonText>
                    </Button>
                    </SingleButtonContainer>
                </ButtonContainer>

                {activeOrgs && (
                    <PopupsContainer className="row">
                    <SinglePopupContainer className="col-sm-4">
                        <ButtonPopup color="white">
                        <ButtonText>
                        {organizationsList.map((org)=>{
                                return(
                                    <div>
                                    <p>{org.name}</p>
                                    </div>
                                )}
                            )}
                        </ButtonText>
                        </ButtonPopup>
                    </SinglePopupContainer>
                    <div className="col-sm-8"></div>
                    </PopupsContainer>
                )}

                { activeExport &&
                <PopupsContainer className="row">
                    <div className="col-sm-4"></div>
                    <SinglePopupContainer className="col-sm-4">
                    <ButtonExportPopup color="white">
                        <ButtonText>
                        {departmentsList.map((dept)=>{
                                return(
                                    <div>
                                    <p>{dept.name}</p>
                                    </div>
                                )}
                            )}
                        </ButtonText>
                    </ButtonExportPopup>
                    </SinglePopupContainer>
                    <div className="col-sm-4"></div>
                </PopupsContainer>}

                <MainContentDisplay>
                    <WithMaterialSearch/>
                </MainContentDisplay>

            </MainContentContainer>
        </Layout>
    );
};

export default Users
