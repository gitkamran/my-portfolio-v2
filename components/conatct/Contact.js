import ContactList from "./ContactList";
import FormContact from "./FormContact";

const ContactComp = () => {
  return (
    <div className="flex items-center justify-center h-full max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl px-4 md:px-0 mx-auto">
      <div className="my-14 md:my-20 w-full flex flex-col gap-4">

      <ContactList />
      <FormContact />
      </div>
    </div>
  );
};

export default ContactComp;
