import React from "react";
import Layout from "../../components/Layout";
import {FaAngleDown} from "react-icons/fa";
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';
import FilterTableComponent from "../../components/tables/Table";

const Incidents = () => {
  return (
    <>
      <Layout title="SISAP-CERT">
        <div style={{ background: "#EEE", width: "100%", height: "100vh" }}>
          <div
            className="row"
            style={{ width: "100%", height: "70px", marginTop: "30px" }}
          >
            <div className="col-sm-4" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <div
                style={{
                  width: "60%",
                  height: "60px",
                  background: "#002C3E",
                  color: "white",
                  textAlign: "center",
                  padding: "10px 0px",
                  alignContent:"center",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius:"4px"
                }}
              >
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Organization <FaAngleDown/>
                </p>

              </div>
            </div>
            <div className="col-sm-4" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <div
                style={{
                  width: "60%",
                  height: "60px",
                  background: "#002C3E",
                  color: "white",
                  textAlign: "center",
                  padding: "10px 0px",
                  alignContent:"center",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius:"4px"
                }}
              >
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Export <FaAngleDown/>
                </p>
              </div>
            </div>
            <div className="col-sm-4" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <div
                style={{
                  width: "60%",
                  height: "60px",
                  background: "#C10000",
                  color: "white",
                  textAlign: "center",
                  padding: "10px 0px",
                  alignContent:"center",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius:"4px"
                }}
              >
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  + Add New Report
                </p>
              </div>
            </div>
          </div>
          <div className="row" style={{width:"90%", height:"70vh", background:"white", position:"relative", left:"5%", marginTop:"3%"}}>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Incidents;
