import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col lg:flex-row justify-center mt-6 gap-14">
          <div className="p-10 border border-neutral-700 rounded-xl w-66">
            <p className="text-4xl mb-8">
              Free
              <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
              </span>
            </p>
            <p className="mb-8">
              <span className="text-5xl mt-6 mr-2">$0</span>
              <span className="text-neutral-400 tracking-tight">/Month</span>
            </p>
            <ul>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">Private board sharing</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">5 Gb Storage</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">Web Analytics</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">Private Mode</span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
            >
              Subscribe
            </a>
          </div>

          <div className="p-10 border border-neutral-700 rounded-xl w-66">
            <p className="text-4xl mb-8">
            Pro
              <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                (Most Popular)
              </span>
            </p>
            <p className="mb-8">
              <span className="text-5xl mt-6 mr-2">$10</span>
              <span className="text-neutral-400 tracking-tight">/Month</span>
            </p>
            <ul>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">Private board sharing</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">10 Gb Storage</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">Web Analytics</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">Private Mode</span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
            >
              Subscribe
            </a>
          </div>

          <div className="p-10 border border-neutral-700 rounded-xl w-66">
            <p className="text-4xl mb-8">
              Free
            </p>
            <p className="mb-8">
              <span className="text-5xl mt-6 mr-2">$0</span>
              <span className="text-neutral-400 tracking-tight">/Month</span>
            </p>
            <ul>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">Private board sharing</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">Unlimited Storage</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">High performance network</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">Private Mode</span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
