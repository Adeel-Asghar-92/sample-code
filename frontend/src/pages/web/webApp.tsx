import { useState } from "react";
import { Tab } from "@headlessui/react";
import MyCalendar from "../../components/calender/myCalender";
import Event from "../../components/Event/Events";

const WebApp = () => {
  const [selectedTab, setSelectedTab] = useState("events");

  const handleTabChange = (tabName: string) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="container mx-auto">
      <div className="h-full flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-lg">
          <Tab.Group>
            <Tab.List className="flex p-1 space-x-4 bg-gray-100">
              {/* Events Tab */}
              <Tab
                className={({ selected }) =>
                  `${
                    selected
                      ? "text-white bg-teal-600"
                      : "text-gray-600 border-white"
                  } p-2 rounded-md `
                }
                onClick={() => handleTabChange("events")}
              >
                All Events
              </Tab>
              {/* Set Events Tab */}
              <Tab
                className={({ selected }) =>
                  `${selected ? "text-white bg-teal-600" : "text-gray-600"}
                   p-2 rounded-md
                  `
                }
                onClick={() => handleTabChange("setEvents")}
              >
                New Events
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel
                className="p-3 text-sm text-gray-600 bg-white rounded-lg shadow-xs border border-gray-200"
                hidden={selectedTab !== "events"}
              >
                <Event />
              </Tab.Panel>
              <Tab.Panel
                className="p-3 text-sm text-gray-600 bg-white rounded-lg shadow-xs border border-gray-200"
                hidden={selectedTab !== "setEvents"}
              >
                <MyCalendar />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};
export default WebApp;
