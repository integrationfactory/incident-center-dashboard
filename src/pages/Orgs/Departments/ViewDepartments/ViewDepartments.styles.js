import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    margin-top: 30px;
    justify-content: space-between;
`

export const SingleButtonContainer = styled.div`
    width: 25%;
    display: flex;
    justify-content: ${(props)=> props.justify};
    align-items: center;
`

export const Button = styled.div`
    width: 60%;
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

export const TitleContainer = styled.div`
    
    width: 100%;
    height: 10%;
    display: flex;
    align-content: center;
    align-items: flex-start;
    text-align: center;
    padding: 10px 0px;
    align-content: center;
`

export const OrganizationContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 30px;
    justify-content: space-around;
`

export const InfoContainer = styled.div`
    width: 50%;
    height: 15%;
    justify-content: space-around;
    align-content: center;
    align-items: flex-start;
    padding: 10px 0px;
    align-content: center;
`

export const InfoTitleContainer = styled.div`
    
    width: 100%;
    height: 30%;
    display: flex;
    align-content: center;
    align-items: flex-start;
    text-align: center;
    padding: 10px 0px;
    align-content: center;
`
export const TitleText = styled.p`
    font-size: 85%;
    font-weight: bold;
`

export const TableContainer = styled.div`
    width: 100%;
    height: 75%;
    justify-content: space-around;
    align-content: center;
    align-items: flex-start;
    padding: 10px 0px;
    align-content: center;
`

