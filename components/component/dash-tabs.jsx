import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import { AdCard } from "@/components/component/dashboard-ad-card";
export function AdsTabs({ ads, lng }) {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full relative overflow-y-scroll  rounded-2xl p-10 bg-gradient-to-br from-purple-700 to-violet-900">
          {ads ? (
            ads.map((ad) => <AdCard key={ad.id} lng={lng} ad={ad} />)
          ) : (
            <h1 className="pt-20 text-center">you haven't created any ads</h1>
          )}
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full  relative h-full rounded-2xl p-10 bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full  relative h-full rounded-2xl p-10 bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full  relative h-full rounded-2xl p-10 bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full  relative h-full rounded-2xl p-10 bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start ">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image src="/linear.webp" alt="dummy image" width="1000" height="1000" />
  );
};
