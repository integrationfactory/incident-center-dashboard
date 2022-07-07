import React from "react";
import { Routes, Route } from "react-router-dom";
import Incidents from "./pages/Incidents/Incidents";
import Stats from "./pages/Stats/Stats";
import Orgs from "./pages/Orgs/Orgs";
import CreateOrgs from "./pages/Orgs/CreateOrgs/CreateOrgs";
import EditOrgs from "./pages/Orgs/EditOrgs/EditOrgs";
import ViewOrgs from "./pages/Orgs/ViewOrgs/ViewOrgs";
import Departments from "./pages/Orgs/Departments/Departments";
import CreateDepartment from "./pages/Orgs/Departments/CreateDepartment/CreateDepartment"
import EditDepartment from "./pages/Orgs/Departments/EditDepartment/EditDepartment"
import Reports from "./pages/Reports/Reports";
import Victims from "./pages/Victims/Victims";
import Support from "./pages/Support/Support";
import Login from "./pages/Login/Login";
import AuthProvider from "./services/AuthProvider";
import ProtectedRoute from "./helpers/ProtectedRoute";
import Settings from "./pages/Settings/Settings";

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route index element={<Login />} />
          <Route
            path="/incidents"
            element={
              <ProtectedRoute>
                <Incidents />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/stats"
            element={
              <ProtectedRoute>
                <Stats />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orgs"
            element={
              <ProtectedRoute>
                <Orgs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/createorgs"
            element={
              <ProtectedRoute>
                <CreateOrgs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/editorgs"
            element={
              <ProtectedRoute>
                <EditOrgs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vieworgs"
            element={
              <ProtectedRoute>
                <ViewOrgs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/departments"
            element={
              <ProtectedRoute>
                <Departments />
              </ProtectedRoute>
            }
          />
          <Route
            path="createdepartment"
            element={
              <ProtectedRoute>
                <CreateDepartment />
              </ProtectedRoute>
            }
          />
          <Route
            path="editdepartment"
            element={
              <ProtectedRoute>
                <EditDepartment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <Reports />
              </ProtectedRoute>
            }
          />
          <Route
            path="/victims"
            element={
              <ProtectedRoute>
                <Victims />
              </ProtectedRoute>
            }
          />
          <Route
            path="/support"
            element={
              <ProtectedRoute>
                <Support />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
