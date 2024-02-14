import dynamic from 'next/dynamic'

export const metadata = {
    title: 'MP | Photography',
    description: "Welcome to Mateo's page of photographs.",
  }

const Photography = dynamic(() => import('../components/photography'), { ssr: false })

export default function Page() {

    return (
        <>
            <Photography></Photography>
        </>
    )
}