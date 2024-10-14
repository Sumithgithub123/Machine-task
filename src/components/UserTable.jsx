import { useEffect, useState } from "react";
import { getUser } from "../apis/getUser";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { SyncLoader } from "react-spinners";
import Error from "../ui/Errorhandle";
import { useErrorBoundary } from "react-error-boundary";

function UserTable() {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(false);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    async function fetchuser() {
      setloading(true);
      const data = await getUser(showBoundary);
      setusers(data);
      setloading(false);
    }
    fetchuser();
  }, [showBoundary]);

  if (users.length === 0 || loading)
    return (
      <div className="fixed z-50 inset-0 backdrop-blur-sm  flex items-center justify-center">
        <div>
          <SyncLoader color="#000000" />
          <p className="text-sm mt-5">Loading...</p>
        </div>
      </div>
    );

  return (
    <div className="mt-8 animate-fade-down animate-once">
      {!users[0].error ? (
        <>
          <h2 className="text-slate-800 text-2xl font-semibold px-5 mb-5">
            Users
          </h2>
          <div id="newprint2" className="rounded-md  border">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 600 }} aria-label="simple table">
                <TableHead className="bg-stone-300">
                  <TableRow>
                    <TableCell align="center">
                      <p className="font-bold text-lg">Id</p>
                    </TableCell>
                    <TableCell align="center">
                      <p className="font-bold text-lg">Name</p>
                    </TableCell>
                    <TableCell align="center">
                      <p className="font-bold text-lg">Phone</p>
                    </TableCell>
                    <TableCell align="center">
                      <p className="font-bold text-lg">Username</p>
                    </TableCell>
                    <TableCell align="center">
                      <p className="font-bold text-lg">Email</p>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="bg-stone-100">
                  {users.map((row) => (
                    <TableRow
                      className=" hover:bg-stone-200"
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center" component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.phone}</TableCell>
                      <TableCell align="center">{row.username}</TableCell>
                      <TableCell align="center">{row.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default UserTable;
