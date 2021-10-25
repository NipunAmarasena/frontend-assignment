import React from "react";
import "./App.css";
import Grid from "@mui/material/Grid";
import { Card, CardContent } from "@mui/material";

import MainPage from "./components/MainPage";

function App() {
  return (
    
    <div className="App">
      <div className="App-header">
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Card>
              <CardContent>
                <MainPage />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
