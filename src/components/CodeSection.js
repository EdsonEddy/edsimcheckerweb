import { Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";

const CodeSection = () => {
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Paper sx={{paddingTop: 5}}>
          <MonacoEditor
            width="800"
            height="600"
            language="javascript"
            theme="vs-dark"
            value={code1}
            options={{ selectOnLineNumbers: true, minimap: { enabled: false } }}
            onChange={(value) => {
              setCode1(value);
            }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Paper sx={{paddingTop: 5}}>
          <MonacoEditor
            width="800"
            height="600"
            language="javascript"
            theme="vs-dark"
            value={code2}
            options={{ selectOnLineNumbers: true, minimap: { enabled: false } }}
            onChange={(value) => {
              setCode2(value);
            }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CodeSection;
