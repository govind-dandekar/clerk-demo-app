import { OrganizationSwitcher } from '@clerk/nextjs'

import HomeButton from '../components/ui/home-button'

export default function OrganizationSwitcherPage() {
  return (
    <>
    <div className="-mt-16 bg-blue-600 py-4 px-8 rounded-2xl">
        <OrganizationSwitcher 
            afterSelectOrganizationUrl="/"
        />
    </div>
    <HomeButton />
    </>

  )
}
