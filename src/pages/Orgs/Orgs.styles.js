import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    margin-top: 30px;
    justify-content: flex-end;
`

export const SingleButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Button = styled.div`
    width: 60%;
    height: 60px;
    background: ${(props)=> props.color};
    color: white;
    text-align: center;
    padding: 10px 0px;
    align-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`

export const ButtonText = styled.p`
    font-size: 35%;
    font-weight: bold;
`

export const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    margin-top: 30px;
    justify-content: flex-start;
    align-content: center;
    background: #002C3E;
    border: 2px solid black;
    border-radius: 4px;
    color: white;
    text-align: center;
    padding: 10px 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Filter = styled.div`
    display: flex;
    width: 50%;
    height: 50%;
    margin-top: 15px;
    margin-left: 20px;
    background: white;
    border-radius: 4px;
    border: 2px solid black;
`

export const FilterText = styled.p`
    margin-top: 10px;
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
`

export const OrganizationsContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const OrganizationContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    align-items: flex-start;
`

export const Organization = styled.div`
    width: 250px;
    height: 200px;
    margin-top: 30px;
    align-content: center;
    justify-content: center;
    color: black;
    text-align: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 2px solid ${(props)=> props.color};
    border-radius: 4px;
`

export const OrganizationText = styled.p`
    font-size: 20px;
    font-weight: bold;
`

export const ViewOrganizationContainer = styled.div`
    width: 100%;
    height: 15%;
    margin-top: -2%;
`

export const ViewOrganizationButton = styled.div`
    width: 100%;
    height: 100%;
    background: ${(props)=> props.color};
    color: black;
    text-align: center;
`

export const EditOrganizationButtonContainer = styled.div`
    width: 100%;
    height: 20%;
    align-content: center;
    justify-content: space-between;
`

export const ButtonOrganization = styled.div`
    width: 10%;
    height: 20%;
    margin-left: 9%;
    color: black;
    text-align: center;
    padding: 10px 0px;
`

export const ButtonOrganizationText = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin-top: -70%
`


export const LogoContainer = styled.div`
    width: 100%;
    height: 25%;
    align-content: center;
    justify-content: center;
`

export const Logo = styled.div`
    width: 33%;
    height: 100%;
    margin-left: 33%;
`

export const SingleInfoContainer = styled.div`
    width: 100%;
    height: 20%;
    align-content: center;
    justify-content: space-between;
`
export const Info = styled.div`
    width: 30%;
    height: 10%;
    margin-left: 9%;
    background: white;
    color: black;
    text-align: center;
    padding: 10px 0px;
    
`
export const InfoText = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin-top: -35%;
`