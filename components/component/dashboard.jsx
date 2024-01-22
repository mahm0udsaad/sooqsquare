
"use client"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100 dark:bg-zinc-950">
      <div className="flex flex-col w-64 bg-white dark:bg-zinc-950">
        <div className="flex items-center justify-center h-14 border-b dark:border-gray-600">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Dashboard</h2>
        </div>
        <div className="flex flex-col px-4 py-2 mt-5">
          <Link className="text-gray-700 dark:text-gray-200" href="#">
            <button className="flex items-center mt-4 py-2 px-6 bg-opacity-25 hover:bg-gray-200 ">
              <ViewIcon className="w-6 h-6 text-gray-500 dark:text-gray-300" />
              <span className="mx-3">Reports</span>
            </button>
          </Link>
          <Link className="text-gray-700 dark:text-gray-200" href="#">
            <button className="flex items-center mt-4 py-2 px-6 bg-opacity-25 hover:bg-gray-200 ">
              <AtSignIcon className="w-6 h-6 text-gray-500 dark:text-gray-300" />
              <span className="mx-3">My Ads</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 dark:bg-zinc-900">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <Card className="bg-green-100 dark:bg-green-700 p-4">
                <h4 className="text-lg font-semibold text-green-800 dark:text-green-200">Total Views</h4>
                <p className="text-2xl font-bold text-green-900 dark:text-green-300">4,500</p>
              </Card>
              <Card className="bg-blue-100 dark:bg-blue-700 p-4">
                <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Total Clicks</h4>
                <p className="text-2xl font-bold text-blue-900 dark:text-blue-300">250</p>
              </Card>
              <Card className="bg-yellow-100 dark:bg-yellow-700 p-4">
                <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">CTR</h4>
                <p className="text-2xl font-bold text-yellow-900 dark:text-yellow-300">5.5%</p>
              </Card>
              <Card className="bg-red-100 dark:bg-red-700 p-4">
                <h4 className="text-lg font-semibold text-red-800 dark:text-red-200">Inactive Ads</h4>
                <p className="text-2xl font-bold text-red-900 dark:text-red-300">1</p>
              </Card>
            </div>
            <h3 className="text-gray-700 text-3xl font-medium dark:text-gray-200">Reports</h3>
            <div className="mt-4">
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Clicks</TableHead>
                      <TableHead>CTR</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>01/01/2024</TableCell>
                      <TableCell>4,000</TableCell>
                      <TableCell>200</TableCell>
                      <TableCell>5%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>01/02/2024</TableCell>
                      <TableCell>4,500</TableCell>
                      <TableCell>250</TableCell>
                      <TableCell>5.5%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>01/03/2024</TableCell>
                      <TableCell>5,000</TableCell>
                      <TableCell>300</TableCell>
                      <TableCell>6%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
            </div>
            <h3 className="text-gray-700 text-3xl font-medium dark:text-gray-200 mt-8">My Ads</h3>
            <div className="mt-4">
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Clicks</TableHead>
                      <TableHead>CTR</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Ad 1</TableCell>
                      <TableCell>Active</TableCell>
                      <TableCell>4,000</TableCell>
                      <TableCell>200</TableCell>
                      <TableCell>5%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Ad 2</TableCell>
                      <TableCell>Active</TableCell>
                      <TableCell>4,500</TableCell>
                      <TableCell>250</TableCell>
                      <TableCell>5.5%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Ad 3</TableCell>
                      <TableCell>Inactive</TableCell>
                      <TableCell>5,000</TableCell>
                      <TableCell>300</TableCell>
                      <TableCell>6%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
            </div>
          </div>
        </main>
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
