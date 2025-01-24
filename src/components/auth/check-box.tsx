import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "@/i18n/routing";
import { ComponentProps } from "react";
type CheckboxWithLabelProps = {
  id: string;
  label: string;
  linkText: string;
  href: string;
  value: boolean;
  onChange: (checked: boolean) => void;
  disabled: boolean;
};

export function CheckboxWithLabel({
  id,
  label,
  linkText,
  href,
  value,
  onChange,
  disabled,
}: CheckboxWithLabelProps & ComponentProps<typeof Link>) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        checked={value}
        onCheckedChange={(checked) => onChange(checked === true)}
        id={id}
        disabled={disabled}
      />
      <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        <label htmlFor={id}>{label}</label>{" "}
        <Link href={href} className="text-secondary underline">
          {linkText}
        </Link>
      </div>
    </div>
  );
}
