import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-white flex flex-col gap-4">

      <div className="flex justify-between px-20 py-6">

        <div className="flex flex-col gap-4">
          <h3 className="font-sf-pro font-semibold text-md text-black">Programs and events</h3>
            <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-500 font-sf-pro hover:text-black transition-all duration-300 hover:cursor-pointer hover:text-md hover:font-medium">Own Events</p>
            <p className="text-sm text-slate-500 font-sf-pro hover:text-black transition-all duration-300 hover:cursor-pointer hover:text-md hover:font-medium">Own Institutes</p>
            <p className="text-sm text-slate-500 font-sf-pro hover:text-black transition-all duration-300 hover:cursor-pointer hover:text-md hover:font-medium">Own Courses</p>
            <p className="text-sm text-slate-500 font-sf-pro hover:text-black transition-all duration-300 hover:cursor-pointer hover:text-md hover:font-medium">Own Academy</p>
            <p className="text-sm text-slate-500 font-sf-pro hover:text-black transition-all duration-300 hover:cursor-pointer hover:text-md hover:font-medium">Own Learn</p>
            </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-sf-pro font-semibold text-md text-black">Our Community</h3>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-500 font-sf-pro hover:text-black transition-all duration-300 hover:cursor-pointer hover:text-md hover:font-medium">Own Speakers</p>
            <p className="text-sm text-slate-500 font-sf-pro hover:text-black transition-all duration-300 hover:cursor-pointer hover:text-md hover:font-medium">Own Organizers</p>
            <p className="text-sm text-slate-500 font-sf-pro hover:text-black transition-all duration-300 hover:cursor-pointer hover:text-md hover:font-medium">Own Thinkers</p>
            <p className="text-sm text-slate-500 font-sf-pro hover:text-black transition-all duration-300 hover:cursor-pointer hover:text-md hover:font-medium">Own Fellows</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-sf-pro font-semibold text-md text-black">Follow OWN</h3>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-500 font-sf-pro hover:text-black transition-all duration-300 hover:cursor-pointer hover:text-md hover:font-medium">Facebook</p>
            <p className="text-sm text-slate-500 font-sf-pro hover:text-black transition-all duration-300 hover:cursor-pointer hover:text-md hover:font-medium">Twitter</p>
            <p className="text-sm text-slate-500 font-sf-pro hover:text-black transition-all duration-300 hover:cursor-pointer hover:text-md hover:font-medium">Instagram</p>
            <p className="text-sm text-slate-500 font-sf-pro hover:text-black transition-all duration-300 hover:cursor-pointer hover:text-md hover:font-medium">OWN Academy</p>
            <p className="text-sm text-slate-500 font-sf-pro hover:text-black transition-all duration-300 hover:cursor-pointer hover:text-md hover:font-medium">Youtube</p>
            </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-sf-pro font-semibold text-md text-black">About</h3>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-500 font-sf-pro hover:text-black transition-all duration-300 hover:cursor-pointer hover:text-md hover:font-medium">Team</p>
            <p className="text-sm text-slate-500 font-sf-pro hover:text-black transition-all duration-300 hover:cursor-pointer hover:text-md hover:font-medium">Privacy Popcy</p>
            <p className="text-sm text-slate-500 font-sf-pro hover:text-black transition-all duration-300 hover:cursor-pointer hover:text-md hover:font-medium">Terms and Conditions</p>
            <p className="text-sm text-slate-500 font-sf-pro hover:text-black transition-all duration-300 hover:cursor-pointer hover:text-md hover:font-medium">Cookie Popcy</p>
            <p className="text-sm text-slate-500 font-sf-pro hover:text-black transition-all duration-300 hover:cursor-pointer hover:text-md hover:font-medium">Contact us</p>
        </div>
        </div>
        <div className="border-l-black border-2 "></div>

        <div className="flex flex-col gap-4">
          <div className="max-w-sm flex flex-col gap-6 ">
            <p className="text-md font-sf-pro">Join OWN Generation and Enable transformation and drive culture with lessons from the biggest thinkers in the world.</p>
            
            <a href="#" className="text-black font-sf-pro font-semibold hover:cursor-pointer underline hover:text-blue-500 transition-all duration:300">Learn More →</a>
            </div>

            <div className="logo">
              <img src={logo} alt="OWN Academy" />
            </div>

      
        </div>
      </div>
      
      <hr className="border-black opactiy-50"></hr>

      <div className="flex justify-between px-6 py-2 pb-4 items-center">
        <p className="text-sm text-black opacity-60 font-sf-pro font-medium">© 2022. The OWN GENERATION. All rights reserved.</p>
        <p className="text-sm text-black opacity-60 font-sf-pro font-medium ">Registered in HONG KONG & Wales. Company Number: 12345678.</p>
      </div>


    </footer>
  );
};

export default Footer;
