import EjucationBox from "../ejucation-components/EjucationBox"

const Ejucation = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-neutral-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <EjucationBox
          title="Web Design Pack"
          desc="html, css, bootstrap, sass, javascript, git and github"
          courseDur="150"
          score="100"
          src="/assets/images/ejucation/web-design-pack.webp"
          alt="web desgin pack course"
        />
        <EjucationBox
          title="React Js"
          desc="react js, node js"
          courseDur="40"
          score="89"
          src="/assets/images/ejucation/reactjs.webp"
          alt="react js course"
        />
        <EjucationBox
          title="Photoshop and Illustrator"
          desc="adobe photoshop and adobe illustrator"
          courseDur="80"
          score="100"
          src="/assets/images/ejucation/ps-ai.webp"
          alt="photoshop and illustrator course"
        />
      </div>
    </div>
  )
}

export default Ejucation