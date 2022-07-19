import React, { useState } from 'react';
import Layout from '../../../../components/Layout';
import { MainContentContainer, MainContentDisplay } from "../../../../core-ui/Navigation.styles";
import { useNavigate, useLocation } from 'react-router-dom';
import {
    TitleContainer,
    TitleText,
    MainContainer,
    InfoContainer,
    OrganizationInfoContainer,
    ButtonContainer,
    BlockContainer,
    FieldContainer,
    FieldText,
    SingleButtonContainer,
    Button,
    ButtonText
  } from "../CreateUser/CreateUser.style";
import { editUser } from "../../../../services/API";
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import axios from 'axios';

const EditUser = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [phone, setPhone] = useState("");
    const [department, setDepartment] = useState(0);
    const [password, setPassword] = useState("");
    const { uid } = location.state;

    const updateUser = () => {
        const data={
            first_name: name,
            last_name: lastName,
            phone: phone,
            role: role,
            email: email,
            password: password,
            department: department
            
        }
        editUser(uid,data)
        // navigate to /contacts
        Swal.fire({
            icon: 'success',
            title: 'User has been Created',
            showConfirmButton: false,
            timer: 1500
        })
        navigate('/users');
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
                navigate('/users')
            }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            axios
            .get("https://incident-center-backend.herokuapp.com/auth/users/"+uid+"/")
            .then(function (response){
                setName(response.first_name)
                setLastName(response.last_name)
                setPhone(response.phone)
                setRole(response.role)
                setEmail(response.email)
                setDepartment(response.department)
            })   
        };

    fetchData();
    }, []);


  return (
    <Layout title="SISAP-CERT">
      <MainContentContainer>

        <TitleContainer>
            <TitleText>New User</TitleText>
        </TitleContainer>

        <MainContentDisplay>
            <MainContainer>
                <InfoContainer className="row">

                    <OrganizationInfoContainer >
                        <BlockContainer className='row'>

                            <FieldContainer className='row'>
                                <FieldText>User Name *</FieldText>
                                <input 
                                    type="text" 
                                    id="Name" 
                                    onChange={(e) => setName(e.target.value)} 
                                    value={name} 
                                    required
                                />
                            </FieldContainer>

                            <FieldContainer className='row'>
                                <FieldText>Last Name *</FieldText>
                                <input  
                                    type="text" 
                                    id="lasName" 
                                    onChange={(e) => setLastName(e.target.value)} 
                                    value={lastName} 
                                    required
                                />
                            </FieldContainer>

                        </BlockContainer>

                        <BlockContainer className='row'>

                            <FieldContainer className='row'>
                                <FieldText>Role *</FieldText>
                                <input  
                                    type="text" 
                                    id="role" 
                                    onChange={(e) => setRole(e.target.value)}
                                    value={role} 
                                    required
                                />
                            </FieldContainer>

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
                            
                        </BlockContainer>

                        
                    </OrganizationInfoContainer>
                    <OrganizationInfoContainer>

                        <BlockContainer className='row'>    
                            <FieldContainer className='row'>
                                <FieldText>Phone *</FieldText>
                                <input  
                                    type="text" 
                                    id="phone" 
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone} 
                                    required
                                />
                            </FieldContainer>

                        </BlockContainer>
                    
                        <BlockContainer className='row'>  

                            <FieldContainer className='row'>
                                <FieldText>Password</FieldText>
                                <input  
                                    type="password" 
                                    id="password" 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required
                                />
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
                            <Button color="#217819" onClick={updateUser}>
                                <ButtonText>  Edit User  </ButtonText>
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

export default EditUser