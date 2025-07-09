import TextField from "../customTextField"

const Footer = () => {
    return (
        <>

            <footer className="flex  flex-col gap-10 border-t h-auto px-10 pt-10 tracking-wider">
                <div className="flex flex-wrap  justify-center gap-10 w-full h-full">
                    <div className="px-2 flex flex-col m-auto gap-2 items-center">
                        <span className="font-bold font-oswald text-2xl text-foreground">
                            PASS ALONG
                        </span>
                        <span className="inline-flex  justify-center">
                            <a className="text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                    <div className="px-2 flex flex-col gap-2 m-auto">
                        <span className="font-semibold font-oswald text-xl text-foreground mb-1">
                            Contact Us
                        </span>
                        <span className="text-sm ">
                            Dikshantktwl321@gmail.com
                        </span>
                        <span className="text-sm">
                            43600, Kalanki, Kathmandu
                        </span>
                        <span className="text-sm">
                            +977 9843819707
                        </span>
                    </div>
                    <div className="px-2 flex flex-col gap-2 m-auto">
                        <span className="font-semibold font-oswald text-xl text-foreground mb-1">
                            Subscribe
                        </span>
                        <span className="text-sm ">
                            Subscribe to our new letter?
                        </span>
                        <TextField
                            name="email"
                            label="Email"
                            placeholder="Email"
                            className="h-5"
                        />

                    </div>
                </div>
                <div className="border-t border-inactive/50 h-[5rem]">
                    <div className="font-nunito">
                        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                            <p className="text-gray-500 text-sm text-center sm:text-left">© 2025 Pass Along —
                                <a href="https://www.linkedin.com/in/dikshant-katwal-b3751026a/" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Dikshantktwl</a>
                            </p>
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </footer>

        </>

    )

}
export default Footer



