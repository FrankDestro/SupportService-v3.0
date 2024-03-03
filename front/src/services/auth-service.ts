/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryString from "qs";
import { CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";
import * as accessTokenRepository from "../repository/access-token-repository"

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

