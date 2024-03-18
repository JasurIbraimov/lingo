import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
  return (
    <div className="p-4 min-h-screen flex gap-5 flex-wrap justify-center items-center content-center">
      <div className="w-[200px] border-[1px] p-4 flex flex-col gap-4">
        <Button>Default</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div className="w-[200px] border-[1px] p-4 flex flex-col gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="primaryOutline">Primary Outline</Button>
      </div>
      <div className="w-[200px] border-[1px] p-4 flex flex-col gap-4">
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondaryOutline">Secondary Outline</Button>
      </div>
      <div className="w-[200px] border-[1px] p-4 flex flex-col gap-4">
        <Button variant="danger">Danger</Button>
        <Button variant="dangerOutline">Danger Outline</Button>
      </div>
      <div className="w-[200px] border-[1px] p-4 flex flex-col gap-4">
        <Button variant="super">Super</Button>
        <Button variant="superOutline">Super Outline</Button>
      </div>
      <div className="w-[200px] border-[1px] p-4 flex flex-col gap-4">
        <Button variant="sidebar">Sidebar</Button>
        <Button variant="sidebarOutline">Sidebar outline</Button>
      </div>
    </div>
  );
};

export default ButtonsPage;
