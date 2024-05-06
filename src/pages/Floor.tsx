import TableHeading from "../components/TableHeading";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { FloorTable } from "../types/FloorData";
import { useMemo } from "react";
import { ActionButton } from "../components/ActionButton";
import { Table } from "../components/Table";

const Floor = () => {
  const columnHelper = createColumnHelper<FloorTable>();

  const colums = useMemo(
    () =>
      [
        columnHelper.accessor("id", {
          header: "S.No",
        }),
        columnHelper.accessor("floorName", {
          header: "Name",
        }),
        columnHelper.accessor("createdOn", {
          header: "Created On",
        }),
        columnHelper.display({
          header: "Actions",
          cell() {
            return <ActionButton />;
          },
        }),
      ] as ColumnDef<FloorTable>[],
    [columnHelper]
  );

  return (
    <div className="p-6">
      <div className="w-[78vw] h-[90vh] flex-shrink-0 p-2 bg-[#FFF] rounded-lg">
        <TableHeading title="Floor" isSearchDisable={true} />
        <Table
          columns={colums}
          data={[
            { id: 1, floorName: "Rohan", createdOn: "2024/05/08" },
            { id: 2, floorName: "Rohan", createdOn: "2024/05/08" },
            { id: 3, floorName: "Rohan", createdOn: "2024/05/08" },
            { id: 4, floorName: "Rohan", createdOn: "2024/05/08" },
            { id: 5, floorName: "Rohan", createdOn: "2024/05/08" },
            { id: 6, floorName: "Rohan", createdOn: "2024/05/08" },
            { id: 7, floorName: "Rohan", createdOn: "2024/05/08" },
            { id: 8, floorName: "Rohan", createdOn: "2024/05/08" },
            { id: 9, floorName: "Rohan", createdOn: "2024/05/08" },
            { id: 10, floorName: "Rohan", createdOn: "2024/05/08" },
          ]}
        />
      </div>
    </div>
  );
};

export default Floor;
