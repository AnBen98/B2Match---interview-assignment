import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { getJokes } from "../apiCalls/jokes";

export default function JokesTable() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    async function fetch() {
      setJokes(await getJokes("https://api.icndb.com/jokes/random/10"));
    }
    fetch();
  }, []);

  return jokes.length === 0 ? (
    <React.Fragment>
      <h1>Jokes</h1>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <h1>Jokes</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>joke</TableCell>
            <TableCell>categories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jokes.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.joke}</TableCell>
              <TableCell>{row.categories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
