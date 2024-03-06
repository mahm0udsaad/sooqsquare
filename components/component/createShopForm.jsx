"use client";
import { Button } from "@/components/ui/button";
import {
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
  DrawerHeader,
  DrawerContent,
  Drawer,
  DrawerClose,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { LoadingSpinner } from "@/components/loading-spiner";
import { Textarea } from "@/components/ui/textarea";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { useRef, useState } from "react";
import upload from "@/app/[lng]/(traderDashboard)/dashboard/myShop/action";
import { createShop } from "@/app/[lng]/(traderDashboard)/actions";
import {
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useDarkMode } from "@/context/darkModeContext";
import { useTranslation } from "@/app/i18n/client";
import { countriesWithCities } from "@/data/staticData";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuItem,
  DropdownMenuSubContent,
  DropdownMenuSub,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { getLocation } from "@/helper/location";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";

const CreateShopButton = ({ user, lng }) => {
  const [shopImage, setShopImage] = useState(null);
  const { t } = useTranslation(lng, "translation");
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting, isSubmitted, isSubmitSuccessful },
  } = useForm();
  const { setConfettiActive } = useDarkMode();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const drawerCloseRef = useRef(null);
  const router = useRouter();
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    try {
      if (!file) {
        throw new Error("No file uploaded");
      }

      const formData = new FormData();
      formData.append("file", file);

      const uploadResult = await upload(formData);

      if (uploadResult && uploadResult.adImage) {
        setShopImage(uploadResult.adImage);
        setValue("shopImage", uploadResult.adImage);
        toast({
          title: "Image Uploaded Successfully",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your Image dimensions.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your Image dimensions.",
      });
    }
  };

  const onSubmit = async (data) => {
    try {
      if (!data.shopName || !data.shopImage) {
        return;
      }

      const shop = await createShop(user.id, data);
      if (shop) {
        drawerCloseRef.current.click();
        setConfettiActive(true);
        toast({
          title: "Shop Created Successfully",
        });
        router.push(`/dashboard/myShopView/${shop.id}`);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your Internet.",
      });
    }
  };
  const handleShopCityChange = (city, country) => {
    setValue("city", city);
    setValue("country", country);
  };
  const handleButtonClick = async () => {
    try {
      setLoading(true);
      const userLocation = await getLocation();

      setValue("city", userLocation.city);
      setValue("country", userLocation.countryName);
    } catch (error) {
      console.error("Error getting location:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-md text-white main-bg   hover:scale-105 transition-all duration-200">
          {t("Create Shop")}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="flex tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-sky-500">
            {t("Create Shop")}
            <Sparkles className="w-6 h-6 mx-4 text-green-500" />
          </DrawerTitle>
          <DrawerDescription>
            Enter your shop details below to upgrade.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1 w-[25%]">
              <Label className="cursor-pointer" htmlFor="avatar-image">
                <span className="sr-only">Upload an avatar</span>
                <Avatar className="w-32 h-32 border-4 border-white">
                  <AvatarImage
                    alt="Shop owner"
                    src={shopImage ? shopImage : null}
                  />
                  <AvatarFallback>SO</AvatarFallback>
                </Avatar>
                <Input
                  placeholder="Enter your shop name"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                  id="avatar-image"
                  name="avatar-image"
                  type="file"
                />
                {isSubmitted && !shopImage ? (
                  <p className="text-red-500">
                    you have to upload image for the shop
                  </p>
                ) : null}
              </Label>
            </div>
            <div className="flex justify-between gap-4 w-full items-center">
              <div className="w-full">
                <Label htmlFor="shop-name">Shop Name</Label>
                <Input
                  onChange={(e) => setValue("shopName", e.target.value)}
                  placeholder="Enter your shop name"
                />
                {errors.shopName && (
                  <span className="text-red-300 text-sm">
                    {errors.shopName.message}
                  </span>
                )}
              </div>
              <div className="w-full">
                <Label htmlFor="shop-category">Shop Category</Label>
                <Controller
                  name="shopCategory"
                  control={control}
                  render={({ field }) => (
                    <Select>
                      <SelectTrigger>
                        {field.value || "Select Category"}
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem
                          key={"cars"}
                          onMouseDown={() => setValue("shopCategory", "Cars")}
                        >
                          Cars
                        </SelectItem>
                        <SelectItem
                          key={"appartment"}
                          onMouseDown={() =>
                            setValue("shopCategory", "Appartment")
                          }
                        >
                          Appartment
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="shop-description">Shop Description</Label>
              <Textarea
                {...register("description")}
                className="min-h-[100px]"
                placeholder="Describe your shop"
              />
            </div>
            <div className="w-4/5 flex max-w-md items-center gap-4">
              <Label className="w-44">Shop Location :</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-60 py-2 px-4">
                    Select a country
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Countries</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {countriesWithCities.map((countryObj, index) => (
                    <DropdownMenuSub key={index}>
                      <DropdownMenuSubTrigger>
                        {countryObj.countryCode && (
                          <span
                            className={`mx-2 fi fi-${countryObj.countryCode}`}
                          ></span>
                        )}
                        {t(`${countryObj.country}`)}
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent className="p-0">
                        {countryObj.cities.map((city, cityIndex) => (
                          <DropdownMenuItem
                            key={cityIndex}
                            onClick={() =>
                              handleShopCityChange(city, countryObj.country)
                            }
                          >
                            {t(`${city}`)}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                className="main-bg relative"
                disabled={loading}
                onClick={handleButtonClick}
              >
                <span className="absolute top-0 right-0 inline-flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
                {loading ? <LoadingSpinner /> : null}
                {t("locationDetails.useCurrentLocation")}
              </Button>
            </div>
            <div className="flex gap-4">
              <Button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 hover:scale-105 transition-all duration-200"
              >
                {isSubmitting && <LoadingSpinner />}
                {t("Create")}
              </Button>
              <DrawerClose asChild>
                <Button ref={drawerCloseRef} variant="outline">
                  {" "}
                  {t("Cancel")}
                </Button>
              </DrawerClose>
            </div>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
export default CreateShopButton;
