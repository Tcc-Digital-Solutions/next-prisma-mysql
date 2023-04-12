import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Informacoes from "./pages/Informacoes"
import Montagem from "./pages/Montagem";
import Crud from "./pages/Crud";
import Settings from "./pages/Settings"
import Manual from "./pages/Manual"
import Careegamento from "./pages/Carregamento"
import { BoxLoginMk } from "./components/screen-login-mk/BoxLoginMk";
import ToCheck from "./pages/ToCheck";


export const RoutesJS = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id?" element={<Careegamento />} />
        <Route path="/home" element={<Home />} />
        <Route path="/to-check" element={<ToCheck />} />
        <Route path="/informacoes/:id?" element={<Informacoes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/montagem/:id?" element={<Montagem />} />
        <Route path="/register-manual" element={<Crud />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/manual/:id?" element={<Manual />} />
        <Route path="/login" element={<BoxLoginMk />} />
        <Route path="/cadastro-manual" element={<Crud />} />
      </Routes>
    </BrowserRouter>
  )
}