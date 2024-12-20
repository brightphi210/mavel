import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";


const Footer = ({isDark}:any) => {

  const dark2 = 'text-white bg-gradient-to-b from-neutral-900 to-black'
  const light2 = 'bg-neutral-50 text-neutral-900'


  return (
    <div className={` lg:py-[10rem] py-[5rem] pb-[10rem] lg:px-[25rem] px-5 ${isDark === true ? dark2 : light2}`}>
      <h2 className='special text-xl text-center  flex items-center gap-4 m-auto justify-center'>
        Breathing, Building, and Brainstorming.
      </h2>

      <p className="text-center text-sm pt-10 text-neutral-400">Get in touch</p>
      <ul className="lg:w-full w-[90%] px-5 m-auto justify-center flex items-center gap-10 mt-10">
        <a href="https://www.linkedin.com/in/marvellous-emmanuel-25b394223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <li className="hover:bg-neutral-800 hover:text-neutral-100 hover:border-none hover:transition-all ease-in-out delay-75 flex rounded-full lg:p-5 p-3.5 lg:text-xl text-base bg-none border border-neutral-400"><FaLinkedin /></li>
        </a>

        <a href="https://x.com/Blachboy406?t=2apaIXZ_AhK0m7dpQCQwyw&s=09">
          <li className="hover:bg-neutral-800 hover:text-neutral-100 hover:border-none hover:transition-all ease-in-out delay-75 flex rounded-full lg:p-5 p-3.5 lg:text-xl text-base bg-none border border-neutral-400"><FaXTwitter /></li>
        </a>


        <a href="https://www.facebook.com/share/12Brr5GF47G/">
          <li className="hover:bg-neutral-800 hover:text-neutral-100 hover:border-none hover:transition-all ease-in-out delay-75 flex rounded-full lg:p-5 p-3.5 lg:text-xl text-base bg-none border border-neutral-400"><FaFacebookSquare /></li>
        </a>

        <a href="https://www.instagram.com/maveldesigns_406/profilecard/?igsh=MTcxY3UxdHk4NzU2cA==">
          <li className="hover:bg-neutral-800 hover:text-neutral-100 hover:border-none hover:transition-all ease-in-out delay-75 flex rounded-full lg:p-5 p-3.5 lg:text-xl text-base bg-none border border-neutral-400"><BiLogoInstagramAlt /></li>
        </a>

      </ul>


      <p className="text-center text-xs pt-16">Created By @brightcode - <a href="https://brightcode.vercel.app/" className="text-green-300">Contact Me</a></p>
    </div>
  )
}

export default Footer