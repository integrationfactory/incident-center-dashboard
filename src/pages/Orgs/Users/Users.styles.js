import styled from "styled-components";

export const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    margin-top: 30px;
    margin-left: 5%;
    justify-content: flex-start;
    align-items: center;
`

export const TitleText = styled.p`
    font-size: 35px;
    font-weight: bold;
`

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: flex-end;
    align-items: center;
`

export const SingleButtonContainer = styled.div`
    display: flex;
    width: 25%;
    height: 100%;
    align-items: flex-start;
    align-items: center;
    margin-left: 5%;
`

export const Button = styled.div`
    width: 100%;
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
    margin-top: 1%;
    font-size: 40%;
    font-weight: bold;
`

export const ButtonPopup = styled.div`
    width: 58%;
    height: 150px;
    background: ${(props)=> props.color};
    color: black;
    text-align: left;
    padding: 10px 15px;
    align-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`

export const ButtonExportPopup = styled.div`
    width: 58%;
    height: 100px;
    background: ${(props)=> props.color};
    color: black;
    text-align: left;
    padding: 10px 15px;
    align-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`

export const SinglePopupContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 12%;
    padding-left: 5%
`

export const PopupsContainer = styled.div`
    width: 100%;
    height: 70px;
    margin-top: 30px;
    position: fixed;
    z-index: 99;
    padding-top: 0px;
    margin-top: 0px;
`

export const TableContainer = styled.div`
    width: 100%;
    height: 75%;
    justify-content: center;
`