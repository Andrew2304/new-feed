export interface GetAccountOtpRequest {
  emailAddress: "string"
  referCode: "string"
}

export interface GetAccountOtpResponse {
  status: number
}

export interface VerifyAccountOtpRequest {
  otp: string
  type: "SignUp" | "Login" | "Profile" | "Password" | "ResetPassword"
  emailAddress: string
}

export interface VerifyAccountOtpResponse {
  otp: "string"
}

export interface SignUpRequest {
  username: string
  password: string
  otp: string
  emailAddress: string
}

export interface SignUpResponse {
  otp: string
}

export interface LoginRequest {
  account: string
  password: string
}

export interface LoginResponse {
  status: number
}

export interface ForgotPassRequest {
  email: string
}

export interface VerifyOTPPassRequest {
  otp: string
}
export interface ChangePassRequest {
  password: string
}
export interface ForgotPassResponse {
  status: number
}

export interface ChangePassRequest {
  email: string,
  otp: string,
  password: string
}

export interface GetAuthRequest {
  otp: string
  account: string
}

export interface GetAuthResponse {
  accessToken: string
}

export interface CheckAccountRequest {
  emailAddress?: string
  username?: string
}

export interface CheckAccountResponse {
  otp: string
}

export interface GetAccountRequest { }

export interface GetAccountResponse {
  userEkyc?: any;
}

export interface CreateNftRequest {
  collectionId: number
  name: string
  firstAuthorshipFee: number
  description: string
  attributes: Attribute[]
  hiddenContent: string
  file: string
}

export interface CreateNftResponse {
  id: number
}

export interface Attribute {
  name: string
  value: string
}

export interface GetAccountResponse {
  id: number
  emailAddress: string
  username: string
  phoneNumber: string
  imageProfile: string
  referCode: string
  coverProfile: string
  dateCreate: string
}
