
"use client"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function Dashboard() {
  return (
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
  )
}
