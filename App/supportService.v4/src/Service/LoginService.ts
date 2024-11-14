/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryString from "qs";
import { AccessTokenPayLoadDTO, CredentialsDTO, RoleEnum } from "../models/Login";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/apiService";
import * as accessTokenRepository from "../repository/access-token-repository";
import jwtDecode from "jwt-decode";

export function LoginRequest(loginData: CredentialsDTO) {
    
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "BASIC " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };

  const requestBody = QueryString.stringify({
    ...loginData,
    grant_type: "password",
  });

  const config : AxiosRequestConfig = {
    method : "POST",
    url : "/oauth2/token",
    data : requestBody, 
    headers
  }

  console.log(requestBody)

  return requestBackend(config);
}

export function Logout() {
  accessTokenRepository.removeToken();
}

export function saveAccessToken (token : string) {
  accessTokenRepository.saveToken(token);
}

export function getAccessToken () {
  return accessTokenRepository.getToken();
}


// FUNÇÃO PARA PEGAR AS INFORMAÇÕES PAYLOAD DO TOKEN.
export function getAccessTokenPayload(): AccessTokenPayLoadDTO | undefined {
  try {
    const token = accessTokenRepository.getToken();
    return token == null
      ? undefined
      : (jwtDecode(token) as AccessTokenPayLoadDTO);
  } catch (error) {
    return undefined;
  }
}


// FUNÇÃO PARA VERIFICAR SE USUARIO ESTA AUTENTICADO
export function isAuthenticated(): boolean {
  let tokenPayload = getAccessTokenPayload();
  return tokenPayload && tokenPayload.exp * 1000 > Date.now() ? true : false;
}

export function hasAnyRoles(roles: RoleEnum[]): boolean {
  if (roles.length === 0) {
    return true;
  }
  const tokenPayload = getAccessTokenPayload();
  if (tokenPayload !== undefined) {
    for (var i = 0; i < roles.length; i++) {
      if (tokenPayload.authorities.includes(roles[i])) {
        return true;
      }
    }
    //return roles.some(role => tokenData.authorities.includes(role));
  }
  return false;
}
