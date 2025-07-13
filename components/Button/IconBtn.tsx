import { ReactElement } from "react";

export default function IconBtn({ children }: { children: ReactElement }) {
  return <button className="border-cake border-2 px-3 py-2">{children}</button>;
}
