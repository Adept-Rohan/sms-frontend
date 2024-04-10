import React, { useMemo } from "react";
import TableHeading from "../components/TableHeading";
import { Table } from "../components/Table";
import { createColumnHelper } from "@tanstack/react-table";

const User = () => {
  const columnHelper = createColumnHelper();

  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        header: "S.No",
      }),

      columnHelper.accessor("fullName", {
        header: "Name",
      }),
      columnHelper.accessor("department", {
        header: "Department",
      }),
      columnHelper.accessor("Faculty", {
        header: "Faculty",
      }),
    ],
    [columnHelper]
  );

  return (
    <div className="p-6">
      <div className="w-[78vw] h-[90vh] flex-shrink-0 p-2 bg-[#FFF] rounded-lg">
        <TableHeading title="Users" />
        <Table
          columns={columns as never}
          data={[
            { id: 1, fullName: "Rohan", department: "IOST", Faculty: "CSIT" },
            { id: 2, fullName: "Rohan", department: "IOST", Faculty: "CSIT" },
            { id: 3, fullName: "Rohan", department: "IOST", Faculty: "CSIT" },
            { id: 4, fullName: "Rohan", department: "IOST", Faculty: "CSIT" },
            { id: 5, fullName: "Rohan", department: "IOST", Faculty: "CSIT" },
            { id: 6, fullName: "Rohan", department: "IOST", Faculty: "CSIT" },
            { id: 7, fullName: "Rohan", department: "IOST", Faculty: "CSIT" },
            { id: 8, fullName: "Rohan", department: "IOST", Faculty: "CSIT" },
            { id: 9, fullName: "Rohan", department: "IOST", Faculty: "CSIT" },
            { id: 10, fullName: "Rohan", department: "IOST", Faculty: "CSIT" },
          ]}
        />
      </div>
    </div>
  );
};

export default User;
