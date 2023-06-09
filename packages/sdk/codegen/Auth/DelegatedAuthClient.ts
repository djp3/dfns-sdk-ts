import {
  BaseAuthApi,
  SignUserActionChallengeRequest,
  UserActionChallengeResponse,
} from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { Fetch, preflightFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedAuthClient {
  private fetch: Fetch
  private authApi: BaseAuthApi

  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {
    this.fetch = preflightFetch
    this.authApi = new BaseAuthApi(apiOptions)
  }

  async createDelegatedUserRegistrationInit(
    request: T.CreateDelegatedUserRegistrationRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/registration/delegated', {
      path: {},
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'POST',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify(request.body),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async createDelegatedUserRegistrationComplete(
    request: T.CreateDelegatedUserRegistrationRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateDelegatedUserRegistrationResponse> {
    const path = buildPathAndQuery('/auth/registration/delegated', {
      path: {},
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createUserRegistration(
    request: T.CreateUserRegistrationRequest
  ): Promise<T.CreateUserRegistrationResponse> {
    const path = buildPathAndQuery('/auth/registration', {
      path: {},
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createDelegatedUserLoginInit(
    request: T.CreateDelegatedUserLoginRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/login/delegated', {
      path: {},
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'POST',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify(request.body),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async createDelegatedUserLoginComplete(
    request: T.CreateDelegatedUserLoginRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateDelegatedUserLoginResponse> {
    const path = buildPathAndQuery('/auth/login/delegated', {
      path: {},
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createUserActionSignatureChallenge(
    request: T.CreateUserActionSignatureChallengeRequest
  ): Promise<T.CreateUserActionSignatureChallengeResponse> {
    const path = buildPathAndQuery('/auth/action/init', {
      path: {},
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createUserActionSignature(
    request: T.CreateUserActionSignatureRequest
  ): Promise<T.CreateUserActionSignatureResponse> {
    const path = buildPathAndQuery('/auth/action', {
      path: {},
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createUserCredentialChallenge(
    request: T.CreateUserCredentialChallengeRequest
  ): Promise<T.CreateUserCredentialChallengeResponse> {
    const path = buildPathAndQuery('/auth/credentials/init', {
      path: {},
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createUserCredentialInit(
    request: T.CreateUserCredentialRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/credentials', {
      path: {},
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'POST',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify(request.body),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async createUserCredentialComplete(
    request: T.CreateUserCredentialRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateUserCredentialResponse> {
    const path = buildPathAndQuery('/auth/credentials', {
      path: {},
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async activateCredentialInit(
    request: T.ActivateCredentialRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/credentials/activate', {
      path: {},
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify(request.body),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async activateCredentialComplete(
    request: T.ActivateCredentialRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ActivateCredentialResponse> {
    const path = buildPathAndQuery('/auth/credentials/activate', {
      path: {},
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deactivateCredentialInit(
    request: T.DeactivateCredentialRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/credentials/deactivate', {
      path: {},
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify(request.body),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async deactivateCredentialComplete(
    request: T.DeactivateCredentialRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeactivateCredentialResponse> {
    const path = buildPathAndQuery('/auth/credentials/deactivate', {
      path: {},
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listUserCredentials(): Promise<T.ListUserCredentialsResponse> {
    const path = buildPathAndQuery('/auth/credentials', {
      path: {},
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createUserActionSignatureFromCode(
    request: T.CreateUserActionSignatureFromCodeRequest
  ): Promise<T.CreateUserActionSignatureFromCodeResponse> {
    const path = buildPathAndQuery('/auth/action/code/verify', {
      path: {},
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createCodeUserActionSignatureChallenge(
    request: T.CreateCodeUserActionSignatureChallengeRequest
  ): Promise<T.CreateCodeUserActionSignatureChallengeResponse> {
    const path = buildPathAndQuery('/auth/action/code/init', {
      path: {},
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createCodeUserActionSignature(
    request: T.CreateCodeUserActionSignatureRequest
  ): Promise<T.CreateCodeUserActionSignatureResponse> {
    const path = buildPathAndQuery('/auth/action/code', {
      path: {},
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listPersonalAccessTokens(): Promise<T.ListPersonalAccessTokensResponse> {
    const path = buildPathAndQuery('/auth/pats', {
      path: {},
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createPersonalAccessTokenInit(
    request: T.CreatePersonalAccessTokenRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/pats', {
      path: {},
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'POST',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify(request.body),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async createPersonalAccessTokenComplete(
    request: T.CreatePersonalAccessTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreatePersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats', {
      path: {},
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getPersonalAccessTokens(
    request: T.GetPersonalAccessTokensRequest
  ): Promise<T.GetPersonalAccessTokensResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId', {
      path: { tokenId: request.tokenId },
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updatePersonalAccessTokenInit(
    request: T.UpdatePersonalAccessTokenRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId', {
      path: { tokenId: request.tokenId },
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify(request.body),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async updatePersonalAccessTokenComplete(
    request: T.UpdatePersonalAccessTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdatePersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId', {
      path: { tokenId: request.tokenId },
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async archivePersonalAccessTokenInit(
    request: T.ArchivePersonalAccessTokenRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId', {
      path: { tokenId: request.tokenId },
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'DELETE',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify({}),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async archivePersonalAccessTokenComplete(
    request: T.ArchivePersonalAccessTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ArchivePersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId', {
      path: { tokenId: request.tokenId },
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'DELETE',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async activatePersonalAccessTokenInit(
    request: T.ActivatePersonalAccessTokenRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId/activate', {
      path: { tokenId: request.tokenId },
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify({}),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async activatePersonalAccessTokenComplete(
    request: T.ActivatePersonalAccessTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ActivatePersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId/activate', {
      path: { tokenId: request.tokenId },
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deactivatePersonalAccessTokenInit(
    request: T.DeactivatePersonalAccessTokenRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId/deactivate', {
      path: { tokenId: request.tokenId },
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify({}),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async deactivatePersonalAccessTokenComplete(
    request: T.DeactivatePersonalAccessTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeactivatePersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId/deactivate', {
      path: { tokenId: request.tokenId },
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listServiceAccounts(): Promise<T.ListServiceAccountsResponse> {
    const path = buildPathAndQuery('/auth/service-accounts', {
      path: {},
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createServiceAccountInit(
    request: T.CreateServiceAccountRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/service-accounts', {
      path: {},
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'POST',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify(request.body),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async createServiceAccountComplete(
    request: T.CreateServiceAccountRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateServiceAccountResponse> {
    const path = buildPathAndQuery('/auth/service-accounts', {
      path: {},
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getServiceAccount(
    request: T.GetServiceAccountRequest
  ): Promise<T.GetServiceAccountResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId', {
      path: { serviceAccountId: request.serviceAccountId },
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updateServiceAccountInit(
    request: T.UpdateServiceAccountRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId', {
      path: { serviceAccountId: request.serviceAccountId },
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify(request.body),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async updateServiceAccountComplete(
    request: T.UpdateServiceAccountRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdateServiceAccountResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId', {
      path: { serviceAccountId: request.serviceAccountId },
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async archiveServiceAccountInit(
    request: T.ArchiveServiceAccountRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId', {
      path: { serviceAccountId: request.serviceAccountId },
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'DELETE',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify({}),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async archiveServiceAccountComplete(
    request: T.ArchiveServiceAccountRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ArchiveServiceAccountResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId', {
      path: { serviceAccountId: request.serviceAccountId },
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'DELETE',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async activateServiceAccountInit(
    request: T.ActivateServiceAccountRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery(
      '/auth/service-accounts/:serviceAccountId/activate',
      {
        path: { serviceAccountId: request.serviceAccountId },
        query: {},
      }
    )

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify({}),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async activateServiceAccountComplete(
    request: T.ActivateServiceAccountRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ActivateServiceAccountResponse> {
    const path = buildPathAndQuery(
      '/auth/service-accounts/:serviceAccountId/activate',
      {
        path: { serviceAccountId: request.serviceAccountId },
        query: {},
      }
    )

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deactivateServiceAccountInit(
    request: T.DeactivateServiceAccountRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery(
      '/auth/service-accounts/:serviceAccountId/deactivate',
      {
        path: { serviceAccountId: request.serviceAccountId },
        query: {},
      }
    )

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify({}),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async deactivateServiceAccountComplete(
    request: T.DeactivateServiceAccountRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeactivateServiceAccountResponse> {
    const path = buildPathAndQuery(
      '/auth/service-accounts/:serviceAccountId/deactivate',
      {
        path: { serviceAccountId: request.serviceAccountId },
        query: {},
      }
    )

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listServiceAccountTokens(
    request: T.ListServiceAccountTokensRequest
  ): Promise<T.ListServiceAccountTokensResponse> {
    const path = buildPathAndQuery(
      '/auth/service-accounts/:serviceAccountId/tokens',
      {
        path: { serviceAccountId: request.serviceAccountId },
        query: {},
      }
    )

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createServiceAccountTokenInit(
    request: T.CreateServiceAccountTokenRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId', {
      path: { serviceAccountId: request.serviceAccountId },
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'POST',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify(request.body),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async createServiceAccountTokenComplete(
    request: T.CreateServiceAccountTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateServiceAccountTokenResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId', {
      path: { serviceAccountId: request.serviceAccountId },
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getServiceAccountToken(
    request: T.GetServiceAccountTokenRequest
  ): Promise<T.GetServiceAccountTokenResponse> {
    const path = buildPathAndQuery(
      '/auth/service-accounts/:serviceAccountId/tokens/:tokenId',
      {
        path: {
          serviceAccountId: request.serviceAccountId,
          tokenId: request.tokenId,
        },
        query: {},
      }
    )

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updateServiceAccountTokenInit(
    request: T.UpdateServiceAccountTokenRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery(
      '/auth/service-accounts/:serviceAccountId/tokens/:tokenId',
      {
        path: {
          serviceAccountId: request.serviceAccountId,
          tokenId: request.tokenId,
        },
        query: {},
      }
    )

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify(request.body),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async updateServiceAccountTokenComplete(
    request: T.UpdateServiceAccountTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdateServiceAccountTokenResponse> {
    const path = buildPathAndQuery(
      '/auth/service-accounts/:serviceAccountId/tokens/:tokenId',
      {
        path: {
          serviceAccountId: request.serviceAccountId,
          tokenId: request.tokenId,
        },
        query: {},
      }
    )

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async archiveServiceAccountTokenInit(
    request: T.ArchiveServiceAccountTokenRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery(
      '/auth/service-accounts/:serviceAccountId/tokens/:tokenId',
      {
        path: {
          serviceAccountId: request.serviceAccountId,
          tokenId: request.tokenId,
        },
        query: {},
      }
    )

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'DELETE',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify({}),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async archiveServiceAccountTokenComplete(
    request: T.ArchiveServiceAccountTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ArchiveServiceAccountTokenResponse> {
    const path = buildPathAndQuery(
      '/auth/service-accounts/:serviceAccountId/tokens/:tokenId',
      {
        path: {
          serviceAccountId: request.serviceAccountId,
          tokenId: request.tokenId,
        },
        query: {},
      }
    )

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'DELETE',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async activateServiceAccountTokenInit(
    request: T.ActivateServiceAccountTokenRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery(
      '/auth/service-accounts/:serviceAccountId/tokens/:tokenId/activate',
      {
        path: {
          serviceAccountId: request.serviceAccountId,
          tokenId: request.tokenId,
        },
        query: {},
      }
    )

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify({}),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async activateServiceAccountTokenComplete(
    request: T.ActivateServiceAccountTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ActivateServiceAccountTokenResponse> {
    const path = buildPathAndQuery(
      '/auth/service-accounts/:serviceAccountId/tokens/:tokenId/activate',
      {
        path: {
          serviceAccountId: request.serviceAccountId,
          tokenId: request.tokenId,
        },
        query: {},
      }
    )

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deactivateServiceAccountTokenInit(
    request: T.DeactivateServiceAccountTokenRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery(
      '/auth/service-accounts/:serviceAccountId/tokens/:tokenId/deactivate',
      {
        path: {
          serviceAccountId: request.serviceAccountId,
          tokenId: request.tokenId,
        },
        query: {},
      }
    )

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify({}),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async deactivateServiceAccountTokenComplete(
    request: T.DeactivateServiceAccountTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeactivateServiceAccountTokenResponse> {
    const path = buildPathAndQuery(
      '/auth/service-accounts/:serviceAccountId/tokens/:tokenId/deactivate',
      {
        path: {
          serviceAccountId: request.serviceAccountId,
          tokenId: request.tokenId,
        },
        query: {},
      }
    )

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listUsers(): Promise<T.ListUsersResponse> {
    const path = buildPathAndQuery('/auth/users', {
      path: {},
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createUserInit(
    request: T.CreateUserRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/users', {
      path: {},
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'POST',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify(request.body),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async createUserComplete(
    request: T.CreateUserRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateUserResponse> {
    const path = buildPathAndQuery('/auth/users', {
      path: {},
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getUser(request: T.GetUserRequest): Promise<T.GetUserResponse> {
    const path = buildPathAndQuery('/auth/users/:userId', {
      path: { userId: request.userId },
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updateUserInit(
    request: T.UpdateUserRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/users/:userId', {
      path: { userId: request.userId },
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify(request.body),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async updateUserComplete(
    request: T.UpdateUserRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdateUserResponse> {
    const path = buildPathAndQuery('/auth/users/:userId', {
      path: { userId: request.userId },
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async archiveUserInit(
    request: T.ArchiveUserRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/users/:userId', {
      path: { userId: request.userId },
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'DELETE',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify({}),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async archiveUserComplete(
    request: T.ArchiveUserRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ArchiveUserResponse> {
    const path = buildPathAndQuery('/auth/users/:userId', {
      path: { userId: request.userId },
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'DELETE',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async activateUserInit(
    request: T.ActivateUserRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/users/:userId/activate', {
      path: { userId: request.userId },
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify({}),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async activateUserComplete(
    request: T.ActivateUserRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ActivateUserResponse> {
    const path = buildPathAndQuery('/auth/users/:userId/activate', {
      path: { userId: request.userId },
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deactivateUserInit(
    request: T.DeactivateUserRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/users/:userId/deactivate', {
      path: { userId: request.userId },
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify({}),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async deactivateUserComplete(
    request: T.DeactivateUserRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeactivateUserResponse> {
    const path = buildPathAndQuery('/auth/users/:userId/deactivate', {
      path: { userId: request.userId },
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listApplications(): Promise<T.ListApplicationsResponse> {
    const path = buildPathAndQuery('/auth/apps', {
      path: {},
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createApplicationInit(
    request: T.CreateApplicationRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/apps', {
      path: {},
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'POST',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify(request.body),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async createApplicationComplete(
    request: T.CreateApplicationRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps', {
      path: {},
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getApplication(
    request: T.GetApplicationRequest
  ): Promise<T.GetApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId', {
      path: { appId: request.appId },
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updateApplicationInit(
    request: T.UpdateApplicationRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId', {
      path: { appId: request.appId },
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify(request.body),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async updateApplicationComplete(
    request: T.UpdateApplicationRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdateApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId', {
      path: { appId: request.appId },
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async archiveApplicationInit(
    request: T.ArchiveApplicationRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId', {
      path: { appId: request.appId },
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'DELETE',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify({}),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async archiveApplicationComplete(
    request: T.ArchiveApplicationRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ArchiveApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId', {
      path: { appId: request.appId },
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'DELETE',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async activateApplicationInit(
    request: T.ActivateApplicationRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId/activate', {
      path: { appId: request.appId },
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify({}),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async activateApplicationComplete(
    request: T.ActivateApplicationRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ActivateApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId/activate', {
      path: { appId: request.appId },
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deactivateApplicationInit(
    request: T.DeactivateApplicationRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId/deactivate', {
      path: { appId: request.appId },
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify({}),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async deactivateApplicationComplete(
    request: T.DeactivateApplicationRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeactivateApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId/deactivate', {
      path: { appId: request.appId },
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listApplicationTokens(
    request: T.ListApplicationTokensRequest
  ): Promise<T.ListApplicationTokensResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId/tokens', {
      path: { appId: request.appId },
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createApplicationTokenInit(
    request: T.CreateApplicationTokenRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId/tokens', {
      path: { appId: request.appId },
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'POST',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify(request.body),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async createApplicationTokenComplete(
    request: T.CreateApplicationTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateApplicationTokenResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId/tokens', {
      path: { appId: request.appId },
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getApplicationToken(
    request: T.GetApplicationTokenRequest
  ): Promise<T.GetApplicationTokenResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId/tokens/:tokenId', {
      path: { appId: request.appId, tokenId: request.tokenId },
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updateApplicationTokenInit(
    request: T.UpdateApplicationTokenRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId/tokens/:tokenId', {
      path: { appId: request.appId, tokenId: request.tokenId },
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify(request.body),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async updateApplicationTokenComplete(
    request: T.UpdateApplicationTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdateApplicationTokenResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId/tokens/:tokenId', {
      path: { appId: request.appId, tokenId: request.tokenId },
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async archiveApplicationTokenInit(
    request: T.ArchiveApplicationTokenRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId/token/:tokenId', {
      path: { appId: request.appId, tokenId: request.tokenId },
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'DELETE',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify({}),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async archiveApplicationTokenComplete(
    request: T.ArchiveApplicationTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ArchiveApplicationTokenResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId/token/:tokenId', {
      path: { appId: request.appId, tokenId: request.tokenId },
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'DELETE',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async activateApplicationTokenInit(
    request: T.ActivateApplicationTokenRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery(
      '/auth/apps/:appId/token/:tokenId/activate',
      {
        path: { appId: request.appId, tokenId: request.tokenId },
        query: {},
      }
    )

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify({}),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async activateApplicationTokenComplete(
    request: T.ActivateApplicationTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ActivateApplicationTokenResponse> {
    const path = buildPathAndQuery(
      '/auth/apps/:appId/token/:tokenId/activate',
      {
        path: { appId: request.appId, tokenId: request.tokenId },
        query: {},
      }
    )

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deactivateApplicationTokenInit(
    request: T.DeactivateApplicationTokenRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery(
      '/auth/apps/:appId/token/:tokenId/deactivate',
      {
        path: { appId: request.appId, tokenId: request.tokenId },
        query: {},
      }
    )

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify({}),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async deactivateApplicationTokenComplete(
    request: T.DeactivateApplicationTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeactivateApplicationTokenResponse> {
    const path = buildPathAndQuery(
      '/auth/apps/:appId/token/:tokenId/deactivate',
      {
        path: { appId: request.appId, tokenId: request.tokenId },
        query: {},
      }
    )

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createUserRecovery(
    request: T.CreateUserRecoveryRequest
  ): Promise<T.CreateUserRecoveryResponse> {
    const path = buildPathAndQuery('/auth/recover/user', {
      path: {},
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
