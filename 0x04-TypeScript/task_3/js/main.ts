// main.ts

// / <reference path="./js/crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud.d.ts";

// Create an object called row with the type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert a new row and save the returned ID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with age field set to 23
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Delete the row with the specified ID
CRUD.deleteRow(newRowID);
