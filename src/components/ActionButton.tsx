import { EditIcon } from "../icons/EditIcon";
import { DeleteIcon } from "../icons/DeleteIcon";

export const ActionButton = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="flex justify-center gap-1 items-center">
      <button className="bg-[#37BE5F] rounded p-2" onClick={handleClick}>
        <EditIcon width={12} height={12} color="#fff" />
      </button>
      <button className="bg-[#DC362E] rounded p-2" onClick={handleClick}>
        <DeleteIcon width={12} height={12} color="#fff" />
      </button>
    </div>
  );
};
