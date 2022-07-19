import React, { useState } from 'react';
import Layout from '../../../../components/Layout';
import { MainContentContainer, MainContentDisplay } from "../../../../core-ui/Navigation.styles";
import { useNavigate} from 'react-router-dom';
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
  } from "./CreateUser.style";
import { createNewUser } from "../../../../services/API";
import Swal from 'sweetalert2';

const CreateUser = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [phone, setPhone] = useState("");
    const [department, setDepartment] = useState(0);
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const createUser = () => {
        const data={
            first_name: name,
            last_name: lastName,
            phone: phone,
            role: role,
            email: email,
            password: password,
            re_password: rePassword,
            department: department
            
        }
        createNewUser(data)
        // navigate to /contacts
        navigate('/users');
        Swal.fire({
            icon: 'success',
            title: 'User has been Created',
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
                navigate('/users')
            }
        })
    }


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
                                <input  
                                    type="password" 
                                    id="rePassword" 
                                    onChange={(e) => setRePassword(e.target.value)} 
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
                            <Button color="#217819" onClick={createUser}>
                                <ButtonText>  Add User  </ButtonText>
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

export default CreateUser