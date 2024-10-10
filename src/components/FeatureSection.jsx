import React from "react";
import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

const FeatureSection = () => {
  return (
    <div className="mt-20 border-b border-neutral-800 min-h-[750px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-10 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        <div className="lg:flex">
          <div className="flex">
            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
              <BotMessageSquare />
            </div>
            <div>
              <h5 className="mt-1 mb-6 text-xl">Drag-and-Drop Interface</h5>
              <p className="text-md p-2 mb-20 text-neutral-500">
                Easily design and arrange your VR environments with a
                user-friendly drag-and-drop interface.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
              <Fingerprint />
            </div>
            <div>
              <h5 className="mt-1 mb-6 text-xl">
                Multi-Platform Compatibility
              </h5>
              <p className="text-md p-2 mb-20 text-neutral-500">
                Build VR applications that run seamlessly across multiple
                platforms, including mobile, desktop, and VR headsets.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
              <ShieldHalf />
            </div>
            <div>
              <h5 className="mt-1 mb-6 text-xl">Built-in Templates</h5>
              <p className="text-md p-2 mb-20 text-neutral-500">
                Jumpstart your VR projects with a variety of built-in templates
                for different types of applications and environments.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:flex">
          <div className="flex">
            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
              <BatteryCharging />
            </div>
            <div>
              <h5 className="mt-1 mb-6 text-xl">Real-Time Preview</h5>
              <p className="text-md p-2 mb-20 text-neutral-500">
                Preview your VR application in real-time as you make changes,
                allowing for quick iterations and adjustments.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
              <PlugZap />
            </div>
            <div>
              <h5 className="mt-1 mb-6 text-xl">Collaboration Tools</h5>
              <p className="text-md p-2 mb-20 text-neutral-500">
                Work together with your team in real-time on VR projects,
                enabling seamless collaboration and idea sharing.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
              <GlobeLock />
            </div>
            <div>
              <h5 className="mt-1 mb-6 text-xl">Analytics Dashboard</h5>
              <p className="text-md p-2 mb-20 text-neutral-500">
                Gain valuable insights into user interactions and behavior
                within your VR applications with an integrated analytics
                dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
