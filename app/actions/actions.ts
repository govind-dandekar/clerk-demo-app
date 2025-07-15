'use server'

import { auth, reverificationError } from '@clerk/nextjs/server'

export const singleFactorAction = async () => {
  const { has } = await auth.protect()

  // Check if the user has *not* verified their credentials within the past 10 minutes
  const shouldUserRevalidate = !has({ reverification: 'strict' })

  // If the user hasn't reverified, return an error with the matching configuration (e.g. `strict`)
  if (shouldUserRevalidate) {
    return reverificationError('strict')
  }

  // If the user has verified credentials, return a successful response
  return { success: true }
}

export const multiFactorAction = async () => {
  const { has } = await auth.protect()

  // Check if the user has *not* verified their credentials within the past 10 minutes
  const shouldUserRevalidate = !has({ reverification: 'strict_mfa' })

  // If the user hasn't reverified, return an error with the matching configuration (e.g. `strict`)
  if (shouldUserRevalidate) {
    return reverificationError('strict_mfa')
  }

  // If the user has verified credentials, return a successful response
  return { success: true }
}

type SessionVerificationLevel = "first_factor" | "second_factor" | "multi_factor"
type SessionVerificationTypes = 'strict_mfa' | 'strict' | 'moderate' | 'lax'

type ReverificationConfig =
  | SessionVerificationTypes
  | {
      level: SessionVerificationLevel,
      afterMinutes: number
    }

const secondFactorAuthConfig: ReverificationConfig = {
  level: "second_factor",
  afterMinutes: 3
}

export const secondFactorAction = async () => {
  const { has } = await auth.protect()

  const shouldUserRevalidate = !has({reverification: secondFactorAuthConfig})

  // If the user hasn't reverified, return an error with the matching configuration (e.g. `strict`)
  if (shouldUserRevalidate) {
    return reverificationError(secondFactorAuthConfig);
  }

  // If the user has verified credentials, return a successful response
  return { success: true }
}