import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import './DisplayBooksForm.css';
import { Formik } from 'formik';
import MenuAppBar from '../main-bar/AppBar';

interface Data {
  id: number;
  isbn: string;
  title: string;
  author: string;
  avaliable_copies: number;
  publisher: string;
  publication_year: number;
}

function createBookData(
  id: number,
  isbn: string,
  title: string,
  author: string,
  avaliable_copies: number,
  publisher: string,
  publication_year: number,
): Data {
  return {
    id,
    isbn,
    title,
    author,
    avaliable_copies,
    publisher,
    publication_year,
  };
}

const rows = [
  createBookData(
    1,
    '842468170-3',
    'Chinese Zodiac (Armour of God III) (CZ12)',
    'Starsmeare',
    1,
    'Corse',
    2007,
  ),
  createBookData(
    2,
    '376287635-5',
    'Diminished Capacity',
    'Dellenbroker',
    2,
    'Guislin',
    2017,
  ),
  createBookData(
    3,
    '787190103-6',
    'All That... for This?!',
    'Keri',
    3,
    'Dymidowski',
    2011,
  ),
  createBookData(
    4,
    '037958332-1',
    'Angel in Cracow (Aniol w Krakowie)',
    'Flieg',
    4,
    'Raspison',
    2007,
  ),
  createBookData(5, '260233828-1', 'Lawless', 'Danilin', 5, 'Pharro', 2012),
  createBookData(6, '806472578-X', 'Starsky & Hutch', 'Bartos', 6, 'Odd', 2013),
  createBookData(
    7,
    '087956961-1',
    'NeverEnding Story II: The Next Chapter, The',
    'Dowd',
    7,
    'Haynesford',
    2020,
  ),
  createBookData(
    8,
    '857916622-5',
    'California Solo',
    'Matlock',
    8,
    'Tomalin',
    2010,
  ),
  createBookData(
    9,
    '717089759-8',
    'Man There Was, A (Terje Vigen)',
    'Poker',
    9,
    'Osant',
    2020,
  ),
  createBookData(
    10,
    '573194175-0',
    'Box, The',
    'Etchells',
    10,
    'Sebrens',
    2017,
  ),
  createBookData(
    11,
    '133468410-3',
    'Indian Runner, The',
    'Sangar',
    11,
    'Klulik',
    2015,
  ),
  createBookData(
    12,
    '326589607-2',
    'Run of the Country, The',
    'Standen',
    12,
    'Works',
    2004,
  ),
  createBookData(
    13,
    '424414552-4',
    'Arch of Triumph',
    'Fozard',
    13,
    'Emsden',
    2018,
  ),
  createBookData(
    14,
    '767953407-1',
    'Bells Are Ringing',
    'Aust',
    14,
    'Madden',
    2007,
  ),
  createBookData(
    15,
    '120089222-4',
    'City Zero',
    'Reisenstein',
    15,
    'Stamps',
    2012,
  ),
  createBookData(
    16,
    '885090638-2',
    'Hue and Cry',
    'Jewett',
    16,
    'Fortman',
    2013,
  ),
  createBookData(17, '266235024-5', 'Grouse', 'Leat', 17, 'Wingeatt', 1997),
  createBookData(
    18,
    '260046321-6',
    'Velvet Goldmine',
    'Ogborne',
    18,
    'Skitteral',
    2005,
  ),
  createBookData(19, '053342039-3', 'Almost 18', 'Relfe', 19, 'Downing', 2013),
  createBookData(
    20,
    '586818243-X',
    'Chandni Chowk to China',
    'Tomczak',
    20,
    'Azam',
    2019,
  ),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number,
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'id',
    numeric: true,
    disablePadding: false,
    label: 'ID',
  },
  {
    id: 'isbn',
    numeric: false,
    disablePadding: false,
    label: 'ISBN',
  },
  {
    id: 'title',
    numeric: false,
    disablePadding: false,
    label: 'Title',
  },
  {
    id: 'author',
    numeric: false,
    disablePadding: false,
    label: 'Author',
  },
  {
    id: 'avaliable_copies',
    numeric: true,
    disablePadding: false,
    label: 'Available copies',
  },
  {
    id: 'publisher',
    numeric: false,
    disablePadding: false,
    label: 'Publisher',
  },
  {
    id: 'publication_year',
    numeric: true,
    disablePadding: false,
    label: 'Year of publication',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%', fontFamily: 'Palatino Linotype' }}
          variant="h5"
          id="tableTitle"
          component="div"
        >
          Books
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('id');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'darkgray',
        flexDirection: 'column',
      }}
    >
      <MenuAppBar />
      <h1
        style={{
          color: 'black',
          textAlign: 'center',
          fontFamily: 'Palatino Linotype',
          fontSize: 40,
        }}
      >
        Search for your book
      </h1>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: 'darkgray',
        }}
      >
        <Paper sx={{ width: '80%', mb: 1, backgroundColor: 'gainsboro' }}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {visibleRows.map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                      sx={{ cursor: 'pointer' }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">{row.isbn}</TableCell>
                      <TableCell align="left">{row.title}</TableCell>
                      <TableCell align="left">{row.author}</TableCell>
                      <TableCell align="left">{row.avaliable_copies}</TableCell>
                      <TableCell align="left">{row.publisher}</TableCell>
                      <TableCell align="left">{row.publication_year}</TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </div>
  );
}
