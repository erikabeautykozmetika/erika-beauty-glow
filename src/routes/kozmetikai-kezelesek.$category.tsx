import { Outlet, createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/kozmetikai-kezelesek/$category")({ component: () => <Outlet /> });
