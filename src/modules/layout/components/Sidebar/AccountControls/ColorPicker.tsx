import { theme } from "@/theme";
import {
  Avatar,
  Box,
  Fade,
  FormControl,
  FormLabel,
  Icon,
  IconButton,
  Stack,
} from "@mui/material";
import {
  amber,
  blue,
  cyan,
  deepOrange,
  deepPurple,
  green,
  indigo,
  lightBlue,
  lightGreen,
  orange,
  pink,
  purple,
  red,
  teal,
} from "@mui/material/colors";
import useLocalStorage from "use-local-storage";

const shade = 500;
const highlightShade = 200;

export const colors = [
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  amber,
  orange,
  deepOrange,
];

export const ColorPicker = () => {
  const [localColor, setLocalColor] = useLocalStorage("color", "#000");

  const handleSelectColor = (color: string) => {
    setLocalColor(color);
  };

  return (
    <FormControl>
      <FormLabel required>Avatar Color</FormLabel>
      <Box
        sx={{
          position: "relative",

          mx: `-${theme.spacing(3)}`,

          // Left side fade out
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: theme.spacing(3),
            height: "100%",
            background: "linear-gradient(to right, white, transparent)",
            zIndex: 2,
          },

          // Right side fade out
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: theme.spacing(3),
            height: "100%",
            background: "linear-gradient(to left, white, transparent)",
            zIndex: 2,
          },
        }}
      >
        <Stack
          direction="row"
          sx={{
            overflowX: "scroll",
            scrollbarWidth: "none",
          }}
        >
          {colors.map((color, i) => (
            <IconButton
              onClick={() => handleSelectColor(color[shade])}
              sx={{
                ml: i == 0 ? theme.spacing(3) : 0,
                mr: i == colors.length - 1 ? theme.spacing(3) : 0,
              }}
            >
              <Avatar
                variant="circular"
                sx={{
                  height: theme.spacing(6),
                  width: theme.spacing(6),

                  bgcolor: color[shade],
                  outline: `4px solid ${color[highlightShade]}`,
                }}
              >
                {localColor == color[shade] && (
                  <Fade in={true}>
                    <Icon className="material-symbols-outlined">check</Icon>
                  </Fade>
                )}
              </Avatar>
            </IconButton>
          ))}
        </Stack>
      </Box>
    </FormControl>
  );
};
