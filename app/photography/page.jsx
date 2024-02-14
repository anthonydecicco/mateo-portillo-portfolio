import dynamic from 'next/dynamic'

export const metadata = {
    title: 'MP | Photography',
    description: "Welcome to Mateo's page of photographs.",
  }

const Photography = dynamic(() => import('../components/photography'), { ssr: false })
//Because "window" is being used, which is a browser-only API, there will be a mismatch
//between React tree server-rendered HTML and React tree first-browser-rendered HTML.

//We must disable server-side rendering in order to utilize "window" to accurately render
//the correct number of columns based on a user's initial window width (in pixels).

export default function Page() {

    return (
        <>
            <Photography></Photography>
        </>
    )
}