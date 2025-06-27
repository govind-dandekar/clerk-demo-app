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