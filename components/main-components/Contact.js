import ContactList from "../contact-components/ContactList"
import FormContact from "../contact-components/FormContact"

const Contact = () => {
  return (
    <div className="flex items-center gap-4 justify-center w-full min-h-screen bg-neutral-100 px-4 md:px-0">
      <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[40%] space-y-2">
        <ContactList />
        <FormContact />
      </div>
    </div>
  )
}

export default Contact