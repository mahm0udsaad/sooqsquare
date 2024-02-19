import { CardTitle, CardContent, CardHeader, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LogoForm() {
  return (
    <Card key="1" className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="text-lg">Upload Company Logo</CardTitle>
        <CardContent className="pt-0">
          <p className="text-sm text-gray-500">
            Please select the logo file you want to upload for your company.
          </p>
        </CardContent>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label className="button-like" htmlFor="file">
            <span>Choose File</span>
            <Input
              className="sr-only"
              id="file"
              placeholder="Upload your logo"
              type="file"
            />
          </Label>
          <p className="text-xs text-gray-500">Selected file: logo.png</p>
          <img
            alt="Uploaded Logo"
            className="rounded-lg"
            height={100}
            src="/placeholder.svg"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width={100}
          />
        </div>
        <Button className="w-full">Upload</Button>
      </CardContent>
    </Card>
  );
}
