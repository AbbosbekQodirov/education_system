import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import CustomPaginationActionsTable from "../components/AttendanceChart";

const Doubt = () => {
  return (
    <Box className="flex flex-col gap-4">
      <Box className="filter w-full min-h-[60px] my-2 flex justify-evenly items-center gap-4 flex-wrap">
        <FormControl className="w-[150px]">
          <InputLabel id="demo-simple-select-label">Kurslar</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Kurslar"
          >
            <MenuItem value={1}>Front End</MenuItem>
            <MenuItem value={2}>Back End</MenuItem>
            <MenuItem value={3}>Grafik Dizayn</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="w-[150px]">
          <InputLabel id="demo-simple-select-label">Guruhlar</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Guruhlar"
          >
            <MenuItem value={1}>F5 Front End</MenuItem>
            <MenuItem value={2}>F6 Front End</MenuItem>
            <MenuItem value={3}>F7 Front End</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="w-[150px]">
          <InputLabel id="demo-simple-select-label">Ustozlar</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Ustozlar"
          >
            <MenuItem value={1}>Abbosbek Teacher</MenuItem>
            <MenuItem value={2}>Shaxzodbek Teacher</MenuItem>
            <MenuItem value={3}>Alimardon Teacher</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box className="courses-about w-full min-h-[60px] flex flex-wrap gap-3 justify-evenly items-center">
        <Box className="flex flex-col">
          <h5 className="text-md font-semibold">Guruh:</h5>
          <p>Front End 6</p>
        </Box>
        <Box className="flex flex-col">
          <h5 className="text-md font-semibold">Ustoz:</h5>
          <p>Shaxzodbek Teacher</p>
        </Box>
        <Box className="flex flex-col">
          <h5 className="text-md font-semibold">Muayyan Vaqt:</h5>
          <p>28-kun/Payshanba/2021-yil</p>
        </Box>
        <Box className="flex flex-col">
          <h5 className="text-md font-semibold">Hozrgi Oy:</h5>
          <p>Okiyabr</p>
        </Box>
      </Box>
      <CustomPaginationActionsTable />
    </Box>
  );
};

export default Doubt;
