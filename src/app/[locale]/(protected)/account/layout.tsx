import { Params } from "@/lib/types";

import { getTranslations } from "next-intl/server";
import { SideNavigation } from "@/app/[locale]/(protected)/_components/SideNavigation";

export async function generateMetadata(props: { params: Params }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "User" });
  return {
    title: `${t("metadata")}`,
  };
}

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[3rem_1fr] sm:grid-cols-[5rem_1fr] md:grid-cols-[9rem_1fr] lg:grid-cols-[16rem_1fr] h-full min-h-screen">
      <SideNavigation />
      <div className="py-1 ">{children}</div>
    </div>
  );
}
