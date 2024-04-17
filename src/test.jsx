import { Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";


export default function Test() {
  const [text, setText] = useState('')
  return (
    <Stack>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Typography>{text}</Typography>
    </Stack>
  )
} 