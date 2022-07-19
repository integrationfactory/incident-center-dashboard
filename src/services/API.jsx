import Swal from 'sweetalert2';
const axios = require("axios").default;

export async function getOrganizations() {
  axios
      .get("http://127.0.0.1:8000/structure/company_details/")
      .then(function (response){
        return(response.data)
      })
}

export async function viewOrganization(id){
  axios
      .get("http://127.0.0.1:8000/structure/company_details/"+id+"/")
      .then(function (response) {
        // console.log(response)
        return(response.data)
      })
  }

export async function createNewOrganization(data){
  axios
      .post("http://127.0.0.1:8000/structure/company_details/", data)
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
      .put("http://127.0.0.1:8000/structure/company_details/"+id+"/", data)
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
      .delete("http://127.0.0.1:8000/structure/company_details/"+id+"/")
  }

  export async function getODepartments() {
    axios
        .get("http://127.0.0.1:8000//structure/departments/")
        .then(function (response){
          return(response.data)
        })
  }
  
  export async function viewDepartment(id){
    axios
        .get("http://127.0.0.1:8000/structure/departments/"+id+"/")
        .then(function (response) {
          // console.log(response)
          return(response.data)
        })
    }
  
  export async function createNewDepartment(data){
    axios
        .post("http://127.0.0.1:8000/structure/departments/", data)
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
  
  export async function editDepartment(id, data){
    axios
        .put("http://127.0.0.1:8000/structure/departments/"+id+"/", data)
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
  
    export async function deleteDepartment(id) {
    axios
        .delete("http://127.0.0.1:8000/structure/departments/"+id+"/")
    }

  
  //TODO add JWT token to header for all users API

  export async function createNewUser(data){
    axios
        .post("http://127.0.0.1:8000/auth/users/", data)
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

  export async function editUser(id, data){
    axios
        .post("http://127.0.0.1:8000/auth/users/"+id+"/", data)
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

    export async function deleteUser(id) {
      axios
          .delete("http://127.0.0.1:8000/auth/users/"+id+"/")
      }
    