import Link from "next/link";

const SideBar = () =>{
    return(
        <div className="flex flex-col w-64 bg-white dark:bg-zinc-950">
        <div className="flex items-center justify-center h-14 border-b dark:border-gray-600">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Dashboard</h2>
        </div>
        <div className="flex flex-col gap-4 px-4 py-2 mt-5">
          <Link className="flex gap-3 items-center text-gray-700 dark:text-gray-200 hover:opacity-50" href="/reports">
              <ViewIcon className="w-6 h-6 text-gray-500 dark:text-gray-300" />
              <span className="mx-3">Reports</span>
          </Link>
          <Link className="flex gap-3 items-center text-gray-700 dark:text-gray-200 hover:opacity-50" href="/myAds">
              <AtSignIcon className="w-6 h-6 text-gray-500 dark:text-gray-300" />
              <span className="mx-3">My Ads</span>
          </Link>
        </div>
      </div>
    )
}


function AtSignIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
      </svg>
    )
  }
  
  
  function ViewIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
        <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
        <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
      </svg>
    )
  }

  
export default SideBar ;