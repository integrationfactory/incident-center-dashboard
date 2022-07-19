import React from 'react';
import Layout from '../../../../components/Layout';
import { MainContentContainer, MainContentDisplay } from "../../../../core-ui/Navigation.styles";
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    TitleContainer,
    TitleText,
    MainContainer,
    InfoContainer,
    TableContainer,
    ButtonContainer,
    SingleButtonContainer,
    Button,
    ButtonText,
    BlockContainer,
    FieldContainer,
    FieldText
} from './CreateDepartment.style'
import WithMaterialSearch from "../../../../components/tables/UsersTable";
import { useState } from 'react';

const CreateDepartment = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [name, setName] = useState("")
    const [victims, setVictims] = useState([])
    const [status, setStatus] = useState(Boolean)
    const [users, setUsers] = useState([])
    // const { oid } = location.state;

    const createDepartment = () => {
        const data={
          name: name,
          is_active: status,
          // company_details: oid
        }
        // createNewDepartment(data)
        Swal.fire({
            icon: 'success',
            title: 'Organization has been Created',
            showConfirmButton: false,
            timer: 1500
        })
        navigate('/departments');
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
            navigate('/departments')
        }
      })
  }


  return (
    <Layout title="SISAP-CERT">
      <MainContentContainer>

      <TitleContainer>
            <TitleText>New Department</TitleText>
        </TitleContainer>

        <MainContentDisplay>
           <MainContainer>
             <InfoContainer className="row">
              <BlockContainer>

                <FieldContainer width="35%" className='row'>
                    <FieldText>Department Name *</FieldText>
                    <input 
                      type="text"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                    />
                </FieldContainer>

                <FieldContainer width="35%" className='row'>
                    <FieldText>Victims *</FieldText>
                    <input  
                        type="text" 
                        id="victims" 
                        onChange={(e) => setVictims(e.target.value)} 
                        value={victims} 
                        required
                    />
                </FieldContainer>

                <FieldContainer width="15%" className='row'>
                    <FieldText>Status </FieldText>
                </FieldContainer>
                
              </BlockContainer>
              <TableContainer>
                <WithMaterialSearch />
              </TableContainer>
              <ButtonContainer>
                <SingleButtonContainer>
                  <Button color="#C10000" onClick={cancel}>
                    <ButtonText> Cancel </ButtonText>
                  </Button>
                </SingleButtonContainer>
                <SingleButtonContainer>
                  <Button color="#217819" onClick={createDepartment}>
                    <ButtonText> Add Department </ButtonText>
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

export default CreateDepartment