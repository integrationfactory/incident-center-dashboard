import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 10px;
    margin-top: 15px;
    justify-content: space-between;
`

export const SingleButtonContainer = styled.div`
    width: 25%;
    display: flex;
    justify-content: ${(props)=> props.justify};
    align-items: center;
`

export const Button = styled.div`
    width: 40%;
    height: 60px;
    color: ${(props)=> props.color};
    text-align: ${(props)=> props.align};
    padding: 10px 0px;
    align-content: center;
`

export const Icon = styled.p`
    font-size: 100%;
    font-weight: bold;
`

export const OrganizationContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 50px;
    justify-content: space-around;
`

export const TitleContainer = styled.div`
    margin-top: -10px;
    width: 100%;
    height:  50px;
    display: flex;
    align-content: center;
    align-items: flex-start;
    background: #002C3E;
    color: white;
    text-align: center;
    padding: 10px 0px;
    align-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 4px 4px;
    border: 2px solid #002C3E;
    
`
export const TitleText = styled.p`
    margin-top: -25px;
    font-size: 85%;
    font-weight: bold;
`

export const TableContainer = styled.div`
    width: 45%;
    height: 55%;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    padding: 10px 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: 2px solid #002C3E;
`

export const DepartmentContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: flex-start;
    padding: 10px 0px;
    border-radius: 4px;
    border: 2px solid #002C3E;
`

export const DepartmentText = styled.p`
    font-size: 20px;
    font-weight: bold;
`

export const InfoContainer = styled.div`
    width: 95%;
    height: 30%;
    margin-top: -40px;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    padding: 10px 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: 2px solid #002C3E;
`


export const DataContainers = styled.div`
    width: 100%;
    height: 100%;
    align-content: center;
    justify-content: center;
    color: black;
    text-align: center;
    padding: 10px 0px;
    align-content: center;
`

export const DataContainer = styled.div`
    width: 50%;
    height: 100%;
    align-content: center;
    justify-content: center;
    color: black;
    text-align: center;
    padding: 10px 0px;
    align-content: center;
`

export const Info = styled.div`
    width: 100%;
    height: 20%;
    align-content: center;
    justify-content: center;
    flexWrap: "wrap";
    color: black;
    text-align: center;
    padding: 10px 0px;
    align-content: center;
`

export const InfoText = styled.p`
    font-size: 20px;
    font-weight: bold;
`

