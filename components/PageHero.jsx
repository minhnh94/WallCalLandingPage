import ShieldIcon from '@heroicons/react/outline/ShieldCheckIcon';
import ChartBarIcon from '@heroicons/react/outline/ChartBarIcon';
import LightningBoltIcon from '@heroicons/react/outline/LightningBoltIcon';
import BellIcon from '@heroicons/react/outline/BellIcon';
import XIcon from '@heroicons/react/outline/XIcon';

import { useState } from 'react';
import Image from "next/image";
import AppLogo from "./common/AppLogo";

const Nav = () => (
  <nav>
    <div className="px-6 pt-6 m-auto md:pt-[53px] max-w-default md:px-0">
      <div className="flex items-center justify-center">
        <AppLogo/>
      </div>
    </div>
  </nav>
);

const PageHero = () => {
  return (
    <section className="font-dm-sans bg-slate-light">
      <Nav/>

      <section className="m-auto md:mt-20 px-6 md:px-0 max-w-default pb-12 md:pb-[138px]">
        <div className="flex flex-col text-center">
          <div className="order-2 mt-12 md:order-1 md:mt-0">
            <h1 className="font-medium text-mobile-h1 md:text-desktop-h1 text-slate-headline max-w-[754px] m-auto">
              Aesthetic, yet handy
            </h1>
            <p className="text-slate-body text-desktop-subheading mt-6 md:mt-[30px] max-w-[754px] m-auto">
              Never miss an event or a reminder again, thanks to an always-on, beautifully transparent calendar,
              sticking right on your desktop background wallpaper.<br/><br/>Work with your local calendars and
              reminders, as well as your iCloud/Google/Outlook/any CalDAV calendars and reminders.<br/><br/>Real-time
              update and customizable
            </p>
            <div className="mt-8">
              <a href="https://apps.apple.com/app/wallcal-wallpaper-calendar/id1581367286" target="_blank"
                 className="inline-block w-full px-8 py-4 text-white rounded-lg bg-slate-blue filter hover:brightness-125 text-desktop-paragraph md:w-auto">
                Try it free
              </a>
              <p className="text-slate-body text-[13px] mt-3">
                Supports macOS 10.15 (Catalina) and higher
              </p>
            </div>
          </div>
          <div
            className="flex order-1 px-8 mt-12 md:mt-24 md:order-2 bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end rounded-2xl">
            <img
              src="/my-assets/wallcal-screenshot.png"
              className="pt-4 md:pt-[60px] m-auto -mb-6 md:-mb-12"
              alt="wallcal desktop wallpaper background calendar blotter alternative screenshot"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default PageHero;
