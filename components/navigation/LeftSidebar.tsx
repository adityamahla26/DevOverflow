import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

import NavLinks from "./navbar/NavLinks";
import { Button } from "../ui/button";

const LeftSidebar = () => {
  return (
    <section className="no-scrollbar background-light900_dark200 light-border sticky inset-x-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-32 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3">
        <Link href={ROUTES.SIGN_IN}>
          <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
            <Image
              src="/icons/account.svg"
              width={20}
              height={20}
              alt="Account"
              className="invert-colors  lg:hidden"
            />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Button>
        </Link>

        <Link href={ROUTES.SIGN_UP}>
          <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
            <Image
              src="/icons/sign-up.svg"
              width={20}
              height={20}
              alt="Account"
              className="invert-colors lg:hidden"
            />
            <span className="max-lg:hidden">Sign Up</span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LeftSidebar;
