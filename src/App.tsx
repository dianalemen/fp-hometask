import { useState, useEffect } from "react";
import { Table } from "./components/Table";
import { Filters } from "./components/Filters";
import { Sort } from "./components/Sort";
import { Search } from "./components/Search";
import { StyledEngineProvider } from '@mui/material/styles';

import { getImages, getUsers, getAccounts } from './mocks/api';

import styles from './App.module.scss';

import type { Row } from "./components/Table";

import rows from './mocks/rows.json';

// mockedData has to be replaced with parsed Promises’ data
const mockedData: Array<Row> = rows.data;

function App() {
  const [data, setDate] = useState<Array<Row>>(undefined);

  useEffect(() => {
    // fetching data from API
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]) => console.log(images, users, accounts)
    );
  }, [])

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters />
            <Sort />
          </div>
          <Search />
        </div>

        <Table rows={data || mockedData} />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
