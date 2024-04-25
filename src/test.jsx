import { Button, Stack } from "@mui/material";
import { useStore } from './store'


export default function Test() {
  const { theme, setTheme } = useStore();
  return (
    <Stack
      sx={{
        backgroundColor: theme === 0 ? 'black' : 'white',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        sx={{
          color: theme === 0 ? 'black' : 'white',
          fontWeight: 700,
          p: 5,
          backgroundColor: theme === 0 ? 'white' : 'black',
          width: 120,
          height: 50
        }}
        onClick={() => {
          if (theme === 1) {
            setTheme(0)
          } else setTheme(1);
        }}
      >
        Toggle Theme
      </Button>
      {/* <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Typography>{text}</Typography> */}
    </Stack>
  )
} 