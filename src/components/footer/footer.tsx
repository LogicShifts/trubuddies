export default function Footer() {
  return (
    <>
      <footer className="h-48">
        <div className="bg-blue-600 text-white flex justify-center items-center flex-col text-center">
          <div className="flex justify-between self-center flex-row">
            <button
              className="m-1  hover:bg-blue-700 bg-white text-blue-500 px-4 py-2 rounded "
            >
              Join as a TruBuddy
            </button>
            <button
              className="m-1 rounded border border-white"
            >
              Support TruBuddies
            </button>
          </div>
          <div className="w-full px-3.5">
            <div className="w-full flex justify-between items-center flex-row mt-2">
              <div className="droptext">Company</div>
              <div className="text-left pl-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

              </div>
            </div>
            <div className="w-full flex justify-between items-center flex-row mt-2">
              <div className="droptext">Company</div>
              <div className="text-left pl-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

              </div>
            </div>
            <div className="w-full flex justify-between items-center flex-row mt-2">
              <div className="droptext">Company</div>
              <div className="text-left pl-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-600 h-48 text-center text-white flex justify-center items-center flex-col ">
          <div className="underline-offset-8">
            <a href="#" >
              Terms and Conditions
            </a>
          </div>
          <div >
            <a className="underline-offset-8" href="#" >
              Privace policy
            </a>
          </div>
          <div>© 2023 TruBuddies</div>
        </div>
      </footer>
    </>
  );
}
