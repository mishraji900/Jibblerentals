"use client";
import { SearchManufacturerProps } from "@/types";
import { manufacturers } from "@/constants";
import Image from "next/image";
import React, { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";

const SearchManufacturer = ({
  manufacturer,
  setmanufacturer,
}: SearchManufacturerProps) => {
  const [query, Setquery] = useState("");
  const filterManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((manufacturer) => {
          return manufacturer.toLowerCase().replace(/\s+/g,"").includes(query.toLowerCase().replace(/\s+/g,""));
        });

  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox value={manufacturer} onChange={setmanufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[10px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => Setquery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => Setquery("")}
          >
            <Combobox.Options>
              {(
                filterManufacturers.map((items)=>(
                  <Combobox.Option
                  key={items}
                  className={({active})=>`relative cursor-default select-none py-2 pl-10 pr-4 ${active?'bg-primary-blue text-white':'text-gray-900'}`}
                  value={items}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {items}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
