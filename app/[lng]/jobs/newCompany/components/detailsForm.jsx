import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createCompany } from "../../action";
import { useTranslation } from "@/app/i18n";
import { countriesWithCities } from "@/data/staticData";
import { SaveBtn } from "../components/btns/saveBtn";
import LogoForm from "../../(jobsDashboard)/dashboard/components/companyLogo";

export default async function DetailsForm({ user, lng, searchParams }) {
  const { t } = await useTranslation(lng, "jobs");
  const userCountry = countriesWithCities.find(
    (country) => country.country === user.country
  );
  const cities = userCountry?.cities;

  return (
    <form action={createCompany}>
      <input
        type="text"
        name="userId"
        id="userId"
        className="hidden"
        value={user?.id}
      />
      <input
        type="text"
        name="logo"
        id="logo"
        className="hidden"
        value={searchParams?.logo}
      />

      <div className="space-y-2 pb-6 flex flex-col w-full items-center justify-center">
        <h2 className="text-3xl font-bold">{t("company_details_title")}</h2>
        <p className="text-gray-500 dark:text-gray-400">
          {t("company_details_description")}
        </p>
      </div>
      <div className="w-full flex items-center justify-center">
        <LogoForm user={user} />
      </div>
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="space-y-2">
          <Label htmlFor="company-name">{t("company_name_label")}</Label>
          <Input
            name="companyName"
            id="companyName"
            placeholder={t("company_name_label")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">{t("phone_label")}</Label>
          <Input id="phone" name="phone" placeholder={t("phone_label")} />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex w-full gap-4">
          <div className="w-1/2 space-y-2">
            <Label htmlFor="city">{t("city_label")}</Label>
            <Select name="city">
              <SelectTrigger className="">
                <SelectValue placeholder={t("select_city_placeholder")} />
              </SelectTrigger>
              <SelectContent>
                {cities?.map((city, i) => (
                  <SelectItem key={i} value={city}>
                    {t(`${city}`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-1/2 space-y-2">
            <Label htmlFor="industry">{t("industry_label")}</Label>
            <Select name="industry">
              <SelectTrigger className="">
                <SelectValue placeholder={t("select_industry_placeholder")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tech">Technology</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="education">Education</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">{t("description_label")}</Label>
          <Textarea
            name="description"
            id="description"
            placeholder={t("description_label")}
          />
        </div>
        <div className="flex  w-full mt-3">
          <SaveBtn text={t("save_button_text")} />
        </div>
      </div>
    </form>
  );
}
