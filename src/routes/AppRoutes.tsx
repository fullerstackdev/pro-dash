// src/routes/AppRoutes.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

// Auth
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';

// Student
import Dashboard from '../pages/Student/Dashboard';
import CoursesExplore from '../pages/Student/CoursesExplore';
import CoursesDetail from '../pages/Student/CoursesDetail';
import Transactions from '../pages/Student/Transactions';
import Bets from '../pages/Student/Bets';

// Admin
import AdminDashboard from '../pages/Admin/AdminDashboard';
import CustomersList from '../pages/Admin/CustomersList';
import CustomersDetail from '../pages/Admin/CustomersDetail';
import ManageCourses from '../pages/Admin/ManageCourses';
import AdminCoursesDetail from '../pages/Admin/CoursesDetail';
import Invoice from '../pages/Admin/Invoice';
import SupportTicketList from '../pages/Admin/SupportTicketList';
import SupportTicketDetail from '../pages/Admin/SupportTicketDetail';

// Apps
import Chat from '../pages/Apps/Chat/Chat';
import CalendarApp from '../pages/Apps/Calendar';

// Protected Route & Auth
import ProtectedRoute from './ProtectedRoute';
import { useAuth } from '../context/AuthContext';

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Box sx={{ mt: 2 }}>
      <Routes>
        {/* Auth (Public) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Student (Protected) */}
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/courses-explore"
          element={
            <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
              <CoursesExplore />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/courses-detail"
          element={
            <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
              <CoursesDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/transactions"
          element={
            <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
              <Transactions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/bets"
          element={
            <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
              <Bets />
            </ProtectedRoute>
          }
        />

        {/* Admin (Protected) */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/customers-list"
          element={
            <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
              <CustomersList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/customers-detail"
          element={
            <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
              <CustomersDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/manage-courses"
          element={
            <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
              <ManageCourses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/courses-detail"
          element={
            <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
              <AdminCoursesDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/invoice"
          element={
            <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
              <Invoice />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/support-tickets"
          element={
            <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
              <SupportTicketList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/support-tickets/:id"
          element={
            <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
              <SupportTicketDetail />
            </ProtectedRoute>
          }
        />

        {/* Apps (Protected) */}
        <Route
          path="/apps/chat"
          element={
            <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
              <Chat />
            </ProtectedRoute>
          }
        />
        <Route
          path="/apps/calendar"
          element={
            <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
              <CalendarApp />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </Box>
  );
}

export default AppRoutes;
