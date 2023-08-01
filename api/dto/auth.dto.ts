export interface LoginFormDto {
  email: string
  password: string
}

export interface LoginResponseDto {
  token: string
}

export interface RegisterFormDto {
  firstname: string
  email: string
  password: string
}

export interface RegisterResponseDto {
  token: string
}
