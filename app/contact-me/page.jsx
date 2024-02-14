import ContactForm from '../components/contactform'

export const metadata = {
    title: 'MP | Contact Me',
    description: "Contact Mateo using the form",
  }

export default function Page() {
    return (
        <>
            <ContactForm></ContactForm>
        </>
    )
}