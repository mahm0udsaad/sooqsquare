
"use client"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function ReportPage({ shop }) {
  const shopAds = shop.ads.length 
  const shopTotalViews = shop.ads.reduce((acc, ad) => acc + ad.views, 0) 
  const shopTotalAdsClicks = shop.ads.reduce((acc, ad) => acc + ad.clicks, 0) 
 const shopTotalVavoritedAds = shop.ads.reduce((acc, ad) => acc + (ad.favoritedBy ? ad.favoritedBy.length : 0), 0) 
 const shopCTR = shopTotalViews > 0 ? (shopTotalAdsClicks / shopTotalViews) * 100 : 0;
 const shopInactiveAds = shop.ads.filter(ad => ad.adStatus === 'inActive').length;

  return (
      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 dark:bg-zinc-900">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <Card className="bg-green-100 dark:bg-green-700 p-4">
                <h4 className="text-lg font-semibold text-green-800 dark:text-green-200">Total Views</h4>
                <p className="text-2xl font-bold text-green-900 dark:text-green-300">{shopTotalViews}</p>
              </Card>
              <Card className="bg-blue-100 dark:bg-blue-700 p-4">
                <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Total Clicks</h4>
                <p className="text-2xl font-bold text-blue-900 dark:text-blue-300">{shopTotalAdsClicks}</p>
              </Card>
              <Card className="bg-yellow-100 dark:bg-yellow-700 p-4">
                <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">CTR</h4>
                <p className="text-2xl font-bold text-yellow-900 dark:text-yellow-300">{shopCTR.toFixed(0)}%</p>
              </Card>
              <Card className="bg-red-100 dark:bg-red-700 p-4">
                <h4 className="text-lg font-semibold text-red-800 dark:text-red-200">Inactive Ads</h4>
                <p className="text-2xl font-bold text-red-900 dark:text-red-300">{shopInactiveAds}</p>
              </Card>
            </div>
            <h3 className="text-gray-700 text-3xl font-medium dark:text-gray-200">Reports</h3>
            <div className="mt-4">
            <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">Date</TableHead>
                <TableHead className="text-right">Views</TableHead>
                <TableHead className="text-right">Clicks</TableHead>
                <TableHead className="text-right">CTR</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {shop.ads.map((ad, index) => (
                <TableRow key={index}>
                  <TableCell>{ad.createdAt.toLocaleDateString()}</TableCell>
                  <TableCell>{ad.views}</TableCell>
                  <TableCell>{ad.clicks}</TableCell>
                  <TableCell>{((ad.clicks / ad.views) * 100).toFixed(2)}%</TableCell>
                </TableRow>
              ))}
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
                <TableHead className="text-right">Title</TableHead>
                <TableHead className="text-right">Status</TableHead>
                <TableHead className="text-right">Views</TableHead>
                <TableHead className="text-right">Clicks</TableHead>
                <TableHead className="text-right">CTR</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {shop.ads.map((ad, index) => (
                <TableRow key={index}>
                  <TableCell>{ad.name}</TableCell>
                  <TableCell>{ad.adStatus}</TableCell>
                  <TableCell>{ad.views}</TableCell>
                  <TableCell>{ad.clicks}</TableCell>
                  <TableCell>{((ad.clicks / ad.views) * 100).toFixed(2)}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

            </div>
          </div>
        </main>
      </div>
  )
}
