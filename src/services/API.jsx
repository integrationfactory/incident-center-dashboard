import React from "react";
import {useNavigate, useLocation} from 'react-router-dom';

export const API = React.createContext(null);
const axios = require("axios").default;
  
const API = ({ children }) => {
  const navigate = useNavigate();
  const navigateToLogin = useNavigate();
  const location = useLocation();

  const getOrganizations = async () => {
    axios
        .get("http://127.0.0.1:8000/structure/company_details/")
        .then(function (response){
            console.log(response)
        })
  };

  const viewOrganization = async (id) => {
    axios
        .get("http://127.0.0.1:8000/structure/company_details/"+id+"/")
        .then(function (response) {
            console.log(response)
        })
    };

  const createNewOrganization = (company_related, related_companies, email, address, phone_number, 
    trustart_integration, api_key, api_secret, is_active) => {
    const organizationData = {
        company_related: company_related,
        related_companies: related_companies,
        email: email,
        address: address,
        phone_number: phone_number,
        trustart_integration: trustart_integration,
        api_key: api_key,
        api_secret: api_secret,
        is_active: is_active
    };
    axios
        .post("http://127.0.0.1:8000/structure/company_details/", organizationData)
        .then(function (response){
            console.log(response)
        })
  };

  const editOrganization = async (id,company_related, related_companies, email, address, 
    phone_number, trustart_integration, api_key, api_secret, is_active) => {
    const organizationData = {
        company_related: company_related,
        related_companies: related_companies,
        email: email,
        address: address,
        phone_number: phone_number,
        trustart_integration: trustart_integration,
        api_key: api_key,
        api_secret: api_secret,
        is_active: is_active
    };
    axios
        .put("http://127.0.0.1:8000/structure/company_details/"+id+"/", organizationData)
        .then(function (response){
            console.log(response)
        })

    };

  const deleteOrganization = async (id) => {
    axios
        .delete("http://127.0.0.1:8000/structure/company_details/"+id+"/")
  };


  const returnOrgs = () => {
    navigateToLogin("/orgs");
  };

  const value = {
    getOrganizations: getOrganizations,
    createNewOrganization: createNewOrganization,
    editOrganization: editOrganization,
    deleteOrganization: deleteOrganization,
    viewOrganization: viewOrganization

  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default API;
