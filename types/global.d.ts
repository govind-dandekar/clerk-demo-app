export {}

declare global {
  interface ClerkAuthorization {
    permission: ''
    role: 'org:admin' | 'org:member'
  }
}

declare global {
  interface CustomJwtSessionClaims {
    orgRole?: string
  }
}