import React from "react";

interface HealthCardProps {
  iconColor: string;
  icon: React.ReactNode;
  text: string;
}
export function HealthCard({ iconColor, icon, text }: HealthCardProps) {
  return (
    <>
      <div className="flex-nowrap text-nowrap shadow-soft-lg flex  items-center gap-2 rounded-sm bg-white justify-center py-5 px-[19.5px] h-[60px] font-semibold font-nunito *:last:text-blue-900 *:last:text-[12px] *:first:text-xl text-[12px] z-10 absolute ml-[-40%] mt-[-13%]">
        <span className={`${iconColor}`}>{icon}</span>
        <span>{text}</span>
      </div>
    </>
  );
}
