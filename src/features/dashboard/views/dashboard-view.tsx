import React from "react";
import { DashboardHeader } from "../components/dashboard-header";
import DashboardMobileHeader from "../components/dashboard-mobile-header";
import { TextInputPanel } from "../components/text-input-panel";

export default function DashboardView() {
  return (
    <div className="relative">
      <div className="relative space-y-8 p-4 lg:p-16">
        <DashboardMobileHeader />
        <DashboardHeader />
        <TextInputPanel />
      </div>
    </div>
  );
}

// export function DashboardView() {
//   return (
//     <div className="relative">
//       <PageHeader title="Dashboard" className="lg:hidden" />
//       <HeroPattern />
//       <div className="relative space-y-8 p-4 lg:p-16">
//         <DashboardHeader />
//         <TextInputPanel />
//         <QuickActionsPanel />
//       </div>
//     </div>
//   );
// }
