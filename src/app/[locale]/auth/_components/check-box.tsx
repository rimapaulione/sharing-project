import { Checkbox } from "@/components/ui/checkbox";

export function CheckBox() {
  return (
    <div className="flex items-center space-x-2 px-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="sm:text-sm md:text-base lg:text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}

export default CheckBox;
