import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { formatBytes } from "@/lib/format";
import { Separator } from "./ui/separator";

type ServerOverviewProps = {
  online: number;
  offline: number;
  total: number;
  up: number;
  down: number;
  upSpeed: number;
  downSpeed: number;
};

export default function ServerOverview({
  online,
  offline,
  total,
  up,
  down,
  upSpeed,
  downSpeed,
}: ServerOverviewProps) {
  const { t } = useTranslation();

  return (
    <>
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card className={cn("hover:border-blue-500 transition-all")}>
          <CardContent className="flex h-full items-center px-6 py-3">
            <section className="flex flex-col gap-1">
              <p className="text-sm font-medium md:text-base">
                {t("serverOverview.totalServers")}
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
                <div className="text-lg font-semibold">{total}</div>
              </div>
            </section>
          </CardContent>
        </Card>
        <Card
          className={cn(
            " hover:ring-green-500 ring-1 ring-transparent transition-all",
          )}
        >
          <CardContent className="flex h-full items-center px-6 py-3">
            <section className="flex flex-col gap-1">
              <p className="text-sm font-medium md:text-base">
                {t("serverOverview.onlineServers")}
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>

                <div className="text-lg font-semibold">{online}</div>
              </div>
            </section>
          </CardContent>
        </Card>
        <Card
          className={cn(
            " hover:ring-red-500 ring-1 ring-transparent transition-all",
          )}
        >
          <CardContent className="flex h-full items-center px-6 py-3">
            <section className="flex flex-col gap-1">
              <p className="text-sm font-medium md:text-base">
                {t("serverOverview.offlineServers")}
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                </span>
                <div className="text-lg font-semibold">{offline}</div>
              </div>
            </section>
          </CardContent>
        </Card>
        <Card
          className={cn(
            " hover:ring-purple-500 ring-1 ring-transparent transition-all",
          )}
        >
          <CardContent className="flex h-full items-center relative px-6 py-3">
            <section className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <p className="text-sm font-medium md:text-base">
                  {t("serverOverview.totalBandwidth")}
                </p>
                <Separator
                  orientation="vertical"
                  className="h-4 w-[1px]"
                />
                <p className="text-sm font-medium md:text-base">
                  {t("serverOverview.speed")}
                </p>
              </div>
              <section className="flex flex-row sm:items-center items-start gap-1">
                <p className="sm:text-[12px] text-[10px]  text-nowrap font-semibold">
                  ↑{formatBytes(up)}
                </p>
                <p className="sm:text-[12px] text-[10px]  text-nowrap font-semibold">
                  ↓{formatBytes(down)}
                </p>
              </section>
              <section className="flex flex-row  sm:items-center items-start gap-1">
                <p className="sm:text-[12px]  text-[10px] text-nowrap font-semibold">
                  ↑{formatBytes(upSpeed)}/s
                </p>
                <p className="sm:text-[12px] text-[10px] text-nowrap font-semibold">
                  ↓{formatBytes(downSpeed)}/s
                </p>
              </section>
            </section>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
