import Swal from 'sweetalert2';
const axios = require("axios").default;

export async function getOrganizations() {
  axios
      .get("https://incident-center-backend.herokuapp.com/structure/company_details/")
      .then(function (response){
        return(response.data)
      })
}

export async function viewOrganization(id){
  axios
      .get("https://incident-center-backend.herokuapp.com/structure/company_details/"+id+"/")
      .then(function (response) {
        // console.log(response)
        return(response.data)
      })
  }

export async function createNewOrganization(data){
  axios
      .post("https://incident-center-backend.herokuapp.com/structure/company_details/", data)
      .then(function (response){
        console.log(response)
        return(response)
      }).catch(
        function (error){
          Swal.fire(
            {
              title: 'Something go wrong!',
              text: error,
              icon: 'error'
            }
          )
        }
      );
  }

export async function editOrganization(id, data){
  axios
      .put("https://incident-center-backend.herokuapp.com/structure/company_details/"+id+"/", data)
      .then(function (response){
          console.log(response)
          return(response)
      }).catch(
        function (error){
          Swal.fire(
            {
              title: 'Something go wrong!',
              text: error,
              icon: 'error'
            }
          )
        }
      );

  }

  export async function deleteOrganization(id) {
  axios
      .delete("https://incident-center-backend.herokuapp.com/structure/company_details/"+id+"/")
  }
