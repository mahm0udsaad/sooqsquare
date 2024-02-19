import { useTranslation } from "@/app/i18n";
import { CardHeader, CardContent, Card } from "@/components/ui/card";

export default async function Profile({ company, lng }) {
  const { t } = await useTranslation(lng, "jobs");

  return (
    <Card key="1" className="w-11/12">
      <CardHeader className="pb-0">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            {t("company_profile")}
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <img
              alt="Company Logo"
              className="rounded-lg object-contain border aspect-1/1"
              height="50"
              src={company?.logoUrl}
              style={{
                objectFit: "cover",
              }}
              width="100"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-bold">{company.name}</h1>
            <p className="text-gray-500 dark:text-gray-400">
              {company.industry}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 items-start gap-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold">{t("description_label")}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {company.description}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-4">
            <div className="flex items-center space-x-4">
              <MapPinIcon className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {company.city}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
