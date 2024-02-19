import { updateCompany } from "../../../action";
import { SubmitBtn } from "../components/btns/submit";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { useTranslation } from "@/app/i18n";
import { countriesWithCities } from "@/data/staticData";
import { Textarea } from "@/components/ui/textarea";
import LogoForm from "../components/companyLogo";

const CompanyForm = async ({
  currentUserCountry,
  companyData,
  lng,
  searchParams,
}) => {
  const { t } = await useTranslation(lng, "jobs");

  const userCountry = countriesWithCities.find(
    (country) => country.country === currentUserCountry
  );
  const cities = userCountry?.cities;

  return (
    <form action={updateCompany} className="max-w-md mx-auto mt-8 space-y-4">
      <div className="w-full flex items-center justify-center">
        <LogoForm companyLogo={companyData.logoUrl} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Input
          className="hidden"
          type="text"
          name="companyId"
          id="companyId"
          value={companyData.id}
        />
        <Input
          className="hidden"
          type="text"
          name="logo"
          id="logo"
          value={companyData.logoUrl || searchParams.logo}
        />
        <div className="space-y-2">
          <Label className="block">Company Name:</Label>
          <Input
            type="text"
            name="companyName"
            defaultValue={companyData.name}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="space-y-2">
          <Label className="block">Phone:</Label>
          <Input
            type="text"
            name="phone"
            defaultValue={companyData.phone}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="city">{t("city_label")}</Label>
          <Select defaultValue={companyData.city} name="city">
            <SelectTrigger>
              <SelectValue placeholder={companyData.city} />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city, i) => (
                <SelectItem key={i} value={city}>
                  {t(`${city}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className=" space-y-2">
          <Label htmlFor="industry">{t("industry_label")}</Label>
          <Select defaultValue={companyData.industry} name="industry">
            <SelectTrigger className="">
              <SelectValue placeholder={companyData.industry} />
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
          defaultValue={companyData.description}
          name="description"
          id="description"
          placeholder={t("description_label")}
        />
      </div>
      <SubmitBtn />
    </form>
  );
};

export default CompanyForm;
