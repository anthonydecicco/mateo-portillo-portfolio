import '/public/globals.css'
import NavBar from './components/navbar'
import Socials from "./components/socials"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-font">
        <NavBar></NavBar>
        <main>
          {children}
        </main>
        <Socials></Socials>
        <footer className="h-10 text-xs w-full text-center align-bottom whitespace-pre bottom-0">Website designed by Anthony De Cicco    |    2024</footer>
      </body>
    </html>
  )
}
