import { ChartBarIcon } from "@heroicons/react/outline";
import React from "react";
import Toggler from "./Toggler";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <ul
            className="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none"
            role="tablist"
          >
            <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                {/* <i className="mr-1 text-base fas fa-space-shuttle"></i> */}
                Essential
              </a>
            </li>
            <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                {/* <i className="mr-1 text-base fas fa-space-shuttle"></i> */}
                Preferences
              </a>
            </li>
            <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                {/* <i className="mr-1 text-base fas fa-cog"></i> */}
                Statistics
              </a>
            </li>
            <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                {/* <i className="mr-1 text-base fas fa-briefcase"></i>  */}
                Marketing
              </a>
            </li>
          </ul>

          <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
            <div className="flex-auto px-4 py-5">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Necessitatibus, ad.
                    <br />
                    <br /> Lorem ipsum dolor sit amet.
                  </p>
                  <Toggler id="1" name="toggle_1" checked={true} disabled />
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reprehenderit, blanditiis.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet.
                  </p>
                  <Toggler id="2" name="toggle_2" />
                </div>

                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reprehenderit, blanditiis.
                    <br />
                    <br /> Lorem ipsum dolor sit amet.
                  </p>
                  <Toggler id="3" name="toggle_3" />
                </div>

                <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reprehenderit, blanditiis.
                    <br />
                    <br /> Lorem ipsum dolor sit amet.
                  </p>
                  <Toggler id="4" name="toggle_4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
