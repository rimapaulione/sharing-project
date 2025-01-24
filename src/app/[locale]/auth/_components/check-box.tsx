import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "@/i18n/routing";
type CheckboxWithLabelProps = {
  id: string;
  label: string;
  linkText: string;
  linkHref: string;
  value: boolean;
  onChange: (checked: boolean) => void;
};

export function CheckboxWithLabel({
  id,
  label,
  linkText,
  linkHref,
  value,
  onChange,
}: CheckboxWithLabelProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        checked={value}
        onCheckedChange={(checked) => onChange(checked === true)}
        id={id}
      />
      <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        <label htmlFor={id}>{label}</label>{" "}
        <Link href={linkHref} className="text-secondary underline">
          {linkText}
        </Link>
      </div>
    </div>
  );
}
