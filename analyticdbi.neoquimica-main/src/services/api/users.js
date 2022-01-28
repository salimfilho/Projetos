import api from "./api";
import { login, logout, userAuthenticated } from "../auth";
import { setErrors } from "utils";
import { v4 } from "uuid";

export const handleUsers = async (firmId) =>
  (await api.post(`/users/list-by-firm`, { firm_id: firmId })).data;

export const handleUserLogin = async (history, data, setMessages) => {
  const { email, password } = data;
  try {
    const res = (await api.post(`/users/login`, { email, password })).data;
    login(res.token);
    const user = userAuthenticated();
    user.data.roles === "admin"
      ? history.push(`/grupos`)
      : history.push(`/relatorios`);
  } catch (error) {
    setMessages({ messages: setErrors(error), alert: "alert-orange" });
  }
};

export const handleUserForgotPassword = async (data, setMessages) => {
  const uuid = v4();
  const values = {
    emailTo: data.email,
    emailFrom: process.env.REACT_APP_EMAIL_FROM,
    smtpHost: process.env.REACT_APP_EMAIL_HOST,
    smtpPort: process.env.REACT_APP_EMAIL_PORT,
    smtpUser: process.env.REACT_APP_EMAIL_USER,
    smtpPass: process.env.REACT_APP_EMAIL_PASS,
    uuid: uuid,
    emailMessage: `
        <h2>Redefinição de senha</h2>
        <p>Acesse o link abaixo para redefinir sua senha.</p>
        <a href="${process.env.REACT_APP_URL_APP}/recuperar-senha/${uuid}">${process.env.REACT_APP_URL_APP}/recuperar-senha/${uuid}</a>
        <br/>
        <i>Vista Neo Química - Visão privilegiada para quem busca o topo!</i>
        <img src="${process.env.REACT_APP_URL_APP}/logo-neo-vista.png" alt="neo quimica" width="150" />
      `,
  };
  try {
    const response = await api.post(`/users/forgot-password`, values);
    setMessages({ messages: response.data.data.message, alert: "alert-green" });
  } catch (error) {
    setMessages({ messages: setErrors(error), alert: "alert-orange" });
  }
};

export const handleUserRecoverPassword = async (
  history,
  token,
  data,
  setMessages
) => {
  try {
    await api.put(`/users/recover-password/${token}`, data);
    return history.push("/login");
  } catch (error) {
    setMessages({ messages: setErrors(error), alert: "alert-orange" });
  }
};

export const handleStoreUser = async (history, data, firmId, setMessages) => {
  const pass = v4().split("-")[0];
  const values = {
    name: data.name,
    email: data.email,
    password: pass,
    roles: data.roles,
    firm_id: firmId,
    emailFrom: process.env.REACT_APP_EMAIL_FROM,
    smtpHost: process.env.REACT_APP_EMAIL_HOST,
    smtpPort: process.env.REACT_APP_EMAIL_PORT,
    smtpUser: process.env.REACT_APP_EMAIL_USER,
    smtpPass: process.env.REACT_APP_EMAIL_PASS,
    emailMessage: `
     	<h3>Cadastro realizado com sucesso!</h3>
     	<p>Olá, seja bem vindo ao <strong>Vista Neo Química</strong>!</p>
     	<p>Você foi cadastrado para acessar a plataforma <a href="${process.env.REACT_APP_URL_APP}">${process.env.REACT_APP_URL_APP}</a> e ter acesso aos Relatórios e Dashboard aos principais projetos da Neo Química.</p>
     	<p>Segue abaixo os seus dados de acesso:</p>
       <ul>
     			<li><strong>Email:</strong> ${data.email}</li>
     			<li><strong>Senha:</strong> ${pass}</li>
     	</ul>
       <p>Clique no link para acessar a plataforma Vista Neo Química e acompanhar os seus resultados <a href="${process.env.REACT_APP_URL_APP}">${process.env.REACT_APP_URL_APP}</a>.</p>
       <br/>
       <p><i>Vista Neo Química - Visão privilegiada para quem busca o topo!</i></p>
       <img src="${process.env.REACT_APP_URL_APP}/logo-neo-vista.png" alt="neo quimica" width="150" />
     `,
  };
  try {
    await api.post(`/users/store-auth-user`, values);
    return history.push(`/dashboard`);
  } catch (error) {
    setMessages({ messages: setErrors(error), alert: "alert-orange" });
  }
};

export const handleUpdateUser = async (history, data, userId, setMessages) => {
  try {
    await api.put(`/users/${userId}/update-auth-user`, data);
    return history.push(`/usuarios`);
  } catch (error) {
    setMessages({ messages: setErrors(error), alert: "alert-orange" });
  }
};

export const handleUserUpdateFile = async (data, id) => {
  const values = new FormData();
  values.append("file", data);
  try {
    await api.put(`/users/${id}/upload`, values);
    return;
  } catch (error) {
    return error;
  }
};

export const handleUserUpdatePassword = async (history, data, setMessages) => {
  try {
    await api.put(`/users/update-password`, data);
    return history.push(`/dashboard`);
  } catch (error) {
    setMessages({ messages: setErrors(error), alert: "alert-orange" });
  }
};

export const handleUpdateProfile = async (
  history,
  profileId,
  data,
  setMessages
) => {
  const values = {
    name: data.name,
    email: data.email,
  };
  try {
    await api.put(`/users/${profileId}/update-auth-user`, values);
    logout(history);
    return;
  } catch (error) {
    setMessages({ messages: setErrors(error), alert: "alert-orange" });
  }
};

export const handleUserShow = async (id) =>
  (await api.get(`/users/${id}`)).data;

export const handleUserDelete = async (id, history) => {
  await api.delete(`/users/${id}`);
  return history.push("/usuarios");
};
