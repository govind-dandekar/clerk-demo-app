import { OrganizationSwitcher } from '@clerk/nextjs'

export default function OrganizationSwitcherPage() {
  return (
    <div className="-mt-16 bg-blue-600 py-4 px-8 rounded-2xl">
        <OrganizationSwitcher 
            afterSelectOrganizationUrl="/"
            appearance={{
              elements: {
                formButtonPrimary: {
                  fontSize: 18,
                },
              },
            }}
        />
    </div>
  )
}
