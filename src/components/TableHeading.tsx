import { AddIcon } from "../icons/AddIcon";
import { SearchIcon } from "../icons/SearchIcon";

const TableHeading = ({
  title,
  isSearchDisable,
}: {
  title: string;
  isSearchDisable?: boolean;
}) => {
  return (
    <div className="w-full h-[76px] px-[20px] flex items-center justify-between">
      <h1 className="text-blue-900 font-quicksand font-semibold text-base ">
        {title}
      </h1>
      {isSearchDisable === false ? (
        <div className="flex relative">
          <input
            className="text-[#C5C5C5] w-[287px] h-[32px] rounded-[360px] border-solid border-[2px] focus:outline-blue-300 border-[#C5C5C5] outline-slate-200 px-[12px] bg-transparent py-[10px]"
            type="text"
            placeholder="Search"
          />

          <SearchIcon
            width={24}
            height={24}
            color="#C5C5C5"
            className="absolute right-3 top-1"
          />
        </div>
      ) : null}
      <div className="flex gap-6">
        <button
          className="inline-flex rounded-[360px] items-center justify-center bg-[#25A6F2]  gap-[8px] py-[4px] pl-[12px] pr-[20px]"
          onClick={() => console.log("clicked")}
        >
          <div>
            <AddIcon width={24} height={24} color="#fff" />
          </div>
          <span className="text-white">Add</span>
        </button>
      </div>
    </div>
  );
};

export default TableHeading;
